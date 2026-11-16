
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

// Mobile menu
menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');

    menuToggle.setAttribute(
        'aria-expanded',
        String(isOpen)
    );
});

// Close menu after clicking a link
navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('open');

        menuToggle.setAttribute(
            'aria-expanded',
            'false'
        );
    });
});

// Current year
document.querySelector('#year').textContent =
    new Date().getFullYear();
