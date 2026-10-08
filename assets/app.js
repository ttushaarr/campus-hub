// CampusHub is a static demo. Replace the sample profile and schedule with connected student data when a backend is available.
const todayLabel = document.querySelector('.welcome .eyebrow');
if (todayLabel) {
  const date = new Intl.DateTimeFormat('en', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date());
  todayLabel.textContent = date.toUpperCase();
}

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-link.active')?.classList.remove('active');
    link.classList.add('active');
  });
});
