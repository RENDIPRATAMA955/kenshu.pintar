# TODO - WhatsApp Form Integration

## Plan: Implementasi WhatsApp Chat Feature

### Informasi yang Dikumpulkan:
- Form saat ini: Nama Lengkap + Pesan (email sudah dihapus)
- Target WhatsApp: +6281990637492
- Requirement: Pesan terkirim persis seperti yang diketik user

### Plan Implementasi:

#### 1. Update `assets/scripts.js`
- Modifikasi form submission handler
- Hapus logic email lama
- Tambah logic WhatsApp:
  - Ambil nilai input (nama + pesan)
  - Format URL: `https://wa.me/6281990637492?text=...`
  - Encode message untuk URL safety
  - Redirect ke WhatsApp di new tab

### File yang Diedit:
- `assets/scripts.js` - Update form submission logic

### Cara Kerja Baru:
1. User isi form (nama + pesan)
2. Klik "Kirim Pesan"
3. Buka WhatsApp di tab baru dengan pesan persis

### Step Selanjutnya:
- [x] Implementasi di assets/scripts.js
- [ ] Test functionality

