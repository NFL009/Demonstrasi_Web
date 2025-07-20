document.addEventListener('DOMContentLoaded', function() {
    const infoIcon = document.getElementById('infoIcon');
    let popupOverlay;
ts
    function createPopup() {

        popupOverlay = document.createElement('div');
        popupOverlay.id = 'popupOverlay';
        popupOverlay.classList.add('popup-overlay');

        const popupContent = document.createElement('div');
        popupContent.classList.add('popup-content');

        const closeButton = document.createElement('span');
        closeButton.id = 'closePopup';
        closeButton.classList.add('close-button');
        closeButton.innerHTML = '&times;';

        const popupHeader = document.createElement('div');
        popupHeader.classList.add('popup-header');

        const infoSpan = document.createElement('span');
        infoSpan.classList.add('info');
        infoSpan.textContent = 'Info';

        const perjoinanSpan = document.createElement('span');
        perjoinanSpan.classList.add('perjoinan');
        perjoinanSpan.textContent = ' perjoinan ';

        const ictSpan = document.createElement('span');
        ictSpan.classList.add('ict');
        ictSpan.textContent = 'ICT';

        const divisiSpan = document.createElement('span');
        divisiSpan.classList.add('divisi');
        divisiSpan.textContent = ' divisi ';

        const programSpan = document.createElement('span');
        programSpan.classList.add('program');
        programSpan.textContent = 'program';

        popupHeader.appendChild(infoSpan);
        popupHeader.appendChild(perjoinanSpan);
        popupHeader.appendChild(ictSpan);
        popupHeader.appendChild(divisiSpan);
        popupHeader.appendChild(programSpan);

        const popupBody = document.createElement('div');
        popupBody.classList.add('popup-body');

        const scanQrText = document.createElement('p');
        scanQrText.textContent = 'Scan QR code ini';

        const qrCodeImg = document.createElement('img');
        qrCodeImg.src = 'qr-code.png';
        qrCodeImg.alt = 'QR Code';
        qrCodeImg.classList.add('qr-code');

        const atauText = document.createElement('p');
        atauText.textContent = 'Atau';

        const joinButton = document.createElement('button');
        joinButton.classList.add('join-button');
        joinButton.textContent = 'JOIN';

        joinButton.addEventListener('click', function() {
            window.open('https://forms.gle/4HBZAYDfmXFfrvHu7', '_blank'); // Open in a new tab
        });

        const clickJoinText = document.createElement('p');
        clickJoinText.textContent = 'Klik Join';

        popupBody.appendChild(scanQrText);
        popupBody.appendChild(qrCodeImg);
        popupBody.appendChild(atauText);
        popupBody.appendChild(joinButton);
        popupBody.appendChild(clickJoinText);


        popupContent.appendChild(closeButton);
        popupContent.appendChild(popupHeader);
        popupContent.appendChild(popupBody);
        popupOverlay.appendChild(popupContent);

        document.body.appendChild(popupOverlay);

        closeButton.addEventListener('click', closePopupFunction);
        popupOverlay.addEventListener('click', function(event) {
            if (event.target === popupOverlay) {
                closePopupFunction();
            }
        });
    }

    function openPopup() {
        if (!popupOverlay) {
            createPopup();
        }
        popupOverlay.classList.add('active');
    }

    function closePopupFunction() {
        if (popupOverlay) { 
            popupOverlay.classList.remove('active');

        }
    }

    infoIcon.addEventListener('click', openPopup);

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && popupOverlay && popupOverlay.classList.contains('active')) {
            closePopupFunction();
        }
    });
});