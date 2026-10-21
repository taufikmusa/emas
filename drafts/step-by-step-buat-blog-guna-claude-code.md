<!--
DRAFT. JANGAN PUBLISH SEBELUM TAUFIK LULUSKAN.
Fail ini sengaja di luar docs/ supaya MkDocs tidak membinanya.

Bila nak publish:
1. Pindah fail ke docs/artikel/ dan gambar ke docs/assets/ (laluan ../assets/ sudah betul).
2. mkdocs.yml: tambah features "content.code.copy" (butang salin prompt) dan extension
   "pymdownx.highlight" + "pymdownx.inlinehilite" (tajuk pada blok prompt).
3. Tambah dalam nav dan kad laman utama.
-->
---
title: "Step by Step Nak Buat Blog Guna Claude Code Untuk Beginner"
description: Panduan dari kosong untuk beginner tanpa coding. Beli domain, buat akaun GitHub dan Claude, publish page pertama, tambah artikel, gambar dan butang WhatsApp. Siap prompt yang boleh terus salin.
image: assets/og-blog-claude-code.jpg
---

<span class="cat-badge">Tutorial Beginner</span>

# Step by Step Nak Buat Blog Guna Claude Code Untuk Beginner

*"Tak reti coding pun boleh. Anda cuma perlu tahu apa nak minta."*
{: .lead }

**Taufik Bin Musa** · Draf 21 Oktober 2026 · 12 min baca
{: .byline }

![Step by step nak buat blog guna Claude Code untuk beginner](../assets/blog-claude-code-cover.webp){ .step-img width="900" height="1125" }

Website yang anda tengah baca ni, saya bina guna **Claude Code**.

