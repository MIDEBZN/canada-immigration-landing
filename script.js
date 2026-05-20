document.addEventListener('DOMContentLoaded', () => {
  // Countdown Timer Logic
  const countdownText = document.getElementById('countdown-timer');
  if (countdownText) {
    // Set timer for 3 hours from now for demonstration purposes
    let timeInSeconds = 3 * 60 * 60 + 24 * 60 + 15; // 3h 24m 15s

    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const updateTimer = () => {
      if (timeInSeconds <= 0) return;
      
      timeInSeconds--;
      const h = Math.floor(timeInSeconds / 3600);
      const m = Math.floor((timeInSeconds % 3600) / 60);
      const s = Math.floor(timeInSeconds % 60);

      hoursEl.textContent = h.toString().padStart(2, '0');
      minutesEl.textContent = m.toString().padStart(2, '0');
      secondsEl.textContent = s.toString().padStart(2, '0');
    };

    setInterval(updateTimer, 1000);
  }

  // FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});
