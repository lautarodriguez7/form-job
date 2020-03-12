function clickAfiliado() {
  $('#i-afil1').on('click', function() {
    $('#busqueda').fadeIn(800);    
  });
}

function PesosJUS() {
  const fechaReg = $('#FechaReg').val();
  const Honorario = $('#HONORARIO_REGULADO').val();
  if (fechaReg.length > 0 && Honorario.length > 0) {
    $('jus').val('200')
  }
}

function recargar() {
  $('#contenedor-profesional').load();

  var nuevo = '<div class="d-afiliado2">';
  nuevo +='<label for="" >AFILIADO:'+i+'</label><span class="afiliados-s"></span></div>';
  nuevo += '<div class="d-afiliado2"><label for="" id="numAfil'+i+'" style="margin-top:-4px;width:auto;">Numero Afiliado: </label><input type="text" id="i-afil'+i+'" class="i-afil2 "><span id="'+i+'" class="sp-naf sp-afil"></span></div>'
  nuevo += '<div class="d-afiliado2"><label for="" id="l-'+i+'"  >Honorario $:</label><span class="hon-afil-multi  sp-afil" id="hon-afil-multi"></span></div>'
  nuevo += '<div class="d-afiliado2"><label for=""  style="width:auto;">Honorario JUS:</label><span class="hon-jus sp-afil" id="hon-jus-multi"></span></div><br>'  
  $('#d-afil').append(nuevo);
}

function noChecked() {

  var nuevo = '<div class="d-afiliado">';
  nuevo +='<label for="" class="l-busqueda" >AFILIADO:1</label><span class="afiliados-s"></span></div>';
  nuevo += '<div class="d-afiliado"><label class="l-busqueda" for="" style="margin-top:-4px;width:auto;">Numero Afiliado: </label><input type="text" style="margin-left:5px;" id="i-afil1" name="AFILIADO1" class="i-afil" onClick="clickAfiliado()"><br><span id="1" class="sp-naf"></span></div></div>'
  nuevo += '<div class="d-afiliado"><label for="" id="l-1" class="l-busqueda" >Honorario $:</label><input class="hon-afil-multi" id="hon-afil1" disabled></div>'
  nuevo += '<div class="d-afiliado"><label for="" class="l-busqueda " style="width:auto;">Honorario JUS:</label><input class="hon-jus" id="hon-jus1" disabled></div>'  
  $('#d-afil').append(nuevo);
  $('.d-afiliado2').css('display','inline-flex')
}

function numeroMaximo(e) {
  if ($('#i-cant').val() > 20) {
    $('#i-cant').val('1')
    alert('El numero: ' + $('#i-cant').val() + ' es invalido');
  }
}

function limpiar() {
  
  $('#i-cant').val('1');

  $('#d-afil2, #d-afil3, #d-afil4, #d-afil5, #d-afil6, #d-afil7, #d-afil8, #d-afil9').hide();
  $('.d-afiliado2').hide();
  $('.sp-afil').empty();
  $('.sp-N-afil').empty();

}

//CADA VEZ QUE PONGAMOS UN HONORARIO Y LA CANTIDAD DE PROFESIONALES, SE DIVIDIRÁ POR LA CANTIDAD DE PROFESIONALES POR IGUAL
function dividirHonorarios () {
    const cantidad = $('#i-cant').val();
    const honorario = $('#HONORARIO_REGULADO').val();
    const total = honorario/cantidad;
    if (honorario > 0){
    if (cantidad > 0) {
      $('.hon-afil-multi').empty();
      $('.hon-afil-multi').val(total.toFixed(2));
    }
  }
}

function sumaTotalHon() {

  var total = 0;

  $(".hon-afil-multi").each(function() {

    if (isNaN(parseFloat($(this).val()))) {

      total += 0;

    } else {

      total += parseFloat($(this).val());

    }

  });

  // alert(total);
  document.getElementById('TotalHON').innerHTML = total.toFixed(2);
  // $('#totalHON').val(total)

}

