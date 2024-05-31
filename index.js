import 'bs5-lightbox';

import $ from 'jquery';


var btnAbrirModal = document.querySelector("#btnAbrirModal");
var articuloModal = document.querySelector("#articuloModal");

btnAbrirModal.addEventListener("click", function() {
  var modal = new bootstrap.Modal(articuloModal);
  modal.show();
});

