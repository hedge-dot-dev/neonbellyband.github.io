"""
Generates a standalone page for every blog post, so each post has its own
URL and its own Facebook/Twitter/iMessage preview (title, description, image).

blog.html is the single source of truth. Each post there is an
<article class="blog-post" id="SLUG" ...> with three data attributes:

    data-date="YYYY-MM-DD"            publish date
    data-description="..."            1-2 sentence preview text
    data-og-image="images/og/SLUG.jpg" 1200x630 preview image
                                       (see tools/make_og_images.py)

Run from the repo root after adding or editing a post:

    python tools/build_posts.py

It writes blog/SLUG/index.html (served as /blog/SLUG/). The header, hero and
footer are copied from blog.html, and the CSS/JS cache-bust versions are read
from it, so the pages never drift from the rest of the site. Do not edit the
generated pages by hand; edit blog.html and re-run.
"""
import html
import json
import os
import re

SITE = "https://neonbellyband.com"
PREFIX = "../../"

with open("blog.html", encoding="utf-8") as f:
    src = f.read().replace("\r\n", "\n")


def grab(pattern, label):
    m = re.search(pattern, src, re.S)
    if not m:
        raise SystemExit("blog.html: could not find " + label)
    return m.group(0)


def rebase(fragment):
    """Point site-relative URLs at the site root from /blog/SLUG/."""
    def fix(m):
        attr, quote, url = m.group(1), m.group(2), m.group(3)
        if re.match(r"(https?:|//|#|mailto:|tel:|data:|/|\.\./)", url):
            return m.group(0)
        return '%s=%s%s%s%s' % (attr, quote, PREFIX, url, quote)
    return re.sub(r'\b(src|href|data-full-src)=(["\'])(.*?)\2', fix, fragment)


gtag = grab(r"<!-- Google tag \(gtag\.js\) -->.*?</script>\s*<script>.*?</script>", "gtag snippet")
css_v = re.search(r"css/style\.css\?v=(\d+)", src).group(1)
js_v = re.search(r"js/script\.js\?v=(\d+)", src).group(1)
fonts_link = grab(r'<link rel="stylesheet" href="css/fonts\.css[^"]*">', "fonts link")
icons = re.findall(r'<link rel="(?:icon|apple-touch-icon)"[^>]*>', src)
header = grab(r'<header class="site-header">.*?</header>', "header")
hero = grab(r'<div class="hero home-hero">.*?</div>\s*</div>', "hero")
footer = grab(r"<footer>.*?</footer>", "footer")
year_script = grab(r'<script>document\.getElementById\("year"\).*?</script>', "year script")

articles = re.findall(r'<article class="blog-post".*?</article>', src, re.S)
if not articles:
    raise SystemExit("blog.html: no posts found")

for art in articles:
    slug = re.search(r'id="([^"]+)"', art).group(1)
    date = re.search(r'data-date="([^"]+)"', art).group(1)
    desc = html.unescape(re.search(r'data-description="([^"]*)"', art).group(1))
    og_rel = re.search(r'data-og-image="([^"]+)"', art).group(1)
    title = html.unescape(re.sub(r"<[^>]+>", "", re.search(r"<h2>(.*?)</h2>", art, re.S).group(1))).strip()
    if not os.path.exists(og_rel):
        raise SystemExit("missing preview image: " + og_rel)

    url = "%s/blog/%s/" % (SITE, slug)
    og_img = "%s/%s" % (SITE, og_rel)
    full_title = "%s | Neon Belly" % title
    q = lambda s: html.escape(s, quote=True)

    body = re.sub(r"<h2><a [^>]*>(.*?)</a></h2>", r"<h2>\1</h2>", art, count=1, flags=re.S)
    body = re.sub(r'<article class="blog-post"[^>]*>', '<article class="blog-post" id="%s">' % slug, body, count=1)
    body = rebase(body)

    ld = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": desc,
        "image": og_img,
        "datePublished": date,
        "mainEntityOfPage": url,
        "author": {"@type": "Organization", "name": "Neon Belly"},
        "publisher": {"@type": "Organization", "name": "Neon Belly"},
    }

    page = """<!DOCTYPE html>
<html lang="en">
<head>
{gtag}
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Neon Belly">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{og_img}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{img_alt}">
<meta property="article:published_time" content="{date}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{og_img}">
{icons}
{fonts}
<link rel="stylesheet" href="{p}css/style.css?v={css_v}">
<script type="application/ld+json">{ld}</script>
</head>
<body class="home-page">

{header}

{hero}

<div class="page-wrap">
  <section class="block-section" style="border-bottom:none;">

    <p class="post-back"><a href="{p}blog.html">&laquo; All posts</a></p>

    {body}

  </section>
</div>

{footer}

<script src="{p}js/script.js?v={js_v}"></script>
{year_script}
</body>
</html>
""".format(
        gtag=gtag,
        title=q(full_title),
        desc=q(desc),
        url=url,
        og_img=og_img,
        img_alt=q("Neon Belly: " + title),
        date=date,
        icons="\n".join(rebase(i) for i in icons),
        fonts=rebase(fonts_link),
        p=PREFIX,
        css_v=css_v,
        js_v=js_v,
        ld=json.dumps(ld, ensure_ascii=False),
        header=rebase(header),
        hero=rebase(hero),
        body=body,
        footer=rebase(footer),
        year_script=year_script,
    )

    out_dir = os.path.join("blog", slug)
    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, "index.html"), "w", encoding="utf-8", newline="\n") as f:
        f.write(page)
    print("wrote blog/%s/index.html" % slug)
