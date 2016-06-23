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

<<<<<<< HEAD

$('.visible.datos .ui.sidebar')
  .sidebar({
    context: '.visible.datos .bottom.segment'
  }).sidebar('hide');
=======
$('.ui.sticky')
  .sticky({
    context: '#contenido'
  });

>>>>>>> 7a057fcdc3584e53fc599102c7ea582267a7cc40

});