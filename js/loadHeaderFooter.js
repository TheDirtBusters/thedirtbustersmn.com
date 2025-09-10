// Function to load a component from an external file
async function loadComponent(elementId, componentUrl) {
    try {
        const response = await fetch(componentUrl);
        const data = await response.text();
        document.getElementById(elementId).innerHTML = data;
    } catch (error) {
        console.error(`Error loading component from ${componentUrl}:`, error);
    }
}

// Function to set the active navigation link and handle the hamburger menu
function setupNavigation() {
    // Get the hamburger icon and the navigation links
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Add a click event listener to the hamburger icon
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle a class on the hamburger menu to animate it
            hamburger.classList.toggle('is-active');

            // Toggle a class on the nav links to show/hide the menu
            navLinks.classList.toggle('is-active');
        });
    }

    // Get the current URL pathname
    const currentPathname = window.location.pathname;

    // Set the active navigation link based on the current page
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        // Check if the link's href matches the current pathname
        if (linkHref === currentPathname) {
            link.classList.add('active');

            // Add a click event listener to the active link to prevent page refresh
            link.addEventListener('click', (event) => {
                event.preventDefault();
            });
        }
    });
}

// When the entire page is loaded, load the header and then set up the navigation
document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('header-placeholder', '/components/header.html');
    await loadComponent('footer-placeholder', '/components/footer.html');

    // Now that the header is on the page, set up the navigation
    setupNavigation();
});