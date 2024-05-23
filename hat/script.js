document.addEventListener('DOMContentLoaded', () => {
    const hat = document.getElementById('hat');
    let active = false;
    let currentX, currentY, initialX, initialY;
    let xOffset = 0, yOffset = 0;

    const addButton = document.getElementById('addButton');
    const fileInput = document.getElementById('fileInput');
    const box = document.querySelector('.box');

    hat.addEventListener('mousedown', dragStart);
    window.addEventListener('mouseup', dragEnd);
    window.addEventListener('mousemove', drag);

    addButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.classList.add('draggable');
                box.appendChild(img);
                makeDraggable(img);
            };
            reader.readAsDataURL(file);
        }
    });

    function dragStart(e) {
        if (e.target === hat) {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
            if (e.target === hat) {
                active = true;
            }
        }
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        active = false;
    }

    function drag(e) {
        if (active) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;
            setTranslate(currentX, currentY, hat);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }

    function makeDraggable(el) {
        let isDragging = false, startX, startY;

        el.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX - el.offsetLeft;
            startY = e.clientY - el.offsetTop;
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
        });

        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                el.style.left = `${e.clientX - startX}px`;
                el.style.top = `${e.clientY - startY}px`;
            }
        });
    }

    makeDraggable(hat);
});
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
  