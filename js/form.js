function saltar(e,id)
{
	// Obtenemos la tecla pulsada
	(e.keyCode)?k=e.keyCode:k=e.which;
 
	// Si la tecla pulsada es enter (codigo ascii 13)
	if(k==13)
	{
		// Si la variable id contiene "submit" enviamos el formulario
		if(id=="submit")
		{
			document.forms[0].submit();
		}else{
			// nos posicionamos en el siguiente input
			document.getElementById(id).focus();
		}
	}
}

function ValidarCaracter(e) {
    var caracter = e.value.toUpperCase();
    if (e.value.length >= 1) {
        if (caracter == 'SELECT' || caracter == 'INTO' ||
        caracter == 'FROM' ||   caracter == 'VALUES' ||
        caracter == 'WHERE' ||  caracter == 'INSERT' ||
        caracter == 'AND' ||    caracter == 'TABLE' ||
        caracter == 'OR' ||     caracter == 'ID' ||
        caracter == 'HTTP' || caracter == 'HTTP://' ||
        caracter == 'HTTPS' ||  caracter == 'HTTPS://' ||
        caracter == 'HTTP:' || caracter == 'HTTPS:' ||
        caracter == 'FTP') {
            $('#S-'+e.id).addClass('injection');
            $('#S-'+e.id).removeClass('injection2');
            $('#'+e.id).css('color','red');
            alert('Hay Injection!')
        } 
        else {
            $('#S-'+e.id).removeClass('injection');
            $('#S-'+e.id).addClass('injection2');
            $('#'+e.id).css('color','black');
        }
    } 
};

