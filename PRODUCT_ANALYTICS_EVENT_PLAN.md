# Azure VM Manager Analytics Event Plan

**Status:** Provider-neutral implementation plan  
**Updated:** July 9, 2026  
**Scope:** Public website and demo-request funnel only

## Rules

- Do not send names, email addresses, phone numbers, company names, tenant IDs, subscription IDs, VM names, IP addresses, message text, or free-form form content to analytics.
- Use stable, low-cardinality event names and properties.
- Do not enable analytics that sets non-essential cookies until the analytics provider and consent model are approved.
- Treat this document as the implementation contract regardless of whether the selected provider is Plausible, Fathom, Google Analytics, PostHog, Application Insights, or another tool.

## Event Names

| Event | Trigger | Safe properties |
| --- | --- | --- |
| `product_page_view` | Azure VM Manager product route loads | `page_path`, `page_section` |
| `product_security_page_view` | Security & Trust route loads | `page_path` |
| `product_support_page_view` | Product Support route loads | `page_path` |
| `product_workflow_demo_step_view` | Visitor selects a guided workflow step | `step_id`, `step_index` |
| `product_pricing_section_view` | Pricing section enters viewport | `page_path` |
| `product_demo_cta_click` | Visitor clicks a Request Demo CTA | `cta_location`, `destination` |
| `product_demo_form_start` | Visitor focuses or changes the first demo form field | `form_id` |
| `product_demo_validation_error` | Client-side validation blocks submit | `field_key`, `error_type` |
| `product_demo_submit_attempt` | Demo form submit begins | `form_id` |
| `product_demo_submit_success` | `/api/product-demo` returns success | `form_id`, `response_time_bucket` |
| `product_demo_submit_failure` | Submission fails or returns non-success | `form_id`, `error_type`, `status_bucket` |
| `product_demo_rate_limited` | API returns rate-limit response | `form_id`, `status_bucket` |

## Property Allowlist

Allowed values:

- `page_path`: public route path only, for example `/products/azure-vm-manager`
- `page_section`: fixed values such as `hero`, `workflow`, `pricing`, `request_demo`
- `cta_location`: fixed values such as `header`, `hero`, `pricing`, `footer`, `support_page`
- `destination`: public route or hash target only
- `step_id`: fixed workflow demo step key
- `step_index`: zero-based or one-based integer
- `field_key`: fixed field identifier only, such as `email`, `company`, `activeAzureSubscription`
- `error_type`: fixed category, such as `required`, `invalid_email`, `business_email_required`, `network`, `server`
- `status_bucket`: category such as `4xx`, `5xx`, `network`
- `response_time_bucket`: category such as `<500ms`, `500ms-2s`, `>2s`

Disallowed values:

- Raw form values
- Email domain if it can identify a small customer
- Company name
- Phone number
- Message text
- Azure tenant, subscription, resource group, VM, network, or user identifiers
- Full URL query strings

## Implementation Notes

- Add a small analytics wrapper after the provider and consent model are selected.
- Default behavior should be no-op when analytics is disabled.
- Keep events resilient: analytics failures must never block form submission.
- Record provider configuration and dashboard owner in `PRODUCT_LAUNCH_IMPLEMENTATION_CHECKLIST.md` after D-06 is resolved.

