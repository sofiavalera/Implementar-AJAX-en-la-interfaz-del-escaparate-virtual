//BUSQUEDA

$("#search").keydown(function(){ //al presionar el teclado
    
    $.getJSON("http://localhost:3000/productos",function(data){  //url del servidor
        var search = $("#search").val();
        var regex = new RegExp(search,"i");
        var output;
        $.each(data, function(key, val){
            
            if((val.nombre.search(regex) != -1)){ //comprobar si existe
                
                output += "<tr>";
                output += "<td id='"+key+"'>"+val.nombre+"</td>";
                output += "<td id='"+key+"'>"+val.precio+"</td>";    
                output += "</tr>";
                
                            
                if(document.getElementById("search").value === ""){
                    $("table").hide(1000); //ocultar desplegable
                }else{
                    $("table").show(); //mostrarlo
                }
            }
        });
        
        $("tbody").html(output); //mostrar lo contenido en la variable output que son los datos del JSON --> nombre y precio
    });
});

