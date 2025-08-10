// Responsive navigation menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Optional: Highlight active navigation link
navLinkItems.forEach(link => {
    link.addEventListener('click', function() {
        navLinkItems.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        // Close nav on mobile after click
        if(window.innerWidth < 900) navLinks.style.display = 'none';
    });
});

// Optional: Highlight nav link on scroll
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 80;
    navLinkItems.forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            navLinkItems.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

/* for camera see more option*/
function toggleCameraVisibility() {
    const hiddenItems = document.querySelectorAll('#cameras .product-card.hidden');
    const btn = document.getElementById('seeMoreCamerasBtn');

    hiddenItems.forEach(item => {
        item.style.display = item.style.display === 'block' ? 'none' : 'block';
    });

    btn.textContent = btn.textContent === 'See More' ? 'See Less' : 'See More';
}

/*for lenses */
function toggleMoreLenses() {
    const hiddenCards = document.querySelectorAll('.product-card.hidden');
    hiddenCards.forEach(card => card.style.display = (card.style.display === 'block') ? 'none' : 'block');

    const btn = document.getElementById('seeMoreBtn');
    btn.textContent = btn.textContent === 'See More' ? 'See Less' : 'See More';
}