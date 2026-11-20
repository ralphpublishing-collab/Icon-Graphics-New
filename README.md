# ICON GRAPHICS

A founder-led creative, media and digital solutions website for ICON GRAPHICS. Built with React 19, TypeScript, TanStack Start, Vite and the Cloudflare Vite plugin, and served on Cloudflare Workers. It includes nine service areas, genuine client case studies, individual project pages, founder and business pages, enquiries, FAQs, policies and a custom 404.

## Local development

Use Node 24 and npm. Install dependencies with `npm install`, then run `npm run dev` for local development. Validate with `npm run typecheck` and `npm run build`. Production deployment is managed through Wrangler and Cloudflare Workers. Before running `npm run deploy`, verify the Worker name in `wrangler.jsonc`: the connected production hostnames currently belong to the existing `icon-graphics-new` Worker, while the repository config currently names `icon-graphics-studio`. Do not deploy until that target is intentionally reconciled. Do not add a wildcard SPA rewrite; TanStack Start handles routes and the public pages are prerendered for crawler access.

## Content updates

`src/data/site.ts` is the central content source. It contains the nine official services, portfolio records, authorised client testimonials, FAQs, social URLs and WhatsApp catalogue setting. The five current client case studies use supplied project media; keep concept-preview labels on service categories that do not yet have real work.

Put portfolio media into `public/portfolio/`. Each project has a unique `id` (the detail URL slug), `title`, `category` (an official service id), `description`, `concept` and a fallback `art` design. Optional `image`, `video` and `audio` fields accept site-relative paths such as `/portfolio/my-project.webp` or `/portfolio/my-video.mp4`. Set `concept: false` only for genuine work. Supply an image as the video poster. An optional `captions` field points to a WebVTT file for English video captions. Use web-optimised images and compressed MP4 video; include captions within video files when needed. The project list and detail pages render directly from these records. Add the resulting detail URL to `public/sitemap.xml` when publishing a project.

Add only authorised, genuine feedback to `testimonials`, using `name`, `quote` and optional `role`. Until then, the site shows an honest empty state. Set `catalogueUrl` to the real WhatsApp Business Catalogue URL when supplied; `null` shows a clear coming-soon notice without a dead button.

Original uploaded artwork and founder photographs are preserved in `public/img/`. Local case-study media is served from `public/portfolio/`; external illustrative images use their direct source URLs. Do not introduce an image proxy or replace genuine client work with unrelated stock imagery.

## Enquiries

The Contact and Request a Quote pages share the `project-enquiry` form and post multipart data directly to the Cloudflare Worker API at `https://forms-api.icongraphics.com.ng/`. The form includes a honeypot, required privacy consent, file-type and 5 MB attachment checks, a timeout and explicit response-status handling. It reports success only after the API accepts the submission; network failures preserve the entered information. Email notifications are enabled on the forms API. Do not replace real submissions with simulated success or submit test enquiries without the owner's instruction.

## Publication notes

The production hostnames `icongraphics.com.ng` and `www.icongraphics.com.ng` are connected to the existing Cloudflare Worker. The forms API and creative-studio API are separate Cloudflare Workers. Canonical URLs and the XML sitemap target the custom domain; `robots.txt` allows general crawling. The public routes are prerendered at build time, and server-rendered responses receive security headers through TanStack Start middleware. Do not change DNS, Worker domains or service bindings as part of content updates.

No paid third-party integrations, app database or user authentication are required. Font files load from Google Fonts with local sans-serif fallbacks. All project and service WhatsApp messages use the official number.

Builds, development servers and test commands were not run during generation; the platform performs build validation automatically.

## Website upgrade

The current visual system uses charcoal, white and restrained cyan drawn from the original multicoloured logo. The supplied reference logo and portrait are preserved in `public/img/` and displayed without identity changes. Quotation-based Pricing, editorial Insights with category filters and guide pages, richer case studies, eight process stages and additional policy pages extend the existing site.

See [the owner guide](docs/OWNER-GUIDE.md) for exact domain connection steps, portfolio and package editing, form notifications, reference attachments, policy confirmation and consent-aware analytics integration. Forms now submit multipart data and retain the same static registration endpoint and error checks. No automatic customer email acknowledgement or analytics provider is enabled.
