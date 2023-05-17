// II.07. First we're saving the toggle buttons:
const toggles = document.querySelectorAll('.faq-toggle');

// II.08. We're going to loop them over: 
toggles.forEach(toggle => {
    // II.09. Inside here we're adding an eventlistener:
    toggle.addEventListener('click', () => {
        // NOTE: Here we're adding ".parentNode" element that references the parent element (and we can call the classlist on it)
        toggle.parentNode.classList.toggle('active');
    })
})



