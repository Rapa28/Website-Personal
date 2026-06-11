// --- Galeri Gambar ---
// Mengambil semua gambar thumbnail dan gambar utama
const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.getElementById('main-image');

// Menambahkan event listener ke setiap thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Ganti sumber gambar utama dengan gambar thumbnail yang diklik
        mainImage.src = this.src;
        
        // Hapus kelas 'active' dari semua thumbnail
        thumbnails.forEach(t => t.classList.remove('active'));
        // Tambahkan kelas 'active' ke thumbnail yang diklik
        this.classList.add('active');
    });
});


// --- Pemilihan Ukuran ---
// Mengambil semua tombol ukuran yang 'available' (tersedia)
const sizeButtons = document.querySelectorAll('.size-btn.available');
const currentPriceElement = document.getElementById('current-price');

// Variabel untuk harga dasar (simulasi)
const basePrice = 2999000;

sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Hapus kelas 'active' dari semua tombol ukuran
        sizeButtons.forEach(b => b.classList.remove('active'));
        // Tambahkan kelas 'active' ke tombol ukuran yang diklik
        this.classList.add('active');
        
        // Simulasi perubahan harga (ini hanya contoh sangat sederhana)
        const selectedSize = parseFloat(this.innerText);
        let newPrice = basePrice;
        
        // Contoh logika sederhana: harga naik sedikit untuk ukuran yang lebih besar
        if (selectedSize >= 9) {
            newPrice += 150000;
        } else if (selectedSize >= 7) {
            newPrice += 50000;
        }
        
        // Format harga kembali ke IDR dan tampilkan
        currentPriceElement.innerText = 'IDR ' + newPrice.toLocaleString('id-ID');
    });
});