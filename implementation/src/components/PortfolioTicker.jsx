import portfolioData from '../data/youtube-portfolio-links.json';

const designImages = ['d1.png', 'd2.png', 'd3.png', 'd4.png', 'd6.png', 'd8.png'].map(
  (file) => `/assets/design/${file}`
);

const videoThumbs = portfolioData.channels
  .flatMap((channel) => [...channel.longVideos, ...channel.shorts])
  .filter((video) => video.thumbnailUrl)
  .slice(0, 12)
  .map((video) => video.thumbnailUrl);

const items = [...videoThumbs, ...designImages];

function TickerRow({ reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div className={`ticker-track ${reverse ? 'ticker-right' : 'ticker-left'}`}>
        {doubled.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt="YOT portfolio work"
            className="h-40 w-72 shrink-0 rounded-xl object-cover"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default function PortfolioTicker() {
  return (
    <div className="grid gap-5">
      <TickerRow />
      <TickerRow reverse />
    </div>
  );
}
