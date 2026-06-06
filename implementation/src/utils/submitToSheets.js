const SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

export async function submitToSheets(data) {
  if (!SHEETS_URL || SHEETS_URL === 'YOUR_APPS_SCRIPT_URL_HERE') {
    throw new Error('Google Sheets Apps Script URL is not configured.');
  }

  const response = await fetch(SHEETS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  if (result.result !== 'success') {
    throw new Error(result.message || 'Google Sheets submission failed.');
  }

  return result;
}
