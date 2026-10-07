# wildstudiodev.github.io

Public website for **Wild Studio Apps**: https://wildstudiodev.github.io

Plain HTML/CSS served by GitHub Pages from `main`. **Public repo: never put secrets, app source, or personal data here.** The apps live in private repos.

## Planned pages
| Path | Purpose | Ticket |
|------|---------|--------|
| `/` | Holding page | — |
| `/mycoachos/privacy/` | MyCoachOS privacy policy | MC-9 |
| `/mycoachos/terms/` | Coach terms (incl. platform fee) | MC-9 |
| `/mycoachos/delete-account/` | Account deletion instructions (Google Play requirement) | MC-9 |
| `/myteamos/privacy/` | MyTeamOS privacy policy | MT-11 |
| `/myteamos/delete-account/` | Account deletion instructions | MT-11 |
| `/myteamos/dpa/` | Data processing agreement for clubs | MT-11 |
| `/myteamos/join/<code>` | Parent join link landing | MT-6 |
| `/myteamos/app/` | MyTeamOS web build for parents | MT-13 |

Legal pages are drafted by agents but **published only after owner review**.

## MyTeamOS release preparation (MT-13)

The release PR stages the compiled Flutter web app at `/myteamos/app/`, its
configured parent join landing page and a scoped join-link 404 fallback. `.nojekyll`
keeps Flutter assets available. Debug symbols and local config are excluded.

Andy authorised merging the outstanding site work on 7 October 2026. This publishes the app for review; it is not approval to invite families. Before a parent trial:
- Resolve and review privacy, deletion and club DPA pages, then add their final HTML.
- Hosted site/redirect URLs are set. Custom SMTP and six-digit code templates/OTP delivery still need verification.
- `.well-known/assetlinks.json` now contains the verified local upload certificate for sideloaded APKs. Add the actual Play App Signing certificate before testing Play-installed links
  (plus the upload certificate only if sideloading). Never publish a placeholder.
- Complete physical Android/iPhone web checks and obtain club welfare acceptance.

The private repository holds `docs/myteamos/RELEASE-REVIEW.md`, RELEASE.md and
TRIAL.md. No private source, test records, service-role key or private signing material
belongs here. The compiled app contains only the public Supabase anon key.

## WildApps developer branding

The matching developer icon and banner are versioned under `assets/wildapps/`:
- `wildapps-developer-icon-512-v1.png`: 512 × 512, 32-bit PNG.
- `wildapps-developer-banner-4096x2304-v1.png`: 4096 × 2304, 24-bit PNG, no alpha.

These are the studio identity assets prepared with imagegen, not app launcher icons.
The store account profile has not been changed. The banner export is resampled
from a 1672 × 941 generated master; inspect the store preview before publishing.

The web build was refreshed on 7 October from the merged MT-14 code (private
source commit `2eabbb5`). Its matchday migration must be deployed to the hosted
backend before the matchday feature is used. No test records are included.