function sumaTotalJus() {

  var total = 0;

  $(".hon-jus").each(function() {

    if (isNaN(parseFloat($(this).val()))) {

      total += 0;

    } else {

      total += parseFloat($(this).val());

    }

  });

  // alert(total);
  document.getElementById('TotalJUS').innerHTML = total.toFixed(4);
  // $('#totalHON').val(total)

}

function SumarHonorario() {
  var honorario = $('#hon-afil-multi1').val(); //0.33
  var cant = $('#i-cant').val(); //3
  var total = honorario*cant; // 3 * 0.33 = 0.99
  var HonorarioTotal = $('#HONORARIO_REGULADO').val(); 1.00
  // alert(total+ ' Honorario total: '+HonorarioTotal); //0.99

  var HonRestante = (HonorarioTotal) - (total); //0.01
  var HonRestanteFix = HonRestante.toFixed(2);

  var SumaAlPrimero = parseFloat(HonRestanteFix) + parseFloat(honorario);

  $('#hon-afil-multi1').val(SumaAlPrimero.toFixed(2));

  // alert(SumaAlPrimero)  
}

function SumarJus() {
  var jus = $('#hon-jus-multi1').val();
  var cant = $('#i-cant').val()
  var jusTotal = $('#jus').val(); // 1.000000
  
  var total = jus*cant; //En teoria tendria que dar el jusTotal pero no es perfecto 0.999999
  
  var totalFixed = total.toFixed(6); //0.999999


  var JusRestante = (jusTotal) - (totalFixed); //1.000000 - 0.999999
  var JusRestanteFix = JusRestante.toFixed(6); //0.000001
  // var HonorarioJus = $('#hon-jus-multi1').val() + JusRestanteFix;
  // var ValorTotalSuma = (parseFloat(jus) + parseFloat(JusRestanteFix));
  // var ValorTotalSumaFix = ValorTotalSuma.toFixed(6);

  var SumaAlPrimero = parseFloat(jus) + parseFloat(JusRestanteFix)
  // alert(SumaAlPrimero.toFixed(6));
  $('#hon-jus-multi1').val(SumaAlPrimero.toFixed(6))
}

function dividirJUS () {
  const cantidad = $('#i-cant').val();
  const honorario = $('#jus').val();
  const total = honorario/cantidad
  if (honorario > 0){
    if (cantidad > 0) {
      $('.hon-jus').empty();
      $('.hon-jus').val(total.toFixed(6));
    }
  }
}

function numafiliados (e) {
  const cantidad = $('#i-cant').val();  

  $('#d-afil-cant').empty();

  for (var i=1; i<=cantidad; i++) {
      var nuevo = '<div id="n'+i+'" class="afili" style="display:flex"><div class="d-afiliado2">';
      nuevo +='<label class="l-busqueda" for="">AFILIADO:'+i+'</label><span class="afiliados-s"></span></div>';
      nuevo += '<div class="d-afiliado2"><label class="l-busqueda" for="" id="numAfil'+i+'" style="margin-top:2px;width:auto;">Numero Afiliado: </label><input type="text" id="i-afil'+i+'" name="AFILIADO'+i+'" class="i-afil2"> </div>'
      nuevo += '<div class="d-afiliado2"><label class="l-busqueda" for="" id="l-'+i+'"  >Honorario $:</label><input class="hon-afil-multi sp-afil" name="Hon-Afil'+i+'" id="hon-afil-multi'+i+'" disabled></div>'
      nuevo += '<div class="d-afiliado2"><label for="" class="l-busqueda" style="width:auto;">Honorario JUS:</label><input class="hon-jus sp-afil" name="Jus-Afil'+i+'" id="hon-jus-multi'+i+'" disabled></div><br></div>'  
      nuevo += '<div class="d-afiliados"><span id="'+i+'" name="afiliado'+i+'" class="sp-naf sp-afil"></span></div>';
      // nuevo +='<div><input type="hidden" class="hon-afil-multi hon-afil-multi2 sp-afil" name="Hon-Afill'+i+'"><input type="hidden" class="hon-jus hon-jus2 sp-afil" name="Jus-Afil'+i+'"> </div>';

      $('#d-afil-cant').append(nuevo);
  }

  if (cantidad > 0) {
    $('#d-afil-cant').css('display','block');
    $('.d-afiliado2').css('display','inline-flex')
    $('#d-afil').css('display','none');
    // $('#btn-confirmar, #resetear').css('display','flex')
  } else {
    $('#d-afil-cant').css('display','block');
    $('.d-afiliado2').css('display','inline-flex')
    $('#d-afil').css('display','none');
    // $('#btn-confirmar, #resetear').css('display','flex')
  }
  
  if ($('#i-cant').val() == '') {
    $('#d-afil').css('display','flex');
    $('#d-afil-cant').css('display','none');
    // $('#btn-confirmar, #resetear').css('display','none');
  }

  $(document).ready(function() {
    $('.i-afil2').click(function() {
      window.input_afil = this.id.substring(6,7);
      $('#busqueda').fadeIn(800);    
    });
  });
  
}

