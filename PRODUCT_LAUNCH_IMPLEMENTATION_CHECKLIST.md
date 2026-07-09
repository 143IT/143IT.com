# 143IT Website Remediation and Product Launch Checklist

**Product:** Azure VM Manager  
**Source:** `143IT-Website-to-Product-Launch-Roadmap.md`  
**Working rule:** Complete and verify one checklist item at a time. Do not publish claims, pricing, security details, or legal language until the responsible owner approves them.

## Status Key

- [ ] Not started
- [x] Complete
- **Blocked by:** A decision or prerequisite required before implementation
- **Evidence:** Link to the PR, screenshot, test output, analytics event, or approval that proves completion

## Launch Decisions

These decisions should be resolved first because they affect multiple implementation tasks.

### D-01 — Choose the product pricing model

- [x] Use a hybrid pricing model: a base monthly organization/tenant license with included users, Azure subscriptions, and VM capacity; additional users and infrastructure capacity are plan limits or add-ons.
- [ ] Define plans, prices, billing frequency, included usage, overages, taxes, cancellation, and refund policy.
- [x] Use sales-assisted pricing at launch. Explain the hybrid pricing structure publicly, but display “Contact us for pricing” instead of dollar amounts.
- **Decision recorded:** July 8, 2026
- **Owner:** Product + Business
- **Blocks:** P1-03, P1-04, P2-03
- **Done when:** A written pricing specification is approved for publication.

### D-02 — Choose the launch conversion path

- [x] Use a staged v1 conversion path: request a demo first, followed by an assisted trial for qualified customers.
- [x] Demo form fields: name, work email, company, job role, number of Azure subscriptions, approximate number of VMs, primary challenge/message, and optional phone number.
- [x] Assisted-trial qualification requires a business email and an active Azure subscription. Trials are manually approved after the demo; no minimum VM count is required at launch.
- [x] After submission, show: “Your request has been received. A 143IT product specialist will contact you within one business day to schedule your demo.”
- [x] Send new demo-request notifications through n8n to `support@143it.com`; that inbox owns the initial response and routing.
- [x] Commit to an initial response within one business day.
- [x] Route demo submissions through n8n. Configure an approved webhook, durable destination, internal notification, and failed-delivery handling during implementation.
- **Decision recorded:** July 8, 2026
- **Owner:** Product + Sales + Web
- **Blocks:** P1-04, P3-01, P3-05
- **Done when:** The complete visitor-to-onboarding workflow is documented.

### D-03 — Approve the case-study strategy

- [x] Remove the existing generic/fabricated-looking case studies and replace them with one truthful story about why and how 143IT built Azure VM Manager.
- [ ] Record which existing pages and links will be removed, redirected, or rewritten.
- [x] Add real customer case studies later only with consent and verified results.
- **Decision recorded:** July 8, 2026
- **Owner:** Product + Content
- **Blocks:** P0-02, P3-02
- **Done when:** The replacement strategy and permitted evidence are approved.

### D-04 — Confirm product architecture and onboarding

- [x] Use Azure Container Apps for the production API and background worker, Azure Database for PostgreSQL Flexible Server for persistence, managed identities and Key Vault for identity/secrets, and Application Insights plus Log Analytics for observability.
- [x] Current runtime is a containerized API.
- [x] Current Azure VM operations execute directly in the API process; there is no separate background worker.
- [x] Move long-running Azure VM operations to a queue-backed worker before production launch. The API will accept and record requests, enqueue work, return an operation ID, and expose status; the worker will execute actions and record progress, retries, and audit results.
- [x] Use Azure Service Bus between the API and background worker.
- [ ] Define retry, timeout, idempotency, duplicate-detection, dead-letter, poison-message, and cancellation behavior.
- [ ] Confirm authentication, authorization, and tenant isolation.
- [ ] Confirm Azure onboarding and RBAC assignment workflow.
- [ ] Confirm trial provisioning, expiration, suspension, and deletion behavior.
- [ ] Confirm billing integration, if applicable.
- **Current architecture recorded:** July 8, 2026
- **Owner:** Product + DevOps
- **Blocks:** P1-01, P1-04, P2-01, P2-03
- **Done when:** The website can describe onboarding and security without assumptions.

