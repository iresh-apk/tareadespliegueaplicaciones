document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicacion cargada correctamente');
    
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function validatePage() {
    const requiredElements = ['header', 'main', 'footer'];
    let isValid = true;
    
    requiredElements.forEach(element => {
        if (!document.querySelector(element)) {
            console.error(`Elemento ${element} no encontrado`);
            isValid = false;
        }
    });
    
    return isValid;
}

validatePage();