Blog ni saya buat untuk bantu mereka yang nak [mulakan simpanan emas di Public Gold](https://publicgold.com.my/index.php?route=account/register&intro_pgcode=PG00359605&is_dealer=1){ target="_blank" }, dan untuk sebarkan ilmu tentang emas yang saya belajar daripada guru saya, Tn Mohd Zulkifli Shafie.

Setiap artikel, gambar, butang WhatsApp, warna dan carousel di sini saya minta dalam bahasa biasa, dan Claude yang tulis kod. Yang saya buat cuma tiga benda: **bagi arahan, semak hasil, dan tekan merge**.

Dalam panduan ni saya ajar dari **kosong**. Anda tak perlu ada akaun Claude, GitHub atau Cloudflare. Hujungnya, anda ada blog sendiri dengan nama domain sendiri.

!!! info "Apa yang anda akan siapkan"
    1. Nama domain sendiri (contoh `blog.namaanda.com`)
    2. Akaun GitHub dan repo untuk simpan blog
    3. Akaun Claude dan Claude Code disambung ke repo
    4. Page pertama live di domain anda
    5. Artikel kedua, siap gambar dan copywriting
    6. Butang WhatsApp dan warna yang sesuai

## Gambaran besar: 4 benda, 4 tugas

Jangan risau dengan nama yang pelik. Ringkasnya macam ni:

| Benda | Tugas dia | Analogi |
|---|---|---|
| **Cloudflare** | Beli dan urus nama domain | Pendaftar nama kedai |
| **GitHub** | Simpan fail blog dan hostkan website (GitHub Pages) | Bangunan dan stor |
| **Claude Code** | Tulis dan ubah kod blog anda | Tukang |
| **MkDocs Material** | Bahan binaan blog (tukar fail teks jadi website cantik) | Bata dan cat |

Alur kerja harian anda nanti pendek sahaja:

**Anda cakap apa nak buat → Claude ubah fail → Claude push dan merge → GitHub bina dan publish dalam 1 hingga 2 minit.**

!!! warning "Kos, cakap awal-awal"
    - **Domain**: bayar setahun sekali, dalam dolar US di Cloudflare. Harga tahun pertama dan harga renew boleh berbeza.
    - **Claude Code**: perlukan pelan Claude berbayar (Pro, Max, Team atau Enterprise). Fungsi ini masih research preview jadi syarat boleh berubah, [semak syarat semasa di dokumentasi rasmi](https://code.claude.com/docs/en/web-quickstart){ target="_blank" }.
    - **GitHub dan GitHub Pages**: percuma, **tapi repo mesti public** pada akaun percuma.
    - Semak sendiri harga terkini sebelum bayar. Saya sengaja tak letak nombor sebab ia berubah.

---

## ✅ Langkah #1: Beli nama domain di Cloudflare

Domain ialah alamat blog anda, contoh `emas.taufik.fyi`. Saya cadang beli di **Cloudflare Registrar** sebab Cloudflare jual [harga kos tanpa markup](https://www.cloudflare.com/products/registrar/){ target="_blank" }, dan DNS (tetapan alamat) terus ada di tempat yang sama.

1. Pergi ke **dash.cloudflare.com** dan daftar akaun percuma (emel dan password).
2. Sahkan emel anda.
3. Menu kiri, pilih **Domain Registration**, kemudian **Register Domains**.
4. Taip nama yang anda mahu, pilih sambungan, dan bayar guna kad.

![Halaman Register domain di Cloudflare, carian taufikpg dengan harga .com, .org dan .app](../assets/blog-ss-domain-cloudflare.webp){ .step-img width="720" height="945" style="max-width:420px" }

!!! note "Baca harga dengan teliti"
    Contoh paparan pada 21 Oktober 2026, harga dalam dolar US dan boleh berubah. Perhatikan dua harga: harga **tahun pertama** dan harga **renew** setahun selepas tu.

    - `.com` $10.46 dan renew $10.46 setahun (harga sama).
    - `.org` dan `.app` murah tahun pertama, tapi renew lebih mahal.

    Untuk blog jangka panjang, harga renew lebih penting daripada harga promosi.

**Tips pilih nama domain**

- Pendek dan senang eja. Elak sempang dan nombor.
- `.com` paling selamat dan paling mudah. Cloudflare sokong `.com`. Untuk sambungan lain seperti `.my`, semak dulu dalam senarai TLD yang disokong di Cloudflare.
- Boleh guna **subdomain** untuk blog, contoh `blog.namaanda.com`. Ini lebih mudah disambung ke GitHub berbanding domain utama.

---

## ✅ Langkah #2: Daftar GitHub dan buat repo

GitHub ialah tempat semua fail blog anda disimpan, dan juga tempat blog anda dihostkan secara percuma.

1. Pergi **github.com** dan **Sign up**. Pilih username dengan teliti sebab ia akan jadi sebahagian alamat (`usernameanda.github.io`).
2. Sahkan emel.
3. Tekan butang **+** di atas kanan, pilih **New repository**.
4. Isi:
    - **Repository name**: contoh `blog`
    - **Public** (wajib untuk GitHub Pages percuma)
    - Tick **Add a README file**
5. Tekan **Create repository**.

![Halaman Create a new repository di GitHub](../assets/blog-ss-repo-github.webp){ .step-img width="720" height="498" style="max-width:420px" }

!!! warning "Kesilapan paling kerap"
    Ramai pilih **Private** sebab rasa "lebih selamat". Pada akaun GitHub percuma, **GitHub Pages tak boleh jalan untuk repo private**. Blog memang untuk dibaca orang, jadi public tak jadi masalah. Jangan simpan password atau maklumat peribadi dalam repo.

---

## ✅ Langkah #3: Daftar Claude dan sambung Claude Code ke repo

1. Pergi **claude.ai** dan daftar akaun.
2. Naik taraf ke pelan berbayar yang menyokong Claude Code (lihat nota kos di atas).
3. Buka **claude.ai/code**.
4. Ia akan minta anda **Connect GitHub** dan pasang **Claude GitHub App**. Bila GitHub tanya repo mana, pilih **Only select repositories** dan pilih repo `blog` sahaja. Ini lebih selamat.
5. Buat **environment** pertama. Untuk projek pertama, guna tetapan asal sahaja dan tekan **Create environment**.
6. Pilih repo `blog` dan mula sesi baru.

![Skrin mula Claude Code: environment dan repo dipilih, kotak tulis tugasan di bawah](../assets/blog-ss-claude-code-mula.webp){ .step-img width="720" height="661" style="max-width:420px" }

Bila siap, skrin anda akan nampak macam ni: **environment** dan **repo** (contoh `emas · main`) dah dipilih, dan anda tinggal tulis arahan dalam kotak di bawah.

Claude akan salin repo anda ke komputer awan, buat kerja di sana, dan hantar hasilnya ke GitHub dalam satu **branch** (salinan kerja berasingan). Anda tak perlu pasang apa-apa di komputer atau telefon.

---

## ✅ Langkah #4: Prompt pertama, bina blog

Sekarang bahagian paling best. Salin prompt di bawah, ganti bahagian dalam `[ ... ]` dengan maklumat anda, dan tampal dalam Claude Code.

```text title="Prompt 1: Bina blog pertama"
Saya beginner dan tak reti coding. Tolong bina blog statik guna MkDocs Material dalam repo ini.

Maklumat blog:
- Nama blog: [NAMA BLOG]
- Topik: [TOPIK, contoh: simpanan emas / resepi / parenting]
- Bahasa: Bahasa Melayu Malaysia, sapaan pembaca "anda"
- Domain: [blog.namadomainanda.com]
- Nama saya: [NAMA ANDA]

Design:
- Warna: latar [#HEX], utama [#HEX], aksen [#HEX], teks [#HEX]
- Tajuk guna Playfair Display, isi guna Inter
- Mesra telefon dahulu (mobile first)
- Ada mod gelap

Perlu ada:
1. mkdocs.yml, requirements.txt, dan docs/index.md (laman utama dengan tajuk besar dan kad artikel)
2. Satu artikel contoh dalam docs/artikel/
3. Fail docs/CNAME yang mengandungi domain saya
4. GitHub Actions workflow di .github/workflows/deploy.yml untuk build dan deploy ke GitHub Pages bila ada push ke branch main
5. README ringkas
6. Butang WhatsApp floating di bawah kanan, pautan: [PAUTAN WHATSAPP]

Jangan guna em dash dalam teks.
Bila siap, terangkan dalam bahasa mudah apa yang saya perlu buat di GitHub Settings.
```

Tak tahu nak isi warna apa? Terus ke [Langkah #9](#langkah-9), ada pilihan siap dengan kod warna.

Claude akan bekerja beberapa minit. Bila siap, ia akan terangkan apa yang dibina. **Baca ringkasan tu**, dan kalau ada yang anda tak faham, tanya terus: *"Terangkan bahagian X dengan bahasa paling mudah."*

---

## ✅ Langkah #5: Merge ke `main` supaya blog boleh publish

Claude kerja dalam **branch** berasingan. Maksudnya perubahan belum masuk ke blog sebenar. Untuk publish, ia perlu **merge** ke branch `main`.

Cara paling mudah, tampal prompt ni:

```text title="Prompt 2: Push dan merge"
Push perubahan, buat pull request ke main, dan merge. Lepas tu semak GitHub Actions dan bagitahu saya keputusan sebenar. Jangan kata berjaya kalau belum sahkan.
```

!!! tip "Kalau Claude tak boleh merge sendiri"
    Tak apa. Tekan **Create PR** dalam sesi Claude Code, dan buka pull request tu di GitHub. Tekan **Merge pull request**, kemudian **Confirm merge**. Dua tekan sahaja.

---

## ✅ Langkah #6: Hidupkan GitHub Pages dan sambung domain

Ini 3 tetapan sekali sahaja. Ikut turutan.

### 6A. Hidupkan GitHub Pages

1. Dalam repo, pergi **Settings** → **Pages**.
2. Bawah **Build and deployment**, ubah **Source** kepada **GitHub Actions**.
3. Pergi tab **Actions**, pilih workflow **Deploy to GitHub Pages**, tekan **Run workflow** (pilih `main`). Tunggu hingga bulatan hijau.

!!! warning "Source mesti GitHub Actions"
    Kalau Source masih "Deploy from a branch", GitHub hanya paparkan fail mentah repo (README), bukan blog anda yang cantik.

### 6B. Tambah rekod DNS di Cloudflare

1. Di Cloudflare, buka domain anda, pergi **DNS** → **Records** → **Add record**.
2. Isi:

| Field | Isi |
|---|---|
| Type | `CNAME` |
| Name | nama subdomain anda, contoh `blog` |
| Target | `usernameanda.github.io` |
| Proxy status | **DNS only** (awan kelabu) |
| TTL | Auto |

3. **Save**.

`DNS only` penting pada permulaan. Kalau awan oren (proxied), GitHub selalu gagal sahkan domain dan tersangkut di "DNS check unsuccessful".

### 6C. Beritahu GitHub domain anda

1. Repo → **Settings** → **Pages** → **Custom domain**, taip `blog.namadomainanda.com`, tekan **Save**.
2. Tunggu tanda DNS check jadi hijau.
3. Bila **Enforce HTTPS** boleh ditekan, tick. Ia mengunci sambungan selamat (gembok di browser).

Biasanya siap dalam 5 hingga 30 minit, tapi GitHub sendiri kata perubahan DNS boleh ambil sehingga 24 jam. Jangan panik kalau tak terus jalan.

Buka domain anda di browser. **Tahniah, blog pertama anda dah live.** 🎉

---

## ✅ Langkah #7: Simpan arahan tetap dalam `CLAUDE.md`

Ini langkah yang paling ramai terlepas, dan paling jimatkan masa.

Claude tak ingat perbualan lama. Tapi ia akan baca fail bernama `CLAUDE.md` dalam repo anda setiap kali sesi baru bermula. Jadi tulis semua peraturan tetap di situ **sekali sahaja**.

```text title="Prompt 3: Tulis peraturan tetap"
Buat fail CLAUDE.md dalam repo ini dan simpan arahan tetap saya:

1. Setiap perubahan: commit, push, buat pull request ke main, dan merge. Saya benarkan ini secara tetap. Lepas merge, semak GitHub Actions dan laporkan keputusan sebenar.
2. Artikel baru letak dalam docs/artikel/, tambah dalam menu (nav) dan sebagai kad di laman utama (terbaru di atas).
3. Gambar mesti .webp, lebar 900px, saiz kecil. Letak dalam docs/assets/.
4. Bila saya bagi pautan (daftar, WhatsApp, produk), pautkan frasa yang berkaitan dalam teks artikel, bukan di hujung sahaja.
5. Pautan WhatsApp saya: [PAUTAN WHATSAPP]. Simpan sebagai satu sumber dalam mkdocs.yml.
6. Gaya bahasa: Bahasa Melayu Malaysia, sapaan "anda", elak em dash.
7. Jangan reka pautan atau fakta yang saya tak bagi. Kalau tak pasti, tanya saya.
```

Lepas ni anda tak perlu ulang peraturan tu lagi. Cukup cakap **"tambah artikel baru"** atau **"push dan merge ke main"**.

---

## ✅ Langkah #8: Artikel kedua, siap gambar dan copywriting

Sekarang anda dah ada sistem. Setiap artikel baru ikut resipi yang sama:

1. **Tulis copywriting** dalam Notes atau Word dulu (ayat anda sendiri).
2. **Siapkan gambar** (slide, poster atau gambar biasa).
3. **Attach gambar** dalam sesi Claude Code (pilih fail atau tampal terus dalam kotak chat) dan tampal prompt ni:

```text title="Prompt 4: Tambah artikel baru"
Tambah artikel baru dalam blog ini.

Tajuk: [TAJUK ARTIKEL]
Gambar yang saya attach, ikut urutan:
- Gambar 1: gambar utama (juga untuk preview WhatsApp)
- Gambar 2 hingga [N]: letak di bawah bahagian yang berkaitan dengan isinya

Copywriting saya:
---
[TAMPAL COPYWRITING DI SINI]
---

Arahan:
- Susun copywriting jadi tajuk bahagian yang jelas. Jangan ubah maksud atau gaya ayat saya.
- Tukar gambar kepada .webp lebar 900px dan letak dalam docs/assets/
- Buat gambar preview WhatsApp 1200x630 daripada gambar utama
- Tambah dalam menu dan sebagai kad di laman utama
- Pautkan frasa "[FRASA]" ke [PAUTAN] dalam teks
- Letak butang CTA (daftar dan WhatsApp) di hujung artikel
- Push, buat pull request, dan merge ke main. Lepas tu laporkan keputusan GitHub Actions.
```

!!! tip "Tulis copywriting yang senang discan"
    Pembaca telefon tak baca dinding teks. Satu idea satu perenggan, ayat pendek, dan satu tajuk bahagian setiap 3 hingga 4 perenggan. Kalau ada langkah, nombor dia (Langkah #1, #2) dan letak satu gambar setiap langkah.

### Sebelum tekan publish, semak 5 benda

- [ ] Gambar semua keluar (bukan ikon rosak)
- [ ] Semua pautan boleh diklik dan betul
- [ ] Fakta, harga dan tarikh betul. **Claude boleh tersilap. Anda yang bertanggungjawab.**
- [ ] Buka dalam telefon, bukan komputer sahaja
- [ ] Link preview WhatsApp keluar gambar dan tajuk

---

## ✅ Langkah #9: Pilih warna dan design yang sesuai { #langkah-9 }

Warna bukan soal cantik sahaja. Ia bagi **rasa** pada blog anda: tenang, mewah, atau mesra. Saya susun lima pilihan siap pakai. Salin kod hex terus ke dalam Prompt 1.

| Tema | Sesuai untuk | Latar | Utama | Aksen | Teks |
|---|---|---|---|---|---|
| **Krim, Maroon, Emas** (tema blog ni) | Emas, kewangan, jenama premium | `#F8F4EB` | `#7A0C1C` | `#C99A2E` | `#1B1410` |
| **Hijau Amanah** | Patuh syariah, pendidikan, kesihatan | `#F4F8F3` | `#14532D` | `#C99A2E` | `#12201A` |
| **Navy Korporat** | Kewangan, perniagaan, konsultan | `#F5F7FB` | `#0F2A52` | `#D4A62A` | `#111827` |
| **Teal Segar** | Gaya hidup, parenting, resepi | `#F3FAF9` | `#0F766E` | `#F59E0B` | `#10201F` |
| **Hitam Emas** | Mewah, eksklusif, produk premium | `#14110F` | `#D4AF37` | `#F2E8D5` | `#F2E8D5` |

**Formula 60-30-10** supaya nampak kemas:

- **60%** latar (warna lembut, krim atau putih)
- **30%** warna utama (tajuk, header, butang utama)
- **10%** aksen (garisan, lencana, butang pilihan)

**4 peraturan yang selamatkan design anda**

1. **Teks mesti jelas dibaca.** Warna emas atau kuning atas latar cerah susah dibaca. Guna emas untuk **hiasan, garisan dan tajuk besar** sahaja, jangan untuk perenggan.
2. **Satu warna untuk satu tugas.** Semua butang tindakan satu warna sahaja.
3. **Hijau WhatsApp (`#25D366`) khas untuk WhatsApp.** Jangan guna warna tu untuk benda lain supaya orang terus kenal.
4. **Maksimum dua fon.** Satu untuk tajuk (contoh Playfair Display), satu untuk isi (contoh Inter).

Nak tukar warna kemudian? Cukup minta:

```text title="Prompt 5: Tukar warna dan design"
Tukar tema warna blog kepada [NAMA TEMA]:
latar [#HEX], utama [#HEX], aksen [#HEX], teks [#HEX].
Kekalkan butang WhatsApp hijau. Pastikan teks jelas dibaca, termasuk dalam mod gelap.
Push, buat PR, dan merge ke main.
```

---

## ✅ Langkah #10: Pasang butang WhatsApp supaya orang terus hubungi anda

Blog yang baik ada satu tindakan jelas. Untuk kebanyakan kita, itu ialah **WhatsApp**.

### Cara buat pautan WhatsApp sendiri

Format asas:

```text
https://wa.me/60XXXXXXXXX?text=MESEJ
```

1. Ambil nombor telefon anda, contoh `012-345 6789`.
2. Buang sempang, ruang dan **angka 0 di depan**: `123456789`.
3. Tambah kod negara Malaysia `60` di depan: `60123456789`. (Tiada simbol `+`.)
4. Tulis mesej siap-taip untuk pelanggan. Ruang tukar jadi `%20` atau `+`.

Contoh siap:

```text
https://wa.me/60123456789?text=Salam%2C%20saya%20nak%20tanya%20tentang%20blog%20anda
```

!!! tip "Mesej siap-taip yang bagus"
    Tulis mesej yang pelanggan sendiri akan hantar, contoh *"Boleh guide saya mula"*. Orang lagi mudah tekan hantar bila mesej dah tersedia, dan anda terus tahu mereka datang dari blog mana.

Uji dulu pautan tu di telefon sebelum tampal ke blog.

### Prompt pasang WhatsApp

```text title="Prompt 6: Pasang WhatsApp di semua tempat"
Pasang butang WhatsApp menggunakan pautan ini: [PAUTAN WHATSAPP]

Letak di:
1. Butang bulat hijau floating di bawah kanan (dengan efek denyut halus, dimatikan untuk pengguna yang set reduce motion)
2. Icon kecil dalam header
3. Banner nipis di atas sekali
4. Kad nombor telefon di laman utama
5. Butang CTA di hujung setiap artikel

Simpan pautan di satu tempat sahaja dalam mkdocs.yml supaya kalau nombor berubah, saya ubah sekali.
Push, buat PR, dan merge ke main.
```

---

## ✅ Bonus: Letak video dalam artikel

Ada video di YouTube atau Facebook? Anda boleh letak dalam artikel supaya pembaca terus tengok. Cara dia berbeza ikut platform.

### Video YouTube (main terus dalam page)

1. Salin pautan video. Cari **ID video**, iaitu kod pendek dalam pautan:
    - Shorts: `youtube.com/shorts/`**`q9h41tzO2RI`**
    - Biasa: `youtube.com/watch?v=`**`ID`** atau `youtu.be/`**`ID`**
2. Pastikan pemilik video benarkan embedding (YouTube Studio → Content → pilih video → **Allow embedding**). Kalau tidak, pembaca nampak "Video unavailable".
3. Tampal prompt ni:

```text title="Prompt 7: Letak video YouTube"
Letak video YouTube ini di bahagian bawah artikel [NAMA ARTIKEL], di bawah tajuk "Tonton videonya", sebelum butang CTA:
[PAUTAN YOUTUBE]

Arahan:
- Benamkan video supaya main terus dalam page (guna youtube-nocookie.com embed, nisbah 9:16 untuk Shorts atau 16:9 untuk video biasa, lebar maksimum sesuai telefon)
- Tambah butang "Tonton di YouTube" di bawahnya sebagai laluan kedua
- Push, buat PR, dan merge ke main. Laporkan keputusan GitHub Actions.
```

### Video Facebook (thumbnail dan butang play)

Facebook tak sentiasa benarkan video dibenam dalam laman lain, jadi cara paling selamat ialah **thumbnail dengan butang play** yang membawa pembaca ke video.

1. Di Facebook, tekan **Share** → **Copy link** pada video anda.
2. Pastikan video tu **Public**. Kalau Friends sahaja, orang lain tak boleh tengok.
3. Uji dulu: tampal pautan dalam tab **incognito**. Kalau video terbuka, pautan okay.
4. Attach gambar thumbnail (gambar depan video) dan tampal prompt ni:

```text title="Prompt 8: Letak video Facebook"
Letak video Facebook ini di bahagian bawah artikel [NAMA ARTIKEL], di bawah tajuk "Tonton videonya", sebelum penutup:
[PAUTAN FACEBOOK]

Arahan:
- Guna gambar yang saya attach sebagai thumbnail (tukar ke .webp lebar 640px)
- Letak butang play bulat di tengah thumbnail dan label "Tonton di Facebook"
- Tambah butang teks "Tonton video di Facebook" di bawahnya
- Buka pautan dalam TAB YANG SAMA (jangan guna tab baharu), kerana tab baharu gagal pada sesetengah iPhone
- Buang kod penjejak (contoh ?mibextid=...) daripada pautan
- Push, buat PR, dan merge ke main. Laporkan keputusan GitHub Actions.
```

!!! tip "Kenapa tab yang sama?"
    Pada iPhone (terutama mod incognito), pautan Facebook yang dibuka dalam tab baharu kadang-kadang tak keluar langsung. Dalam tab yang sama, pembaca tekan Back untuk kembali ke artikel anda.

---

## Bila ada masalah, ini 8 punca paling kerap

Salin apa yang anda nampak (screenshot atau log) dan tampal kepada Claude. Selalunya ia boleh betulkan sendiri.

| Masalah | Punca biasa | Penyelesaian |
|---|---|---|
| Blog tunjuk README, bukan blog cantik | Source Pages belum **GitHub Actions** | Settings → Pages → Source → GitHub Actions |
| "DNS check unsuccessful" | Awan Cloudflare oren, atau DNS belum sampai | Tukar ke **DNS only**, tunggu 30 minit |
| Actions bulatan merah | Ada ralat dalam kod atau config | Tekan run yang merah, salin log, tampal kepada Claude |
| Gambar tak keluar | Laluan gambar salah | Cakap: *"Gambar artikel X tak keluar, semak laluan gambar"* |
| Perubahan tak nampak | Cache browser | Hard refresh, atau buka tab incognito |
| Tak boleh publish repo private | Akaun GitHub percuma | Jadikan repo **Public** |
| Video YouTube tunjuk "Video unavailable" | Embedding tak dibenarkan | YouTube Studio → **Allow embedding** |
| Klik video Facebook tak jalan | Video bukan Public, atau dibuka di tab baharu | Jadikan **Public**, dan guna tab yang sama |

```text title="Prompt 9: Bila Actions merah"
GitHub Actions gagal. Ini log ralat dia:
---
[TAMPAL LOG DI SINI]
---
Cari punca sebenar, betulkan, dan terangkan dalam bahasa mudah apa yang salah. Lepas tu push, merge, dan sahkan Actions hijau sebelum bagitahu saya.
```

!!! warning "Satu perkara jujur"
    Kadang-kadang Claude tak dapat bina blog sepenuhnya dalam persekitarannya sendiri (contohnya sekatan rangkaian), jadi ia hanya boleh semak sebahagian. Yang sebenar mengesahkan blog anda berjaya dibina ialah **GitHub Actions**. Sebab tu dalam prompt saya sentiasa minta *"laporkan keputusan sebenar"*.

---

## Ringkasan: apa yang anda dah ada sekarang

- ✅ Nama domain sendiri
- ✅ Repo GitHub dan blog yang live secara percuma
- ✅ Claude Code yang kenal peraturan anda melalui `CLAUDE.md`
- ✅ Resipi tetap untuk tambah artikel, gambar dan copywriting
- ✅ Warna, design dan butang WhatsApp yang konsisten

Dari sini, anda boleh tambah apa-apa sahaja: carousel gambar, galeri, borang, laman produk. Cuma **cakap** apa yang anda mahu.

> Bina bisnes ketika kita belum perlukan bisnes.
> Bina aset digital sendiri ketika kita masih ada masa dan tenaga.

Moga perkongsian ini bermanfaat.

<div class="cta" markdown>

### Nak Saya Tengok Blog Anda?

Dah cuba tapi tersangkut di mana-mana langkah? WhatsApp saya, bagitahu di langkah mana anda berhenti.

[💬 WhatsApp Taufik](https://api.whatsapp.com/send/?phone=60132740711&text=Boleh+bantu+saya+buat+blog+guna+Claude+Code&type=phone_number&app_absent=0){ .md-button .btn-wa target="_blank" }

</div>

<div class="abio" markdown>

<div class="abio-text" markdown>

#### Taufik Bin Musa
<span class="role">Dealer Public Gold · PG00359605 · G100 Network</span>

Saya dealer dan committee di G100 Network, rangkaian dealer terbesar di Malaysia yang membimbing lebih 1.2 juta penyimpan emas. Saya bantu anda bina aset emas melalui Akaun GAP, terus dengan Public Gold.

`Mula RM100` `Tiada komitmen` `Boleh tukar emas fizikal` `Patuh syariah` `Tiada caj dealer`

Semua urus niaga dibuat terus bersama Public Gold, syarikat emas terbesar Malaysia sejak 2008. Tugas Dealer hanya menjadi pemudahcara urusniaga dan berkongsi ilmu emas yang praktikal, InsyaAllah.

[Jemput juga ke Website Rasmi Dealer G100 saya di pg2u.my/taufikmusa ↗](https://pg2u.my/taufikmusa){ target="_blank" }

</div>

<div class="abio-pic" markdown>

![Taufik Bin Musa, Dealer Public Gold](../assets/taufik-cut.webp){ width="440" height="641" loading="lazy" }

</div>

</div>
