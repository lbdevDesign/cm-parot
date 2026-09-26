# Tech Debt Audit - cm-parot (pneumologie-lyon.fr)

Generated: 2026-09-26 on branch `fix/favicon-ico` (HEAD `6fcf682`). First run.

**Status (branch `chore/tech-debt-audit`):** RESOLVED: F001, F002, F003, F004, F007, F008, F009, F011, F012, F018, F019, F020, F021, F023 (via F018), F029, F030, F031, F034, F035, F037, F038. Still open: everything else, including F010 (Vercel Web Analytics not disclosed in the legal notice).

Scope: whole repo, about 3.3k lines of hand-written source (Astro, JS data files, CSS). The repo is small, so no subagents were used. Every source file was read in full. A production build (`astro build`) was run and the generated HTML/CSS in `.vercel/output/static/` was inspected to confirm which Tailwind classes actually produce CSS.

Tooling: `npm audit --omit=dev` ran (30 advisories: 2 critical, 20 high). `knip`, `madge`, and `depcheck` are not installed. They were not installed globally, so unused-dependency findings come from manual `grep`. There is no `astro check` or `tsc` script, and there are no tests, lint, or CI.

## Executive summary

1. **The Tailwind v4 migration was never finished, and it causes visible bugs.** v3-only syntax still produces broken or missing CSS. `bg-[--brand-surface]` compiles to the invalid `background-color:--brand-surface`, so the brand cream background never applies. `hover:bg-white hover:bg-opacity-20` now turns the close button solid white on hover, which hides its white X icon. `font-header`, `prose`, `text-s`, `md:text-l`, `m-auto-0`, and `h-content` produce no CSS at all. `tailwind.config.js` is ignored completely (F001-F008).
2. **The legal notice (mentions légales) contradicts the deployment.** It names OVH as the host, but the site runs on Vercel (`@astrojs/vercel`). It also says "no personal data collected", yet every page loads Google Fonts from Google's servers and Vercel Web Analytics is enabled. For a medical practice this is a compliance problem, not just cosmetic (F009-F011).
3. **Practice contact data is duplicated in 6+ places and has already drifted.** The JSON-LD advertises a typo'd email (`secretaria@`) and the Mermoz phone number as the practice's main line. It lists only 2 of the 4 sites. Opening hours disagree between the FAQ and the cabinet cards (F012-F017).
4. **SEO plumbing is broken in several independent ways.** `/contact` is `noindex` with the title "Politique de confidentialité", but it is listed in the sitemap. `robots.txt` is misnamed `robot.txt` and points at the old domain. The robots meta is emitted twice. The JSON-LD logo (`/logo.png`) returns 404, and so do the manifest icons (F018-F023).
5. **Five hand-rolled modal/overlay systems each have their own scroll lock, Escape handler, and history handling.** Every dialog stays in the DOM, focusable and announced to screen readers, while it is invisible. The auto-opening screening popup can overlap other overlays, and closing either one unlocks body scroll for both (F024-F028).
6. **Footer navigation links are dead.** `/#our-offices` and `/#our-team` match no element ids (F029).
7. **About 10 production dependencies are unused.** These are the React, Radix, lucide, cva, clsx, tailwind-merge, typography, and tw-animate packages, plus leftover shadcn tokens in `global.css` (F030-F034).
8. **Performance issues are cheap to fix.** Desktop and mobile hero images are both `eager` + `fetchpriority="high"`, so every visitor downloads both. A 1.1 MB unoptimized JPEG is served raw on `/contact`. 10 KB of unused team data is serialized into the homepage (F035-F038).
9. **The dependency set has 2 critical and 20 high advisories.** Astro itself is on the list. Real exposure is low because the output is static, but upgrades are overdue (F039).
10. **Nothing is type-checked.** Data lives in untyped `.js` files, which forces `any` and casts downstream. No `astro check` script exists, and no build or link check runs on PRs (F040-F042).

Totals: 0 Critical, 10 High, 22 Medium, 20 Low (52 findings).

## Architectural mental model

This is a static Astro 5 brochure site (`output: "static"`, Vercel adapter used only for hosting and Web Analytics) for a multi-site pulmonology practice in Lyon. It has three routes: `src/pages/index.astro` (a one-page home made of section components), `src/pages/contact.astro`, and `src/pages/legal.astro`. All routes share `src/layouts/Layout.astro`, which owns the `<head>` (astro-seo meta, JSON-LD on the home page only), the navbar, and the footer.

