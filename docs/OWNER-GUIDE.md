# ICON GRAPHICS owner guide

## Connect the purchased domain

No DNS settings were changed and connection or HTTPS has not been verified by this upgrade. The current Netlify subdomain remains available.

1. Open the **icon-graphics-website** project in Netlify, then **Domain management → Production domains → Add a domain**. Enter `icongraphics.com.ng`, confirm ownership if prompted, and add it.
2. Set `icongraphics.com.ng` as the primary domain. Ensure `www.icongraphics.com.ng` is included as a domain alias. Keep `icon-graphics-website.netlify.app` available.
3. Open the domain's **Pending DNS verification / DNS configuration** instructions. Copy the exact DNS targets shown for this project. Do not copy example IP addresses from unrelated guides.
4. If using Netlify DNS, choose the Netlify DNS setup flow and copy the assigned nameservers. At your domain registrar, enter those exact nameservers. Before changing nameservers, preserve existing email, MX, TXT and other required records in the new DNS zone. Alternatively, keep your existing DNS provider and apply only the apex and www records specified by Netlify's external DNS instructions. Use one method deliberately.
5. Return to Netlify, verify DNS, then check **HTTPS → Verify DNS configuration** and provision the certificate when available. Wait for DNS propagation and certificate issuance.
6. Verify `https://icongraphics.com.ng`, a nested page, and `https://www.icongraphics.com.ng`. The www address should redirect to the apex with its path preserved. A hostname-specific 301 is already prepared in the site's configuration, but it only works once the hostname reaches Netlify and HTTPS is available.
7. Confirm links, raster images and a real enquiry on the connected domain. Canonicals, structured data, social preview URLs, robots and sitemap already target the preferred domain.

Do not remove existing business email DNS records or the Netlify subdomain during setup.

## Portfolio, pricing and catalogue

Edit `src/data/site.ts`. Each project supports `objectives`, `direction`, `execution`, `deliverables` and a `label`, alongside its media fields. Put approved media under `public/portfolio/`. Keep concept labels until genuine work replaces a demonstration. Use `concept: false` only for real projects. Keep one preview per official category and update `public/sitemap.xml` when publishing new URLs.

Quotation packages are in `packages`, with individual service prices in `packagePrices`. Each price is null by default, displaying **Contact for a Quote**. Replace it only with an approved price and currency, and update the associated scope and note. These are repository-managed content fields, not a browser administration panel.

Set `catalogueUrl` to the actual shared WhatsApp Business catalogue URL when supplied. Until then the catalogue access point explains that the link is pending. Linking a catalogue opens WhatsApp; it does not import its items into the website portfolio.

## Insights and feedback

`src/data/insights.ts` contains website editorial guides and category names. Use real dates and reading-time estimates for new entries. Do not attribute guides to Rapheal unless he writes or approves them. Existing guides do not claim founder authorship. Category filters show an honest empty state where no article is published. Add each published guide to the sitemap.

Only add genuine, authorised feedback to `testimonials` in `src/data/site.ts`.

## Enquiries and acknowledgements

Contact and Request a Quote share the real Netlify `project-enquiry` form. Submissions go to the static registration path and include all fields registered in `public/__forms.html`. References support one PDF, JPEG, PNG or WebP file up to 5 MB; overall request size must remain within Netlify's 8 MB limit. Optional detailed briefs use the same form. Never request passwords or sensitive documents through it.

After deployment, confirm the registered fields in **Forms → project-enquiry**. Configure **Submission notifications → Add notification → Email notification** with the intended business recipient. This sends owner notifications; it is not an automatic reply to the enquirer. An automatic customer email acknowledgement is not configured. That requires an approved mail-delivery integration, sender verification and delivery/error handling; do not treat the on-screen confirmation as an email receipt.

Verify a genuine submission through the deployed site, check Forms and its Spam tab, check attachment access, and confirm notification delivery. No live submission was sent during this upgrade.

## Search and analytics

Once the custom domain is connected, add a Google Search Console Domain property for `icongraphics.com.ng`. Copy Google's exact verification TXT record to the active DNS provider and verify it. Submit `https://icongraphics.com.ng/sitemap.xml`. A URL-prefix property can alternatively use Google's supplied HTML verification file in `public/`; do not invent a verification code.

`src/lib/analytics.ts` provides the `icon:analytics` browser event with a `detail` object containing `name` and optional `properties`. The site emits `enquiry_submitted` only after accepted submissions, plus `whatsapp_clicked`, `email_clicked`, `catalogue_clicked` when configured and `portfolio_opened`. No enquiry text, contact details or reference URLs are included. No analytics service, IDs, cookies, network collection or event persistence is enabled.

To connect a provider, first decide the consent requirements and publish the corresponding privacy information. Load the provider with its real account identifier only when permitted, subscribe to `icon:analytics` after consent, and forward the allowed event fields. Do not replay actions collected before consent. Map `enquiry_submitted` to a conversion event, then verify events with the provider's debug tools. No Google Analytics or Search Console account is configured by this upgrade.

## Policy review and validation

Review Privacy, Terms & Conditions, Refund & Cancellation, and Project Delivery pages against actual business practices. Standard payment percentages, refund entitlements, deadlines, revision limits, usage-rights transfers and retention periods remain unasserted until confirmed.

Platform build validation is still required, including automatic TanStack route generation for the new pages. Local builds, runtime tests and development servers were not run under this session's validation rules. After deployment, review mobile and desktop layouts, keyboard navigation, all new URLs, image delivery and real form processing. This guide does not claim those live checks have passed.
