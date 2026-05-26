# CV — Network Engineer

CV online yang bisa dibagikan via link dan di-print sebagai PDF.
Struktur file terpisah, konten cukup edit di satu file.

---

## 📁 Struktur Folder

```
cv-network/
├── .github/
│   └── workflows/
│       └── deploy.yml   # Auto-deploy GitHub Actions
├── css/
│   └── style.css        # Semua styling (screen + print)
├── js/
│   ├── data.js          # ⭐ EDIT DI SINI — semua konten CV
│   └── render.js        # Renderer (tidak perlu diedit)
├── assets/              # Taruh foto profil di sini (opsional)
├── index.html
├── CNAME                # Custom domain (opsional)
├── .gitignore
└── README.md
```

---

## ✏️ Cara Update Konten CV

**Cukup edit `js/data.js`**, lalu push. Selesai.

Yang bisa diedit:
- `identity` — nama, role, about, kontak, foto
- `skills` — tambah/hapus kategori dan skill
- `experience` — pengalaman kerja
- `projects` — project yang dikerjakan
- `certifications` — sertifikasi

---

## 📸 Pasang Foto Profil (Opsional)

1. Taruh foto di `assets/foto.jpg`
2. Di `js/data.js`, ubah baris `avatar`:
   ```js
   avatar: "assets/foto.jpg",
   ```
Kalau `avatar` dikosongkan (`""`), otomatis tampil inisial nama.

---

## 🚀 Tutorial Deploy ke GitHub Pages

### 1. Buat Repo Baru di GitHub

- Buka github.com → klik **New**
- Nama repo: `cv` atau `resume` (terserah)
- Visibility: **Public**
- Jangan centang "Add README"
- Klik **Create repository**

### 2. Push ke GitHub

```bash
# Di folder cv-network ini:
git init
git add .
git commit -m "feat: initial CV"
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### 3. Aktifkan GitHub Pages

1. Di repo → **Settings** → **Pages**
2. Source: pilih **GitHub Actions**
3. Save

### 4. Lihat Hasilnya

Cek tab **Actions** → tunggu centang hijau ✅

CV lu live di:
```
https://USERNAME.github.io/REPO_NAME
```

Bagikan link ini ke siapapun — mereka langsung bisa lihat CV lu di browser.

---

## 🖨️ Download / Print ke PDF

1. Buka link CV di browser (Chrome/Edge recommended)
2. Klik tombol **"Download / Print PDF"** di pojok kanan atas
3. Di dialog print:
   - **Destination**: Save as PDF
   - **Layout**: Portrait
   - **Margins**: None (atau Minimum)
   - Centang **"Background graphics"** agar warna ikut tercetak
4. Klik Save

---

## 🔄 Update CV Setelah Deploy

Cukup:
```bash
# Edit js/data.js
git add .
git commit -m "update: tambah sertifikasi baru"
git push
```
Auto-deploy jalan sendiri dalam ~1-2 menit.