function removediv() {
  var count = 0;
  $("#d-afil-cant > .afili").each(function(){
      count = $("#d-afil-cant > .afili").length;

  });
  $("#n" + count).remove();
  $("#" + count).remove();

}

function jqGrid1(datos) {

  $.jgrid.gridUnload('#jqGrid-1');  
      
  $('#jqGrid-1').jqGrid({
    datatype: "local",
    data: datos,
    colModel: [        
      { label: 'NAF', name: 'NAF', width: 10, align: 'center', sorttype:'integer'},
      { label: 'APELLIDO', name: 'APELL', width: 20, align: 'left', sorttype:'integer'},
      { label: 'NOMBRE', name: 'NOMBRES',  width: 20, align: 'left'},           
      { label: 'NRO DOC', name: 'NRODOC',  width: 15, align: 'center'}
      // { label: 'JUZGADO', name: 'JUZGADO',  width: 10, align: 'center'}, 
      // { label: 'MONTO HIST.', name: 'CJIMPO',  width: 12, align: 'right', sorttype:'integer', formatter: 'currency',
      //     formatoptions: {prefix: "$ ", decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2}},
      // { label: 'MONTO ACT.', name: 'SIETE_ACT',  width: 12, align: 'right', sorttype:'integer', formatter: 'currency',
      //     formatoptions: {prefix: "$ ", decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2}},
      // { label: 'FEC. PRES.', name: 'FECHA',  width: 10, align: 'center', sorttype:'date', formatter: 'date',
      //     formatoptions: {srcformat: "d/m/Y", newformat: "d/m/Y"}},
      // { label: 'CAUSAS', name: 'TOTAL',  width: 8, align: 'center', sorttype:'integer'},
      // { label: 'APORT.', name: 'APORTADAS', width: 8, align: 'center', sorttype:'integer'},
      // { label: 'ADEUD.', name: 'ADEUDADAS', width: 8, align: 'center', sorttype:'integer'},
      // { label: 'CONV.', name: 'CONVENIO', width: 8, align: 'center', sorttype:'integer'},
      // { label: 'ESTADO', name: 'ESTADO', width: 9, align: 'center'},
      // { label: 'GRUPO', name: 'GRUPO', width: 8, align: 'center', sorttype:'integer'},
      // { label: 'DOMIC.', name: 'CAMBIO_DOM',  width: 9, align: 'center'}        
    ],
    autowidth: true,
    height: 'auto',
    rowNum: 10,      
    loadonce: true,
    viewrecords: true,      
    altRows:true,           
    pager: "#jqGridPager-1",   

    onSelectRow: function (id) { 
      
    //PARA SELECCIONAR LA FILA AL HACER CLICK, QUE QUERES HACER  
      $('.modal_contenido').hide();
    setTimeout(function(){
      $('.modal').fadeOut('slow');
    },100);

    //CUANDO AGREGAMOS UN AFILIADO Y DESAPARECE EL BUSCADOR
    
    if ($('#d-afil').css('display') == 'flex') {
      // $('#num1').append(datos[id-1]['NAF']);
      $('#i-afil1').val(datos[id-1]['NAF']);
      // $('.i-afil2').html(datos[id-1]['NAF']);
      $('#1').empty();
      $('#1').append(datos[id-1]['APELL']);
      $('#1').append(', ');
      $('#1').append(datos[id-1]['NOMBRES']);
      $('#i-apellido').val('');
      $('#busqueda').css('display','none');
      $('#i-NProf').val('');
      $('#atras1').css('display','flex');
      $('#confirmar1').css('display','flex');
      
    } else {
      $('#i-afil'+window.input_afil).val(datos[id-1]['NAF']);
      $('#'+window.input_afil).empty()
      $('#'+window.input_afil).html(datos[id-1]['APELL']);
      $('#'+window.input_afil).append([', ']);
      $('#'+window.input_afil).append(datos[id-1]['NOMBRES']);
      $('#i-apellido').val('');
      $('#busqueda').css('display','none');
      $('#i-NProf').val('');
      }          
    } 
  });

  $('#jqGrid-1').jqGrid('filterToolbar', { stringResult: true, searchOnEnter: false, defaultSearch: "cn" }); 
}

