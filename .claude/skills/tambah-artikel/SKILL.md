---
name: tambah-artikel
description: "Cara tambah artikel baru di emas.taufik.fyi (MkDocs Material). Guna bila Taufik hantar copy artikel dan poster, atau minta tambah video, carousel, kemas kini gambar. Ia merangkumi susunan artikel, gambar, OG image, nav, kad homepage, pautan, CTA, kategori, video, flag compliance, PR, merge dan semak deploy."
---

# Tambah artikel baru (emas.taufik.fyi)

Taufik hantar **copy artikel + poster/gambar** (kadang-kadang pautan video). Kerja kau: terus siapkan artikel penuh, push, merge, semak deploy, lapor. Jangan tanya soalan yang boleh dijawab dengan default di bawah. Baca juga `CLAUDE.md` (peraturan tetap) sebelum mula.

Cakap Malay Malaysia colloquial, istilah teknikal kekal English. Lapor dalam gaya Taufik (terus, tak berbunga-bunga).

## 1. Tentukan jenis artikel
- **Berkaitan emas / Public Gold**: guna CTA empat butang (langkah 6).
- **Bukan emas** (Ibrah, Kehidupan, Bisnes): TANPA CTA jualan. Kekalkan kad bio `.abio`. Beritahu Taufik kau tak letak CTA dan tawarkan butang Telegram sahaja.
- **Kategori** (badge `.cat-badge` dan seksyen `nav:`): ikut yang sedia ada kalau sesuai: Daftar & Mula, Matlamat Simpanan, Harga Emas, Testimoni, Bisnes, Kehidupan, Ibrah, PG Jewel, Untuk Cikgu, Diamond Day, dll. Taufik sebut kategori baru (contoh "Ibrah", "Kehidupan") → buat seksyen nav baru.
- **Tajuk**: ambil daripada tajuk dalam copy atau poster. Beritahu Taufik tajuk yang kau pilih sebab dia selalu tak bagi.
- **Slug**: huruf kecil, sempang, tanpa `?` `:` dan perkataan sampingan. Fail `docs/artikel/<slug>.md`.
- **Tarikh** dalam `.byline`: tarikh hari ini (lihat tarikh sesi), contoh `25 Oktober 2026`, dan `N min baca` (kira-kira 200 patah/min).

## 2. Gambar (guna Python PIL, simpan dalam `docs/assets/`)
Sumber gambar ada di `/root/.claude/uploads/<id>/...` (laluan diberi dalam mesej). Lihat gambar dulu (Read) bila perlu crop.
- **Poster utama**: `.webp`, 900px lebar, quality ~74 hingga 78. Letak sebagai gambar utama selepas `.byline`: `![alt](../assets/x.webp){ .step-img width="900" height="NNN" }`. Gambar kedua dan seterusnya tambah `loading="lazy"`.
- **OG image** `docs/assets/og-<nama>.jpg`: crop bahagian ATAS poster ke 1200x630, JPEG baseline (`progressive=False`), loop quality 56 → 38 sehingga **bawah 100 KB**. Semak dengan Read bahawa tajuk dan muka tak terpotong; kalau terpotong, laras kotak crop.
- **Tangkapan skrin app / foto portrait**: lebar 640 hingga 720 (poster penuh 900).
- **PRIVASI**: kalau gambar ada nama, PG code atau data orang lain (bukan Taufik), JANGAN letak penuh. Crop bahagian yang selamat (contoh hanya tarikh dan harga) dan beritahu Taufik. Skrin app Taufik sendiri okay (baki sudah `****g`).
- Gambar yang Taufik sahkan salah: jangan guna; laporkan.

## 3. Front matter (WAJIB dipetik)
```yaml
---
title: "Tajuk Artikel"
description: "Satu atau dua ayat ringkas untuk SEO."
image: assets/og-<nama>.jpg
---
```
`title` dan `description` SENTIASA dalam tanda petik. Kalau ada `: ` tanpa petik, YAML rosak dan front matter terpapar sebagai teks dalam artikel (pernah berlaku). Selepas tulis, sahkan semua front matter dengan `yaml.safe_load` (jangan `safe_load` `mkdocs.yml` sebab ada tag Python).

## 4. Susunan artikel
Badge `.cat-badge`, `# tajuk`, `.lead` (satu petikan italik), `.byline`, gambar utama, isi, CTA (kalau emas), kad bio `.abio`.
```markdown
<span class="cat-badge">Matlamat Simpanan</span>

# Tajuk

*"Satu ayat lead."*
{: .lead }

**Taufik Bin Musa** · 25 Oktober 2026 · 5 min baca
{: .byline }
```
- Kad bio: salin blok daripada `<div class="abio" markdown>` hingga hujung fail daripada `docs/artikel/5-sebab-content-creator-wajib-simpan-emas-fizikal.md` (guna `sed -n '/<div class="abio"/,$p'`). Foto dalam kad ialah `../assets/taufik-foto.webp`.
- Pecahkan copy panjang kepada tajuk `##` kecil (contoh `## ✅ 1. ...` untuk senarai bernombor) supaya senang dibaca di phone. Petikan guru atau ayat kunci → `>` blockquote. Amaran risiko → **tebal**. Jangan ubah maksud atau ayat Taufik.
- Pesan guru: **Tn Mohd Zulkifli Shafie** (ejaan ini).
- **Elak em dash** (tanda sengkang panjang). Tukar jadi koma atau titik. Guna perkataan **"swipe"**, JANGAN "leret". Sapaan pembaca "anda" (dalam copy Taufik biasanya "kita", biar).
- Ayat khas platform dalam copy ("klik link di bio/komen", "saya kongsi video di ruangan komen") tak sesuai di website → tukar kepada pautan terus atau "tonton di bawah", dan beritahu Taufik.
- Selepas siap, `grep -c "—"` dan `grep -ci leret` pada fail baru mesti 0.

