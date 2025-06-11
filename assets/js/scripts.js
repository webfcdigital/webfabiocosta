document.addEventListener('DOMContentLoaded', function () {
    const btnEn = document.getElementById('lang-en');
    const btnPt = document.getElementById('lang-pt');

    const pdfLink = document.querySelector('a[href*="FabioCostaCV-EN-2025.pdf"]');
    const pdfLinkPt = document.querySelector('a[href*="FabioCostaCV-PT-2025.pdf"]');

    function switchLanguage(lang) {
        // Oculta todos os elementos de ambos os idiomas
        document.querySelectorAll('[lang="en"], [lang="pt"]').forEach(el => {
            el.style.display = 'none';
        });

        // Mostra apenas os elementos do idioma selecionado
        document.querySelectorAll(`[lang="${lang}"]`).forEach(el => {
            el.style.display = 'inline'; // 'inline' funciona bem para spans
        });

        // Corrige o display para blocos de conteúdo principais (divs, p)
        document.querySelectorAll(`div[lang="${lang}"], p[lang="${lang}"]`).forEach(el => {
            el.style.display = 'block';
        });

        // Atualiza os botões
        if (lang === 'en') {
            btnEn.classList.add('active');
            btnPt.classList.remove('active');
            if (pdfLink) pdfLink.parentElement.style.display = 'block';
            if (pdfLinkPt) pdfLinkPt.parentElement.style.display = 'none';
        } else {
            btnPt.classList.add('active');
            btnEn.classList.remove('active');
            if (pdfLink) pdfLink.parentElement.style.display = 'none';
            if (pdfLinkPt) pdfLinkPt.parentElement.style.display = 'block';
        }
    }

    btnEn.addEventListener('click', () => switchLanguage('en'));
    btnPt.addEventListener('click', () => switchLanguage('pt'));

    // Inicia com o idioma inglês
    switchLanguage('en');
});