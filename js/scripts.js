/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Custom Language Switcher
function switchLanguage(lang) {
    // Hide all language elements
    const allLangElements = document.querySelectorAll('.lang');
    allLangElements.forEach(el => el.style.display = 'none');

    // Show elements of the selected language
    const selectedLangElements = document.querySelectorAll(`.lang.${lang}`);
    selectedLangElements.forEach(el => el.style.display = 'block');

    // Update active button state
    const allButtons = document.querySelectorAll('.lang-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-btn[onclick="switchLanguage('${lang}')"]`).classList.add('active');

    // Adjust navigation for block display
     const selectedNavItems = document.querySelectorAll(`#navbarResponsive .lang.${lang}`);
     selectedNavItems.forEach(item => {
        // Find the parent <li> and set its display to 'block'
        let parentLi = item.closest('.nav-item');
        if(parentLi) {
            parentLi.style.display = 'block';
        }
    });

    // Update html lang attribute for accessibility
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

// Initialize with PT as default
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('pt');
});