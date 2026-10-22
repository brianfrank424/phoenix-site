# Phoenix Property Partners website

Astro site deployed to Cloudflare Workers. Same setup as stratapillar-site.

## Run it locally

In PowerShell, in `C:\Users\thebr\Documents\GitHub\phoenix-site`:

```
npm install
npm run dev
```

Then open http://localhost:4321

## Where content lives

- `src/data/site.ts`: phone, email, service area and towns
- `src/data/services.ts`: the four services and their pages
- `src/data/gallery.ts`: photos on the home page, Our Work page and service pages
- `src/data/faqs.ts`: FAQ questions and answers
- `public/images/`: photos (webp, about 1000px wide)
- `public/_redirects`: old WordPress URLs pointing to the new pages

## Estimate form

`src/pages/api/contact.ts` checks Cloudflare Turnstile and sends the request to info@phxpropertypartners.com through Resend.

Worker settings needed in Cloudflare:

- Secret `TURNSTILE_SECRET_KEY`
- Secret `RESEND_API_KEY`
- Build variable `PUBLIC_TURNSTILE_SITE_KEY`

For local testing, copy `.dev.vars.example` to `.dev.vars`.
