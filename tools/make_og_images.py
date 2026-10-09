"""
Builds the 1200x630 social-preview image for each blog post: the show poster
on the left, a live photo on the right. Facebook, iMessage, etc. use these
via the og:image tag on each post's own page.

Needs Pillow:  pip install pillow
Run from the repo root:  python tools/make_og_images.py
Add a post by adding a row to POSTS (poster and photo are existing site images).
"""
from PIL import Image

W, H = 1200, 630
POSTER_W = 408

POSTS = {
    "the-pond-2026-10-03": ("images/optimized/shows/the-pond-2026-10-03-900.webp",
                            "images/optimized/blog/pond-return-collage-1100.webp"),
    "kimbros-2026-08-08": ("images/optimized/shows/kimbros-2026-08-08-900.webp",
                           "images/optimized/blog/kimbros-live-1100.webp"),
    "the-pond-2026-07-11": ("images/optimized/shows/the-pond-2026-07-11-900.webp",
                            "images/optimized/blog/pond-band-1280.webp"),
}


def cover(img, w, h):
    scale = max(w / img.width, h / img.height)
    img = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    left, top = (img.width - w) // 2, (img.height - h) // 2
    return img.crop((left, top, left + w, top + h))


for slug, (poster, photo) in POSTS.items():
    canvas = Image.new("RGB", (W, H), (8, 8, 10))
    canvas.paste(cover(Image.open(photo).convert("RGB"), W - POSTER_W, H), (POSTER_W, 0))
    canvas.paste(cover(Image.open(poster).convert("RGB"), POSTER_W, H), (0, 0))
    out = "images/og/%s.jpg" % slug
    canvas.save(out, "JPEG", quality=86, optimize=True, progressive=True)
    print(out)
