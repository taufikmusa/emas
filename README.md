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
5. Commit. Cloudflare Pages auto build dan live dalam 1 hingga 2 minit.

Gambar: upload ke `docs/assets/`, rujuk dengan `![alt](../assets/nama.webp)`. Guna `.webp` dan kekalkan kecil.

## Deploy pertama kali (Cloudflare Pages + emas.taufik.fyi)

1. dash.cloudflare.com > Workers & Pages > Create > Pages > Connect to Git.
2. Pilih repo `taufikmusa/emas`, branch `main`.
3. Build settings:
   - Framework preset: None
   - Build command: `pip install -r requirements.txt && mkdocs build`
   - Build output directory: `site`
   - Environment variable: `PYTHON_VERSION` = `3.12`
4. Save and Deploy. Tunggu siap, anda dapat `xxx.pages.dev`.
5. Tab Custom domains > Set up a custom domain > `emas.taufik.fyi`. Sebab `taufik.fyi` dah ada dalam Cloudflare, DNS record (CNAME) ditambah automatik. Confirm.
6. Tunggu SSL aktif (biasanya bawah 5 minit).

## Preview di komputer (optional)

```
pip install -r requirements.txt
mkdocs serve
```
