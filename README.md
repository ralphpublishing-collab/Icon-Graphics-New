# ICON GRAPHICS

A complete founder-led creative, media and digital business website for ICON GRAPHICS. Built with React 19, TypeScript, TanStack Start, Vite and the Netlify adapter. Includes nine service areas, portfolio filters and individual project pages, founder and business pages, enquiries, FAQs, privacy, terms and a custom 404.

## Local development

Use Node 24 and pnpm. Install dependencies with `pnpm install`, then start the Netlify environment with `netlify dev --port 8889`. Netlify proxies the Vite server and provides Image CDN emulation. `pnpm build` is the deployment command; Netlify publishes `dist/client` with server rendering handled by its framework adapter. Do not add a universal SPA redirect, which would interfere with server routes and forms.

## Content updates

`src/data/site.ts` is the central content source. It contains the exact nine official services, portfolio records, genuine testimonial records, FAQs, social URLs and the WhatsApp catalogue setting. Current portfolio items are concept placeholders, never represented as client work. Replace them individually as real projects become available.

Put portfolio media into `public/portfolio/`. Each project has a unique `id` (the detail URL slug), `title`, `category` (an official service id), `description`, `concept` and a fallback `art` design. Optional `image`, `video` and `audio` fields accept site-relative paths such as `/portfolio/my-project.webp` or `/portfolio/my-video.mp4`. Set `concept: false` only for genuine work. Supply an image as the video poster. An optional `captions` field points to a WebVTT file for English video captions. Use web-optimised images and compressed MP4 video; include captions within video files when needed. The project list and detail pages render directly from these records. Add the resulting detail URL to `public/sitemap.xml` when publishing a project.

Add only authorised, genuine feedback to `testimonials`, using `name`, `quote` and optional `role`. Until then, the site shows an honest empty state. Set `catalogueUrl` to the real WhatsApp Business Catalogue URL when supplied; `null` shows a clear coming-soon notice without a dead button.

Original uploaded artwork and both founder photographs are preserved in `public/img/`. The latest supplied traditional-clothing portrait is used for the founder; earlier originals remain available. The original logo also serves as the favicon. Images use Netlify Image CDN; a plain Vite server alone does not emulate that endpoint.

## Enquiries

The Contact and Request a Quote pages share the real `project-enquiry` Netlify Form. Its static registration is `public/__forms.html`. The component posts multipart data to that static path, includes a honeypot and required consent, and reports success only after an accepted response. Network failures retain entered information. A static preview that simply returns the registration page is rejected instead of displaying simulated success. Form processing becomes available on Netlify after deployment; the required feature marker is included. Manage submissions and optionally configure email notifications in the site's Forms dashboard. This project does not configure notification recipients or submit a test enquiry.

## Publication notes

The project is configured for Netlify, with canonical URLs and a sitemap targeting `https://icongraphics.com.ng`. This does not connect the domain. Configure and verify the domain in Netlify separately. Review the clearly marked owner-confirmation items on Privacy Policy and Terms of Service before publication. Payment, refund, revision and retention policies have not been invented. Real work, client reviews and the catalogue URL can be added without rebuilding the page layouts.

No paid third-party integrations, app database or user authentication are required. Font files load from Google Fonts with local sans-serif fallbacks. All project and service WhatsApp messages use the official number.

Builds, development servers and test commands were not run during generation; the platform performs build validation automatically.

## Website upgrade

The current visual system uses charcoal, white and restrained cyan drawn from the original multicoloured logo. The supplied reference logo and portrait are preserved in `public/img/` and displayed without identity changes. Quotation-based Pricing, editorial Insights with category filters and guide pages, richer case studies, eight process stages and additional policy pages extend the existing site.

See [the owner guide](docs/OWNER-GUIDE.md) for exact domain connection steps, portfolio and package editing, form notifications, reference attachments, policy confirmation and consent-aware analytics integration. Forms now submit multipart data and retain the same static registration endpoint and error checks. No automatic customer email acknowledgement or analytics provider is enabled.
