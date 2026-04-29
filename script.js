
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Logika Navigasi Aktif
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.forEach(l => l.classList.remove('text-red-600'));
                    link.classList.add('text-red-600');
                    showAlert(`Mengarahkan ke halaman ${link.textContent}...`);
                });
            });

            // 2. Logika Tab Booking
            const tabButtons = document.querySelectorAll('.tab-btn');
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    console.log(`Moda dipilih: ${button.dataset.type}`);
                });
            });

            // 3. Logika Pencarian Tiket
            const searchBtn = document.getElementById('btn-search');
            const inputs = {
                asal: document.getElementById('asal'),
                tujuan: document.getElementById('tujuan'),
                tanggal: document.getElementById('tanggal')
            };

            searchBtn.addEventListener('click', () => {
                let isValid = true;
                
                // Cek Validasi
                Object.keys(inputs).forEach(key => {
                    if (!inputs[key].value) {
                        isValid = false;
                        inputs[key].style.borderColor = '#dc2626';
                    } else {
                        inputs[key].style.borderColor = '#e5e7eb';
                    }
                });

                if (isValid) {
                    searchBtn.disabled = true;
                    searchBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i> MENCARI JADWAL...';
                    
                    setTimeout(() => {
                        showAlert(`Mencari tiket dari ${inputs.asal.value} ke ${inputs.tujuan.value}...`);
                        searchBtn.disabled = false;
                        searchBtn.innerHTML = 'CARI TIKET SEKARANG';
                    }, 2000);
                } else {
                    showAlert('Silakan isi semua kolom pencarian!');
                }
            });

            // Fungsi Alert Kustom
            function showAlert(msg) {
                const alertBox = document.getElementById('custom-alert');
                const alertMsg = document.getElementById('alert-message');
                alertMsg.innerText = msg;
                alertBox.style.display = 'block';
                
                setTimeout(() => {
                    alertBox.style.display = 'none';
                }, 3000);
            }
        });
