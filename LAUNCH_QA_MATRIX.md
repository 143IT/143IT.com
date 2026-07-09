# 143IT Azure VM Manager Launch QA Matrix

**Status:** Ready for execution  
**Updated:** July 9, 2026  
**Scope:** 143IT.com product launch pages and demo-request funnel

## Build and Route Checks

| Check | Target | Evidence |
| --- | --- | --- |
| Production build | `npm run build` succeeds | Build output attached or pasted |
| Internal links | `npm run check:links` reports zero missing routes | Script output |
| Sitemap | Product, Security, and Support pages appear in `/sitemap.xml` | Build/source inspection |
| Metadata | Product pages have title, description, canonical, Open Graph, and Twitter metadata | Source or rendered inspection |
| Structured data | Product page emits `SoftwareApplication` schema without ratings, offers, or public prices | Rendered HTML inspection |

## Performance Budgets

| Metric | Budget |
| --- | --- |
| Shared first-load JavaScript | ≤ 100 kB |
| Product route first-load JavaScript | ≤ 115 kB |
| Product page route size | ≤ 10 kB |
| Product media payload before screenshots | ≤ 0.5 MB |
| Lighthouse Performance | ≥ 90 before launch |
| Cumulative Layout Shift | ≤ 0.1 |
| Largest Contentful Paint | ≤ 2.5 s on a representative production connection |

## Browser and Responsive Coverage

| Environment | Pages |
| --- | --- |
| Chrome desktop latest | Home, product, security, support, contact, legal |
| Edge desktop latest | Product and demo form |
| Safari desktop latest | Product and demo form |
| iOS Safari current | Product and demo form |
| Android Chrome current | Product and demo form |

Viewport checks:

- 390 × 844
- 768 × 1024
- 1280 × 720
- 1440 × 900

## Accessibility Checks

- [ ] One visible `h1` per page.
- [ ] Heading order is logical.
- [ ] All form fields have visible labels.
- [ ] Required fields are communicated visually and programmatically.
- [ ] Keyboard can reach all interactive controls.
- [ ] Focus state is visible.
- [ ] Product workflow demo is usable by keyboard.
- [ ] Color contrast passes WCAG AA for body text and controls.
- [ ] Reduced-motion users are not required to complete motion-dependent interactions.
- [ ] Error messages are associated with relevant fields.

## Demo Form Functional Checks

| Scenario | Expected result |
| --- | --- |
| Empty submit | Required-field validation appears; no network request is sent |
| Personal email domain | Business-email validation appears |
| Active Azure subscription unchecked | Qualification validation appears |
| Valid submission | Success message promises one-business-day response |
| n8n/network failure | User gets clear retry/fallback message and form values remain |
| Rate limit exceeded | User gets rate-limit message and no sensitive data is exposed |
| Duplicate click during submit | Only one submission attempt proceeds |

## Privacy and Security Checks

- [ ] No secrets appear in source, build output, logs, screenshots, or public docs.
- [ ] Analytics event payloads follow `PRODUCT_ANALYTICS_EVENT_PLAN.md`.
- [ ] Demo form does not send sensitive fields to analytics.
- [ ] Public pages do not include tenant IDs, subscription IDs, customer names, or VM names.
- [ ] Legal/privacy pages state that sensitive secrets should not be submitted through public forms.
- [ ] Security & Trust page labels unverified controls as pending review.

