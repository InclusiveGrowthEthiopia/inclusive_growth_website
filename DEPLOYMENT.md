# Plesk deployment

This project is configured for a static export. Run `pnpm install --frozen-lockfile` and `pnpm build`; Next.js creates the deployable site in `out/`.

Configure the Plesk Git deployment action to publish the **contents** of `out/` to the domain document root (`httpdocs`), not the repository root. Do not run `pnpm start` for this static Plesk deployment. Confirm that Linux file names retain their original case when files are copied.

After deployment, confirm `https://inclusivegrowth.org.et/robots.txt` and `https://inclusivegrowth.org.et/sitemap.xml` return HTTP 200, then submit the sitemap in Google Search Console.
