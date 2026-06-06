# Phase 9 — Compliance Architecture

**This is the most critical document in the plan.**
The website will be reviewed by: income tax authorities, banks, govt agencies, auditors, FSSAI, APEDA.

---

## 9.1 Claim Register (`content/claim-register.json`)

Must be created BEFORE any content goes live. Every public-facing claim needs an entry.

```json
[
  {
    "page": "home",
    "section": "trust-strip",
    "claim": "CIN: U01XXXXX2022MH1234",
    "type": "legal-identity",
    "source": "MCA Certificate of Incorporation",
    "sourceDate": "YYYY-MM-DD",
    "approvedBy": "Director Name",
    "isPublic": true,
    "reviewDate": "never",
    "notes": "Static — update only if CIN changes"
  },
  {
    "page": "home",
    "section": "farmer-network",
    "claim": "42 Villages",
    "type": "operational",
    "source": "Internal farmer registry spreadsheet",
    "sourceDate": "2025-06-01",
    "approvedBy": "Director Name",
    "isPublic": true,
    "reviewDate": "2025-12-01",
    "notes": "Update every 6 months or on significant change"
  }
]
```

**Claim Types:**
- `legal-identity` — CIN, GST, registered name, address
- `registration` — FSSAI, APEDA, MSME numbers
- `certification` — quality certs with validity dates
- `operational` — farmer count, village count, acres (need dated internal records)
- `infrastructure` — warehouse, grading capacity (need verification)
- `governance` — board composition, meeting schedule

---

## 9.2 What NEVER to Publish (Without Documentation)

| Claim | Risk | Safe Alternative |
|---|---|---|
| "500+ farmers" | Unverified number | "Working with farmers across X districts, per internal records as of [date]" |
| "₹X crore turnover" | Tax/bank scrutiny | Omit entirely or cite audited financials only |
| "Organic/residue-free" | False certification claim | Only if FSSAI Organic / specific cert exists |
| "Government approved" | False govt claim | "Registered under FPC Act 2013" only |
| "Export quality" | APEDA scrutiny | Only if APEDA registered, cite number |
| "Guaranteed income to farmers" | Contractual liability | Describe the procurement process factually |
| "India's fastest growing" | Unverifiable superlative | Remove entirely |
| Competitor comparisons | Legal risk | Remove entirely |
| Unverified certifications | FSSAI/legal action | Only publish with valid cert + expiry date |

---

## 9.3 Safe Phrasing Patterns

```
❌ "500+ farmers trust us"
✅ "Operating across X districts with registered farmer members, as per internal records dated [Month Year]"

❌ "₹5 crore annual turnover"  
✅ (Omit — or reference audited financials document)

❌ "Certified organic produce"
✅ "Produce sourced under documented farming practices" (without cert claim)
   OR "FSSAI Organic Certified, Cert No. XXXXX, Valid until MM/YYYY" (with cert)

❌ "Directly from 200 farmers"
✅ "Procured from registered farmer members" (without specific count if unverified)

❌ "Guaranteed best price"
✅ "Procurement at pre-agreed rates, documented per farmer agreement"

❌ "10,000 acres covered"
✅ "Operating across X acres, as per crop planning records for [Season Year]"
```

---

## 9.4 Compliance Page Requirements

The `/compliance` page must include:
1. **Full legal company name** — exactly as in MCA records
2. **CIN** — from Certificate of Incorporation
3. **Registered address** — exactly as registered
4. **Date of incorporation**
5. **Director names** — as registered with ROC
6. **GST number** — from GST registration certificate
7. **FSSAI** — if obtained, with number and validity
8. **FPC Act 2013 reference** — registration state and number
9. **Auditor information** — if publicly required
10. **Last reviewed date** — on the page itself
11. **Claim register notice** — contact email for verification requests

---

## 9.5 Page-Level Compliance Rules

| Page | Rule |
|---|---|
| All pages | Footer must show CIN + Registered address |
| All pages | No claim that implies govt endorsement without proof |
| Home Trust Strip | Only CIN, GST, state, year — no operational numbers unless in claim register |
| Products | Every product must have "Last Updated: [date]" |
| Compliance | All certification validity dates must be future dates or marked "In Process" |
| About | Directors listed only by name + designation, no fake credentials |
| For Buyers | No "guaranteed supply" language without contract basis |
| For Farmers | No "guaranteed price" language without documented procurement rate |

---

## 9.6 Pre-Launch Checklist

```
Legal / Identity
  [ ] CIN verified against MCA portal
  [ ] Registered address matches MCA + GST records
  [ ] Director names match ROC records
  [ ] GST number active on GST portal
  [ ] All registration numbers double-checked

Content
  [ ] Every number in claim register with source + date
  [ ] No "organic/residue-free" without certification
  [ ] No revenue/financial figures
  [ ] No "government approved" without approval document
  [ ] All certification validity dates are future dates (or marked In Process)
  [ ] Contact email is monitored
  [ ] Terms and Privacy Policy pages exist

Technical
  [ ] HTTPS enabled
  [ ] Forms work and email is received
  [ ] Mobile responsive on 375px
  [ ] Lighthouse Performance > 85
  [ ] Lighthouse Accessibility > 90
  [ ] Lighthouse SEO > 90
  [ ] prefers-reduced-motion respected

Post-Launch
  [ ] Compliance page review every 6 months
  [ ] Claim register reviewed quarterly
  [ ] Certification validity dates tracked
```
