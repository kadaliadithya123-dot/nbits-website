from pathlib import Path
import fitz

files = [
    r'C:\Users\ADITHYA\Downloads\Spice+ Part A_Approval Letter_AC3391473.pdf',
    r'C:\Users\ADITHYA\Downloads\SPICE + Part B_Approval Letter_AC3455754.pdf',
    r'C:\Users\ADITHYA\Downloads\INC-34_1-25501107699 AOAv1.pdf',
    r'C:\Users\ADITHYA\Downloads\INC-33_1-25501674709 MOA v1.pdf',
]
out_dir = Path('public/certificates')
out_dir.mkdir(parents=True, exist_ok=True)

for path in files:
    p = Path(path)
    if not p.exists():
        print(f'MISSING {p}')
        continue
    target = out_dir / (p.stem + '.png')
    doc = fitz.open(str(p))
    page = doc.load_page(0)
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    pix.save(str(target))
    doc.close()
    print(f'CREATED {target}')