## 5. Pautan dalam teks (WAJIB bila berkaitan)
- Daftar: `https://publicgold.com.my/index.php?route=account/register&intro_pgcode=PG00359605&is_dealer=1` pada frasa "akaun GAP", "serendah RM100", "daftar", `{ target="_blank" }`.
- WhatsApp: `https://api.whatsapp.com/send/?phone=60132740711&text=Boleh+guide+saya+simpan+emas+Public+Gold&type=phone_number&app_absent=0` pada "hubungi saya" / "PM saya" / "WhatsApp saya".
- 2 hingga 4 pautan artikel dalaman yang berkaitan (path relatif: `apa-itu-akaun-gap-gold-accumulation-program-public-gold.md`, `cara-daftar-public-gold-gap-2026.md`, `9-soalan-lazim-sebelum-buka-akaun-emas-gap.md`, `5-langkah-matlamat-simpan-emas-supaya-gaji-tak-bocor.md`, dll). Senarai fail ada di `docs/artikel/`.
- JANGAN reka pautan atau URL yang Taufik tak bagi.

## 6. CTA (artikel emas sahaja), letak sebelum kad bio
```markdown
<div class="cta" markdown>

### Tajuk Ajakan Pendek

Daftar percuma dan mula dengan RM100, atau WhatsApp saya untuk bimbingan percuma.

[Daftar Percuma →](REG){ .md-button .btn-gold target="_blank" }
[💬 WhatsApp](WA){ .md-button .btn-wa target="_blank" }
[✈️ Telegram](https://t.me/taufikpg_emas){ .md-button .btn-tg }
[📘 E-Book](https://pg2u.my/app/ebook/taufikmusa){ .md-button .btn-ebook }

</div>
```
(Ganti `REG` dan `WA` dengan URL penuh.) Label pendek, Telegram dan E-Book TANPA `target="_blank"`. Gaya dalam `docs/stylesheets/cta.css`.

## 7. Nav dan kad homepage
- `mkdocs.yml` `nav:` → masukkan di seksyen kategori (item baharu di atas dalam seksyennya). Seksyen baru diletak mengikut keutamaan (di atas yang lain, dekat "Daftar & Mula").
- `docs/index.md` → tambah kad PALING ATAS dalam `<div class="grid cards" markdown>`:
```markdown
- [![alt](assets/og-<nama>.jpg){ loading=lazy }](artikel/<slug>.md)

    <span class="cat-badge">Kategori</span>

    **[Tajuk](artikel/<slug>.md)**

    Satu ayat ringkasan.

```
Laluan gambar di `index.md` ialah `assets/...` (tanpa `../`).

## 8. HTML mentah dalam artikel
Artikel dipaparkan di `/artikel/<slug>/`, jadi `<img src>` dalam HTML mentah guna `../../assets/...` (Markdown biasa guna `../assets/...`).

**Carousel gambar (tangkapan skrin / foto portrait)**, kelas `gallery gallery-shot` (gaya `docs/stylesheets/gallery-shot.css`, `data-autoplay="off"`), JS bina dots sendiri:
```html
<section class="gallery gallery-shot" data-autoplay="off" aria-label="Penerangan">
<div class="gallery-frame">
<div class="gallery-track" tabindex="0" role="group" aria-roledescription="carousel" aria-label="Penerangan, swipe untuk lihat seterusnya">
<figure class="gallery-slide"><img src="../../assets/x.webp" alt="..." width="640" height="1100" loading="lazy" decoding="async"></figure>
</div>
<button class="gallery-nav prev" type="button" aria-label="Gambar sebelum">&#8249;</button>
<button class="gallery-nav next" type="button" aria-label="Gambar seterusnya">&#8250;</button>
</div>
<div class="gallery-dots" aria-hidden="true"></div>
</section>
```
Poster segi empat guna `gallery gallery-poster`. Tiada blank line di dalam blok `<section>`. Letak blank line sebelum dan selepas.

**Dua gambar harga sebelah-menyebelah**: `<div class="price-pair">` dengan dua `<figure>`.

