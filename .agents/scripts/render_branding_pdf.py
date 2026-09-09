from pathlib import Path

import pymupdf


SOURCE = Path("attached_assets/Thomas_Dental_Front_Card_1788930295513.pdf")
OUTPUT_DIR = Path(".agents/outputs/thomas-dental-branding")

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

document = pymupdf.open(SOURCE)
print(f"pages={document.page_count}")

for index, page in enumerate(document):
    output = OUTPUT_DIR / f"page-{index + 1}.png"
    pixmap = page.get_pixmap(matrix=pymupdf.Matrix(3, 3), alpha=False)
    pixmap.save(output)
    print(
        f"page={index + 1} size={page.rect.width:.1f}x{page.rect.height:.1f} "
        f"render={pixmap.width}x{pixmap.height} output={output}"
    )

page = document[0]
logo_clip = pymupdf.Rect(235, 55, 1332, 805)
logo_pixmap = page.get_pixmap(
    matrix=pymupdf.Matrix(2, 2),
    clip=logo_clip,
    alpha=False,
)
logo_output = Path("artifacts/thomas-dental/public/thomas-dental-brand-card.png")
logo_pixmap.save(logo_output)
print(f"logo={logo_pixmap.width}x{logo_pixmap.height} output={logo_output}")