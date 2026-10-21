# emas.taufik.fyi (MkDocs Material, GitHub Pages)

Website content emas oleh Taufik Bin Musa (Dealer Public Gold, PG00359605). Pemilik cakap Malay Malaysia colloquial, istilah teknikal kekal English.

## Alur kerja (arahan tetap daripada Taufik)
- Setiap perubahan: commit ke branch sesi, push, buat PR ke `main`, dan **merge** (guna merge commit, bukan squash, kerana squash buat branch conflict). Taufik dah benarkan push dan merge ke `main` secara tetap.
- Merge ke `main` auto-deploy melalui `.github/workflows/deploy.yml`. Selepas merge, semak run Actions dan laporkan keputusan sebenar (jangan dakwa berjaya sebelum sahkan).
- MkDocs tak boleh dibina dalam sandbox (PyPI disekat). Sahkan hanya secara statik (YAML, pautan, Jinja), dan beritahu Taufik apa yang belum dilihat.

## Tambah artikel baru
1. Fail `docs/artikel/<slug>.md` dengan front matter `title`, `description`, `image: assets/og-<nama>.jpg`.
2. Gambar: `.webp`, 900px lebar, quality 76 hingga 80, simpan dalam `docs/assets/`. Letak `width`, `height`, `loading="lazy"` dan kelas `.step-img`.
3. OG image 1200x630 JPEG (baseline, quality 56 hingga 66, sasaran bawah 100 KB).
4. Tambah dalam `nav:` di `mkdocs.yml` dan kad di `docs/index.md` (terbaru di atas).
5. Susunan artikel: badge `.cat-badge`, `# tajuk`, `.lead`, `.byline`, gambar utama, isi, `.cta`, kad bio `.abio` (dengan `assets/taufik-cut.webp`).

## Peraturan content
- **Letak pautan dalam teks artikel bila berkaitan.** Kebanyakan artikel bertujuan suruh pembaca buka akaun dan daftar, jadi pautkan frasa seperti "Akaun GAP", "serendah RM100", "daftar" ke pautan daftar, dan "PM saya" / "hubungi saya" ke WhatsApp. Pautkan juga ke artikel dalaman yang berkaitan (contoh `cara-daftar-public-gold-gap-2026.md`).
- Pautan daftar: `https://publicgold.com.my/index.php?route=account/register&intro_pgcode=PG00359605&is_dealer=1`
- Pautan WhatsApp: `https://api.whatsapp.com/send/?phone=60132740711&text=Boleh+guide+saya+simpan+emas+Public+Gold&type=phone_number&app_absent=0` (satu sumber di `extra.whatsapp_url` dalam `mkdocs.yml`).
- Sapaan pembaca "anda". Elak em dash. Jangan tulis komen seolah-olah daripada pelanggan sebenar.
- Penafian rasmi dalam `copyright:` mkdocs.yml: kekalkan.
- Jangan buat pautan atau URL app store yang tak dibekalkan.

## Reka bentuk
Palet krim, maroon, emas (rujuk `docs/stylesheets/extra.css`), tajuk Playfair Display. Banner navy atas, icon WhatsApp dalam header, butang floating, dan efek ripple.

## Galeri emas di laman utama
Carousel di hujung `docs/index.md` (sebelum footer). Gambar dalam `docs/assets/galeri/gNN.webp` (1000x818, crop 11:9, bawah 110 KB). Tambah slide dengan satu `<figure class="gallery-slide">` lagi dalam `.gallery-track`; JS `docs/javascripts/carousel.js` bina dots sendiri.

## Laluan gambar dalam HTML mentah
Artikel dipaparkan di `/artikel/<slug>/` (directory URLs). Markdown `![](../assets/x.webp)` dibetulkan oleh MkDocs, tapi `<img src>` dalam HTML mentah TIDAK. Dalam artikel guna `../../assets/...` untuk HTML mentah, dan `assets/...` di `docs/index.md`. Tiket Diamond Day: https://pgmall.my/r/rGHPnSJIxU1

