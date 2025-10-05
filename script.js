// Smooth scrolling for anchor links (native behavior prevention)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Clock + last updated (updates every second)
function startTime(){
  const now = new Date();
  const clockEl = document.getElementById('clock');
  if(clockEl) clockEl.textContent = now.toString();
  setTimeout(startTime, 1000);
}
