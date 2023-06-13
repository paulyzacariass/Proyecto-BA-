// Obtener el formulario
const form = document.querySelector('form');

// Agregar un evento de envío al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validar que los campos no estén vacíos
  if (name === '' || email === '' || message === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Validar el formato del correo electrónico utilizando una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  // Enviar el formulario si todos los campos son válidos
  alert('Formulario enviado correctamente.');
  form.reset(); // Limpiar el formulario
});