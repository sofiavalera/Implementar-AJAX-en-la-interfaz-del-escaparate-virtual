// básicamente le decimos que al clickear el botón nos enviara a la parte superior de la pagina, y si estamos en la parte superior no se muestre el botón, 
//solo si bajamos en la pagina, de esta forma no estorbaremos al usuario con un elemento que es innecesario al momento de cargar la pagina. 
//Uso jquery porque es mas sencillo de realizar, ademas de que el botón no aparecerá y desaparecerá instantáneamente, sino que tendrá una animación 
//PD: hay que importar Jquery al archivo .html ,poniendo la ruta que nos hemos descargando y el script al final del body de "fecha.js"
$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});