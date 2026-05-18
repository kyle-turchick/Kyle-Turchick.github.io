const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

const setHeaderState = () => {
  header.dataset.stuck = window.scrollY > 12 ? 'true' : 'false';
};
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

navToggle?.addEventListener('click', () => {
  const open = nav.dataset.open === 'true';
  nav.dataset.open = open ? 'false' : 'true';
  navToggle.setAttribute('aria-expanded', String(!open));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.dataset.open = 'false';
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const user = 'kyle.turchick';
const domain = 'gmail.com';
const email = `${user}@${domain}`;
const emailText = document.getElementById('email-text');
const emailLink = document.getElementById('email-link');
if (emailText) emailText.textContent = email;
if (emailLink) emailLink.href = `mailto:${email}?subject=Website%20inquiry`;

document.getElementById('year').textContent = new Date().getFullYear();
