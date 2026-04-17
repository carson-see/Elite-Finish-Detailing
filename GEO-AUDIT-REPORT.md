# GEO Audit Report: Elite Finish Detailing

**Audit Date:** 2026-04-17
**URL:** https://elitefinishomaha.com/
**Business Type:** Local Business (Mobile Car Detailing)
**Pages Analyzed:** 2 (index.html, privacy.html)

---

## Executive Summary

**Overall GEO Score: 42/100 (Poor)**

Elite Finish Detailing has a technically strong website with excellent schema markup, clean static HTML, and well-structured on-page content — but the business is nearly invisible outside its own domain. The site scores well on what it can control (technical infrastructure, content structure, pricing transparency) but critically lacks third-party signals that AI systems rely on to cite and recommend local businesses: no Google Business Profile, no directory listings, no customer reviews, no community mentions, and broken entity linking in schema markup. The highest-impact fixes are off-site (GBP, directories, reviews), while several quick on-site wins (robots.txt, sitemap, llms.txt, schema fixes) can be implemented in under an hour.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 62/100 | 25% | 15.5 |
| Brand Authority | 8/100 | 20% | 1.6 |
| Content E-E-A-T | 52/100 | 20% | 10.4 |
| Technical GEO | 72/100 | 15% | 10.8 |
| Schema & Structured Data | 38/100 | 10% | 3.8 |
| Platform Optimization | 37/100 | 10% | 3.7 |
| **Overall GEO Score** | | | **45.8 → 42** |

*Score adjusted downward from 45.8 to 42 due to the compounding effect of near-zero brand authority across all platforms — a local business with no Google Business Profile and no third-party mentions faces a ceiling on AI citation regardless of on-site quality.*

---

## Critical Issues (Fix Immediately)

### 1. No Google Business Profile
**Impact:** All 5 AI platforms
**Details:** Google Business Profile is the single most important signal for local business AI visibility. Without it, the business has no entity in Google's Knowledge Graph, no review aggregation, no Maps presence, and no local pack eligibility. Google AI Overviews, Gemini, and even ChatGPT/Perplexity use GBP data for local recommendations.
**Fix:** Create and verify a GBP listing with complete info: business name ("Elite Finish Detailing"), service area (Omaha metro), phone (402-278-4466), hours (Mon-Sat 8-6), services, and real photos. Actively solicit Google reviews.

### 2. Broken sameAs Entity Links in Schema
**Impact:** Entity recognition across all AI systems
**Details:** The AutoWash schema's `sameAs` array contains bare strings (`"facebook"`, `"instagram"`, `"tiktok"`) instead of full URLs. This completely breaks entity linking — AI models cannot resolve these to actual profiles, making the business invisible to entity resolution systems.
**Fix:** Replace with full URLs:
- `"https://www.facebook.com/share/1AyonPwFKG/"`
- `"https://www.instagram.com/3litefinishdetailing/"`
- `"https://www.tiktok.com/@elite.finish.deta40"`

### 3. No robots.txt File
**Impact:** All AI crawlers
**Details:** Returns 404. While absence defaults to "allow all," having an explicit file signals intentionality, provides a sitemap reference, and allows explicit AI crawler management.
**Fix:** Create `robots.txt` at site root.

### 4. No sitemap.xml
**Impact:** Crawl discovery and freshness signals
**Details:** Returns 404. AI crawlers use sitemaps to discover content and check `lastmod` dates.
**Fix:** Create `sitemap.xml` listing both pages with lastmod dates.

---

## High Priority Issues

### 5. No Customer Reviews or Testimonials
**Impact:** E-E-A-T authority, AI citation confidence
**Details:** The testimonials section is commented out in HTML. Zero reviews on any platform (Google, Yelp, Facebook). Reviews are the primary authority signal for local businesses in both traditional and AI search.
**Fix:** Collect 10-15 Google reviews via GBP. Uncomment and populate the testimonials section with real quotes.

### 6. Zero Third-Party Directory Presence
**Impact:** Brand authority, entity confirmation
**Details:** No listings on Yelp, BBB, Nextdoor, Omaha Chamber of Commerce, or any local directory. The brand name "Elite Finish Detailing" is used by 6-8 other businesses nationally, creating a severe entity disambiguation problem.
**Fix:** Create consistent listings (NAP + URL) on Yelp, BBB, Nextdoor, MapQuest, and Omaha-specific directories. Always include "Omaha" in the business name for disambiguation.

