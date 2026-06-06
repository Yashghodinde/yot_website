import { writeFile } from 'node:fs/promises';
import { Innertube } from 'youtubei.js';

const channels = [
  {
    handle: '@big_jaws',
    sourceUrl: 'https://www.youtube.com/@big_jaws',
    clientType: 'creator'
  },
  {
    handle: '@MoneyPandits',
    sourceUrl: 'https://www.youtube.com/@MoneyPandits',
    clientType: 'creator'
  },
  {
    handle: '@Kropbook',
    sourceUrl: 'https://www.youtube.com/@Kropbook',
    clientType: 'corporate client'
  }
];

const outputJson = new URL('./youtube-portfolio-links.json', import.meta.url);
const outputMd = new URL('./youtube-portfolio-links.md', import.meta.url);

const textOf = (value) => {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (typeof value.text === 'string') return value.text;
  if (Array.isArray(value.runs)) return value.runs.map((run) => run.text || '').join('');
  return '';
};

const cleanThumbnail = (url) => {
  if (!url) return '';
  return url.split('?')[0];
};

const durationFromLockup = (item) => {
  const overlays = item.content_image?.overlays || [];
  for (const overlay of overlays) {
    const badge = overlay.badges?.find((entry) => entry.text);
    if (badge?.text) return badge.text;
  }
  return '';
};

const metadataPartsFromLockup = (item) => {
  const rows = item.metadata?.metadata?.metadata_rows || [];
  const parts = rows.flatMap((row) => row.metadata_parts || []);
  return parts.map((part) => textOf(part.text)).filter(Boolean);
};

const linksFor = (videoId, type) => ({
  watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
  shortsUrl: type === 'short' ? `https://www.youtube.com/shorts/${videoId}` : '',
  embedUrl: `https://www.youtube.com/embed/${videoId}`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
});

const longVideoFromLockup = (item, channel) => {
  const videoId = item.content_id || item.renderer_context?.command_context?.on_tap?.payload?.videoId;
  if (!videoId) return null;

  const metadataParts = metadataPartsFromLockup(item);
  const thumbnail = item.content_image?.image?.[0]?.url;

  return {
    channelHandle: channel.handle,
    channelTitle: channel.title,
    channelId: channel.channelId,
    type: 'long',
    videoId,
    title: textOf(item.metadata?.title),
    duration: durationFromLockup(item),
    views: metadataParts[0] || '',
    published: metadataParts[1] || '',
    thumbnailUrl: cleanThumbnail(thumbnail),
    ...linksFor(videoId, 'long')
  };
};

const shortVideoFromNode = (item, channel) => {
  const videoId = item.on_tap_endpoint?.payload?.videoId;
  if (!videoId) return null;

  const thumbnail = item.on_tap_endpoint?.payload?.thumbnail?.thumbnails?.[0]?.url;

  return {
    channelHandle: channel.handle,
    channelTitle: channel.title,
    channelId: channel.channelId,
    type: 'short',
    videoId,
    title: textOf(item.overlay_metadata?.primary_text) || item.accessibility_text?.replace(/,\s*[^,]+views?\s*-\s*play Short$/i, '') || '',
    duration: '',
    views: textOf(item.overlay_metadata?.secondary_text),
    published: '',
    thumbnailUrl: cleanThumbnail(thumbnail),
    ...linksFor(videoId, 'short')
  };
};

const classicVideoFromNode = (item, channel, type) => {
  const videoId = item.video_id || item.id || item.endpoint?.payload?.videoId;
  if (!videoId) return null;

  return {
    channelHandle: channel.handle,
    channelTitle: channel.title,
    channelId: channel.channelId,
    type,
    videoId,
    title: textOf(item.title) || textOf(item.overlay_metadata?.primary_text) || '',
    duration: textOf(item.duration) || textOf(item.length_text),
    views: textOf(item.short_view_count) || textOf(item.view_count) || textOf(item.overlay_metadata?.secondary_text),
    published: textOf(item.published) || textOf(item.published_time),
    thumbnailUrl: cleanThumbnail(item.thumbnails?.[0]?.url || item.thumbnail?.[0]?.url),
    ...linksFor(videoId, type)
  };
};

const pageLongVideos = (feed, channel) => {
  const lockups = feed.page?.contents_memo?.get('LockupView') || [];
  const longVideos = lockups.map((item) => longVideoFromLockup(item, channel));
  const classicVideos = (feed.videos || []).map((item) => classicVideoFromNode(item, channel, 'long'));
  return [...longVideos, ...classicVideos].filter(Boolean);
};