### D-05 — Approve support commitments

- [ ] Define support channels and coverage hours.
- [ ] Define severity levels and target response times.
- [ ] Define uptime target, maintenance windows, exclusions, and service-credit policy.
- [ ] Confirm which commitments can be operationally supported.
- **Owner:** Product + Business
- **Blocks:** P2-02
- **Done when:** A product-specific support and SLA specification is approved.

### D-06 — Select analytics and privacy approach

- [ ] Choose the analytics provider.
- [ ] Define required consent and cookie behavior.
- [ ] Define data retention and access ownership.
- [ ] Name the dashboard owner.
- **Owner:** Product + Web + Legal
- **Blocks:** P3-01
- **Done when:** The measurement plan is approved and compatible with the Privacy Policy.

### D-07 — Assign owners and legal reviewer

- [ ] Replace role placeholders with named owners.
- [ ] Select internal or external legal counsel.
- [ ] Establish legal-review turnaround and approval evidence.
- **Owner:** Product
- **Blocks:** All phases
- **Done when:** Every task has an accountable person and legal work has an assigned reviewer.

## Phase 0 — Credibility Triage

### P0-01 — Remove or correct homepage statistics

- [x] Located the homepage metrics and confirmed no supporting data source was present.
- [x] Removed the uptime, automation-hours, and systems-managed counters.
- [x] Removed the typing-effect dependency after browser QA showed the primary headline could remain blank.
- [x] Verified the rendered homepage contains no zero-value metric claims.
- **Closes:** F-01
- **Owner:** Web + Product
- **Acceptance criteria:** No placeholder, zero-value, or unsupported metrics appear.
- **Evidence:** Browser QA confirmed the static headline and no `0%`, `0+`, or `0k+` claims; production build completed July 8, 2026.

### P0-02 — Remove fabricated case studies and repair links

- [x] Inventoried homepage and `/case-studies` claims, metrics, and links.
- [x] Removed the fictional client cards, testimonials, aggregate metrics, and unsupported outcomes.
- [x] Replaced the case-studies index with the approved Azure VM Manager build story.
- [x] Removed links to missing case-study detail routes.
- [x] Updated homepage, header, and footer labels to use “Build Story.”
- **Closes:** F-02, F-03
- **Blocked by:** D-03
- **Owner:** Content + Product + Web
- **Acceptance criteria:** No fabricated client presentation remains and no case-study link returns 404.
- **Evidence:** Browser QA confirmed `/case-studies` renders the build story; static internal-link scan checked 21 routes with zero missing paths on July 8, 2026.

### P0-03 — Refresh or deliberately retire stale blog content

- [x] Verified the existing article dates are from February and March 2024.
- [x] Relabeled homepage and blog-index content as a technical article archive.
- [x] Replaced “Latest Insights” and “Featured Post” language with date-transparent archive language.
- [x] Confirmed the footer copyright year is generated dynamically.
- **Closes:** F-04
- **Owner:** Content
- **Acceptance criteria:** The site does not present 2024 content as the latest 2026 insight.
- **Evidence:** Browser QA and production build completed July 8, 2026.

### P0-04 — Audit service and MSP pricing claims

- [x] Reviewed `/services`, service-detail pages, `/pricing`, featured services, and chatbot service descriptions.
- [x] Removed fixed MSP tiers and unapproved dedicated-team, SOC, unlimited-storage, refund, and hard-SLA promises from `/pricing`.
- [x] Replaced fixed pricing with a discovery and defined-scope engagement model.
- [x] Removed unsupported outcome statistics from managed IT, cloud, automation, AI, and security service pages.
- [x] Softened 24/7, zero-downtime, SOC, and guaranteed-outcome language where no approved operational commitment was documented.
- [ ] Product owner to perform final business approval of retained service descriptions.
- **Closes:** F-05
- **Owner:** Product + Business + Content
- **Acceptance criteria:** Every published promise is operationally deliverable and approved.
- **Evidence:** Browser QA confirmed the pricing page contains no old tier prices, money-back promise, uptime SLA, or dedicated-support claim; production build completed July 8, 2026.

