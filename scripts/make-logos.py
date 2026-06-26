"""Generate logo PNGs for Domindez Studio.

Outputs:
  - public/logo.png            (512x512)  — Organization schema logo (light theme, square)
  - public/logo-square.png     (512x512)  — Same as above, explicit name
  - public/logo-wide.png       (1200x630) — Wide logo for app banners (already have og-image)
  - public/apple-touch-icon.png (180x180)
  - public/icon-192.png        (192x192)  — PWA manifest
  - public/icon-512.png        (512x512)  — PWA manifest
  - public/favicon-32.png      (32x32)    — Browsers expecting PNG
"""

from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import math

OUT = Path(__file__).resolve().parent.parent / "public"
ACCENT = (195, 255, 0)         # #c3ff00
BG_LIGHT = (245, 245, 240)     # #f5f5f0
BG_DARK = (10, 10, 10)         # #0a0a0a
INK_DARK = (10, 10, 10)
INK_LIGHT = (245, 245, 240)


def _font(size: int) -> ImageFont.FreeTypeFont:
    """Try to find a bold sans font; fall back to default."""
    candidates = [
        r"C:\Windows\Fonts\SegoeUI-Bold.ttf",
        r"C:\Windows\Fonts\arialbd.ttf",
        r"C:\Windows\Fonts\calibrib.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


def _draw_D_letter(draw: ImageDraw.ImageDraw, cx: float, cy: float, size: float, color):
    """Draw a chunky 'D' using rounded rectangles / circles approximation.

    We construct the D from:
      - left vertical bar (rounded rect)
      - top + bottom horizontal bars
      - right rounded cap made from two stacked rounded shapes
    """
    s = size
    w = s * 0.78
    h = s * 0.92
    x0 = cx - w / 2
    y0 = cy - h / 2

    bar_w = s * 0.22  # thickness of the vertical bar
    radius = s * 0.12

    # Left vertical bar
    draw.rounded_rectangle(
        [x0, y0, x0 + bar_w, y0 + h],
        radius=radius * 0.6,
        fill=color,
    )

    # Top horizontal bar
    draw.rounded_rectangle(
        [x0, y0, x0 + w, y0 + bar_w],
        radius=radius * 0.4,
        fill=color,
    )

    # Bottom horizontal bar
    draw.rounded_rectangle(
        [x0, y0 + h - bar_w, x0 + w, y0 + h],
        radius=radius * 0.4,
        fill=color,
    )

    # Right side: a circle covering the right portion
    circle_r = h * 0.46
    circle_cx = x0 + w - bar_w * 0.5
    circle_cy = cy
    draw.ellipse(
        [circle_cx - circle_r, circle_cy - circle_r, circle_cx + circle_r, circle_cy + circle_r],
        fill=color,
    )

    # Punch the inner part of the D with the background color
    inner_padding = bar_w * 0.55
    # Inner cut ellipse
    inner_r = circle_r - inner_padding
    inner_cx = circle_cx
    inner_cy = circle_cy
    # The background color (passed by caller via the bg argument)
    return inner_cx, inner_cy, inner_r, bar_w, h, x0, y0, w


def _cut_inner(img: Image.Image, bg_color, inner_cx, inner_cy, inner_r, bar_w, h, x0, y0, w):
    """Carve out the inside of the D with the bg color so the letter looks hollow."""
    draw = ImageDraw.Draw(img)
    # Vertical bar inner cut
    inner_bar_w = bar_w * 0.45
    draw.rectangle(
        [x0 + inner_bar_w, y0 + bar_w * 0.7, x0 + bar_w + (bar_w - inner_bar_w), y0 + h - bar_w * 0.7],
        fill=bg_color,
    )
    # Inner ellipse
    draw.ellipse(
        [inner_cx - inner_r, inner_cy - inner_r, inner_cx + inner_r, inner_cy + inner_r],
        fill=bg_color,
    )


def _add_accent_dot(img: Image.Image, cx: float, cy: float, size: float, color):
    """Add the small accent dot in the bottom-right of the logo."""
    draw = ImageDraw.Draw(img)
    r = size * 0.07
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color)


def make_logo(size: int, bg_color, ink_color, accent_color=ACCENT, with_dot: bool = True) -> Image.Image:
    img = Image.new("RGB", (size, size), bg_color)
    draw = ImageDraw.Draw(img)

    # Subtle rounded background (already the bg color); keep it clean.
    # Draw the D centered.
    cx = size * 0.42
    cy = size * 0.5
    s = size * 0.78
    inner_cx, inner_cy, inner_r, bar_w, h, x0, y0, w = _draw_D_letter(
        draw, cx, cy, s, ink_color
    )
    _cut_inner(img, bg_color, inner_cx, inner_cy, inner_r, bar_w, h, x0, y0, w)

    if with_dot:
        # Place the dot at the right of the D, slightly down
        dot_cx = x0 + w + size * 0.05
        dot_cy = y0 + h * 0.85
        _add_accent_dot(img, dot_cx, dot_cy, size, accent_color)

    return img


