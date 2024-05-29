// Obtener el modal
var modal = document.getElementById('myModal');

// Obtener el formulario
var form = document.querySelector('#myModal form');

// Agregar un evento de envío al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío predeterminado del formulario

  // Aquí puedes agregar la lógica para enviar el formulario al servidor

  // Cerrar el modal
  var modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
});