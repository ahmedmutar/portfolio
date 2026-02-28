document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const loader = document.getElementById('submit-loader');
    const msgSuccess = document.getElementById('message-success');
    const msgWarning = document.getElementById('message-warning');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 1. Tampilkan Efek Loading (Opsional sesuai UI Anda)
            if (loader) loader.style.display = 'block';

            // 2. Ambil data dari input form
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;

            // 3. Konfigurasi Nomor WhatsApp (Gunakan kode negara, tanpa tanda +)
            const noWa = "6285947566558"; // Ganti dengan nomor Anda

            // 4. Format Pesan (Menggunakan Template Literals)
            const pesan = `*Halo Admin, Ada Pesan Baru!*%0A%0A` +
                          `*Nama:* ${name}%0A` +
                          `*Email:* ${email}%0A` +
                          `*Subject:* ${subject}%0A%0A` +
                          `*Pesan:*%0A${message}`;

            // 5. Redirect ke WhatsApp
            const urlWa = `https://wa.me/${noWa}?text=${pesan}`;

            // Simulasi delay sedikit agar user melihat loader "Sending..."
            setTimeout(() => {
                if (loader) loader.style.display = 'none';
                if (msgSuccess) msgSuccess.style.display = 'block';
                
                // Buka tab baru WhatsApp
                window.open(urlWa, '_blank');
                
                // Reset form setelah kirim
                contactForm.reset();
            }, 1000);
        });
    }
});