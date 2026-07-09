# Environment Variables

Copy the template below to `.env.local` and fill in your actual values.

## Required Variables

### OpenAI Configuration (for AI Chatbot)
```bash
OPENAI_API_KEY=sk-your-openai-api-key-here
```
Get your API key from: https://platform.openai.com/api-keys

### n8n Webhook URLs (for form integrations)
```bash
N8N_CONTACT_WEBHOOK=https://your-n8n-instance.com/webhook/contact
N8N_NEWSLETTER_WEBHOOK=https://your-n8n-instance.com/webhook/newsletter
N8N_PRODUCT_DEMO_WEBHOOK=https://your-n8n-instance.com/webhook/product-demo
```

## Optional Variables

### Analytics
```bash
# Fathom Analytics
NEXT_PUBLIC_FATHOM_SITE_ID=your-site-id

# OR Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=143it.com
```

### Site Configuration
```bash
NEXT_PUBLIC_SITE_URL=https://143it.com
NODE_ENV=production
```

## Complete .env.local Template

```bash
# OpenAI (Required for chatbot)
OPENAI_API_KEY=sk-your-key-here

# n8n Webhooks (Required for forms)
N8N_CONTACT_WEBHOOK=https://your-n8n.com/webhook/contact
N8N_NEWSLETTER_WEBHOOK=https://your-n8n.com/webhook/newsletter
N8N_PRODUCT_DEMO_WEBHOOK=https://your-n8n.com/webhook/product-demo

# Analytics (Optional)
# NEXT_PUBLIC_FATHOM_SITE_ID=your-site-id

# Site Config
NEXT_PUBLIC_SITE_URL=https://143it.com
NODE_ENV=production
```

## Notes

- Never commit `.env.local` to git
- In development mode without the relevant n8n webhook, form submissions are logged to the console
- `N8N_PRODUCT_DEMO_WEBHOOK` is preferred for product demo requests; the API falls back to `N8N_CONTACT_WEBHOOK`
- The chatbot requires OPENAI_API_KEY to function
- Rate limiting is applied to contact form (5 submissions per 15 minutes per IP)