$(document).ready(function() {
    //CARGAMOS EL GRUPO
    document.getElementById("s-grupo").options[0]=new Option('Seleccione una opcion', 0);
    $.ajax({
    url : "/form/carga-grupo.php",
    type : "POST",
    data: {            
        },
    dataType : "JSON",
    success : function(recibido) {
        for(var i = 0; i<recibido['DATA'].length; i++){
            document.getElementById("s-grupo").options[i+1]=new Option(recibido['DATA'][i]['DESCGRP'], recibido['DATA'][i]['GRUPO']);
        }
    }
    });

    //CARGAMOS VALOR JUS
    // $("#FechaReg").change(function(){
    //     const FechaReg = $("#FechaReg");
    //         $.ajax({
    //         url : "/form/carga-jus.php",
    //         type : "POST",
    //         data: { valor_select1:FechaReg.val() //En que dato lo buscamos (prueba.ajax2.php)      
    //         },
    //         dataType : "JSON",
    //         success : function(recibido) {  
    //         for(var i = 0; i<recibido['DATA'].length; i++){
    //             document.getElementById("valor_jus").options[i]=new Option(recibido['DATA'][i]['VALOR_JUS']);
    //         }
    //             // console.log(recibido['DATA'][1]['VALOR_JUS']);

    //         }
    //     });
    // }); 
    // document.getElementById("valor_jus")=append('Hola');
    $('#valor_jus').append('Hola')
    $("#FechaReg").change(function(){

        const Fecha = $("#FechaReg");
        // if (Fecha.val() == 0) {
        //     $('#valor_jus option').remove(); //Limpiamos el select si está en 0 (SELECCIONE UNA OPCION)
        // } else if (Fecha.val() > 0 ) { //Si el valor es mayor a 1, buscamos en AJAX
        //     $('#valor_jus').empty();
            //CARGAMOS EL TRIBUNAL
            $.ajax({
            url : "/form/carga-jus.php",
            type : "POST",
            data: { valor_select1:Fecha.val() //En que dato lo buscamos (prueba.ajax2.php)      
            },
            dataType : "JSON",
            success : function(recibido) { 
                $('#valor_jus').empty(); 
            // for(var i = 0; i<recibido['DATA'].length; i++){
            //     // document.getElementById("valor_jus").options[1]=new Option(recibido['DATA'][0]['VALOR_JUS']);
            //     $('#valor_jus').val('');
            // }
        }
      });
        // }
    });

    //CARGAMOS EL SELECT DE LA CIRCUNSCRIPCION
    document.getElementById("s-circunscripcion").options[0]=new Option('Seleccione una opcion', 0);
    $.ajax({
        url : "/form/carga-circunscripcion.php",
        type : "POST",
        data: {            
          },
        dataType : "JSON",
        success : function(recibido) {
            for(var i = 0; i<recibido['DATA'].length; i++){
                document.getElementById("s-circunscripcion").options[i+1]=new Option(recibido['DATA'][i]['CIRCUNSCRIPCION'], recibido['DATA'][i]['CIRCUN']);
            }
        }
    });

    //CARGAMOS EL SELECT CIRCUITO
    $("#s-circunscripcion").change(function(){

        const circuns = $("#s-circunscripcion");
        if (circuns.val() == 0) {
            $('#s-tribunal option').remove(); //Limpiamos el select si está en 0 (SELECCIONE UNA OPCION)
        } else if (circuns.val() > 0 ) { //Si el valor es mayor a 1, buscamos en AJAX
            $('#s-tribunal').empty();
            //CARGAMOS EL TRIBUNAL
            document.getElementById("s-juzgado").options[0]=new Option('Seleccione una opcion', 0);
            $.ajax({
                url : "/form/carga-tribunal.php",
                type : "POST",
                data: { valor_select1:circuns.val() //En que dato lo buscamos (prueba.ajax2.php)      
                },
                dataType : "JSON",
                success : function(recibido) {  
                for(var i = 0; i<recibido['DATA'].length; i++){
                    document.getElementById("s-tribunal").options[i]=new Option(recibido['DATA'][i]['JUZGADO'], recibido['DATA'][i]['CODTRIB']);
                }
                }
            });
        }
    });
    
    //   CARGAMOS EL SELECT DE JUZGADO
    $("#s-tribunal").change(function(){
    const tribunal = $("#s-tribunal");
    if (tribunal.val() == 0) {
        $('#s-juzgado option').remove(); //Limpiamos el select si está en 0 (SELECCIONE UNA OPCION)
    } else if (tribunal.val() > 0 ) { //Si el valor es mayor a 1, buscamos en AJAX
        $('#s-juzgado').empty();
        $.ajax({
            url : "/form/carga-juzgado.php",
            type : "POST",
            data: {  
                valor_select1:tribunal.val()
            },
            dataType : "JSON",
            success : function(recibido) {
                for(var i = 0; i<recibido['DATA'].length; i++){
                    document.getElementById("s-juzgado").options[i+1]=new Option(recibido['DATA'][i]['JUZGADO'], recibido['DATA'][i]['CLAVE_JUZGADO'] );
                }
            }
        });
    }
    });

    $('#enviar').click(function(e) {
        if ($("input[id='cuij']").length > 0 && $("input[name='expte']").length == 0) {
            $("input[id='expte']").removeAttr("required");
        }
        if ($("input[id='expte']").length > 0 && $("input[name='cuij']").length == 0) {
            $("input[id='cuij']").removeAttr("required");
        }

        var grupo = $('#s-grupo');
        var circun = $('#s-circunscripcion');

        if(grupo.val() == 0) {
            alert('Debes completar el grupo');
            e.preventDefault();
            return false;
        }       
        
        if(circun.val() == 0) {
            // alert('Debes completar circunscripcion');
            e.preventDefault();
            var mayor = '<span>Debes completar circunscripcion</span><br>';
            $('#alertas').append(mayor);
            return false;
        } else {
            $('#alertas').empty(mayor);
        } 
        
        var cuij = $('#cuij').val();

        var cambiar = cuij.replace('-','');
        var cambiar2 = cambiar.replace('-','');

        $('#cuij').val(cambiar2);

 
    }); 
});