### P0-05 — Eliminate broken internal links

- [x] Scanned static internal links across `app` and `components`.
- [x] Removed links to missing case-study detail routes.
- [x] Confirmed no changed route requires a redirect because `/case-studies` remains the canonical build-story URL.
- **Closes:** F-03
- **Owner:** Web
- **Acceptance criteria:** Automated link check reports zero broken internal links.
- **Evidence:** Static scan checked 21 unique internal paths with zero missing routes; Next.js generated all 28 static pages successfully on July 8, 2026.

## Phase 1 — Product Surface

### P1-01 — Build `/products/azure-vm-manager`

- [x] Added the product to header, footer, homepage CTA, and sitemap.
- [x] Built `/products/azure-vm-manager`.
- [x] Explained the buyer problem, intended audience, intended outcomes, product boundaries, assisted launch, and operating workflow.
- [x] Limited claims to the approved workflow and clearly labeled the product as being prepared for launch.
- [ ] Add current, real, annotated screenshots.
- [x] Included “Built by an MSP for infrastructure teams” positioning with the approved founder and build-story context.
- [x] Added Request a Demo and Explore the Workflow calls to action.
- **Closes:** F-07, F-13
- **Blocked by:** D-04
- **Owner:** Product + Content + Design + Web
- **Acceptance criteria:** A visitor can understand what the product does, who it serves, and why it is credible.
- **Evidence:** Next.js production build generated `/products/azure-vm-manager` successfully on July 8, 2026. Current screenshot asset review remains open.

### P1-02 — Add the product demonstration

- [x] Implemented a lightweight, clickable guided workflow preview.
- [x] Used fictional, clearly labeled demo-environment data and stated that the preview does not connect to Azure.
- [x] Added native buttons, tab semantics, visible state, and keyboard access without required motion.
- [x] Avoided heavy media; no additional lazy-loaded asset is required.
- **Closes:** F-07, F-13
- **Owner:** Design + Product + Web
- **Acceptance criteria:** The actual product can be evaluated without a sales call and without exposing customer data.
- **Evidence:** TypeScript/lint validation passed and the product route adds approximately 3.83 kB route code in the July 8, 2026 production build.

### P1-03 — Publish product pricing

- [x] Added a product-pricing section separate from the MSP engagement-pricing page.
- [x] Explained the approved hybrid model: base organization/tenant license with included users, subscriptions, and VM capacity.
- [x] Published “Contact us for pricing” and identified additional capacity as tier/add-on scope.
- [x] Connected pricing discussion to the Request a Demo flow.
- [ ] Publish exact inclusions, limits, overages, billing, and cancellation terms after business approval.
- **Closes:** F-08
- **Blocked by:** D-01
- **Owner:** Product + Business + Content + Web
- **Acceptance criteria:** A buyer can estimate cost and understand the commercial model.
- **Evidence:** Product pricing section compiled and linked successfully; commercial and legal approval remains open.

### P1-04 — Implement the conversion and onboarding path

- [x] Built the approved demo-first flow with assisted-trial qualification.
- [x] Added all approved fields, business-email validation, active-Azure-subscription confirmation, sanitization, and rate limiting.
- [x] Added `/api/product-demo` with `N8N_PRODUCT_DEMO_WEBHOOK` and approved contact-webhook fallback.
- [x] Included `support@143it.com` as the n8n notification recipient in the structured payload.
- [x] Added the approved one-business-day confirmation and clear error fallback.
- [x] Preserved entered form values after submission errors.
- [ ] Verify the production n8n workflow, durable storage, email notification, and ownership handoff with the real webhook.
- **Closes:** F-09
- **Blocked by:** D-01, D-02, D-04
- **Owner:** Web + Product + DevOps
- **Acceptance criteria:** A visitor can complete the chosen action without entering the generic services funnel.
- **Evidence:** API and form passed TypeScript/lint validation; `/api/product-demo` compiled as a dynamic route. Production n8n end-to-end evidence remains open.

### P1-05 — Refresh all product assets

