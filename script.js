document.addEventListener("DOMContentLoaded", function() {
    // Initial pop-ups
    document.getElementById('initialPopUp1').classList.remove('hidden');
    document.getElementById('initialPopUp2').classList.remove('hidden');
    document.getElementById('initialPopUp3').classList.remove('hidden');
  
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Add scroll event listener
    window.addEventListener('scroll', function() {
      const scrollPopUp1 = document.getElementById('scrollPopUp1');
      const scrollPopUp2 = document.getElementById('scrollPopUp2');
      const scrollPopUp3 = document.getElementById('scrollPopUp3');
  
      if (isInViewport(scrollPopUp1)) {
        scrollPopUp1.classList.remove('hidden');
        scrollPopUp1.classList.add('pop-up');
      }
  
      if (isInViewport(scrollPopUp2)) {
        scrollPopUp2.classList.remove('hidden');
        scrollPopUp2.classList.add('pop-up');
      }
  
      if (isInViewport(scrollPopUp3)) {
        scrollPopUp3.classList.remove('hidden');
        scrollPopUp3.classList.add('pop-up');
      }
    });
  });
  