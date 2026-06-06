# 09 — Google Sheets Integration

## Architecture
```
User fills form on website
  → React Hook Form validates
  → fetch() POST to Google Apps Script URL
  → Apps Script writes row to Google Sheet
  → User sees success message
  → Yash/Kunal see data in Google Sheets → export to Excel anytime
```

No server. No database. Completely free. Works forever.

---

## STEP 1 — Create Google Sheet

Go to sheets.google.com → New Sheet

Create 3 tabs:

**Tab 1: "Get in Touch"**
Columns: `Timestamp | Name | Email | Phone | Service | Message`

**Tab 2: "Creator Applications"**
Columns: `Timestamp | Name | Email | Phone | Niche | Platform | Followers | Portfolio Link`

**Tab 3: "Careers"**
Columns: `Timestamp | Name | Email | Role | Portfolio Link | Message`

---

## STEP 2 — Google Apps Script

In the Google Sheet: Extensions → Apps Script → paste this code:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    let sheet;
    if (data.type === 'contact') {
      sheet = ss.getSheetByName('Get in Touch');
      sheet.appendRow([
        new Date(),
        data.name,
        data.email,
        data.phone || '',
        data.service || '',
        data.message || ''
      ]);
    } else if (data.type === 'creator') {
      sheet = ss.getSheetByName('Creator Applications');
      sheet.appendRow([
        new Date(),
        data.name,
        data.email,
        data.phone || '',
        data.niche || '',
        data.platform || '',
        data.followers || '',
        data.portfolioLink || ''
      ]);
    } else if (data.type === 'career') {
      sheet = ss.getSheetByName('Careers');
      sheet.appendRow([
        new Date(),
        data.name,
        data.email,
        data.role || '',
        data.portfolioLink || '',
        data.message || ''
      ]);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Allow CORS
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## STEP 3 — Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Click **Deploy**
6. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/AKfycb.../exec`)

---

## STEP 4 — Add URL to React Project

In `src/utils/submitToSheets.js`:

```javascript
const SHEETS_URL = 'YOUR_APPS_SCRIPT_URL_HERE';

export async function submitToSheets(data) {
  const response = await fetch(SHEETS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (result.result !== 'success') throw new Error(result.message);
  return result;
}
```

Note: Use `'Content-Type': 'text/plain'` — Apps Script has CORS issues with `application/json`.

---

## STEP 5 — React Form Usage

```jsx
import { useForm } from 'react-hook-form';
import { submitToSheets } from '../utils/submitToSheets';

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      await submitToSheets({ type: 'contact', ...data });
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} placeholder="Your Name" />
      <input {...register('email', { required: true })} type="email" placeholder="Email" />
      <input {...register('phone')} type="tel" placeholder="Phone (optional)" />
      <select {...register('service')}>
        <option value="">Select a service</option>
        <option value="Video Editing">Video Editing</option>
        <option value="Designing">Designing</option>
        <option value="Website">Website & Support</option>
        <option value="Creator Outreach">Creator Outreach</option>
        <option value="Other">Other</option>
      </select>
      <textarea {...register('message')} placeholder="Tell us about your project" rows={4} />
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message →'}
      </button>
      
      {status === 'success' && <p>We'll get back to you within 24 hours!</p>}
      {status === 'error' && <p>Something went wrong. Please try again.</p>}
    </form>
  );
}
```

---

## Data in Google Sheets
Every form submission appears as a new row instantly. You can:
- Filter by service type
- Sort by date
- Export to Excel (.xlsx) anytime
- Share the sheet with Kunal for access
