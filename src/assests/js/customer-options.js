document.addEventListener('DOMContentLoaded', function() {
    // Mostrar por defecto el testimonio con ID 1 al cargar la página
    showTestimonial(1);
});

function showTestimonial(testimonialId) {
    // Oculta todos los divs de testimonios
    document.getElementById('testimonial-1').style.display = 'none';
    document.getElementById('testimonial-2').style.display = 'none';
    document.getElementById('testimonial-3').style.display = 'none';
    document.getElementById('testimonial-4').style.display = 'none';

    // Muestra el div de testimonio correspondiente al testimonio seleccionado
    document.getElementById('testimonial-' + testimonialId).style.display = 'flex';

    // Reemplaza la información del testimonio correspondiente
    if (testimonialId === 1) {
        document.getElementById('testimonial-text-1').innerText = "¡Increíble! Food Finder nos llevó a descubrir joyas gastronómicas locales que nunca hubiéramos encontrado. Una experiencia verdaderamente única.";
        document.getElementById('testimonial-author-1').innerText = "- Alejandro Ramírez";
        document.getElementById('testimonial-stars-1').src = "assests/images/4-starts.png";
        document.getElementById('testimonial-image-1').src = "assests/images/persona 1-grande.png";
    } else if (testimonialId === 2) {
        document.getElementById('testimonial-text-2').innerText = "¡Impresionante! Gracias a Food Finder, cada salida a cenar se convierte en una aventura emocionante. ¡Altamente recomendado!";
        document.getElementById('testimonial-author-2').innerText = "- Emily Chen";
        document.getElementById('testimonial-stars-2').src = "assests/images/5-starts.png";
        document.getElementById('testimonial-image-2').src = "assests/images/persona 2-grande.png";
    } else if (testimonialId === 3){
        document.getElementById('testimonial-text-3').innerText = "Food Finder hizo que explorar la escena culinaria local fuera fácil y emocionante. Nunca más me faltarán ideas para una noche especial.";
        document.getElementById('testimonial-author-3').innerText = "- Sofia Patel";
        document.getElementById('testimonial-stars-3').src = "assests/images/4-starts.png";
        document.getElementById('testimonial-image-3').src = "assests/images/persona 3-grande.png";
    } else if (testimonialId === 4){
        document.getElementById('testimonial-text-4').innerText = "¡Una herramienta imprescindible para los amantes de la comida! Food Finder nos lleva a descubrir sabores auténticos y lugares encantadores. ¡No salgo sin él!";
        document.getElementById('testimonial-author-4').innerText = "- Luca Rossi";
        document.getElementById('testimonial-stars-4').src = "assests/images/5-starts.png";
        document.getElementById('testimonial-image-4').src = "assests/images/persona 4-grande.png";
    }
}
