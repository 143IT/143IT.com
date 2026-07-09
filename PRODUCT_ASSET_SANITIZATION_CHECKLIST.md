# Azure VM Manager Product Asset Sanitization Checklist

**Status:** Ready for product screenshots  
**Updated:** July 9, 2026  
**Scope:** Screenshots, short clips, diagrams, and product UI assets published on 143IT.com

## Capture Standards

- Use current Fluent UI screens from the real product, not mockups, unless explicitly labeled as a mockup.
- Capture at consistent dimensions:
  - Desktop: 1440 × 900 preferred
  - Detail/crop: 1200 × 675 preferred
  - Mobile, if needed: 390 × 844 preferred
- Use a dedicated demo tenant or synthetic dataset.
- Use consistent browser chrome: either all hidden or all visible.
- Avoid browser extensions, personal bookmarks, local paths, and developer-only debug panels.

## Required Redactions

Before publishing, remove or replace:

- Tenant IDs
- Subscription IDs
- Resource group names tied to real customers
- VM names tied to real customers or employees
- User names, email addresses, and avatars
- Public IP addresses, private IP addresses, DNS names, and hostnames
- Cost data unless approved for publication
- Error messages that reveal implementation details
- API URLs, tokens, secrets, keys, connection strings, and webhook URLs
- Customer names, logos, tickets, notes, and internal comments

## Approved Demo Data Pattern

Use clearly fictional data such as:

- Company: `Contoso Demo Environment`
- Subscription: `Demo Subscription`
- Resource group: `rg-demo-operations`
- VM names: `vm-demo-app-01`, `vm-demo-db-01`
- User: `Demo Operator`
- Email: `operator@example.com`

## File Naming

Use lowercase, descriptive names:

- `azure-vm-manager-request-workflow.png`
- `azure-vm-manager-operation-status.png`
- `azure-vm-manager-audit-history.png`

Avoid dates in filenames unless the same screenshot will be versioned over time.

## Accessibility Requirements

Every published image needs meaningful alt text:

- Good: `Azure VM Manager request workflow showing demo virtual machines selected for a scheduled operation.`
- Bad: `Screenshot`

Decorative images should use empty alt text only when the surrounding content already communicates the same information.

## Approval Checklist

- [ ] Product owner confirms the screen reflects current functionality.
- [ ] Technical reviewer confirms no unsupported claim is implied.
- [ ] Security reviewer confirms no sensitive data is visible.
- [ ] Content reviewer confirms alt text is meaningful.
- [ ] Image is optimized before commit.
- [ ] Image is referenced from the product page with accurate surrounding copy.

