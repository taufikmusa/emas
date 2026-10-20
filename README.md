# emas.taufik.fyi

Website content emas, dibina dengan MkDocs Material. Setiap artikel = satu fail `.md` dalam `docs/`.

## Tambah content baru (dari phone)

1. Buka repo ni dalam GitHub app / browser.
2. `docs/artikel/` > Add file > Create new file, contoh `cara-beli-emas.md`.
3. Letak front matter di atas:
   ```
   ---
   title: Tajuk artikel
   description: Satu ayat ringkas untuk Google.
   ---
   ```
4. Tambah satu baris dalam `nav:` di `mkdocs.yml` supaya artikel muncul dalam menu.
5. Commit. GitHub Actions auto build dan live dalam 1 hingga 2 minit.

Gambar: upload ke `docs/assets/`, rujuk dengan `![alt](../assets/nama.webp)`. Guna `.webp` dan kekalkan kecil.

## Deploy (GitHub Pages + emas.taufik.fyi)

1. Cloudflare DNS: CNAME, Name `emas`, Target `taufikmusa.github.io`, **DNS only** (awan kelabu).
2. Merge ke branch `main`. Workflow `.github/workflows/deploy.yml` akan build.
3. GitHub repo > Settings > Pages > Source: **GitHub Actions**.
4. Settings > Pages > Custom domain: `emas.taufik.fyi` > Save. Tunggu DNS check hijau.
5. Tick **Enforce HTTPS** bila dah available (biasanya 5 hingga 30 minit).

Fail `docs/CNAME` jangan buang, ia kekalkan custom domain setiap deploy.

## Preview di komputer (optional)

```
pip install -r requirements.txt
mkdocs serve
```