### 7. No llms.txt File
**Impact:** AI crawler comprehension
**Details:** The emerging llms.txt standard helps AI systems quickly understand site purpose, services, and structure. Absence means AI crawlers must parse the full HTML to extract this context.
**Fix:** Create `llms.txt` at site root.

### 8. No LinkedIn Company Page
**Impact:** Bing Copilot, ChatGPT entity recognition
**Details:** LinkedIn is deeply integrated with Microsoft/Bing ecosystem and serves as an authoritative business identity signal. Neither the company nor the owners have LinkedIn profiles linked to this business.
**Fix:** Create company page; have owners link personal profiles.

### 9. Stock Photos in Gallery
**Impact:** E-E-A-T experience signals, content authenticity
**Details:** Gallery uses Unsplash stock images while captioned as "Real before & after photos." Google and AI systems can detect stock imagery. This undermines experience credibility.
**Fix:** Replace with actual before/after photos from real detailing jobs.

### 10. Missing GeoCoordinates in Schema
**Impact:** Local AI recommendations ("near me" queries)
**Details:** No latitude/longitude in the AutoWash schema. Critical for a local service business — AI systems recommending "car detailing near me" need geographic data.
**Fix:** Add `"geo": {"@type": "GeoCoordinates", "latitude": "41.1895", "longitude": "-97.4342"}` to the AutoWash schema.

---

## Medium Priority Issues

### 11. No Blog or Supporting Content
Single-page architecture limits long-tail keyword targeting and topical authority. Create 3-5 supporting pages (service pages, location pages, blog posts).

### 12. Incomplete Person Schema for Founders
Founders listed without `@type: "Person"`, `jobTitle`, or `sameAs` URLs. Add proper Person typing with LinkedIn profiles.

### 13. No Speakable Schema
AI assistants cannot identify which content to read aloud. Add `speakable` property targeting business description and service summaries.

### 14. No WebSite Schema
Missing basic WebSite schema block. Add for baseline site identity signaling.

### 15. Hero Image Performance
No preconnect to Unsplash CDN, no preload for hero image, no `fetchpriority="high"`, no `width`/`height` attributes. Impacts LCP.

### 16. No Bing Webmaster Tools Integration
No `msvalidate.01` meta tag, no IndexNow support. Site may be under-indexed by Bing/Copilot.

### 17. Missing Security Headers
GitHub Pages limitation — no HSTS, CSP, X-Frame-Options. Consider Cloudflare proxy or platform migration.

---

## Low Priority Issues

### 18. No Responsive Image srcset
Hero serves 2400px image to all devices. Add srcset breakpoints for mobile optimization.

### 19. No `loading="lazy"` on Below-Fold Images
Gallery images load eagerly, competing with hero image for bandwidth.

### 20. No Mobile Hamburger Menu
Desktop nav links (Process, Services, Gallery, Owners) hidden on mobile. Only "Book Now" is accessible.

### 21. Privacy Page Missing OG Tags
Low priority since page is `noindex`, but OG tags would improve social sharing if the page is ever linked.

### 22. `.html` Extension on Privacy Page
Minor — most modern sites use extensionless URLs.

---

## Category Deep Dives

### AI Citability (62/100)

The site's content is reasonably quotable by AI systems. Strongest citable blocks:

| Content Block | Citability Score | Why |
|---|---|---|
| Pricing table | 78/100 | Directly answers "how much does car detailing cost in Omaha" with specific numbers |
| FAQ: Detail duration | 76/100 | Self-contained, number-rich: "45-75 minutes... 2-3 hours" |
| FAQ: Water & power | 72/100 | Addresses universal mobile detailing question |
| Hero value proposition | 67/100 | Good summary but lacks differentiating stats |
| Service area block | 65/100 | Lists 7 specific cities with travel fees |

**Weaknesses:** Gallery section (15/100 — placeholder text), Process steps (28/100 — too generic), Owners section (35/100 — no stats like vehicles detailed or years of experience).

**Key recommendation:** Add a "snippet bait" paragraph designed for AI extraction: *"Elite Finish Detailing is a mobile car detailing service in Omaha, Nebraska, founded by Nixon Thelen and Blake Schmidt. The company serves the Omaha metro area including Elkhorn, Papillion, Gretna, Bennington, Council Bluffs, and Shelby, with flat-rate pricing starting at $40 for an exterior car detail and $100 for a full interior-and-exterior Elite Finish."*

### Brand Authority (8/100)

