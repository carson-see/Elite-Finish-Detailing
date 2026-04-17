# Elite Finish Detailing — Handoff Checklist

Everything Nixon and Blake need to take ownership of the website.

This site is a single static HTML file (`index.html`) plus an `images/` folder. It has zero servers, zero databases, and zero recurring fees. The only accounts you need are free.

---

## 1. Free accounts to create (15 minutes total)

All of these should be created by **you** (Nixon or Blake) using a real business email — **not** the developer's personal email. Everything you own here stays yours.

### A. Formspree — for the booking form (free, 50 submissions/month)
1. Go to https://formspree.io and sign up with a business email (e.g. `bookings@elitefinishdetailing.com` or your personal email for now).
2. Create a new form. Name it "Elite Finish Bookings."
3. Copy the endpoint URL — it'll look like `https://formspree.io/f/xwzzbnab`.
4. Open `index.html`, find this line near the bottom in the `<script>` section:
   ```js
   const FORMSPREE_ENDPOINT = "";
   ```
   Paste your URL between the quotes:
   ```js
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwzzbnab";
   ```
5. Save, commit, push. Done — bookings will now land in your Formspree inbox AND your email.

**Why Formspree:** no backend, no database, no recurring cost. Every booking arrives as an email and is saved in Formspree's dashboard for you to review. When you outgrow 50 bookings/month, their paid plan is $10/month.

### B. Stripe — for online payment (free account, ~3% per transaction)
1. Go to https://stripe.com and create a business account in Nixon or Blake's name.
2. Verify your business identity (required before you can accept payments).
3. In the Stripe dashboard, go to **Payment Links** → **Create payment link**.
4. Create **12 payment links** — one for each vehicle × service combo:
   - Car — Exterior — $40
   - Car — Interior — $60
   - Car — Elite Finish — $100
   - Truck — Exterior — $50
   - Truck — Interior — $70
   - Truck — Elite Finish — $120
   - SUV — Exterior — $60
   - SUV — Interior — $80
   - SUV — Elite Finish — $140
   - Van — Exterior — $70
   - Van — Interior — $80
   - Van — Elite Finish — $150
5. Save all 12 URLs somewhere. When a customer finishes a detail, text them the matching link. They pay on their phone. Money hits your bank in ~2 days.

**How to use them:** you can either (a) manually text the right link to each customer after the detail, or (b) embed them on a "Thanks for booking" page later. For v1, manual texting is fine.

### C. Coinbase Commerce — for crypto payment (free account, 1% per transaction)
1. Go to https://commerce.coinbase.com and sign up with a business email.
2. Connect your Bitcoin (BTC) and Solana (SOL) wallets. If you don't have wallets yet, Coinbase will walk you through creating them.
3. Optional: enable auto-convert to USDC (stablecoin) so you don't have to worry about price swings.
4. In the dashboard, go to **Payment Links** → **Create payment link**.
5. Create **12 payment links** — one for each vehicle × service combo (same list as Stripe below).
6. Save all 12 URLs. After a detail, text the matching crypto link to the customer if they want to pay with BTC or SOL.

