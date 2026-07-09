# 143IT Website Remediation and Azure VM Manager Launch Roadmap

**Product:** Azure VM Manager  
**Approach:** Extend and remediate the current 143IT website; no full redesign  
**Updated:** July 9, 2026  
**Status:** Working roadmap  
**Detailed execution:** [`PRODUCT_LAUNCH_IMPLEMENTATION_CHECKLIST.md`](./PRODUCT_LAUNCH_IMPLEMENTATION_CHECKLIST.md)

## 1. Objective

Prepare the existing 143IT website to credibly introduce Azure VM Manager, explain the product and its security model, capture qualified demo requests, and support an assisted-trial launch.

The project will preserve the current visual system. Work will focus on credibility, product content, conversion, trust, support, legal readiness, and measurement.

## 2. Approved Launch Direction

### Product positioning

- Azure VM Manager will be presented as a product distinct from 143IT’s MSP services.
- Core positioning: built by an MSP for infrastructure teams and MSPs.
- Product claims must describe shipped behavior or clearly identify planned capabilities.
- Existing generic case studies will be removed and replaced by a truthful story about why and how 143IT built Azure VM Manager.
- Real customer case studies may be added later with consent and verified results.

### Pricing

- Use a hybrid pricing model.
- The commercial structure will combine a base organization or tenant license with included users, Azure subscriptions, and VM capacity.
- Additional users and infrastructure capacity may be offered through higher tiers or add-ons.
- Launch pricing will be sales-assisted.
- The website will explain how pricing scales but will display **Contact us for pricing** instead of public dollar amounts.
- Exact tiers, limits, billing terms, cancellation, taxes, and refund terms remain open business decisions.

### Conversion

- Primary product CTA: **Request a Demo**.
- Launch path: demo request followed by an assisted trial for qualified customers.
- Assisted-trial qualification requires:
  - A business email
  - An active Azure subscription
- Trials will be approved manually after the demo.
- There is no minimum VM count at launch.

### Demo form

The product demo form will collect:

- Name
- Work email
- Company
- Job role
- Number of Azure subscriptions
- Approximate number of VMs
- Primary challenge or message
- Optional phone number

Submissions will be routed through n8n. New-request notifications will go to `support@143it.com`, which owns initial response and routing.

After submission, the website will display:

> Your request has been received. A 143IT product specialist will contact you within one business day to schedule your demo.

The published response commitment is one business day.

### Company identity

- Public founder identity: **Rob Lo — Founder and Principal Cloud Architect**.
- Approved biography:

  > Rob Lo is the Founder and Principal Cloud Architect at 143IT, with more than 20 years of experience in enterprise infrastructure and IT operations. His work spans Azure, AWS, VMware, identity, security, infrastructure as code, DevOps, and AI-assisted automation. Rob built Azure VM Manager to turn repetitive, error-prone Azure operations into controlled, auditable workflows that help infrastructure teams work more efficiently and reduce operational risk.

- Certifications will not be listed.
- 143IT will be described as a remote company serving the United States and Canada.
- No street address or public phone number will be displayed at launch.
- Email will be the public contact method.

## 3. Product Architecture Facts Used by the Website

These decisions concern Azure VM Manager itself. They are recorded so website security, onboarding, and product claims remain accurate.

- Current application: containerized API.
- Current Azure VM operations execute directly inside the API process.
- Production launch will move long-running Azure operations to a queue-backed worker.
- Target production topology:
  - Azure Container Apps for the API
  - Azure Container Apps for the background worker
  - Azure Service Bus between the API and worker
  - Azure Database for PostgreSQL Flexible Server
  - Managed identities and Key Vault
  - Application Insights and Log Analytics
- The API will record and enqueue an operation, return an operation ID, and expose its status.
- The worker will execute the Azure action and record progress, retries, and audit results.
- Retry, timeout, idempotency, duplicate detection, dead-letter, poison-message, and cancellation policies remain to be defined by the application team.

Application implementation is not part of the marketing-site remediation unless explicitly added to scope.

## 4. Phase 0 — Credibility Remediation

Complete before introducing Azure VM Manager prominently.

1. Remove or correct unsupported and zero-value homepage statistics.
2. Remove generic or fabricated-looking case studies.
3. Replace broken case-study links and eliminate internal 404s.
4. Refresh, relabel, or temporarily retire stale “Latest Insights” content.
5. Audit all MSP service and pricing claims for current deliverability.
6. Run an automated internal-link check.

### Exit criteria

- No unsupported, placeholder, or zero-value claims.
- No fabricated-looking customer evidence.
- No broken internal links.
- No stale material presented as current.
- Every service promise is operationally deliverable.

## 5. Phase 1 — Product Website Surface

1. Add a Products navigation entry.
2. Build `/products/azure-vm-manager`.
3. Include:
   - Buyer problem and intended audience
   - Product outcomes and limitations
   - Feature walkthrough
   - Real, current, sanitized screenshots
   - Built-by-an-MSP positioning
   - Contact-us-for-pricing explanation
   - Request-a-Demo CTA
