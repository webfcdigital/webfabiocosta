/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // 1. Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-scrolled')
        } else {
            navbarCollapsible.classList.add('navbar-scrolled')
        }
    };
    // Shrink the navbar 
    navbarShrink();
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // 2. Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // 3. Collapse responsive navbar when a toggler is visible
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

    // =========================================================================
    // MELHORIAS DINÂMICAS ADICIONADAS
    // =========================================================================

    // 4. Inicialização do AOS (Animate on Scroll)
    AOS.init({
        duration: 800, // Duração das animações em ms
        once: true,    // A animação acontece apenas uma vez
    });

    // 5. Efeito Máquina de Escrever (TypeIt)
    new TypeIt("#job-title", {
        strings: ["Fullstack Developer", "Tech Lead"],
        speed: 100,
        breakLines: false,
        autoStart: true,
        loop: true,
    }).go();

    // 6. Lógica do Filtro de Habilidades
    const filterContainer = document.querySelector("#skill-filters");
    const skillColumns = document.querySelectorAll(".skill-column");

    if (filterContainer) {
        filterContainer.addEventListener("click", event => {
            if (event.target.classList.contains("filter-btn")) {
                // Remove a classe 'active' de todos os botões
                filterContainer.querySelector(".active").classList.remove("active");
                // Adiciona 'active' ao botão clicado
                event.target.classList.add("active");

                const filter = event.target.dataset.filter;
                
                skillColumns.forEach(column => {
                    if (filter === 'all' || column.dataset.filter === filter) {
                        column.classList.remove("hide");
                    } else {
                        // Adiciona um pequeno delay antes de esconder para a animação ser visível
                        setTimeout(() => {
                           column.classList.add("hide");
                        }, 0);
                    }
                });
            }
        });
    }

    // 7. Lógica do Botão "Voltar ao Topo"
    const backToTopButton = document.querySelector("#back-to-top-btn");

    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) { // Mostra o botão após rolar 300px
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });
    }

});