Content comes from three sources. Three JS modules in `src/data/` (`team.js`, `cabinets.js`, `partners.js`) import images from `src/assets/` so `astro:assets` can optimize them. Other content is inline constants inside components (the `specialties` array in `Specialties.astro`, the `faq` array in `FAQ.astro`). The rest is hard-coded markup (`legal.astro`, `ContactBubble.astro`, `DepistagePopup.astro`, the JSON-LD in `Layout.astro`). Interactivity is vanilla DOM scripts embedded in each component. Some are bundled `<script>` (TypeScript), and some are `is:inline`/`define:vars` (untyped, not bundled). No framework island is actually used, even though React is installed and registered. Styling is Tailwind v4 through `@tailwindcss/vite` with a `global.css` that is mostly shadcn/ui boilerplate. Brand colors are hard-coded hex values in about 136 places.

**Where this contradicts the repo's own docs:** `README.md` is the unmodified Astro "basics" starter. It describes a `Welcome.astro`/`astro.svg` structure, and those files still exist but are unused. `package.json` calls the project `tender-transit` with a description copied from the README. `tailwind.config.js` suggests Tailwind v3 configuration, but v4 never reads it. Churn over the last 6 months is concentrated in `DepistagePopup.astro` (10 commits), `Layout.astro` (6), and `FAQ.astro`/`cabinets.js`. In other words, the work is almost all content edits, and content edits are what the duplicated-data problem makes error-prone.

## Findings