**Why Coinbase Commerce:** 1% fee (vs Stripe's ~3%), supports Bitcoin and Solana out of the box, hosted checkout pages (no code on the site), and customers trust the Coinbase brand. The site already advertises crypto payment — these links make it real.

### D. Google Business Profile — biggest lever for local SEO (free)
1. Go to https://www.google.com/business and claim "Elite Finish Detailing" as a business.
2. Set the category to "Car Detailing Service."
3. Mark yourselves as a "service-area business" that serves customers at their location (not a storefront).
4. Add your service area: Omaha, Shelby, Elkhorn, Papillion, Gretna, Bennington, Council Bluffs.
5. Add phone: (402) 679-7198 and (402) 278-4466.
6. Upload the logo and 5–10 before/after photos.
7. Ask your first 5 customers to leave a Google review. This is more important than anything else on the site for getting found.

---

## 2. Content to swap in

### Required
- **Real before/after photos.** Drop them in `images/` as `before-1.jpg`, `after-1.jpg`, `before-2.jpg`, `after-2.jpg`. Then in `index.html` find the `#gallery` section and replace the two Unsplash URLs with these filenames. Keep filenames lowercase.
- **Real testimonials.** Scroll to the "Happy drivers" section in `index.html`. Replace the three `[Customer quote goes here …]` placeholders with real reviews. Use real first names, last initials, and neighborhoods.

### Optional
- **Hero photo.** Replace the Unsplash hero background with a shot of Nixon or Blake detailing a customer's car. Save as `images/hero.jpg` and update the `src` in the `<section>` right after `<main id="top">`.
- **A real email address.** The mailto fallback sends to `bookings@elitefinishdetailing.com` which doesn't exist yet. Either create that email (Google Workspace $7/month or free with a Gmail alias) or change the address to one of your real emails. Find it in the `handleBooking` function in `index.html`.

---

## 3. Domain & hosting

The site is currently hosted on GitHub Pages from the `carson-see/Elite-Finish-Detailing` repo.

### Option A — Keep it on Carson's GitHub repo (free, instant)
Nothing to do. The site is live at whatever URL GitHub Pages assigns it (e.g. `https://carson-see.github.io/Elite-Finish-Detailing/`).

### Option B — Transfer the repo to your own GitHub (free, 5 min)
1. One of you creates a free account at https://github.com.
2. Carson goes to the repo **Settings → General → Transfer ownership** and transfers it to your new account.
3. Re-enable GitHub Pages in the new repo's Settings → Pages.

### Option C — Buy a custom domain (recommended, $12/year)
1. Buy `elitefinishdetailing.com` at https://namecheap.com or https://cloudflare.com/products/registrar (Cloudflare is cheapest).
2. In GitHub Pages settings, add the custom domain.
3. In your domain registrar, add the DNS records GitHub tells you to add.
4. Done — your site is live at `https://elitefinishdetailing.com`.

---

## 4. Ongoing maintenance

- **Update pricing** → edit the `<table>` in the `#services` section of `index.html` AND the 12 `Offer` entries in the JSON-LD schema block at the top of the file. Commit + push.
- **Add a photo** → drop into `images/`, reference it in the HTML.
- **New testimonial** → find the testimonials section and paste it in.
- **Add a service area** → update the `areaServed` array in the JSON-LD block AND the footer text.

If this feels overwhelming later, any dev-for-hire can do these edits in 10 minutes.

---

## 5. Google Calendar — live availability on the booking form (free)
1. Open Google Calendar on your phone or at https://calendar.google.com.
2. Create a new calendar called **"Elite Finish Bookings"**.
3. When you confirm an appointment, add an event to this calendar at the booked time slot (8 AM, 10 AM, 12 PM, 2 PM, or 4 PM).
4. Make the calendar **public**: Settings → Access permissions → Make available to public.
5. Copy the Calendar ID (in Settings, it looks like `abc123@group.calendar.google.com`).
6. Go to https://console.cloud.google.com → create a project → enable the "Google Calendar API" → create an API key (no billing needed at this volume).
7. In `index.html`, find these lines near the bottom:
   ```js
   const GCAL_ID = "";
   const GCAL_KEY = "";
   ```
   Paste your Calendar ID and API key between the quotes.
8. Save, commit, push. Now when customers pick a date, booked time slots show as greyed out.

**How it works for you:** Just use Google Calendar like normal. Block off times when you're busy. The website reads your calendar and disables those slots automatically.

## 6. Google Sheet — "Track Your Detailer" feature (free)
1. Create a new Google Sheet called **"Elite Finish Tracker"**.
2. In Row 1, create these column headers: `id`, `customer_name`, `phone`, `status`, `updated_at`
3. When a booking is confirmed, add a row with a simple ID (e.g., `NB-0418-1`), the customer's name, phone, and set status to `booked`.
4. Text the customer their tracking link: `elitefinishomaha.com/track.html?id=NB-0418-1`
5. As you work, update the status column to: `enroute`, `washing`, `detailing`, `checking`, or `complete`.
6. Publish the sheet: File → Share → Publish to web → Entire document → CSV → Publish.
7. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`).
8. In `track.html`, find this line:
   ```js
   const SHEET_ID = "";
   ```
   Paste your Sheet ID between the quotes.
9. Save, commit, push. Customers can now track their detail in real time!

**Demo mode:** Before connecting a sheet, customers can test with the IDs `demo`, `demo-done`, or `demo-new` to see how the tracker works.

**Valid status values:** `booked` → `enroute` → `washing` → `detailing` → `checking` → `complete`

## 7. What is NOT in this site yet

These are fine to add later when there's a real need:

- A real database of bookings (Formspree stores them for free, that's enough for now)
- A calendar that shows real availability (for now you confirm bookings manually)
- Automated text reminders (use Twilio if/when you want this, ~$1/month)
- Analytics (add Plausible or Google Analytics if you want to see visitors)
- A blog (not needed — your Google Business Profile is the better SEO lever)
- An admin dashboard (Formspree + your email inbox is the dashboard for now)

---

## 6. Quick reference

| What | Where |
|---|---|
| Main site file | `index.html` |
| Logos | `images/logo-favicon.png`, `images/logo-wordmark.png` |
| Pricing | `<table>` in `#services` section + JSON-LD `hasOfferCatalog` |
| Phone numbers | Footer, About section, JSON-LD `founder`, JSON-LD `telephone` |
| Service areas | Footer + JSON-LD `areaServed` |
| Booking endpoint | `FORMSPREE_ENDPOINT` constant in the `<script>` block |
| Detailer tracker | `track.html` + Google Sheet (see Section 6) |
| Live availability | Google Calendar API keys in `index.html` (see Section 5) |
| Agent discovery | `agents.json`, `.well-known/agent-card.json`, `.well-known/openapi.yaml` |
| LLM guide | `llms.txt` |
| Design system docs | `DESIGN.md`, `obsidian_gold/DESIGN.md` |
