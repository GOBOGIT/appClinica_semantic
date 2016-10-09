jQuery(document).ready(function($) {

$('.ui.dropdown')
  .dropdown()
;

  $('.filtros .button')
  .on('click', function() {
    $('.filtros .ui.dropdown')
      .dropdown('clear')
    ;
  });



  $('#contenidoAPP .ui.sidebar')
  .sidebar({
    context: $('#contenidoAPP')
  })
  .sidebar('attach events', '#contenidoAPP')
;


$('.ui.sticky')
  .sticky({
    context: '#contenido'
  });


});