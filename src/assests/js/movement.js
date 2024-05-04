document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.querySelector('.carrusel');
    const elementos = document.querySelectorAll('.elemento');
    let currentIndex = 0;

    function scrollToLeft() {
        currentIndex = Math.max(currentIndex - 1, 0);
        const scrollAmount = elementos[currentIndex].offsetLeft;
        carrusel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    function scrollToRight() {
        currentIndex = Math.min(currentIndex + 1, elementos.length - 1);
        const scrollAmount = elementos[currentIndex].offsetLeft;
        carrusel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    document.querySelector('.arrow-left').addEventListener('click', scrollToLeft);
    document.querySelector('.arrow-right').addEventListener('click', scrollToRight);
    
});


window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;
    var footerOffset = footer.offsetTop;
  
    if (windowHeight + window.pageYOffset >= bodyHeight) {
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
  });
