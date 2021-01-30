const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const nav = document.getElementById('nav');

// Toggle Nav
// Here the toggle mvoes the entire body
// toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

let modalToggle = false;

toggle.addEventListener('click', () => {
  modalToggle = !modalToggle;
  if (modalToggle) {
    nav.style.animationName = 'navopen';
    nav.style.animationDuration = 'var(--animation-duration)';
    nav.style.transform = 'translateX(0%)';

    toggle.style.animationName = 'movebutton-right';
    toggle.style.animationDuration = 'var(--animation-duration)';
    toggle.style.left = '220px';
  } else {
    nav.style.animationName = 'navclose';
    nav.style.animationDuration = 'var(--animation-duration)';
    nav.style.transform = 'translateX(-100%)';

    toggle.style.animationName = 'movebutton-left';
    toggle.style.animationDuration = 'var(--animation-duration)';
    toggle.style.left = '20px';
  }
});

// Show modal

open.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

// Hide modal
close.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

// Hide mdoal on outside click
window.addEventListener('click', (e) => {
  e.target === modal ? modal.classList.remove('show-modal') : false;
});