| Platform | Status |
|---|---|
| Google Business Profile | Absent |
| Yelp | Absent |
| Reddit | Absent |
| YouTube | Absent |
| LinkedIn | Absent |
| Wikipedia | Absent (expected) |
| Facebook | Minimal (generic name, hard to disambiguate) |
| Instagram | Minimal |
| BBB / Nextdoor / Local dirs | Absent |

**Critical finding:** The name "Elite Finish Detailing" is shared by 6-8 other businesses nationally. Without strong third-party signals tied to "Omaha," AI models cannot disambiguate this entity.

### Content E-E-A-T (52/100)

| Dimension | Score | Key Factor |
|---|---|---|
| Experience | 10/25 | Personal story present but no proof (stock photos, no stats) |
| Expertise | 8/25 | No certifications, training, or technical depth |
| Authoritativeness | 8/25 | No reviews, no press, no external validation |
| Trustworthiness | 22/25 | Real names, phone numbers, transparent pricing — strongest dimension |

### Technical GEO (72/100)

**Strengths:** Static HTML (97/100 SSR score), clean semantic markup, comprehensive schema, HTTPS, HTTP/2, CDN-served.

**Weaknesses:** No robots.txt (30/100 crawlability), no security headers (28/100 — GitHub Pages limitation), LCP/CLS risks from unoptimized images.

### Schema & Structured Data (38/100)

**What exists (good):** AutoWash with 12 offers, FAQPage with 6 Q&As, 3 Service schemas, BreadcrumbList — all JSON-LD, server-rendered.

**What's broken:** sameAs contains bare strings (not URLs), missing GeoCoordinates, founders lack `@type: "Person"`, no speakable or WebSite schema.

### Platform Optimization (37/100)

| Platform | Score | Biggest Gap |
|---|---|---|
| Google AI Overviews | 52/100 | No GBP, no backlink authority |
| Google Gemini | 32/100 | Zero Google ecosystem presence |
| Bing Copilot | 30/100 | No Bing Webmaster Tools, no LinkedIn |
| ChatGPT Web Search | 28/100 | No entity recognition signals |
| Perplexity AI | 24/100 | No community validation (Reddit, forums) |

---

## Quick Wins (Implement This Week)

1. **Fix sameAs URLs in schema** — Replace bare strings with full social profile URLs. 2 minutes. Impact: +10-15 schema score.
2. **Create robots.txt** — `User-agent: * / Allow: / / Sitemap: https://elitefinishomaha.com/sitemap.xml`. 5 minutes. Impact: +20 crawlability score.
3. **Create sitemap.xml** — List both pages with lastmod dates. 10 minutes. Impact: +15 crawlability score.
4. **Create llms.txt** — Structured business summary for AI crawlers. 15 minutes. Impact: +10 AI visibility score.
5. **Add GeoCoordinates to schema** — Latitude/longitude for Shelby, NE base. 2 minutes. Impact: improves local AI recommendations.

---

## 30-Day Action Plan

### Week 1: Foundation (On-Site Fixes)
- [ ] Fix sameAs URLs in AutoWash schema
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Create llms.txt
- [ ] Add GeoCoordinates to schema
- [ ] Add `fetchpriority="high"` and preconnect for hero image
- [ ] Add `width`/`height` to all images
- [ ] Add `loading="lazy"` to below-fold images

### Week 2: Entity Building (Off-Site)
- [ ] Create and verify Google Business Profile
- [ ] Create Yelp listing
- [ ] Create LinkedIn company page
- [ ] Create BBB listing
- [ ] Register with Omaha Chamber of Commerce
- [ ] Register with Bing Webmaster Tools

### Week 3: Trust & Proof
- [ ] Replace stock gallery photos with real before/after images
- [ ] Collect first 5-10 Google reviews from past customers
- [ ] Uncomment and populate testimonials section with real quotes
- [ ] Add owner bios with experience stats (vehicles detailed, training, etc.)
- [ ] Add "snippet bait" paragraph for AI citation

### Week 4: Content & Growth
- [ ] Publish 2-3 blog posts targeting informational queries
- [ ] Create a YouTube channel with 2-3 short detailing videos
- [ ] Post in r/Omaha about the business (organic, helpful)
- [ ] Add speakable, WebSite, and improved Person schemas
- [ ] Evaluate Cloudflare proxy for security headers

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| https://elitefinishomaha.com/ | Omaha Mobile Car Detailing from $40 \| Elite Finish Detailing | 18 |
| https://elitefinishomaha.com/privacy.html | Privacy Policy \| Elite Finish Detailing | 4 (missing OG, schema — low priority, noindex) |
