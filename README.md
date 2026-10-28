# Digital Quality Solution — Static Website

A responsive, single-page company website for an early-stage AI-powered software QA initiative. Built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Before publishing

Search and replace every occurrence of `YOUR-DOMAIN.com` with your real domain, without `https://` in the replacement text. For example, if your domain is `example.com`, replace `YOUR-DOMAIN.com` with `example.com`.

Also replace `hello@YOUR-DOMAIN.com` in `index.html` with your real company email address.

Review the copy and remove or revise any statement that does not accurately describe your current work. The workflow card is explicitly an illustration, not a live product demo.

## Files

- `index.html` — page content, metadata, structured data
- `assets/styles.css` — responsive design
- `assets/script.js` — mobile navigation and current year
- `assets/favicon.svg` — browser icon
- `assets/og-image.svg` — social sharing image
- `robots.txt` and `sitemap.xml` — basic crawler guidance

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `digital-quality-solution-website`.
2. Upload all files and folders from this package to the repository root. Do not upload only the ZIP file.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the Pages deployment to finish. Open the provided `github.io` URL and check the page.
6. Under **Settings → Pages → Custom domain**, enter your real domain and click **Save**.
7. Configure DNS records at PA Việt Nam as described below.
8. After DNS resolves, return to **Settings → Pages** and enable **Enforce HTTPS** when the option becomes available.

## DNS configuration at PA Việt Nam

Use the DNS management page for your domain. Labels in the PA Việt Nam control panel may differ. Keep existing MX records and other email-related records; do not change nameservers unless you intentionally want to move DNS hosting.

For the root/apex domain (for example `example.com`), create these four `A` records:

| Type | Host/Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

For `www.example.com`, create:

| Type | Host/Name | Value |
|---|---|---|
| CNAME | `www` | `YOUR-GITHUB-USERNAME.github.io` |

Replace `YOUR-GITHUB-USERNAME.github.io` with the exact default GitHub Pages hostname for the account or organization that owns the site. Do not add the repository name to the CNAME target.

If DNS already has conflicting A, AAAA, or CNAME records for `@` or `www`, review them before replacing them. Do not delete MX records used by company email. Check GitHub's official documentation before applying DNS changes.

DNS changes can take up to 24 hours to propagate.

## Final pre-launch checklist

- [ ] Replaced all `YOUR-DOMAIN.com` placeholders in `index.html`, `robots.txt`, and `sitemap.xml`
- [ ] Replaced the placeholder company email in `index.html`
- [ ] Confirmed the domain is entered under GitHub Pages settings
- [ ] Checked mobile layout and navigation
- [ ] Checked all links and email contact
- [ ] Confirmed no untrue claims, fabricated customers, metrics, funding, or legal-company details
- [ ] Enabled HTTPS when available

## Official references

- GitHub Pages: https://pages.github.com/
- GitHub custom-domain setup: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- GitHub DNS records: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
