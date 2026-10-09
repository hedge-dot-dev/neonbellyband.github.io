# Neon Belly — Website

Static, no-build-step site for the band: a DIY gig-poster / neon-sign look
matching Neon Belly's actual show flyers and Instagram branding. Plain
HTML/CSS/JS — open `index.html` in a browser, no server or tooling required
(though `.claude/launch.json` has a `python -m http.server 8420` config if
you want one for local preview).

## Structure

```
index.html              Home: hero, upcoming shows teaser, band, blog teaser
shows.html                Upcoming shows + Previous Shows poster gallery
blog.html                  Blog — duplicate the .blog-post block for each new post
booking.html                 Booking info + contact
members/
  vocals.html                Lead vocals
  guitar-lead.html             Lead guitar
  guitar-rhythm.html            Rhythm guitar
  bass.html                     Bass
  drums.html                     Drums
css/style.css                    All styling (neon/black + gig-poster theme, fonts via Google Fonts)
js/script.js                      "Last updated" footer stamp
images/shows/                      Show poster flyers — see images/shows/README.md
images/                              Band/member photos — see images/README.md
```

## Real content already wired in

Pulled from the band's Instagram (@neonbelly_band):

- Facebook: https://www.facebook.com/neonbellyTN
- Instagram: https://www.instagram.com/neonbelly_band
- YouTube: https://www.youtube.com/@NEONBELLYBAND
- Booking email: neonbellytn@gmail.com
- Bio: "High-energy 90s/2000s alt-rock, heavy riffs & grunge anthems." — Nashville/Franklin, TN
- Two past-show posters (Kimbro's, The Pond) in `images/shows/`, shown on `shows.html`

## To customize

- **Text**: every `[bracketed placeholder]` is meant to be replaced —
  member names/bios, booking details, blog posts, upcoming show dates.
- **Photos**: band/member photo boxes are dashed-border placeholders. See
  [images/README.md](images/README.md) for filenames and how to swap in `<img>` tags.
- **Past shows**: add a new `.poster-card` block to `shows.html` (copy an
  existing one) each time you play a show, newest first. Drop the flyer
  image in `images/shows/` — see [images/shows/README.md](images/shows/README.md).
  The `.poster-tint-fade` CSS class recolors a black-line/transparent
  flyer to a faded pink-purple tint (used for The Pond poster); drop it
  if a new flyer is already in full color.
- **Blog posts**: `blog.html` holds every post as an `<article class="blog-post">`,
  newest first. Each post also gets its own page at `/blog/<id>/` with its own
  Facebook/Twitter preview. To add one:
  1. Copy a post block in `blog.html`; give it a unique `id` and the
     `data-date`, `data-description` and `data-og-image="images/og/<id>.jpg"`
     attributes, plus the linked `<h2>` and `post-share` row from the others.
  2. Add a row for it in `tools/make_og_images.py` (poster + photo) and run
     `python tools/make_og_images.py` to build the 1200x630 preview image.
  3. Run `python tools/build_posts.py` to (re)generate `blog/<id>/index.html`.
     Never edit those generated pages by hand.
  After publishing, paste the post URL into Facebook's Sharing Debugger
  (developers.facebook.com/tools/debug) and click "Scrape Again" to refresh
  its cached preview.

## Deploying

Plain static files — deploys as-is to GitHub Pages, Netlify, Vercel, or
any static host, no build step needed.