- [ ] Inventory screenshots in the Azure VM Manager repository, README files, documentation, and existing marketing assets.
- [ ] Capture current Fluent UI screens at consistent dimensions.
- [ ] Remove secrets, tenant identifiers, subscriptions, emails, and customer data.
- [ ] Optimize images and write meaningful alternative text.
- [x] Did not fabricate screenshots; the product page explicitly identifies the current guided preview as non-live.
- **Closes:** F-13
- **Owner:** Product + Design
- **Acceptance criteria:** Every public product image is current, safe, legible, and optimized.
- **Verification:** Product-owner approval and sensitive-data review.

## Phase 2 — Trust, Legal, and Support

### P2-01 — Create the Security and Trust page

- [ ] Explain required Azure roles and why each permission is needed.
- [ ] Verify least-privilege claims against the deployed implementation.
- [ ] Explain authentication, tenant isolation, encryption, logging, secrets, data flows, retention, subprocessors, and incident handling.
- [ ] State explicitly what Azure VM Manager cannot access or perform.
- [ ] Document a security contact and vulnerability-reporting process.
- **Closes:** F-10
- **Blocked by:** D-04
- **Owner:** Product + DevOps + Security + Content
- **Acceptance criteria:** A technical buyer can evaluate access and data risk without relying on vague claims.
- **Verification:** Architecture/security review and permission tests.

### P2-02 — Publish product Support and SLA terms

- [ ] Create product-specific support content separate from MSP services.
- [ ] Publish approved channels, hours, severity levels, response targets, uptime calculation, maintenance, exclusions, and escalation.
- [ ] Link support terms from the product and legal surfaces.
- **Closes:** F-11
- **Blocked by:** D-05
- **Owner:** Product + Business + Content
- **Acceptance criteria:** Customers know how support works and which commitments are contractual.
- **Verification:** Operational-owner and legal approval.

### P2-03 — Update software legal terms and privacy disclosures

- [ ] Cover software licensing, acceptable use, billing, cancellation, intellectual property, warranties, liability, automated Azure actions, suspension, and termination.
- [ ] Cover product data processing, retention, subprocessors, cookies, analytics, deletion, and privacy requests.
- [ ] Determine whether a DPA and subprocessor list are required.
- [ ] Add version and effective dates.
- **Closes:** F-12
- **Blocked by:** D-01, D-04, D-06, D-07
- **Owner:** Legal + Product
- **Acceptance criteria:** Counsel approves the published terms for the actual product and sales model.
- **Verification:** Retain written legal approval; do not treat automated review as legal approval.

### P2-04 — Strengthen company identity and contact information

- [x] Use email-only contact at launch; do not publish a phone number.
- [x] Describe 143IT as a remote company serving clients in the United States and Canada; do not publish a street address at launch.
- [x] Approved founder biography: “Rob Lo is the Founder and Principal Cloud Architect at 143IT, with more than 20 years of experience in enterprise infrastructure and IT operations. His work spans Azure, AWS, VMware, identity, security, infrastructure as code, DevOps, and AI-assisted automation. Rob built Azure VM Manager to turn repetitive, error-prone Azure operations into controlled, auditable workflows that help infrastructure teams work more efficiently and reduce operational risk.”
- [x] Use `https://iloveyouit.github.io/rob.loftin.github.io/` as the source profile for verified experience details; omit certifications from the 143IT biography.
- [x] Publish the founder identity as “Rob Lo — Founder and Principal Cloud Architect.”
- [ ] Add jurisdiction, legal business name, and support/sales contact distinctions where appropriate.
- **Closes:** F-06
- **Owner:** Content + Product
- **Acceptance criteria:** A buyer can identify the legal operator and the people responsible for the product.
- **Verification:** Business-owner approval and site-wide consistency review.

## Phase 3 — Launch Mechanics and Measurement

### P3-01 — Instrument analytics and funnel events

- [ ] Implement privacy-compatible analytics and consent behavior.
- [ ] Define stable events for product-page views, demo engagement, pricing views, CTA clicks, form starts, successful submissions, trial starts, purchases, and errors.
- [ ] Prevent sensitive form or Azure data from entering analytics.
- [ ] Build a dashboard showing conversion and drop-off.
- **Closes:** F-14
- **Blocked by:** D-02, D-06
- **Owner:** Web + Product
- **Acceptance criteria:** The team can measure the complete approved funnel.
- **Verification:** Events observed in the production analytics debugger and dashboard.

