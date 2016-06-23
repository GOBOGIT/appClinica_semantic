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


$('.visible.datos .ui.sidebar')
  .sidebar({
    context: '.visible.datos .bottom.segment'
  }).sidebar('hide');

});