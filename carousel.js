window.addEventListener('DOMContentLoaded', function() {
  var images = document.getElementsByClassName('carousel-image');
  var currentIndex = 0;

  function startCarousel() {
    showImage(currentIndex);

    setInterval(function() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 2500);
  }

  function showImage(index) {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
    }
    images[index].classList.add('active');
  }

  startCarousel();
});
