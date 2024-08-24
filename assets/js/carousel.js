document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;
    const interval = 3000; // Tiempo en milisegundos entre cada cambio
  
    function showNextItem() {
      items[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].classList.add("active");
    }
  
    setInterval(showNextItem, interval);
  });