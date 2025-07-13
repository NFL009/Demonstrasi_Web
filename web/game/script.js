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