# TODO - Social Links Image Replacement

## Plan: Ganti Icon Font Awesome dengan Gambar

### Informasi yang Dikumpulkan:
- Social links di footer: Dribbble, Behance, Instagram, LinkedIn, GitHub
- Ingin menggunakan gambar (img) agar bisa edit icon sendiri
- Target: Ganti `<i class="fab fa-..."></i>` dengan `<img src="...">`

### Plan Implementasi:

#### 1. Persiapan Gambar
User perlu menyiapkan 5 gambar icon:
- `assets/img/social-dribbble.png` (atau .svg)
- `assets/img/social-behance.png`
- `assets/img/social-instagram.png`
- `assets/img/social-linkedin.png`
- `assets/img/social-github.png`

Ukuran rekomendasi: 50x50px (sama dengan size button saat ini)

#### 2. Update `index.html`
- Di footer, section social-links:
  ```html
  <!-- Sebelum (icon Font Awesome) -->
  <a href="#" class="social-link"><i class="fab fa-dribbble"></i></a>
  
  <!-- Sesudah (gambar) -->
  <a href="#" class="social-link"><img src="assets/img/social-dribbble.png" alt="Dribbble"></a>
  ```

#### 3. Update `assets/styles.css`
- Tambah styling untuk img di dalam social-link:
  ```css
  .social-link img {
      width: 100%;
      height: 100%;
      object-fit: contain;
  }
  ```

### File yang Diedit:
- `index.html` - Ganti icon dengan img
- `assets/styles.css` - Tambah styling untuk img

### Cara Kerja:
1. User siapkan 5 gambar icon
2. Simpan di assets/img/
3. Saya update HTML & CSS
4. Social links sekarang menggunakan gambar

### Step Selanjutnya:
- [x] User siapkan 5 gambar icon di assets/img/
- [x] Saya update index.html & styles.css
- [ ] User buat/ganti gambar icon di assets/img/:
  - icon1.png (dribbble/awal)
  - icon2.png (behance)
  - icon3.png (instagram)
  - icon4.png (linkedin)
  - icon5.png (github)