| ID | Category | File:Line | Severity | Effort | Description | Recommendation |
|----|----------|-----------|----------|--------|-------------|----------------|
| F001 | Consistency rot | src/layouts/Layout.astro:140 | High | S | `bg-[--brand-surface]` is v3 syntax. v4 emits `background-color:--brand-surface` (verified in build output), which is invalid, so the body falls back to `bg-background` (white) from global.css:124. The brand cream background never shows. | Use `bg-(--brand-surface)` or, better, define `--color-brand-surface` in `@theme` and use `bg-brand-surface`. |
| F002 | Consistency rot | src/components/Specialties.astro:80 | Medium | S | Same bug: `to-[--brand-surface]` yields an invalid gradient stop, so the section fades to nothing. | Same fix as F001. |
| F003 | Consistency rot | src/components/ContactBubble.astro:35 | High | S | `hover:bg-white hover:bg-opacity-20`: `bg-opacity-*` was removed in v4 (no CSS generated). On hover the close button becomes solid white behind a white icon, so the icon disappears. | `hover:bg-white/20` (already used correctly in DepistagePopup.astro:55). |
| F004 | Consistency rot | src/components/Specialties.astro:150 | High | S | Same invisible-close-button bug in the specialty side panel. | `hover:bg-white/20`. |
| F005 | Consistency rot | src/components/Specialties.astro:172 | Medium | S | `bg-[#37A4B3] bg-opacity-10` + `text-white`: the author intended a 10% tint, but it renders as solid teal. It only works by accident. If someone "fixes" the opacity, the white text disappears. | Decide on the design: `bg-[#37A4B3]/10 text-[#313181]` or keep solid teal and drop `bg-opacity-10`. |
| F006 | Consistency rot | src/components/Specialties.astro:231 | Low | S | `bg-black bg-opacity-50` on the overlay renders opaque black, then JS applies `opacity-75`. The effective alpha differs from every other overlay (`bg-black/50`). | `bg-black/50`, and drop the `opacity-75` swap at :295. |
| F007 | Consistency rot | tailwind.config.js:1 | Medium | S | v4 ignores this file (no `@config` in global.css). Its `font-header`/`font-text` and `brand-*` colors never exist, so `font-header` at Hero.astro:55 is a no-op. It also calls `require()` in an ESM file (:22). | Delete the file. Move fonts and colors into `@theme { --font-header: ...; --color-brand: #313181; ... }` in global.css. |
| F008 | Consistency rot | src/components/FAQ.astro:94 | Medium | S | `prose prose-sm` generates no CSS (0 `.prose` rules in the build) because `@tailwindcss/typography` is never loaded with `@plugin`. FAQ answers rely on the hand-written `:global` styles at :114-136. | Either add `@plugin "@tailwindcss/typography";` to global.css or remove the classes and the dependency. |
| F009 | Security hygiene / compliance | src/pages/legal.astro:59-70 | High | S | RESOLVED. The legal notice named OVH SAS as host. OVH is only the domain registrar (whois). The site is served by Vercel (DNS points to Vercel IPs, responses carry `server: Vercel`). French LCEN art. 6 requires the hosting provider. | Replaced with Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723 (address from vercel.com/legal/privacy-policy). |
| F010 | Security hygiene / compliance | src/pages/legal.astro:96-98 | High | M | "Ce site ne collecte aucune donnée personnelle": false. Vercel Web Analytics is on (`astro.config.mjs:22`, script `/_vercel/insights/script.js` in the build), and Google Fonts is loaded from Google on every page (F011). | Either remove both third parties or rewrite the section to disclose them. |
| F011 | Performance / compliance | src/styles/global.css:1 | High | S | `@import url('https://fonts.googleapis.com/...')` sends every visitor's IP to Google, which contradicts F010 (see the LG München 2022 ruling on Google Fonts). It is also redundant: the same families are self-hosted in `public/fonts/` and declared in fonts.css. It adds a render-blocking third-party request. | Delete line 1. The self-hosted `@font-face` rules already cover weights 400/500/600/700. |
| F012 | Consistency rot / data | src/layouts/Layout.astro:111 | High | S | The JSON-LD email is `secretaria@centremedicalparot.fr` (typo, missing "t"). This is what Google shows in rich results. | Fix, and source it from a single data module (Top 5 #3). |
| F013 | Consistency rot / data | src/layouts/Layout.astro:110 | Medium | S | The JSON-LD phone `+33478775143` is the Mermoz line (cabinets.js:47). The legal page (:159) and the Duquesne head office use 04 78 94 24 74. | Choose the main line deliberately (Open questions). |
| F014 | Consistency rot / data | src/layouts/Layout.astro:118-133 | Medium | S | JSON-LD lists 2 addresses. The practice has 4 (cabinets.js, FAQ.astro:10-13). | Generate `address` from `cabinets`. |
| F015 | Consistency rot / data | src/data/cabinets.js:19 | Medium | S | Every cabinet says "Lun - Ven: 8h - 18h". FAQ.astro:22-26 says 8h-12h / 14h-17h30 (17h00 Wed/Fri). One of them is wrong. | Store hours once. Render both the FAQ answer and the card from it. |
| F016 | Architectural decay | src/components/ContactForm.astro:5-14 | Low | S | Fallback phone/email defaults are duplicated 3 times (:11-12, :83/86, :114/117). They are dead code because every cabinet has both fields, and the email fallback contains the same `secretaria@` typo. | Delete the fallbacks, and validate the data shape once (F040). |
| F017 | Consistency rot / data | src/pages/legal.astro:35-43 | Low | M | The practitioner list is duplicated from team.js, so adding a doctor requires two edits. The RPPS numbers exist only here. | Add `rpps` to team.js and map over it. |
| F018 | Documentation / SEO | src/pages/contact.astro:5-10 | High | S | The contact page title is "Politique de confidentialité", its description is about privacy, and it has `noindex={true}`. This is a copy-paste from the deleted privacy page (commit df6a474). The page most useful to patients is hidden from search. | Real title/description, and remove `noindex`. |
| F019 | Documentation / SEO | public/robot.txt:1 | High | S | The filename must be `robots.txt`, so crawlers get a 404. The file also points to `https://centremedicalparot.fr/sitemap.xml`, the old domain (the site moved to pneumologie-lyon.fr in d757ea4). `Disallow: /api/` refers to routes that do not exist. | Rename to `robots.txt`, fix the domain, drop `/api/`. |
| F020 | Documentation / SEO | src/layouts/Layout.astro:83 | Medium | S | A manual `robots` meta duplicates the one astro-seo already emits, so there are two `<meta name="robots">` tags (verified in build output). | Delete line 83. astro-seo handles it through `noindex`/`nofollow`. |
| F021 | Documentation / SEO | src/layouts/Layout.astro:107 | Medium | S | JSON-LD `logo: /logo.png`: no such file exists in `public/`. | Point to an existing asset (e.g. `/apple-touch-icon.png`), or add a 512px `logo.png`. |
| F022 | Documentation / SEO | public/site.webmanifest:5-13 | Low | S | References `android-chrome-192x192.png` and `-512x512.png`, which do not exist. | Generate them or point at existing icons. |
| F023 | Documentation / SEO | public/sitemap.xml:9 | Medium | S | The sitemap includes `/contact`, which is `noindex` (conflicting signals). `lastmod` is hand-maintained and stale (2026-04-24). | Fix F018. Consider `@astrojs/sitemap` to stop hand-editing. |
| F024 | Architectural decay | src/components/ContactBubble.astro:90-124 | Medium | M | Modal open/close/scroll-lock/Escape logic is copy-pasted across ContactBubble, DepistagePopup.astro:153-237, OurTeam.astro:203-273, Specialties.astro:236-346, and NavbarHome.astro:151-311. That makes 17 `keydown`/`popstate`/`body.style.overflow` sites. | Use native `<dialog>` + `showModal()`. That gives focus trapping, Escape, inertness, and a top layer for free. Extract one small `openDialog/closeDialog` helper. |
| F025 | Error handling / a11y | src/components/DepistagePopup.astro:33-40 | High | M | All dialogs (this one, ContactBubble:18, Specialties:136, 9 doctor modals at OurTeam:128) are hidden only with `opacity-0 pointer-events-none` or `translate-x-full`. Their links and buttons stay in the tab order, and screen readers announce `role="dialog"` content that is invisible. On the home page, keyboard users tab through roughly 40 invisible controls. | Native `<dialog>` (F024), or at minimum toggle `inert` + `aria-hidden` / `hidden` together with the visual state. |
| F026 | Error handling | src/components/DepistagePopup.astro:188-189 | Medium | M | The screening popup auto-opens after 2s. If the user has already opened a specialty panel or doctor modal, two overlays stack. Closing either one sets `body.style.overflow = ""` and unlocks scroll while the other is still open. | A shared scroll-lock counter, or `<dialog>`, which does not need `overflow:hidden`. Skip the auto-open if another dialog is open. |
| F027 | Error handling / a11y | src/components/ContactBubble.astro:18-22 | Medium | S | The urgent-contact modal has no `role="dialog"`, `aria-modal`, or `aria-labelledby` (unlike DepistagePopup). Focus is not moved into it or restored afterward. | Covered by F024. Otherwise add the attributes and focus management. |
| F028 | Error handling | src/components/NavbarHome.astro:263-268 | Low | S | Opening the mobile menu pushes a history entry (:236). Closing it through a link click does not pop that entry, so a dangling entry accumulates and Back needs an extra press. | Call `history.back()` when `history.state?.menuOpen` in the link handler too, or drop the pushState. |
| F029 | Architectural decay | src/components/Footer.astro:7-8 | High | S | Footer links `/#our-offices` and `/#our-team` point to ids that do not exist (the sections are `#cabinets` and `#equipe`). Two of the four footer nav links are dead. | Use `/#cabinets` and `/#equipe`, and add `/#expertises`. Share one `navLinks` array with NavbarHome. |
| F030 | Dependency debt | package.json:12-25 | Medium | S | Unused runtime deps: `@astrojs/react`, `react`, `react-dom`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-slot`, `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge` (the last two only in dead `src/lib/utils.ts`). `@types/react*` sit in `dependencies`. | `npm rm` them all. Remove `react()` from astro.config.mjs:10. Delete `src/lib/utils.ts`. |
| F031 | Dependency debt | package.json:28-35 | Low | S | `autoprefixer` and `postcss` are unused with `@tailwindcss/vite`. `@tailwindcss/typography` is not wired (F008). `tw-animate-css` is imported (global.css:3) but no `animate-*` class is used, so it only adds CSS bytes. | Remove them. |
| F032 | Architectural decay | src/styles/global.css:5-117 | Medium | S | About 110 lines of shadcn/ui tokens (sidebar, chart, `.dark` palette, `@custom-variant dark`) that nothing uses. `body { @apply bg-background }` at :124 silently overrides the brand surface. `!important` on the font families (:125, :129) makes local overrides impossible. | Replace with a small `@theme` holding the brand colors and fonts. Drop `!important`. |
| F033 | Architectural decay | src/components/Welcome.astro:1 | Low | S | Astro starter component, never imported. The same goes for `src/assets/astro.svg`, `background.svg`, `624409c96c00004d9824fbc4.png`, `icon-mail-*.svg`, `mail-svgrepo-com.svg`, `cliniques/centre*.jpg`, `logo/logoCMP*.svg` variants not referenced, `public/cmParrot_accueil.jpg`, `public/logoCMPdark.svg`, and `public/imgSlot.png`. | Delete. Public-folder files are shipped to production even when unused. |
| F034 | Architectural decay | src/components/OurOffices.astro:7-9 | Medium | S | Imports `../assets/cabinets/cliniqueDuquesne*.jpg`. That directory does not exist. The build only passes because the unused imports are elided. The first person who references them breaks the build. The comment at :9 ("importe toutes tes images") is a leftover instruction. | Delete lines 6-9. |
| F035 | Performance | src/components/Hero.astro:18-41 | Medium | S | Desktop (1920w) and mobile (768w) hero images are both `loading="eager" fetchpriority="high"`, toggled with `hidden md:block`. `display:none` does not stop the download, so every visitor fetches both, and both compete for LCP priority. | One `<Picture>` with `<source media>`, or `getImage()` + `<picture>`. |
| F036 | Performance | src/components/OurOffices.astro:62-84 | Low | S | Same pattern for cabinet images: index 0 desktop + mobile are both eager. 8 `<img>` are rendered for 4 cabinets. | Same `<picture>` approach. |
| F037 | Performance | src/components/ContactForm.astro:24 | Medium | S | `/acceuil-parot.jpg` (1.1 MB, `public/`) is served unoptimized on `/contact`, with no width/height (CLS) and no lazy loading. | Move it to `src/assets/` and use `<Image>` with widths. Also fix the "acceuil" spelling. |
| F038 | Performance | src/components/Specialties.astro:236 | Medium | S | `define:vars={{ specialties, team }}`: `team` is never used in the script, but its full serialization (descriptions plus image metadata, about 10 KB) is inlined into index.html. | `define:vars={{ specialties }}`. Better still, pass only `{id,title,description,specialNote,doctors}`. |
| F039 | Dependency debt | package-lock.json | Medium | M | `npm audit --omit=dev` reports 30 advisories: 2 critical (`astro <=7.2.7` including a `define:vars` XSS, `tar`), 20 high (`vite`, `rollup`, `sharp`, `postcss`, `@astrojs/vercel`, ...). Output is static, so the server-side advisories (x-astro-path, h3, path-to-regexp) do not reach production. The build chain is exposed, though. | `npm audit fix`, then plan the Astro major upgrade. Re-run the build and compare HTML. |
| F040 | Type & contract debt | src/data/team.js:11 | Medium | M | Core content lives in untyped `.js`. This forces `photo: any` (OurTeam.astro:11), `team as TeamMember[]` (OurTeam.astro:17), and `as Record<string,string>` (Specialties.astro:72). A typo in a `specialties` id silently drops a doctor from a specialty. | Convert to `.ts` with exported types, or use Astro content collections (`file()` loader + zod schema) so bad data fails the build. |
| F041 | Type & contract debt | package.json:6-11 | Medium | S | tsconfig is `strict`, but nothing ever runs the type checker: there is no `check` script, and `is:inline`/`define:vars` scripts (NavbarHome:151, Specialties:236, OurOffices:121, ContactForm:125) are not type-checked at all. | Add `"check": "astro check"` and run it in CI (F042). |
| F042 | Test debt | (repo root) | Medium | M | There is no CI, no tests, and no build check on PRs. Every bug in F001-F029 would have been caught by a build + HTML link check. | GitHub Action: `npm ci && npm run check && npm run build`, plus a link checker (e.g. `lychee` on the static output) for anchors and assets. Unit tests are not worth it here. |
| F043 | Consistency rot | src/components/Link.astro:17-24 | Low | S | Five variants are defined, but only `external` is ever used. `default`/`outline`/`underline` use `blue-600`, which is off-brand. The `.btn-gradient` CSS (:39-90) is dead. | Remove unused variants and CSS. |
| F044 | Security hygiene / a11y | src/components/Link.astro:27 | Low | S | `target="_blank"` without `rel="noopener noreferrer"` (Partners.astro:21 does it correctly). The arrow `<img alt="arrow right">` (:35) makes screen readers say "Prendre RDV arrow right" on every link. | Add `rel` when `target === "_blank"`. Use `alt=""` on the decorative arrow. |
| F045 | Error handling / a11y | src/components/OurTeam.astro:50-117 | Medium | M | Each doctor card is a `<button>` that contains an `<a>` (Link at :107). Interactive content inside a button is invalid HTML, and keyboard and screen-reader behavior is undefined. The `closest("a")` hack at :209 only covers mouse clicks. | Make the card a `<div>` with a separate "Voir la présentation" `<button>` next to the RDV link. |
| F046 | Documentation drift | src/components/NavbarHome.astro:53,69,77,117 | Low | S | Logo alt texts are "Upper Waves", "Nav Image", "Nav Image Scrolled", so the home link is announced as "Upper Waves Nav Image...". The burger has a static label and no `aria-expanded`. | `alt=""` on the decorative parts plus `aria-label="Centre Médical Parot - accueil"` on the `<a>`. Toggle `aria-expanded`. |
| F047 | Architectural decay | src/components/NavbarHome.astro:182-197 | Low | S | The "unscrolled" style block is duplicated at :290-307 and the "scrolled" block at :219-232 and :276-289. `isMobile() ? "2rem" : "2rem"` (:193, :303) is a dead ternary with stale "Changé de..." comments. `h-content` (:19) is not a Tailwind class. | Extract `applyScrolled(bool)` and drive it with a single `nav.scrolled` class in CSS instead of inline styles. |
| F048 | Performance | src/components/NavbarHome.astro:272 | Low | S | The scroll listener is not passive and writes 8+ inline styles on every scroll event, even when the state has not changed. | `{ passive: true }` and early-return when `scrolled === wasScrolled`. Or use an `IntersectionObserver` on a sentinel. |
| F049 | Consistency rot | src/components/Hero.astro:50,63 | Low | S | `text-s` and `md:text-l` are not Tailwind classes (no CSS generated). The same applies to `m-auto-0` at Footer.astro:22. Hero.astro:2 re-imports global.css, which Layout already imports. | `text-sm`/`md:text-lg`. Remove the stray class and the duplicate import. |
| F050 | Documentation drift | src/components/OurOffices.astro:103 | Low | S | "Horraire" typo. Hours are rendered from `cabinets[0]` only and are not in the JSON passed to the client (:13-20), so switching cabinet never updates them. The bug is latent today only because all hours are identical. `client:load` on an `.astro` component (index.astro:23) is a no-op. `let activeCabinetIndex` (:23) never changes. | Add `hours` to the JSON and update it on click. Remove `client:load`. Use `const`. |
| F051 | Documentation drift | README.md:1 | Low | S | Unmodified Astro starter README. `package.json:2,37-38` has name `tender-transit`, the README description, and `main: tailwind.config.js`. `index.astro:14` has `descritpion`, and its values duplicate Layout's defaults (Layout.astro:23-25). | A 10-line README: what the site is, where content lives (`src/data/*`), how to deploy. Fix package metadata. |
| F052 | Consistency rot | src/components/OurTeam.astro:22-29 | Low | S | `specialtyNames` duplicates the titles in Specialties.astro:16-65 and has already drifted ("Troubles du sommeil" vs "Troubles respiratoires du sommeil"). The Specialties notes (:63 Polysomnographie list) duplicate `specialtyNotes` in team.js. | Move `specialties` to `src/data/specialties.ts`. Derive labels and doctor notes from it. |

Also noted and not ranked separately: brand hex values are hard-coded 136 times (`#313181` x76, `#37A4B3` x50, `#268090` x10). F007/F032 fix this through `@theme` tokens. `.claude/launch.json` is tracked with absolute `/Users/lb8/...` paths. `localStorage` access in DepistagePopup.astro:178,182 has no try/catch. `ONE_WEEK_MS` is actually 24h (DepistagePopup.astro:155), and the comment at :187 says "5 secondes" while the code uses 2000 ms.

## Top 5: if you fix nothing else, fix these

### 1. Finish the Tailwind v4 migration (F001-F008, F032, F049)

This fixes the visible bugs in a single PR. In `src/styles/global.css`:

```css
/* delete line 1 (Google Fonts) and line 3 (tw-animate-css) */
@import "tailwindcss";
@plugin "@tailwindcss/typography";   /* or drop `prose` from FAQ.astro:94 */

@theme {
  --color-brand: #313181;
  --color-brand-light: #37A4B3;
  --color-brand-teal-dark: #268090;
  --color-brand-dark: #1f2458;
  --color-brand-surface: #FFF8EB;
  --font-header: "Geologica", sans-serif;
  --font-text: "Onest", sans-serif;
}

@layer base {
  body { font-family: var(--font-text); background: var(--color-brand-surface); }
  h1, h2, h3, h4, h5, h6 { font-family: var(--font-header); }
}
/* delete the shadcn @theme inline, :root tokens (keep none), and .dark block */
```

Then:
- `Layout.astro:140` becomes `bg-brand-surface`, and `Specialties.astro:80` becomes `to-brand-surface`
- `hover:bg-white hover:bg-opacity-20` becomes `hover:bg-white/20` (ContactBubble:35, Specialties:150)
- `bg-black bg-opacity-50` becomes `bg-black/50` (Specialties:231)
- `rm tailwind.config.js`
- Afterward, gradually replace `text-[#313181]` with `text-brand` (a sed pass is safe here)

Verify with `grep -c 'bg-opacity\|--brand-surface\]' .vercel/output/static/index.html` (expect 0) after the build.

### 2. Make the legal notice true (F009-F011)

- Delete the Google Fonts `@import` (global.css:1). The self-hosted fonts already work.
- In `legal.astro:59-70`, replace the OVH block with the actual host (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, if Vercel is confirmed).
- In `legal.astro:96-98`, either disable `webAnalytics` in `astro.config.mjs:22` or add a paragraph that discloses Vercel Web Analytics (cookieless, aggregated) and its legal basis. Also mention the `localStorage` key used by the screening popup.

### 3. One source of truth for practice data (F012-F017, F050, F052)

Create `src/data/practice.ts`:

```ts
export const practice = {
  name: "Centre Médical Parot",
  url: "https://pneumologie-lyon.fr",
  email: "secretariat@centremedicalparot.fr",
  phone: "04 78 94 24 74",
  hours: [ { day: "Lundi", slots: "08h00 – 12h00, 14h00 – 17h30" }, /* ... */ ],
} as const;
```

Then:
- Convert `cabinets.js` to `cabinets.ts` with a typed `Cabinet` interface, and drop the unused `logo` field.
- Layout JSON-LD: `email: practice.email`, `telephone: toE164(practice.phone)`, `address: cabinets.map(c => ({ "@type": "PostalAddress", ... }))`.
- The FAQ address and hours answers are generated from `cabinets` / `practice.hours`, not from HTML strings.
- `legal.astro` and `ContactBubble.astro` read from `practice`/`cabinets`.
- Delete the fallbacks in ContactForm.astro:11-12, :83-86, :114-117.

### 4. Replace the five modal implementations with native `<dialog>` (F024-F027, F045)

```astro
<dialog id="contact-modal" class="rounded-2xl max-w-lg w-full p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm" aria-labelledby="contact-modal-title">
  ...
  <form method="dialog"><button aria-label="Fermer">...</button></form>
</dialog>
<script>
  const d = document.getElementById("contact-modal") as HTMLDialogElement;
  document.getElementById("open-contact-modal")?.addEventListener("click", () => d.showModal());
  d.addEventListener("click", (e) => { if (e.target === d) d.close(); });
</script>
```

`showModal()` makes the rest of the page inert, traps focus, handles Escape, restores focus, and uses the top layer. That removes the need for the z-index ladder (100/199/200/250) and all `body.style.overflow` writes. Animate with `@starting-style` or keep the current opacity classes on `[open]`. Apply this to ContactBubble, DepistagePopup, the OurTeam modals, and the Specialties panel (a right-anchored `<dialog>`). In DepistagePopup, guard the auto-open with `if (!document.querySelector("dialog[open]"))`.

### 5. Fix the SEO plumbing and add a build + link check (F018-F023, F029, F041-F042)

- `contact.astro`: `title="Contact et prise de rendez-vous"`, a real description, and remove `noindex`.
- `git mv public/robot.txt public/robots.txt`. Set `Sitemap: https://pneumologie-lyon.fr/sitemap.xml` and remove `Disallow: /api/`.
- Delete Layout.astro:83. Point Layout.astro:107 at an existing logo.
- Footer.astro:7-8: `/#cabinets`, `/#equipe`.
- `package.json`: `"check": "astro check"`, and add `.github/workflows/ci.yml` running `npm ci && npm run check && npm run build && npx lychee --offline .vercel/output/static`. The offline link check would have caught the footer anchors, `/logo.png`, and the manifest icons.

## Quick wins (Low effort, Medium+ severity)

- [ ] F003/F004: `hover:bg-opacity-20` to `hover:bg-white/20` (2 lines)
- [ ] F001/F002: fix `bg-[--brand-surface]` / `to-[--brand-surface]`
- [ ] F011: delete the Google Fonts `@import` in global.css:1
- [ ] F012: fix the `secretaria@` typo in Layout.astro:111
- [ ] F018: fix contact page title/description/`noindex`
- [ ] F019: rename `robot.txt` to `robots.txt` and fix the domain
- [ ] F029: fix the footer anchors
- [ ] F020: delete the duplicate robots meta
- [ ] F021: fix the JSON-LD logo URL
- [ ] F009: correct the host in the legal notice
- [ ] F034: delete the dangling `assets/cabinets` imports
- [ ] F038: drop `team` from `define:vars` in Specialties
- [ ] F035/F037: `<picture>` for the hero; move `acceuil-parot.jpg` to `<Image>`
- [ ] F030/F031: `npm rm` about 12 unused packages
- [ ] F007: delete `tailwind.config.js` after moving tokens to `@theme`
- [ ] F041: add an `astro check` script

## Things that look bad but are actually fine

- **`set:html` in FAQ.astro:94.** This would be an XSS sink with untrusted input, but the strings are literal constants in the same file. It is not a vulnerability. It is still a maintainability issue (content as HTML strings; see Top 5 #3).
- **`define:vars` despite the Astro `define:vars` XSS advisory (F039).** The advisory concerns attacker-controlled values containing `</script>`. All values here are build-time constants written by the author. Upgrade Astro anyway, but no content is exploitable today.
- **2 critical / 20 high npm advisories.** Most (`h3`, `path-to-regexp`, `x-astro-path`, `@vercel/routing-utils`) target server runtimes. With `output: "static"` no server function is deployed, so they cannot reach production. They are rated Medium here, not Critical.
- **The Google Search Console token in Layout.astro:43.** Verification tokens are meant to be public, so it is not a secret.
- **The OurOffices.astro imports of non-existent files (F034).** I first flagged this as "the build must be broken", but the build passes because unused imports are elided. It is a landmine, not an outage, so it is rated Medium.
- **`url("../fonts/...")` in fonts.css pointing at a non-existent `src/fonts/`.** Vite leaves the URL unresolved. Because `inlineStylesheets: "always"` puts the CSS inside the HTML, the relative URL resolves against the page, and every route here is at most one segment deep, so it resolves to `/fonts/...` in `public/`. It works. It would break on a nested route like `/equipe/dr-x`. Consider `/fonts/...` absolute paths for robustness.
- **`inlineStylesheets: "always"` producing 47 KB of inline CSS per page.** This is a deliberate trade to avoid a render-blocking request, and it is reasonable with 3 pages. The shadcn and tw-animate bloat (F031/F032) inflates it, so fixing those shrinks it.
- **`history.pushState` when opening the mobile menu and the specialty panel.** This looks odd, but it deliberately makes the Android back button close the overlay instead of leaving the page. Keep it and fix the one leak (F028).
- **The component name `ContactForm.astro` with no form.** Confusing, but the legal page states that no contact form exists, so the absence is intentional. Only the name is stale, so this is not flagged as debt.
- **The first 4 team photos loading eager (OurTeam.astro:63).** Intentional, and harmless at 112px.
- **No unit tests.** For a 3-page static brochure with no logic beyond DOM toggles, unit tests would be ceremony. The recommended test investment is a build + type check + link check (F042).
- **Dozens of low-signal commits ("feature: website update", "trigger: force Vercel rebuild").** They make history harder to read but carry no code debt. Recent commits are descriptive.

## Open questions for the maintainer

1. **Hosting:** answered. The build runs on Vercel and OVH is the registrar. The live domain is served by Vercel, so the legal notice now names Vercel as host.
2. **Hours:** which is correct, "Lun-Ven 8h-18h" (cabinets.js) or the detailed FAQ schedule? Do they differ per site?
3. **Main phone number for JSON-LD:** Duquesne (04 78 94 24 74) or Mermoz (04 78 77 51 43)?
4. **Rillieux email `sec.pneumo.rilleux@gmail.com` (cabinets.js:61):** is a Gmail address intentional for a medical secretariat? Also note the spelling "rilleux" vs "Rillieux", which is repeated in several asset names.
5. **Screening popup (DepistagePopup):** does the IMPULSION trial have an end date? If so, gate the banner on a date constant so it does not outlive the trial. Is auto-opening once a day for every visitor desired, or should it be once per visitor?
6. **React/Radix/lucide/cva:** was a shadcn/React migration planned, or can these be removed?
7. **`localStorage` for popup frequency capping:** has anyone checked this against CNIL guidance on non-essential storage? It is probably fine as a UX preference, but the legal page currently says nothing about it.
8. **`/contact` `noindex`:** is it intentional (e.g. to avoid duplicating the home page), or a leftover from the privacy page it was copied from?