def make_icon_for_pwa(size: int) -> Image.Image:
    """PWA icon: light background with dark D + accent dot, padded."""
    bg = BG_LIGHT
    img = Image.new("RGB", (size, size), bg)
    draw = ImageDraw.Draw(img)
    cx = size * 0.42
    cy = size * 0.5
    s = size * 0.72
    inner_cx, inner_cy, inner_r, bar_w, h, x0, y0, w = _draw_D_letter(
        draw, cx, cy, s, INK_DARK
    )
    _cut_inner(img, bg, inner_cx, inner_cy, inner_r, bar_w, h, x0, y0, w)
    dot_cx = x0 + w + size * 0.05
    dot_cy = y0 + h * 0.85
    _add_accent_dot(img, dot_cx, dot_cy, size, ACCENT)
    return img


def make_wide_logo(width: int = 1200, height: int = 630) -> Image.Image:
    """Wide banner logo (D + wordmark). For schema use the square one; this is for sharing."""
    img = Image.new("RGB", (width, height), BG_DARK)
    draw = ImageDraw.Draw(img)

    # Mark on the left, padded
    mark_size = height * 0.55
    mark_cx = height * 0.5
    mark_cy = height * 0.5
    inner_cx, inner_cy, inner_r, bar_w, h, x0, y0, w = _draw_D_letter(
        draw, mark_cx, mark_cy, mark_size, INK_LIGHT
    )
    _cut_inner(img, BG_DARK, inner_cx, inner_cy, inner_r, bar_w, h, x0, y0, w)
    dot_cx = x0 + w + height * 0.04
    dot_cy = y0 + h * 0.85
    _add_accent_dot(img, dot_cx, dot_cy, height, ACCENT)

    # Wordmark to the right of the D, fully inside the canvas
    text = "Domindez"
    font = _font(int(height * 0.22))
    text_color = INK_LIGHT
    tx = x0 + w + height * 0.15
    ty = mark_cy - height * 0.06
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    if tx + tw > width - height * 0.05:
        scale = (width - height * 0.05 - tx) / tw
        font = _font(max(10, int(font.size * scale)))
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
    draw.text((tx, ty - th / 2 - bbox[1]), text, fill=text_color, font=font)

    # ".studio" suffix in accent color
    small_text = ".studio"
    small_font = _font(int(font.size * 0.55))
    sbbox = draw.textbbox((0, 0), small_text, font=small_font)
    sw = sbbox[2] - sbbox[0]
    sh = sbbox[3] - sbbox[1]
    sx = tx + tw + height * 0.015
    sy = ty + height * 0.04
    draw.text((sx, sy - sbbox[1]), small_text, fill=ACCENT, font=small_font)

    # Tagline below the wordmark
    tagline = "Diseño y desarrollo web a medida"
    tag_font = _font(int(height * 0.045))
    tbbox = draw.textbbox((0, 0), tagline, font=tag_font)
    draw.text(
        (tx, ty + height * 0.18 - tbbox[1]),
        tagline,
        fill=INK_LIGHT,
        font=tag_font,
    )

    return img


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    # Organization logo (square, light theme)
    logo = make_logo(512, BG_LIGHT, INK_DARK, with_dot=True)
    logo.save(OUT / "logo.png", "PNG", optimize=True)
    logo.save(OUT / "logo-square.png", "PNG", optimize=True)
    print("logo.png + logo-square.png (512x512)")

    # Apple touch icon
    apple = make_icon_for_pwa(180)
    apple.save(OUT / "apple-touch-icon.png", "PNG", optimize=True)
    print("apple-touch-icon.png (180x180)")

    # PWA icons
    pwa192 = make_icon_for_pwa(192)
    pwa192.save(OUT / "icon-192.png", "PNG", optimize=True)
    pwa512 = make_icon_for_pwa(512)
    pwa512.save(OUT / "icon-512.png", "PNG", optimize=True)
    print("icon-192.png, icon-512.png")

    # favicon PNG (32x32)
    fav32 = make_icon_for_pwa(32)
    fav32.save(OUT / "favicon-32.png", "PNG", optimize=True)
    print("favicon-32.png (32x32)")

    # Wide banner (for use as an alternative OG image, app banners, etc.)
    wide = make_wide_logo(1200, 630)
    wide.save(OUT / "logo-wide.png", "PNG", optimize=True)
    print("logo-wide.png (1200x630)")


if __name__ == "__main__":
    main()
