// Paste your FULL JS here
(function() {

  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('slideshowDots');
  let currentSlide = 0;
  let slideInterval;
  const intervalTime = 5000;

  function createDots() {
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('dot');
      if(index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    document.querySelectorAll('.dot')[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  function startInterval() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  if(slides.length > 0){
    slides[0].classList.add('active');
    createDots();
    startInterval();
  }

  const body = document.body;
  const toggleBtn = document.getElementById('themeToggleBtn');

  function setTheme(theme){
    if(theme === 'light'){
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    }
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.contains('light-mode') ? setTheme('dark') : setTheme('light');
  });

})();