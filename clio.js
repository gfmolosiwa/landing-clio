// === Role Card Toggle Interaction ===
document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.role-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
  
  // === Lazy Fade-In on Scroll ===
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
  });
  
  // === Hero Parallax Scroll Effect ===
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const offset = window.scrollY * 0.3;
    hero.style.backgroundPositionY = `${offset}px`;
  });
  