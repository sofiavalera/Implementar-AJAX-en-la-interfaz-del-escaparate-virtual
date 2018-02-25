# Implementar AJAX en la interfaz del escaparate virtual
    SOFIA VALERA FERNÁNDEZ

Contenido

INTRODUCCION

PAISES

BUSQUEDA



















## INTRODUCCION

La práctica trata sobre la implementacion de AJAX en el desplegable de paises y en la busqueda de productos, a traves de JSON SERVER, que inlcuye los datos de los productos y todos los paises, llamado BD.JSON.

## PAISES

Me creare un archivo JSON con todos los paises llamado **BD.JSON** y despues mediante DOM los mostrare en el desplegable de **REGISTRO.HTML**

### VALIDAR.JS

Contiene al final del documento JS la funcionalidad para llevarlo a cabo, lo explico a continuacion.

Creo una variable con la URL que nos da el servidor del JSON creado:

    var paisesServer = "http://localhost:3000/paises";

Hago la llamada al servidor para que me devuelva el estado si es "400" es que todo funciona correctamente:

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
    
LLamo a la funcion getJSON creada anteriormente y muestro los paises mediante DOM, a traves de un FOR OF:

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

## BUSQUEDA 

Los productos de busqueda estaran contenidos en el mismo JSON **BD.JSON**, el JS de la busqueda es pruebaSearch.js y el HTML es index.html.

### PRUEBASEARCH.JS

La funcion de la busqueda es la siguiente:

    $("#search").keydown(function(){

        $.getJSON("http://localhost:3000/productos",function(data){
            var search = $("#search").val();
            var regex = new RegExp(search,"i");
            var output;
            $.each(data, function(key, val){

                if((val.nombre.search(regex) != -1)){

                    output += "<tr>";
                    output += "<td id='"+key+"'>"+val.nombre+"</td>";
                    output += "<td id='"+key+"'>"+val.precio+"</td>";    
                    output += "</tr>";


                    if(document.getElementById("search").value === ""){
                        $("table").hide(1000);
                    }else{
                        $("table").show();
                    }
                }
            });

            $("tbody").html(output);
        });
    });
    
Cuando el usuario pulse el teclado hara una llamada a la URL del servidor, y comprobara que el nombre escrito coincide con el del json:

-Si coincide mostrara un desplegable con las busquedas que contentan alguna letra, a medida que se escriba el nombre se ira mostrando una busqueda mas exacta.
-Si no coincide ninguna letra no sacara nada, al borrar el nombre escrito el desplegable desaparecera. 

### INDEX.HTML

El index esta con el grid de Boostrap ya que la pagina sera responsive, y el desplegable de la busqueda cogera estilos de boostrap, lo muestro a continuacion:

        <!--Search-->
        <div class="col-xl-5 col-md-12 col-sm-10 hidden-lg-down">
            <div class="search">
                <form action="#">
                <p>
                   <input placeholder="Buscar productos" type="search" name="buscar" id="search" class="form-control" />    
                </p>
                </form>
                 <table class="table table-striped table-bordered table-hover tablaSearch">
                    <thead>
                       <!-- <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                        </tr> -->
                    </thead>
                    <tbody>
                        <!--Donde se muestran los productos-->    
                    </tbody>
                </table>
            </div>
        </div>

El form contendra el input donde se escribiran los productos deseados, y mediante una tabla se mostraran los productos del JSON.