const pageShorts = (feed, channel) => {
  const shortsLockups = feed.page?.contents_memo?.get('ShortsLockupView') || [];
  const nodeShorts = shortsLockups.map((item) => shortVideoFromNode(item, channel));
  const classicShorts = (feed.videos || []).map((item) => {
    if (item.type === 'ShortsLockupView') return shortVideoFromNode(item, channel);
    return classicVideoFromNode(item, channel, 'short');
  });
  return [...nodeShorts, ...classicShorts].filter(Boolean);
};

const collectFeed = async (initialFeed, pageExtractor, channel) => {
  const byId = new Map();
  let feed = initialFeed;
  let page = 0;

  while (feed) {
    for (const item of pageExtractor(feed, channel)) {
      if (!byId.has(item.videoId)) byId.set(item.videoId, item);
    }

    if (!feed.has_continuation) break;
    page += 1;
    if (page > 25) {
      throw new Error(`Stopped after 25 continuation pages for ${channel.handle}`);
    }
    feed = await feed.getContinuation();
  }

  return [...byId.values()];
};

const channelToMarkdown = (channel) => {
  const lines = [
    `## ${channel.title} (${channel.handle})`,
    '',
    `- Source: ${channel.sourceUrl}`,
    `- Channel ID: ${channel.channelId}`,
    `- Client type: ${channel.clientType}`,
    `- Long videos: ${channel.longVideos.length}`,
    `- Shorts: ${channel.shorts.length}`,
    ''
  ];

  const addSection = (title, items) => {
    lines.push(`### ${title}`, '');
    if (!items.length) {
      lines.push('No items found.', '');
      return;
    }

    for (const [index, item] of items.entries()) {
      lines.push(`${index + 1}. ${item.title || item.videoId}`);
      lines.push(`   - Video ID: ${item.videoId}`);
      lines.push(`   - Watch: ${item.watchUrl}`);
      if (item.shortsUrl) lines.push(`   - Shorts: ${item.shortsUrl}`);
      lines.push(`   - Embed: ${item.embedUrl}`);
      if (item.duration) lines.push(`   - Duration: ${item.duration}`);
      if (item.views) lines.push(`   - Views: ${item.views}`);
      if (item.published) lines.push(`   - Published: ${item.published}`);
      lines.push('');
    }
  };

  addSection('Long Videos', channel.longVideos);
  addSection('Shorts', channel.shorts);
  return lines.join('\n');
};

const main = async () => {
  const yt = await Innertube.create();
  const scrapedAt = new Date().toISOString();
  const results = [];

  for (const input of channels) {
    const endpoint = await yt.resolveURL(input.sourceUrl);
    const channelId = endpoint.payload?.browseId;
    if (!channelId) throw new Error(`Could not resolve channel ID for ${input.sourceUrl}`);

    const channel = await yt.getChannel(channelId);
    const base = {
      ...input,
      title: channel.metadata?.title || input.handle,
      channelId,
      canonicalUrl: channel.metadata?.url_canonical || `https://www.youtube.com/channel/${channelId}`
    };

    const longVideos = channel.has_videos
      ? await collectFeed(await channel.getVideos(), pageLongVideos, base)
      : [];
    const shorts = channel.has_shorts
      ? await collectFeed(await channel.getShorts(), pageShorts, base)
      : [];

    results.push({
      ...base,
      counts: {
        longVideos: longVideos.length,
        shorts: shorts.length,
        total: longVideos.length + shorts.length
      },
      longVideos,
      shorts
    });
  }

  const payload = {
    scrapedAt,
    source: 'YouTube channel tabs via youtubei.js',
    embedPattern: 'https://www.youtube.com/embed/{videoId}',
    channels: results,
    totals: {
      channels: results.length,
      longVideos: results.reduce((sum, channel) => sum + channel.longVideos.length, 0),
      shorts: results.reduce((sum, channel) => sum + channel.shorts.length, 0),
      videos: results.reduce((sum, channel) => sum + channel.counts.total, 0)
    }
  };

  const markdown = [
    '# YOT Productions YouTube Portfolio Embed Links',
    '',
    `Scraped at: ${scrapedAt}`,
    '',
    'Use `embedUrl` from the JSON for website integrations. Shorts also use the same `/embed/{videoId}` pattern.',
    '',
    `Totals: ${payload.totals.longVideos} long videos, ${payload.totals.shorts} shorts, ${payload.totals.videos} total videos.`,
    '',
    ...results.map(channelToMarkdown)
  ].join('\n');

  await writeFile(outputJson, `${JSON.stringify(payload, null, 2)}\n`);
  await writeFile(outputMd, `${markdown}\n`);

  console.log(`Wrote ${outputJson.pathname}`);
  console.log(`Wrote ${outputMd.pathname}`);
  console.log(JSON.stringify(payload.totals, null, 2));
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