### P3-02 — Publish the honest Azure VM Manager build story

- [ ] Explain the real operational problem that led to the product.
- [ ] Describe the implementation and lessons learned.
- [ ] Use only measured, attributable results.
- [ ] Explain limitations and current product maturity honestly.
- **Closes:** F-02
- **Blocked by:** D-03
- **Owner:** Product + Content
- **Acceptance criteria:** The story provides concrete proof without implying fictional clients or outcomes.
- **Verification:** Product-owner fact check and evidence for every metric.

### P3-03 — Complete product SEO and sharing metadata

- [ ] Add unique title, description, canonical URL, Open Graph, and social-card metadata.
- [ ] Add appropriate Product/SoftwareApplication structured data without unsupported ratings or offers.
- [ ] Update sitemap, robots directives, and redirects.
- **Closes:** F-07
- **Owner:** Web + Content
- **Acceptance criteria:** Product pages are crawlable and share with correct content.
- **Verification:** Build output, metadata inspection, structured-data validation, and social preview check.

### P3-04 — Complete launch QA

- [ ] Define numeric budgets for Core Web Vitals, JavaScript, images, and demo media.
- [ ] Test supported desktop and mobile browsers.
- [ ] Test keyboard navigation, focus, headings, labels, contrast, reduced motion, and screen-reader basics.
- [ ] Test forms under success, validation, network failure, rate-limit, and duplicate-submission conditions.
- [ ] Confirm no secrets or customer data appear in source, logs, screenshots, or analytics.
- **Owner:** Web + Design + Product
- **Acceptance criteria:** No launch-blocking functional, accessibility, privacy, or performance defects remain.
- **Verification:** Attach the QA matrix, accessibility results, performance report, and defect disposition.

### P3-05 — Add waitlist/newsletter capture

- [ ] Decide whether this is a product waitlist or general newsletter.
- [ ] Obtain explicit consent appropriate to each list.
- [ ] Connect to the approved destination with confirmation and unsubscribe behavior.
- [ ] Track successful signup without collecting sensitive form content in analytics.
- **Closes:** F-09
- **Blocked by:** D-02, D-06
- **Owner:** Web + Content
- **Acceptance criteria:** Early interest is captured, confirmed, and distinguishable from general marketing subscriptions.
- **Verification:** End-to-end signup, confirmation, storage, and unsubscribe test.

## Phase 4 — Post-Launch Operations

### P4-01 — Review funnel performance weekly

- [ ] Assign the dashboard owner and weekly review time.
- [ ] Record the largest verified drop-off and one prioritized experiment.
- [ ] Measure changes against a defined baseline.

### P4-02 — Add real customer evidence

- [ ] Establish a consent and fact-check process.
- [ ] Publish only approved, attributable or properly anonymized studies.
- [ ] Replace internal proof with customer proof as it becomes available.

### P4-03 — Evaluate redesign only from evidence

- [ ] Record conversion, usability, or positioning evidence before proposing a redesign.
- [ ] Define the specific problem and measurable target a redesign would address.

### P4-04 — Maintain or deliberately retire the blog

- [ ] Assign an editorial owner and realistic cadence.
- [ ] Review freshness quarterly.
- [ ] Remove “Latest” positioning if the cadence cannot be maintained.

## Final Launch Gate

- [ ] All Critical and High roadmap findings are closed.
- [ ] All Launch Decisions are approved.
- [ ] Phase 0, Phase 1, and Phase 2 acceptance criteria are met.
- [ ] No placeholder, fabricated, stale, or unsupported claims remain.
- [ ] Product discovery, pricing, conversion, onboarding, support, security, and legal paths work end to end.
- [ ] Analytics and privacy controls are verified in production.
- [ ] Link, responsive, browser, accessibility, security, and performance checks pass.
- [ ] Product, Business, DevOps/Security, Content, and Legal provide recorded launch approval.
