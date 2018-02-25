//llamada a la funcion paises
//paises();
//comprobacion de que los datos sean validos
function comprobarDatos(){
    
    var correcto=true;
    
    //nombre/s
    var expNombre=/^[a-z]{3,10}|[a-z]{3,10}\s[a-z]{3,10}$/;
    var nombreId = document.registro.nombre.value;
    
    if(!expNombre.test(nombreId)){     
        correcto=false;
    }
    //apellido/s
    var expApellidos =  /^[a-z]{3,10}|[a-z]{3,10}\s[a-z]{3,10}$/;
    var apellidosId = document.registro.apellidos.value;
    
    if(!expApellidos.test(apellidosId)){
        correcto=false;       
    }
    //password: 8 caracteres de longitud, una letra mayucula, una minuscula, numero y caracter
    //comprobar si las contraseñas son iguales
    var password, password2;

    password = document.registro.contrasenia.value;
    password2 = document.registro.contrasenia2.value;  

    if(password !== password2){
        correcto=false;
    }
    
    var hasContrasenia = sha256(password); //hashear contraseña
    
    //email
    var expCorreo = /^.+@.+[.].{2,3}$/
    var correoId = document.registro.email.value;
    
    if(!expCorreo.test(correoId)){
        correcto=false;
    }

    if(correcto){
        //mensaje si todos los datos son correctos
        alert("Los datos se han registrado correctamente.");
        comprobarCookie("nombreusuario", correoId, 1);
        comprobarCookie("contrasenia", hasContrasenia, 1);
        
    }else{
        //si las contraseñas no coinciden
        alert('Las contraseñas no coinciden. Corrigelas paras registrarte!');
    }
    
    return correcto;
}
//mostrar elementos ocultos -> tarjeta de credito
function mostrar(){    
    direccion = document.registro.direccion.value;
    
    if(direccion !== ''){
        document.getElementById('oculto').style.display='block';
        document.getElementById('numTarjeta').required = true; 
    }else if(direccion === ''){
        document.getElementById('oculto').style.display='none';
    }
}
//poner los caracteres en minusculas de nombre y apellidos
function minusculas(){
    
    var minusN= document.getElementById('nombre');
    minusN.value = minusN.value.toLowerCase();
    var minusA= document.getElementById('apellidos');
    minusA.value = minusA.value.toLowerCase();
}
//cerrar ventana cookies
function ok(){    
    document.getElementById("barraaceptacion").style.display="none";
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
//creo la cookie
function crearCookie(clave, valor, diasexpiracion) {
    var d = new Date();
    d.setTime(d.getTime() + (diasexpiracion*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = clave + "=" + valor + "; " + expires;
}
//compruebo si existe
function comprobarCookie(clave, valor, diasexpiracion) {
    var resultado = obtenerCookie(clave);
    if (resultado!="") {
        // La cookie existe.
    }else{
        // La cookie no existe.
       crearCookie(clave,valor,diasexpiracion);
    }
}
//paises
/*
function paises(){  
    var paises = new Array("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic",
    "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome",
    "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden",
    "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe");
    
    for(var i=0; i<paises.length; i++){
        
        var option = document.createElement("option"); //creacion elemento option
        option.text = paises[i]; //asignamos que el texto de option sean los paises
        
        if(option.text === 'Spain'){ //si el texto es españa
            
            option.setAttribute('selected',true); //por defecto se muestre
        }
        
        option.value = paises[i];  //el valor sea el nombre del pais
        var select = document.getElementById("pais"); //cogemos el id pais
        select.appendChild(option); //mostramos los elementos select
    }    
}*/

//PAISES
var paisesServer = "http://localhost:3000/paises"; //url del servidor que nos da

//funcion que devuelve el estado del JSON
var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      var readyState = xhr.readyState;
    //si hay respuesta del servidor    
      if (status == 200 && readyState==4) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

//llamada a la funcion JSON
getJSON(paisesServer).then(function(dato) {
    
     for(let pais of dato){
         
        var option = document.createElement("option"); //creacion elemento option
        option.text = pais.name; //asignamos que el texto de option sean los paises
        
        if(option.text === 'Spain'){ //si el texto es españa
            
            option.setAttribute('selected',true); //por defecto se muestre
        }
        
        option.value = pais.name;  //el valor sea el nombre del pais
        var select = document.getElementById("pais"); //cogemos el id pais
        select.appendChild(option); //mostramos los elementos select
     }

}, function(status) {
    console.log(status); //estado
    alert('Error...');  //si no va bien
});
