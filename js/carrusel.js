//funcionalidades JQuery

//variables
var imgItmens = $('.slider li').length; //cuanos cuantos elementos hay de slides
var imgPos = 1; //la posicion de la imagen va ser siempre 1

/*para que sean dinamicos los circulos, con append agregamos elementos html
$('.circulos').append('<li><span class="fa fa-circle"></span></li>');*/

//aumente el valor desde 1 hasta la longitud, para hacerlo dinamico
for(var i=1; i<=imgItmens; i++){
    
    $('.circulos').append('<li><span class="fa fa-circle"></span></li>');
}

$('.slider li').hide(); //ocultamos imagenes
$('.slider li:first').show(); //mostramos solo la 1ºimagen

//para que el primer circulo se pongo en otro color --> damos estilos css
$('.circulos li:first').css({'color':'white'});

//cuando le demos click que se ejecuten
$('.circulos li').click(circulos); //circulos
$('.right span').click(nextSlider); //flecha derecha
$('.left span').click(prevSlider);  //flecha izquierda

//sea automatico

setInterval(function(){ 
     
    nextSlider();
            
}, 4000); //cada 4 segundos

/*--------------FUNCIONES-------------*/
function circulos(){
    var circulosPos= $(this).index() + 1; //el numero de la posicion del elemento y empieze en 1 no 0

    $('.slider li').hide(); //cuando hacemos click se oculte
    $('.slider li:nth-child('+circulosPos+')').fadeIn(); //cuando le demos click a los circulos se muestre la imagen correspondiente
    
   
    $('.circulos li').css({'color': 'grey'});  //los que no tienen click ponlos de color gris
    $(this).css({'color':'white'}); //se pongan de color blanco cuando hagas click en el circulo
    
    imgPos = circulosPos;
}

function nextSlider(){
    
    if(imgPos>= imgItmens){ //cuando llegue a la longitud que es 4, vuelva otra vez a 1
       
        imgPos = 1; 
    }else{
        imgPos++;
    }
        
    $('.circulos li').css({'color': 'grey'}); //los que no tienen click ponlos de color gris
    $('.circulos li:nth-child('+imgPos+')').css({'color':'white'}); //se pongan de color blanco cuando hagas click en el circulo, de cada imgPos

    $('.slider li').hide(); //cuando hacemos click se oculte las diapositivas
    $('.slider li:nth-child('+imgPos+')').fadeIn(); //cuando le demos click a los circulos se muestre la imagen correspondiente
}

function prevSlider(){
    
    if(imgPos <= 1){ //lo contrario a lo anterior
       
        imgPos = imgItmens; 
    }else{
        imgPos--;
    }
        
    $('.circulos li').css({'color': 'grey'}); //los que no tienen click ponlos de color gris
    $('.circulos li:nth-child('+imgPos+')').css({'color':'white'}); //se pongan de color blanco cuando hagas click en el circulo, de cada imgPos

    $('.slider li').hide(); //cuando hacemos click se oculte las diapositivas
    $('.slider li:nth-child('+imgPos+')').fadeIn(); //cuando le demos click a los circulos se muestre la imagen correspondiente
}
