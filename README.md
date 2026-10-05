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

This is not approval to invite families. Before merging/publishing:
- Resolve and review privacy, deletion and club DPA pages, then add their final HTML.
- Hosted site/redirect URLs are set. Custom SMTP and six-digit code templates/OTP delivery still need verification.
- `.well-known/assetlinks.json` now contains the verified local upload certificate for sideloaded APKs. Add the actual Play App Signing certificate before testing Play-installed links
  (plus the upload certificate only if sideloading). Never publish a placeholder.
- Complete physical Android/iPhone web checks and obtain club welfare acceptance.

The private repository holds `docs/myteamos/RELEASE-REVIEW.md`, RELEASE.md and
TRIAL.md. No private source, test records, service-role key or private signing material
belongs here. The compiled app contains only the public Supabase anon key.
