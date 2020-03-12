function minlength() {
    const caratula = $('#caratula').val();
    if (caratula.length < 5) {
    //   alert('Debe ingresarse al menos 5 caracteres')
      $('#caratula').css('color','red');
      $('#caratula').css('border','black')
    }
  }

  function guionesCuij(e) {
    var contador = $('#cuij').val();

    if(contador.length == 2 || contador.length == 11) {
    //   alert('Hola!')
      $('#cuij').val(contador + '-')    
    }
}

function ValidarCuij(e) {
    const cuij = $('#cuij').val();
    if(cuij.length < 13) {
        // alert('Debe completar el CUIJ');
        $(e).css('border-color','#FF9393');
        $(e).val('');
        var mayor = '<span>Debe completar el CUIJ</span><br>';
        $('#alertas').append(mayor);
    } else {
        $(e).css('border-color','#38A41E')
        $('#alertas').empty(mayor);
    }
}

  function camposVacios(e) {
    if (e.value.length == 0 || e.value == 0) {
        // requeridos()
    //   alert('debes completar el campo para poder enviar el formulario');
    //   alert(e.id+1)
   $('#'+e.id+1).css('display','inline-flex')
    //   var spann = "*'+e+'";
    //   $(input.e).append(spann)
      // e.preventDefault();
      return false;
    } else {
        $('#'+e.id+1).css('display','none')

    }
  }

  //PARA QUE SEA NUMERICO Y SOLO AGREGAR PUNTOS Y COMAS
  function acceptNum(evt){ 
  var nav4 = window.Event ? true : false;
  // NOTE: Backspace = 8, Enter = 13, '0' = 48, '9' = 57 
  var key = nav4 ? evt.which : evt.keyCode; 
  return (key <= 13 || (key >= 48 && key <= 57 || key==46 || key==44));
  }


  //GUARDAR EN FORMATO JSON EL FORMULARIO AL APRETAR "ENVIAR"
  document.addEventListener("DOMContentLoaded", function(e) {
  
      var miForm = document.getElementById('form');
      miForm.onsubmit = function(e) {
      e.preventDefault();
      var formData = new FormData(this);
      var jsonData = {};
      for (var [k, v] of formData) {
          jsonData[k] = v;
      }
      console.log(jsonData);
      $('#contenedor-profesional').fadeIn(3000);
      $('#contenedor-profesional').css('display','flex');
      }
  });

  document.addEventListener("DOMContentLoaded", function(e) {
  
    var miForm = document.getElementById('busqueda-afil');
    miForm.onsubmit = function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var jsonData = {};
    for (var [k, v] of formData) {
        jsonData[k] = v;
    }
    console.log(jsonData);
    }
  });

  // $(function() { #FORMA DE JQUERY PARA SERIALIZAR
  //   $('#busqueda-afil').on('submit', function(e) { 
  //     e.preventDefault();   
  //     const i_cant= $('#i-cant').val();
  //     alert(i_cant);

  //     for(i=1;i<=i_cant;i++) {
  //       console.log($('#'+i));
  //     }  
      
  //     console.log($('#busqueda-afil').serialize());

  //     var jsonData=$('#busqueda-afil span').serializeArray()
  //     .reduce(function(a, z) { a[z.name] = z.value; return a; }, {});
  //     console.log(jsonData);
  //   });
  // });
  
  //PARA QUE EL VALOR SOLO SEA NUMERO

  function requerir(e) {    
      if (e.value.length <= 0) {
          $(e).css('border','1px solid #FF9393');
          $(e).css('color','black');
      }
      else if(e.value < 0) {
          $(e).css('color','red');
      }
      else {
          $(e).css('font-weight','700');
          $(e).css('border','1px solid #38A41E');
      }
  };
  
  $(document).ready(function() {

    $('#caratula, #NAuto, #observacion').on('input', function (e) {
        if (!/^[ a-záéíóúüñ/-]*$/i.test(this.value)) {
            this.value = this.value.replace(/[^ a-z0-9áéíóúüñ/-]+/ig,"");
        }
    });
    // Validamos solamente numeros y caracteres
    $('#cuij, #expte, #AñoExpte').bind('keypress', function (event) {
      var regex = new RegExp("^[0-9]+$"); 
      var key = String.fromCharCode(!event.charCode ? event.which : event.charCode); 
      if (!regex.test(key)) { event.preventDefault(); 
        return false; 
      } 
    });

    var FechaReg = $('#FechaReg').val();
    FechaReg = FechaReg.substring(0,4);

    document.getElementById('NProf')
    document.addEventListener('input', function(evt){
        let NProf = evt.target,
            valido = document.getElementById('numprofesional'),
            apell = evt.target,
            valido2 = document.getElementById('s-apellido');
        document.getElementsByTagName
            //PARA QUE SEA SOLO NUMERO
            const numerico = /^[0-9]+$/;

            //PARA QUE SEA SOLO TEXTO
            const texto = /^[a-z ñ ´ A-Z]+$/;

        //SE MUESTRA UN TEXTO VÁLIDO/INVÁLIDO A MODO DE EJEMPLO
        function validarNumProf(){
            if (numerico.test(NProf.value)) {
                valido.innerText = "✓";
                //$('#NProf').css('color','green');
                $('#numprofesional').css('color','black');
            } 
            else {
                valido.innerText = "✖";
                //$('#NProf').css('color','red');
                $('#numprofesional').css('color','red');
            }
        }
        //SE MUESTRA A UN TEXTO VÁLIDO/INVALIDO A MODO DE EJEMPLO
        function validarApellido() {
            if (texto.test(apell.value)) {
                valido2.innerText = "✓";
                //$('#apell').css('color','green');
                $('#s-apellido').css('color','green');
            } else {
                valido2.innerText = "✖";
                //$('#apell').css('color','red');
                $('#s-apellido').css('color','red');
            }
        }
        //AGREGAMOS LA FUNCION 'ValidarApellido()' CUANDO SE ESCRIBA SOBRE EL INPUT
        $("input[name='APELLIDO']").keypress(function(){
            validarApellido();
        });

        $("input[name='NAF']").keypress(function(){
            validarNumProf();
        });
    }); 

    $('#AñoExpte').focusout(function (a) {
        const AñoExpte = $('#AñoExpte').val();
        const FechaReg = $('#FechaReg').val().substring(0,4);


        if (AñoExpte < 1948 || AñoExpte > 2020) {
            $('#FechaReg').css('color','red');
            $('#AñoExpte').css('color','red');
            // alert('¡ALERTA! debe ser mayor a 1948 y menor a 2020');

            var mayor = '<span>¡ALERTA! debe ser mayor a 1948 y menor a 2020</span><br>';
            $('#alertas').append(mayor);

            // alert('El año del expte no puede ser mayor a la fecha de regulacion ni menor a 1948');
          }

        else if (AñoExpte > FechaReg) {
            $('#FechaReg').css('color','red');
            $('#AñoExpte').css('color','red');

            // alert('El año del expte no puede ser mayor a la fecha de regulacion ni menor a 1948');
            var mayor = '<span> El año del expte no puede ser mayor a la fecha de regulacion ni menor a 1948<span><br>';
            $('#alertas').append(mayor);


            $('#S-FechaReg2').removeClass('fecha');
        } else {
            $('#FechaReg').css('color','#38A41E');
            $('#AñoExpte').css('color','#38A41E');

            $('#alertas').empty();
        }

        if ($("input[name='cuij']").length > 0 && $("input[name='expte']").length == 0) {
            $("input[name='expte']").removeAttr("required");
            $("input[name='expte']").css('color','black');
        }
        if ($("input[name='expte']").length > 0 && $("input[name='cuij']").length == 0) {
            $("input[name='cuij']").removeAttr("required");
            $("input[name='cuij']").css('color','black');
        };
    });

    //AÑO EXPTE NO PUEDE SER MAYOR AL AÑO DE LA FECHA DE REGULACION
    $('#FechaReg').focusout(function (a) {
            const AñoExpte = $('#AñoExpte').val();
            const FechaReg = $('#FechaReg').val().substring(0,4);

        if (FechaReg < AñoExpte){
            $('#FechaReg').css('color','red');
            $('#AñoExpte').css('color','red');

            var mayor = '<span>¡ALERTA! El año de EXPEDIENTE no puede ser mayor a la fecha de regulacion</span><br>';
            $('#alertas').append(mayor);
            // alert('¡ALERTA! El año de EXPEDIENTE no puede ser mayor a la fecha de regulacion');

            a.preventDefault();
        } 
        else if (FechaReg < 1948 || FechaReg > 2020) {
            $('#FechaReg').css('color','red');
            $('#AñoExpte').css('color','red');
            // alert('¡ALERTA! debe ser mayor a 1948 y menor a 2020');

            var mayor = '<span>¡ALERTA! debe ser mayor a 1948 y menor a 2020<span><br>';
            $('#alertas').append(mayor);

            $('#S-FechaReg').addClass('injection');
            $('#S-FechaReg').removeClass('fecha');
            $('#S-FechaReg2').removeClass('injection');

            a.preventDefault();
        } 
        else if (AñoExpte > 2020) {
          $('#FechaReg').css('color','red');
          $('#AñoExpte').css('color','red');
        //   alert('¡ALERTA! El año de EXPEDIENTE no puede ser mayor a la fecha de regulacion');
          
          var mayor = '<span>¡ALERTA! El año de EXPEDIENTE no puede ser mayor a la fecha de regulacion</span><br>';
          $('#alertas').append(mayor);

        }
        else  
        {
          $('#S-FechaReg').removeClass('injection');
          $('#S-FechaReg2').removeClass('injection');            
          $('#S-FechaReg').addClass('fecha');
          $('#S-FechaReg2').addClass('fecha');

          $('#alertas').empty();
          $('#FechaReg').css('color','black');
          $('#AñoExpte').css('color','black');
        }
    });

  });
