
// JavaScript function to toggle visibility
function toggleVisibility() {
    const content = document.querySelectorAll('.more-content');
    content.forEach((elem) => {
        elem.classList.toggle('hidden')
    })
}
// //dark mode switch
// const toggleSwitch = document.getElementById('toggleSwitch');
// const slider = toggleSwitch.nextElementSibling;

// const body = document.body;

// toggleSwitch.addEventListener('change', function () {
//     const isDarkMode = toggleSwitch.checked;
//     body.classList.toggle('bg-black', isDarkMode);
//     body.classList.toggle('text-white', isDarkMode);
//     body.classList.toggle('bg-white', !isDarkMode);
//     body.classList.toggle('text-black', !isDarkMode);

//     slider.classList.toggle('bg-white', isDarkMode);
//     slider.querySelector('div').classList.toggle('translate-x-1', isDarkMode);
//     // sunIcon.classList.toggle('translate-x-3', isDarkMode);
//     // moonIcon.classList.toggle('-translate-x-3', isDarkMode);
// });


const sliderWrapper = document.querySelector('.slider-wrapper');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let currentIndex = 0;
  const slides = document.querySelectorAll('.slider-item');
  const totalSlides = slides.length;

  function showSlide(index) {
    const offset = -index * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  nextButton.addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  prevButton.addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  // Automatic sliding
  let slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

  function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000); // Reset the timer
  }
  
  // Initialize the first slide
  showSlide(currentIndex);