## 9. Video (letak di BAWAH artikel, sebelum "Moga perkongsian ini bermanfaat.")
- **Facebook**: kad `video-thumb`, pautan bersih (BUANG `?mibextid=...`), buka dalam TAB SAMA (tiada `target="_blank"`), thumbnail daripada gambar yang Taufik bagi (640px webp):
```html
## Tonton videonya

<a class="video-thumb" href="https://www.facebook.com/share/v/ID/" aria-label="...">
<img src="../../assets/<nama>-video-thumb.webp" alt="..." width="640" height="NNN" loading="lazy" decoding="async">
<span class="video-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="34" height="34"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></span>
<span class="video-label">Tonton di Facebook</span>
</a>

<p class="video-cta"><a class="md-button md-button--primary" href="https://www.facebook.com/share/v/ID/">▶ Tonton video di Facebook</a></p>
```
- **YouTube biasa**: sama seperti di atas (label "Tonton di YouTube", `https://youtu.be/ID` tanpa `?si=`). Thumbnail dari poster sebab sandbox tak boleh ambil gambar YouTube.
- **YouTube Shorts**: boleh embed (`<div class="yt-short">` dengan iframe `youtube-nocookie`), rujuk `CLAUDE.md`.
- Minta Taufik pastikan video Public dan test dalam incognito iPhone.

## 10. Disiplin kandungan (flag kepada Taufik dalam laporan)
- **Claim kewangan**: peratus untung, harga, tempoh simpanan, "kalis inflasi", "rekod bersih", sejarah harga. Kekalkan ayat Taufik, tapi **tebalkan amaran risiko** dan flag untuk dia semak dengan garis panduan Public Gold.
- **Ketidakpadanan poster vs copy** (contoh tempoh "3 hingga 5 tahun" lawan "dua hingga lima tahun", angka spread): ikut copy dan flag.
- **Angka harga sejarah emas yang DISAHKAN Taufik** (poster sejarah): 2005 RM35, 2010 RM50, 2016 RM130, **2021 RM270**, 2024 RM403. Poster yang tulis 2021 = RM470 adalah SALAH, jangan guna. Harga semasa tukar setiap hari, guna angka pada poster/skrin yang Taufik hantar dan labelkan tarikhnya.
- **Testimoni / nama orang**: ingatkan Taufik pastikan kebenaran nama dan gambar dipaparkan.
- Tambah nota "keuntungan tidak dijamin" pada artikel testimoni dan harga.
- Kad artikel bukan emas: jangan paksa pautan jualan.

## 11. Hantar (SOP tetap, Taufik dah benarkan)
1. Branch sesi (lihat arahan git sesi; biasanya `claude/...`). `git add -A`, commit dengan baris `Co-Authored-By` dan `Claude-Session` ikut arahan sesi, `git push -u origin <branch>`.
2. Buat PR ke `main` dengan `mcp__github__create_pull_request` (owner `taufikmusa`, repo `emas`), kemudian **merge dengan merge commit** (`merge_method: merge`, BUKAN squash).
3. Deploy auto lalu `.github/workflows/deploy.yml`. Tunggu ~60 hingga 80 saat (Monitor `sleep`), kemudian `mcp__github__actions_list` `list_workflow_runs` dengan `resource_id: deploy.yml` dan `perPage: 1`. **Jangan dakwa berjaya sebelum `conclusion: success`.** Kalau masih `in_progress`, tunggu lagi.
4. Kalau alat GitHub terputus, buat kerja fail dan `git push` dulu, kemudian `ToolSearch` `select:mcp__github__create_pull_request,mcp__github__merge_pull_request,mcp__github__actions_list`.
5. Sandbox tak boleh bina MkDocs (PyPI disekat) dan tak boleh buka laman. Sahkan secara statik sahaja dan cakap terus apa yang belum dilihat; minta Taufik semak di phone.

## 12. Format laporan akhir (ringkas, Malay colloquial)
- Satu baris: "Artikel baru dah live. PR #N merge dan deploy run #M siap dengan `success`. Aku tak boleh buka site dalam sandbox, jadi tengok sendiri dekat phone."
- **Artikel**: tajuk (dan siapa pilih), lokasi dalam menu dan homepage.
- **Apa yang masuk**: gambar, struktur, pautan dalam teks, CTA atau sebab tiada CTA.
- **Untuk kau semak**: flag compliance, ketidakpadanan, perubahan yang aku buat pada copy (contoh em dash), perkara yang aku tak boleh sahkan.

## Lain-lain yang pernah berlaku (elak ulang)
- Cache browser: fail CSS/JS baharu guna nama fail BARU (contoh `cta.css`, `telegram.css`, `header.css`) dan daftar dalam `extra_css`/`extra_javascript`, supaya tak kena cache lama.
- Header telefon: dua icon (Telegram, WhatsApp) sudah dilaras; jangan tambah icon lagi tanpa semak lebar tajuk.
- Kotak CTA: Daftar penuh lebar, tiga butang lain sebaris (jangan tambah butang kelima).
- `extra.whatsapp_url`, `extra.telegram_url`, `extra.ebook_url` dalam `mkdocs.yml` ialah sumber tunggal pautan; jangan hardcode pautan baharu bagi tiga ini dalam template.
