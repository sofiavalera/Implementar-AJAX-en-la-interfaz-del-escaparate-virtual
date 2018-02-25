/*Animacion al hacer scroll*/
$(document).ready(function() {

  //ventana y elementos de animación
  var animation_elements = $.find('.animation-element'); 
  var web_window = $(window);

  //comprueba si hay contenedores de animación actualmente a la vista
  function check_if_in_view() {
  //obtener información actual de la ventana
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterar a través de los elementos para ver si está a la vista
    $.each(animation_elements, function() {

      //obtener la sinformación de los elementos
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //comprueba si este contenedor actual está visible (se puede ver si existe entre el espacio visible de la ventana gráfica)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      }/* else {
        element.removeClass('in-view');
      } */
    });

  }

  // al hacer scroll detectar elementos a la vista
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //desencadenar nuestro evento de desplazamiento en la carga inicial
  $(window).trigger('scroll');

});