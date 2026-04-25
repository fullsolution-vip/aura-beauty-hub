# Full Solution Web

A premium beauty and skincare e-commerce platform built with TanStack Start.

## Live Demo

**Live URL:** https://aura-beauty-hub.pages.dev

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment (Cloudflare Pages)

### GitHub Actions (Automatic)

Pushing to `main` or `development` branch triggers automatic deployment.

Required GitHub Secrets:

- `CLOUDFLARE_API_TOKEN` - Cloudflare API token with Pages edit permissions
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare Account ID (found in dashboard URL)

### Local Deployment

1. **Install Wrangler:**

```bash
npm install -g wrangler
```

2. **Authenticate:**

```bash
wrangler login
# Opens browser to authorize
```

3. **Deploy:**

```bash
npm run build
npx wrangler pages deploy dist/client --project-name=aura-beauty-hub
```

### Creating Cloudflare API Token

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click **"Create Token"** → **"Create Custom Token"**
3. Name: "GitHub Deploy"
4. Permissions:
   - **Account** → Account Settings: Read
   - **Cloudflare Pages** → Edit
5. Create token, copy exactly (no extra spaces/newlines)
6. Add to GitHub repo: Settings → Secrets and variables → Actions

## Tech Stack

- TanStack Start
- React 19
- TanStack Router
- Tailwind CSS v4
- Radix UI Components
