    const menuBtn = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    let isOpen = false;

    menuBtn.addEventListener('click', () => {
      isOpen = !isOpen;
      menu.style.display = isOpen ? 'flex' : 'none';
      overlay.style.display = isOpen ? 'block' : 'none';
      menuBtn.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(0deg)';
    });

    overlay.addEventListener('click', () => {
      isOpen = false;
      menu.style.display = 'none';
      overlay.style.display = 'none';
      menuBtn.style.transform = 'rotate(0deg)';
    });


    document.addEventListener('DOMContentLoaded', function() {
    const tombolSaran = document.getElementById("tombolSaran");
    
    function showCustomSuggestionPopup() {
        hideCustomSuggestionPopup(true); // Paksa hapus jika ada popup sebelumnya

        const overlay = document.createElement('div');
        overlay.classList.add('popup-overlay');
        document.body.appendChild(overlay);

        const popup = document.createElement('div');
        popup.classList.add('suggestion-popup');

        const title = document.createElement('h2');
        title.textContent = 'Saran';
        popup.appendChild(title);

        const exampleText = document.createElement('p');
        exampleText.classList.add('example-text');
        exampleText.textContent = 'ex : tambahin game / app ini dong : "nama game / app"';
        popup.appendChild(exampleText);

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = 'Masukkan saran Anda...';
        inputField.classList.add('suggestion-input');
        popup.appendChild(inputField);

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Kirim';
        submitButton.classList.add('submit-button');
        popup.appendChild(submitButton);

        const closeButton = document.createElement('span');
        closeButton.textContent = '✕';
        closeButton.classList.add('close-button');
        popup.appendChild(closeButton);

        document.body.appendChild(popup);

        requestAnimationFrame(() => {
            overlay.classList.add('show');
            popup.classList.add('show');
        });

        closeButton.addEventListener('click', hideCustomSuggestionPopup);
        overlay.addEventListener('click', hideCustomSuggestionPopup);

        submitButton.addEventListener('click', function() {
            const suggestion = inputField.value.trim();
            if (suggestion) {
                alert('Terima kasih! Saran Anda telah terkirim: ' + suggestion);
                // bisa ditambahkan fetch() ke API kalo mau
                hideCustomSuggestionPopup();
            } else {
                alert('Mohon masukkan saran Anda terlebih dahulu.');
                inputField.focus();
            }
        });

        // Fokuskan ke input field saat popup muncul
        inputField.focus();
    }

    // Fungsi untuk menyembunyikan pop-up
    function hideCustomSuggestionPopup(force = false) {
        const popup = document.querySelector('.suggestion-popup');
        const overlay = document.querySelector('.popup-overlay');

        if (popup && overlay) {
            if (force) {
                // Hapus langsung tanpa animasi
                popup.remove();
                overlay.remove();
            } else {
                // Hapus dengan animasi
                popup.classList.remove('show');
                overlay.classList.remove('show');
                
                setTimeout(() => {
                    popup.remove();
                    overlay.remove();
                }, 300);
            }
        }
    }

    tombolSaran.addEventListener('click', function(e) {
        e.preventDefault();
        showCustomSuggestionPopup();
    });
});