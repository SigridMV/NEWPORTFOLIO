// Obtener elementos del DOM
var menuToggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');

// Agregar evento de clic al ícono de hamburguesa
menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});

// Obtener el enlace de perfil por su ID
var profileLink = document.getElementById('profile-link');

// Agregar evento de clic al enlace de perfil
profileLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

  var profileSection = document.getElementById('profile');
  profileSection.scrollIntoView({ behavior: 'smooth' });
});

// Obtener el enlace de educación por su ID
var educationLink = document.getElementById('education-link');

// Agregar evento de clic al enlace de educación
educationLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

  var educationSection = document.getElementById('education');
  educationSection.scrollIntoView({ behavior: 'smooth' });
});

// Obtener el enlace de experiencia por su ID
var experienceLink = document.getElementById('experience-link');

// Agregar evento de clic al enlace de experiencia
experienceLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

  var experienceSection = document.getElementById('experience');
  experienceSection.scrollIntoView({ behavior: 'smooth' });
});