# World Himachali — Version 1

A nature-inspired NGO website built with standard Next.js, React, TypeScript and Tailwind CSS.

## Deploy on Vercel

Import `quickwebworks/world-himachali-v1` and deploy the `main` branch.

- Framework preset: **Next.js**
- Root directory: repository root (`./`)
- Node.js: **22.x**
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm run build`
- Output directory: leave the override disabled (Next.js default)
- Environment variables: none required for this design

`vercel.json` supplies the framework, install command and build command. `pnpm run build` runs `next build --webpack`, producing standard `.next` output for Vercel. This repository does not require Vinext, Vite, Wrangler, Cloudflare bindings or a Sites hosting manifest.

If an earlier deployment failed, deploy the latest commit on `main`. For a manual redeploy, disable reuse of the previous build cache.

## Local development

Use Node.js 22 and pnpm 11.25.0.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

```sh
pnpm run build
pnpm start
```

## Source

- `components/Website.tsx`: site UI and interactions
- `app/globals.css`: responsive styling
- `app/[slug]/page.tsx`: inner page routing
- `lib/data.ts` and `lib/stories.json`: curated website content
- `public/images`: photographs and logo

Membership links to WHO's official registration website. Contact prepares an email in the visitor's email app. No membership database or payment processor is included.