$(document).ready(function() {

  $('#DeleteLastRow').click(function(){
    var cant = $('#i-cant').val();
    cant = cant - 1;
    $('#i-cant').val(cant);
    dividirHonorarios();
    dividirJUS();

    SumarJus();
    SumarHonorario();

    sumaTotalHon();
    sumaTotalJus();

    if($('#i-cant').val() == 1) {
      $("#i-ley").prop( "checked", false );

    }
  })
  // MOSTRAMOS LA CANTIDAD SI ESTA CHECKED
  $('#i-ley').click(function() {
    if ($('#i-ley').is(':checked')) {
      $('#d-cant').show(this.checked);
      $('#i-cant').prop("disabled", false);
      $('#d-afil').empty();
      $('#i-NProf').html()
      $('#numprofesional').html('');
      $('#i-apellido').html();
      $('#tabla').hide();
      $('#total').css('display','block');

        if ($('#d-cant').val() > 1){ 
        $('#btn-confirmar').css('display','block')
        $('#DeleteLastRow').css('display','block')

        } else {
          $('#d-afil-cant').empty();
          $('#d-afil-cant').css('display','none')
          $('#DeleteLastRow').css('display','block')        
          $('#i-cant').val() == 1;

        }
        if ($('#i-ley').not(':checked')) {
          $('#d-afil-cant').hide();
          $('#d-afil').show();
          $('#d-afil-cant').empty();
          $('#d-afil').css('display','flex');
          
        }
    } 
    
    else {
      $('#i-cant').prop("disabled", true);
      $('#i-NProf,#l-nprof').css('display','inline-block');
      limpiar();
      noChecked();
      // $('#d-afil').css('display','none');
      $('#HONORARIO_REGULADO').val('')
      $('#jus').val('')
      $('#HONORARIO_REGULADO').css('border','black')
      $('#jus').css('border','black')
      $('#d-afil-cant').empty();
      $('#d-afil-cant').hide();

      $('#d-afil').css('display','flex');
      $('#total').css('display','none');
    }
  });

  $('.i-afil').on('click', function() {
        // $(this).show();
        $('#busqueda').fadeIn(800);    
        // $(this).hide();
  });
  //APRETAMOS EL BOTON RESTABLECER
 $('#reset').click(function (e) { 
    $('#busqueda-afil').css('display','none');
    $('input').css('border','1px black');
    $('#alertas').empty();
    $('.requeridos').css('display','none');
    $('#s-juzgado').css('border','1px black');
    $('#FechaReg').css('border','1px black');
  })
  //CERRAMOS EL GRID
  $('#btn-cerrar').click(function (e) { 
        $('#busqueda').fadeOut(1000);
        e.preventDefault();

        if ($('#d-afil').css('display','flex')){
          $('.i-afil').css('display','inline-block')
        }

        if ($('#d-afil-cant').css('display','block' && $('#'+window.input_afil).html().length >= 1)) {
          $('#i-afil'+window.input_afil).css('display','inline-block');
          $('#d-afil').css('display','none');
        }
  })

  $('#cerrar').click(function () { 
        // $('.sp-buscar').empty();
        // $('#d-datos').empty();
        $('.modal_contenido').css('display','none');
        $('#i-apellido').val('')
        $('.modal').fadeOut(1000);
  })

  $('#buscar').click(function(e) {
        
        const nprof = $('#i-NProf').val(),
            apellido = $('#i-apellido').val();
        
        if (apellido.length == 0 && nprof.length > 0) {
            if (nprof > 0 ){
                e.preventDefault();
                $.ajax({
                    url : "/form/afiliado_numero.php",
                    type : "POST",
                    data: { afiliado_numero:nprof  //EN QUE DATO LO BUSCAMOS (afiliado_numero.php)       
                      },
                    dataType : "JSON",
                    success : 
                    function(recibido) {
                            if ($('#d-afil').css('display') == 'flex') {
                              $('#i-afil1').attr('value',(recibido['DATA'][0]['NAF']));
                              $('#1').empty();
                              $('#1').append(recibido['DATA'][0]['APELL'])
                              $('#1').append(', ')
                              $('#1').append(recibido['DATA'][0]['NOMBRES'])
                              $('#busqueda').css('display','none');
                              $('#i-NProf').val('');
                              $('#atras1, #confirmar1').css('display','none');
                            } else {
                              $('#i-afil'+window.input_afil).attr('value',(recibido['DATA'][0]['NAF']));
                              $('#'+window.input_afil).empty();
                              $('#'+window.input_afil).append(recibido['DATA'][0]['APELL'])
                              $('#'+window.input_afil).append(', ')
                              $('#'+window.input_afil).append(recibido['DATA'][0]['NOMBRES'])
                              $('#busqueda').css('display','none');
                              $('#i-NProf').val('');
                            }
                    }
                  });
            } else {
            $('#d-datos').css('Esta poniendo mal');
            }
        } else if (apellido.length > 0 && nprof.length == 0) {
            if (apellido > 0) {
                alert('Esta poniendo numeros y no se permiten en apellido');
            } else {
                e.preventDefault();

                $.ajax({
                    url : "/form/afiliado_apellido.php",
                    type : "POST",
                    data: { afiliado_apellido:apellido  //EN QUE DATO LO BUSCAMOS (afiliado_apellido.php)       
                      },
                    dataType : "JSON",
                    success : function(recibido) {
                      jqGrid1(recibido['DATA']);

                      if ($('#d-afil').css('display') == 'flex') {
                        $('#1').empty()
                        $('#i-afil1').empty();
                        $('#i-afil1').attr('value',(recibido['DATA'][0]['NAF']));
                      } else {
                        $('#i-afil'+window.input_afil).attr('value',(recibido['DATA'][0]['NAF']));
                      }
                    }
                  });
                $('.modal').show();
                $('.modal_contenido').show();
            }
           
        } else if (apellido.length > 0 && nprof > 0){
                //alert('Estan ambos escritos')
                e.preventDefault();
                $.ajax({
                    url : "/form/afiliado_numero.php",
                    type : "POST",
                    data: { afiliado_numero:nprof  //EN QUE DATO LO BUSCAMOS (afiliado_numero.php)       
                      },
                    dataType : "JSON",
                    success :             function(recibido) {
                      if ($('#d-afil').css('display') == 'flex') {
                        $('#i-afil1').attr('value',(recibido['DATA'][0]['NAF']));
                        $('#1').empty();
                        $('#1').append(recibido['DATA'][0]['APELL'])
                        $('#1').append(', ')
                        $('#1').append(recibido['DATA'][0]['NOMBRES'])
                        $('#busqueda').css('display','none');
                        $('#i-NProf').val('');
                        $('#atras1, #confirmar1').css('display','none');
                      } else {
                        $('#i-afil'+window.input_afil).attr('value',(recibido['DATA'][0]['NAF']));
                        $('#'+window.input_afil).empty();
                        $('#'+window.input_afil).append(recibido['DATA'][0]['APELL'])
                        $('#'+window.input_afil).append(', ')
                        $('#'+window.input_afil).append(recibido['DATA'][0]['NOMBRES'])
                        $('#busqueda').css('display','none');
                        $('#i-NProf').val('');
                      }
              }
                  });
            }
        else {
            $('#d-datos').html('¡NO SE ENCONTRÓ SU BUSQUEDA!')
            e.preventDefault();
        }
  });

  $('#HONORARIO_REGULADO').change(function() {
      var $this = $(this); 
      //HACEMOS QUE SI DESPUES DE LA COMA SUPERA 2 NUMEROS (DECIMALES), LO CORTAMOS Y DEJAMOS SOLAMENTE EN DECIMAL
      var cadena = $this.val();
      $this.val(parseFloat(cadena).toFixed(2));
  });
  
  $('#jus').change(function() {
    
      var $this = $(this); 
      //HACEMOS QUE SI DESPUES DE LA COMA SUPERA 6 NUMEROS (DECIMALES), LO CORTAMOS Y DEJAMOS SOLAMENTE EN DECIMAL
        var cadena = $this.val();
        $this.val(parseFloat(cadena).toFixed(6));
  });

  $('#resetear').click(function (e) { 
    e.preventDefault();
    $('.sp-naf, .sp-afil').empty();
    $('#1').remove();
    $('.i-afil2').css('display','flex');
    $('.sp-afil').html('');
    $('.i-afil1').val('');
    $('.i-afil2').val('');
    $('#i-cant').val('1');
    $('.sp-N-afil').empty();
    $('.hon-afil-multi').empty();
    $('.hon-jus').empty();
    $('.i-afil').attr('value','');
    $('.i-afil2').attr('value','');
    $('#HONORARIO_REGULADO').val('');
    $('#jus').val('');
    $('#HONORARIO_REGULADO').css('border','black')
    $('#jus').css('border','black')
  });

  $('#btn-confirmar').click(function(e) {

    $('.hon-afil-multi').attr('disabled', false)
    $('.hon-jus').attr('disabled', false);
      //LE AGREGAMOS LA FUNCION AL CONFIRMAR SI TIENEN EL DISPLAY FLEX O NONE
      const hono_jus = $('#jus');
      const hono_reg = $('#HONORARIO_REGULADO');
      const cantidad = $('#i-cant')
      if ($('#d-afil-cant').css('display','block') && hono_jus.val() > 0 && hono_reg.val() > 0){
        for (var i=1; i<= cantidad.val(); i++) {
        if (cantidad.val() == i) { 
            if (($('#'+i).html().length > 0)) {
              $('#d-afil-cant').hide()
              $('#total').hide()
              // limpiar();
              // recargar();
          } else {
            alert('completar todos los afiliados');
            // $('.i-afil2').css('display','flex');
            // $('.sp-naf').empty();
            // e.preventDesfault();
            limpiar();

            return false;
          }
        }
      }
    }
    if ($('#d-afil').css('display','flex') && hono_jus.val() > 0 && hono_reg.val() > 0){
      $('#d-afil').hide()
      // $('#d-afil').css('display','flex')
      // recargar();
      // noChecked()
      limpiar();
    }

  });
});