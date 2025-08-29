    // menubar----------------->

    const menuBar = document.querySelector('#only-bar');
    const fasolid = document.querySelector('.fa-solid');
    const menu = document.querySelector('#menu');

    menuBar.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        fasolid.classList.toggle('fa-xmark');
    });
