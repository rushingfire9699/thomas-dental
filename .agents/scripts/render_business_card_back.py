from pathlib import Path

import pymupdf


source = Path("attached_assets/Thomas_Dental_Back_Card_1788930976244.pdf")
output_dir = Path(".agents/outputs/thomas-dental-branding")
output_dir.mkdir(parents=True, exist_ok=True)

document = pymupdf.open(source)
print(f"pages={document.page_count}")

for index, page in enumerate(document):
    output = output_dir / f"back-page-{index + 1}.png"
    pixmap = page.get_pixmap(matrix=pymupdf.Matrix(3, 3), alpha=False)
    pixmap.save(output)
    print(
        f"page={index + 1} size={page.rect.width:.1f}x{page.rect.height:.1f} "
        f"render={pixmap.width}x{pixmap.height} output={output}"
    )