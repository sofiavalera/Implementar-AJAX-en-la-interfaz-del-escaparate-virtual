//comprobar si el usuario y la contraseña coinciden
function comprobarDatos(){
    
    var nombreUser = document.signup.email.value;
    var contraseniaUser = sha256(document.signup.contrasenia.value);

    if(obtenerCookie("nombreusuario") === nombreUser && obtenerCookie("contrasenia") === contraseniaUser){
        
        alert("Hola "+nombreUser);
        //creo una cookie para hacer la comprobacion y cambiar log In por Log Out
        document.cookie="sesion=creada";

    }
    
}
//acceder al valor que tiene una cookie a partir del nombre que tiene.
function obtenerCookie(clave){  //se le pasa el nombre de la cookie

    var name = clave + "=";
    var ca = document.cookie.split(';'); //separar las cookies
    for(var i=0; i<ca.length; i++) { //tamaño total
        var c = ca[i];
        //nos devuelve el contenido que hay despues del nombre
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
//Cerrar ventana de cookies
function ok(){
    
    document.getElementById("barraaceptacion").style.display="none";
}
//cuando se carge la pagina entera
document.addEventListener('DOMContentLoaded', function(logueado) {
   
    if(obtenerCookie("sesion") != ""){
        
         document.getElementById("log").innerHTML="log out |"; //cambio logIn por logOut
    }
    
    
}, false);

//borra la cookie si existe de sesion
function cerrarSesion(){
    
    if(obtenerCookie("sesion") != ""){
        
          document.cookie = 'sesion' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}