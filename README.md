# World Himachali — Version 1

Editorial nature-inspired NGO website design.

## Technology

React, TypeScript, Tailwind CSS and Next.js App Router conventions. Hosted through the Vinext compatibility adapter and Cloudflare Workers; this uses adapter build scripts rather than stock Next.js deployment.

## Run locally

Use Node 22.13+ and pnpm. Run `pnpm install`, then `pnpm dev`. Run `pnpm build` to build.

## Main files

- `components/Website.tsx`: site UI and interactions
- `app/globals.css`: responsive styles
- `lib/data.ts`: curated website content
- `public/images`: photographs and logo

Membership uses the official WHO registration website. Contact prepares an email in the visitor's email app. No membership database or payment processor is included.