4. Add a product demonstration.
5. Build the dedicated demo-request form and n8n integration.
6. Create confirmation and error states.
7. Document what happens after the demo and how assisted trials are approved.

### Product demonstration decision still required

Choose one:

- Clickable guided screenshot tour (current recommendation)
- Short product video
- Annotated static walkthrough
- Combined guided tour and video

### Exit criteria

A visitor can discover Azure VM Manager, understand its purpose, see the actual interface, understand how pricing works, request a demo, and understand the next step without entering the generic MSP-services funnel.

## 6. Phase 2 — Security, Support, Legal, and Trust

### Security and Trust page

Initial draft page added at `/products/azure-vm-manager/security`. The page intentionally separates approved architecture facts from items that still require implementation evidence or formal approval.

Publish an accurate explanation of:

- Required Azure roles and why each is needed
- Least-privilege access
- Authentication and tenant isolation
- Managed identity and secret handling
- Data flows, storage, encryption, retention, and deletion
- Logging and audit history
- Product capabilities and explicit boundaries
- Security contact and vulnerability reporting

Security statements must be verified against the deployed application before being treated as final launch commitments.

### Product Support and SLA

Initial draft page added at `/products/azure-vm-manager/support`. The approved launch support channel is email through `support@143it.com`, and demo requests carry the approved one-business-day response expectation.

Define and publish:

- Support channel
- Coverage hours
- Severity levels
- Response targets
- Uptime calculation
- Maintenance windows
- Exclusions and escalation

Formal support hours, severity definitions, product response targets, uptime language, maintenance windows, exclusions, escalation, and any service-credit policy remain undecided and require operational approval.

### Legal

Website privacy and terms pages were updated with factual Azure VM Manager demo, assisted-trial, workflow-routing, and automated Azure action disclosures. These are not a substitute for counsel-approved product terms.

Obtain legal review covering:

- Software licensing
- Acceptable use
- Billing and cancellation
- Automated Azure actions
- Liability and warranties
- Data processing and retention
- Analytics and cookies
- Subprocessors
- Suspension and termination

### Company trust

Update About and Contact content using the approved founder biography, remote-service region, and email-only contact model.

### Exit criteria

A cautious buyer can identify who operates the product, understand required Azure access, review support expectations, and complete basic legal and security due diligence.

## 7. Phase 3 — Launch and Measurement

1. Select an analytics provider and consent model.
2. Use the provider-neutral event plan in `PRODUCT_ANALYTICS_EVENT_PLAN.md` to track:
   - Product-page views
   - Demo engagement
   - Pricing-section views
   - Demo CTA clicks
   - Form starts
   - Successful requests
   - Validation and submission failures
   - Assisted-trial starts
3. Publish the honest Azure VM Manager build story.
4. Product metadata, social previews, SoftwareApplication structured data, and sitemap entries have been added for product routes. External metadata/social-preview validation remains open.
5. Use `LAUNCH_QA_MATRIX.md` and `npm run check:links` for responsive, browser, accessibility, privacy, security, and performance QA.
6. Verify n8n delivery, notifications, confirmation, and failure handling.

### Exit criteria

- The complete demo funnel works in production.
- Conversion events are visible in an owned dashboard.
- Product pages are indexable and share correctly.
- Launch QA has documented evidence.

## 8. Phase 4 — Post-Launch Operations

1. Review funnel performance weekly.
2. Prioritize the largest measured drop-off.
3. Add real customer evidence as consented results become available.
4. Keep the blog current or remove “Latest” positioning.
5. Consider a redesign only when conversion or usability evidence identifies a problem that the current design cannot solve.

## 9. Remaining Website Decisions

- Exact product feature list and current limitations beyond the current public workflow
- Current screenshot source and sanitization process
- Support hours, severity definitions, and response targets
- Product uptime target and maintenance policy
- Analytics provider, consent behavior, and retention
- Legal reviewer and approval process
- Exact Azure RBAC roles, scopes, and least-privilege evidence
- Retry, timeout, duplicate-detection, dead-letter, poison-message, and cancellation policies
- Exact hybrid-pricing tiers and commercial terms, even though dollar amounts will not be public
- Named owners for Web, Product, Content, Design, DevOps/Security, Business, and Legal

## 10. Launch Gate

Do not launch until:

- [ ] Phase 0 credibility defects are closed.
- [ ] Product page and current product demonstration are live.
- [ ] Demo request and n8n delivery work end to end.
- [ ] Assisted-trial qualification and onboarding are documented.
- [ ] Security and Trust content is technically verified.
- [ ] Product support commitments are approved.
- [ ] Software terms and privacy disclosures receive legal approval.
- [ ] Company identity and contact content are updated.
- [ ] Analytics and consent behavior are verified.
- [ ] Link, mobile, browser, accessibility, privacy, security, and performance checks pass.
- [ ] Product, Business, DevOps/Security, Content, and Legal record launch approval.
