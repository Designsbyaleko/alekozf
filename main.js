// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submit handler
function handleFormSubmit(e) {
  e.preventDefault();

  const mathAnswer = document.getElementById('math').value.trim();
  const status = document.getElementById('form-status');

  if (mathAnswer !== '8') {
    status.textContent = 'Oops! Try solving the riddle again.';
    status.style.color = 'red';
  } else {
    status.textContent = 'Thanks! Your message has been received.';
    status.style.color = 'green';
    e.target.reset();
  }

  return false;
}

// Attach form listener after DOM loads
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
});

// Scroll-reveal for process sections
document.addEventListener('scroll', () => {
  document.querySelectorAll('.process-section').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      sec.classList.add('reveal');
    }
  });
});

// Adjust scroll padding for sticky header
function updateScrollSettings() {
  const header = document.querySelector('header');
  if (!header) return;

  const headerHeight = header.offsetHeight;
  document.documentElement.style.scrollPaddingTop = `${headerHeight}px`;

  document.querySelectorAll('.carousel-slide img').forEach(img => {
    img.style.scrollMarginTop = `${headerHeight}px`;
  });
}

// Run on load and resize
window.addEventListener('DOMContentLoaded', updateScrollSettings);
window.addEventListener('resize', updateScrollSettings);

