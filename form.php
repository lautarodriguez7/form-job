<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel='stylesheet' type='text/css' href='styles/style.css'>
    <link rel="stylesheet" type="text/css" media="screen" href="jqgrid/css/ui.jqgrid-bootstrap.css" />
    <link rel="stylesheet" type='text/css' href='styles/ui.jqgrid-bootstrap.css'>
    <script src='js/jquery-3.4.1.min.js'></script>
    <script type="text/ecmascript" src="jqgrid/js/i18n/grid.locale-es.js"></script>
    <script type="text/ecmascript" src="jqgrid/js/jquery.jqGrid.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src='js/form.js'></script>
    <script src='js/blur.js'></script>
    <script src='js/busqueda_afiliados.js'></script>
    <script>
        $.jgrid.defaults.responsive = true;
        $.jgrid.defaults.styleUI = 'Bootstrap';
    </script>

    <title></title>
</head>
<body>
    <div id='contenedor'>
        <form action="#" method="post" id='form'>
        <!--<fieldset class='busqueda'>
                    <legend align='center'>AFILIADO:</legend> -->
                    
                <fieldset>
                <div id='formulario'>
                
                <label for='grupo' class='label'>GRUPO:*</label><span class='requeridos  ' id='s-grupo1'>*</span>
                <select id='s-grupo' name='GRUPO'  autofocus='autofocus'>
                
                </select> <br>
                
                <label for='FechaReg' class='label'>Fecha de regulacion:*</label> 
                <input type='date' id='FechaReg' name='CJFECH'style='text-align:end;' class='unorequerido' value='<?php echo date("Y-m-d");?>' min='1948-01-01' max='<?php echo date("Y-m-d");?>' onkeyup="saltar(event,'caratula')" required>
                <!-- <select id='valor_jus' name='valor_jus'> -->
                
                <!-- </select> -->
                <br>

                <label class='label' for='caratula' >Caratula:* </label><span class='requeridos' id='caratula1'>*</span>
                <input type='text' id='caratula' name='CJCARA' class='caracter requerido' style='text-align:initial; width:412px' onfocusout='requerir(this), minlength(), ValidarCaracter(this)' onkeyup="camposVacios(this),saltar(event,'observacion')" required>
                <br>
                
                <label for='observacion' class='label'>Observacion:</label>
                <input type='text' id='observacion' name='CJOBSE' style='text-align:initial; width:415px' onfocusout='ValidarCaracter(this)' onkeyup="saltar(event,'cuij')" class='caracter'>
                <br>
                
                <label for='cuij' id='l-cuij' class='label2 label' style='padding:0px;'>CUIJ:</label><span class='requeridos  ' id='cuij1'>*</span>
                <input type='text' id='cuij' name='CUIJ' placeholder='99-99999999-9' maxlength="13" style='text-align:end;' class='caracter requerido'  onkeypress='guionesCuij(this)' onfocusout='ValidarCuij(this), ValidarCaracter(this)' onkeyup="camposVacios(this), saltar(event,'NAuto')" required>
                <br>

                <label for='NAuto' class='expte label'>Nro. de auto:*</label><span class='requeridos' id='NAuto1'>*</span>
                <input type='text' id='NAuto' name='CJAUTONRO' style='text-align:initial;'class='numero requerido' onfocusout='requerir(this)' onkeyup="camposVacios(this), saltar(event,'expte')" required> <br>
                <label for='expte' id='l-expte' class='label expte label2'>Expediente:*</label><span class='requeridos  ' id='expte1'>*</span>
                <input type='text' name='NRO_EXPE'id='expte' style='text-align:initial;' class='caracter requerido' onkeyup=" camposVacios(this), saltar(event,'AñoExpte')"  onfocusout='requerir(this), ValidarCaracter(this)' required>
                <label for='AñoExpte' id='l-añoexpte'  class='label expte label2 '>/Año Expte:*</label><span class='requeridos  ' id='AñoExpte1'>*</span>
                <input type='text' id='AñoExpte' name='ANO_EXPE' style='text-align:end;' placeholder='Ej: 2020' class='unorequerido requerido' onkeyup="camposVacios(this), saltar(event,'s-circunscripcion');" maxlength='4' required>
                <br>

                <label for='s-circuscripcion' name='Circunscripcion' class='label' id='' required>Circunscripcion:*</label><span class='requeridos  ' id='s-circunscripcion1'>*</span>
                <select id='s-circunscripcion' name='CIRCUN'>
                </select>

                <label for='s-tribunal' name='Tribunal' id='l-tribunal' class='label label2'>Circuito:*</label><span class='requeridos  ' id='s-tribunal1'>*</span>
                <select id='s-tribunal' name='CODTRIB'>
                </select><br>

                <label id='l-cam-juz' class='label' for='cam-juz'>Juzgado:*</label><span class='requeridos  ' id='s-juzgado1'>*</span>
                <select id='s-juzgado' name='CODSDIV' onfocusout=' requerir(this)'>
               
                </select>
                <!--<input type='number' id='cam-juz' class='numero requerido' onfocusout=' requerir(this)' required><br>-->
                <br>
                <!-- <label for='CODSDIV' class='label'>Nominación</label> -->
                <!-- <input type='number' id='nom' name='CODSDIV' style='text-align:end;' class='numero requerido' onfocusout='requerir(this)' onkeyup="camposVacios(this),saltar(event,'libro')"  required> -->
                <!-- <br> -->

                <label for='libro' class='label's>Libro</label>
                <input type='number' name='LIBRO' id='libro' style='text-align:end;' class='numero requerido' onfocusout='requerir(this)' min='1' onkeyup="camposVacios(this), saltar(event,'folio')"  >
                <label for='folio' id='l-folio' class='label label2'>Folio (Hoja):</label>
                <input type='number' id='folio' name='FOLIO' min='1' style='text-align:end;' class='numero requerido' onfocusout='requerir(this)' onkeyup="camposVacios(this), saltar(event,'s-grupo')" ><br>
                
               
                <!-- <input type='number' id='grupo' name='GRUPO'  style='text-align:end;' class='numero requerido' onfocusout=' requerir(this)' required> -->
                <br>
                <span style='font-size:14px;font-weight:500; color:black;'>Los campos que se encuentran con (*) se deben completar para enviar el formulario</span> <br>
                <input type='submit' id='enviar'>
                <input type='reset' id='reset'>
            </div>
            <div id='alertas'></div>
</form>
            <form action="#" id='busqueda-afil'>
            <div id='busqueda'>
                <button class="btn-dark cerrar_modal" id='btn-cerrar'>✖</button>

                    <div id='buscador'>
                    <label for='NProf' id='l-nprof' class='l-busqueda'>N° del Profesional:</label>
                    <input type='search' id='i-NProf' class='busqueda digito' onkeyup="saltar(event,'FechaReg')" >
                    <span id='numprofesional' style='margin-left: 5px; font-size:21px'></span>
                    <label for='apell' id='l-apell' class='l-busqueda'>Apellido:</label>
                    <input type='search' id='i-apellido' class='busqueda caracter'>
                    <span id='s-apellido' style='margin-left: 5px; border-radius: 5px; font-size:21px'></span>
                    <input type='submit' value='Buscar' id='buscar' href='www.google.com.ar'> 
                    </div>

                    <!-- <button id='buscar' type='searc'onclick="location.href='http://www.google.com'">BUSCAR</button>-->
                    <div id='d-datos'>
                        <table id='tabla' class='table table-light table-hover'>
                            <tr>
                            <td id='td-afiliado'>NRO AFILIADO: <span id='sp-afiliado' class='sp-buscar'></span></td>
                            <td>NOMBRE: <span id='sp-nombre' class='sp-buscar'></span></td>
                            <td>APELLIDO: <span id='sp-apellido' class='sp-buscar'></span></td>
                            <td>DNI: <span id='sp-dni' class='sp-buscar'></span></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div id='contenedor-profesional'>
                    <div id='profesional'>
                        <div id='d-honreg'>
                        <div> <label for='HONORARIO_REGULADO' class='l-busqueda' id='l-honreg'>Honorario regulado en pesos ($):</label> </div>
                            <div><input type='number' step='any' id='HONORARIO_REGULADO' name='CJIMPO' onKeyPress='return acceptNum(event)' class='numero requerido' onfocusout='requerir(this)' onchange='SumarHonorario(),sumaTotalHon()'onkeyup="saltar(event,'jus'), dividirHonorarios()" required> </div>
                        </div>
                        <div id='d-jus'>
                            <div><label for='jus' id='l-jus' class='label2 label' >JUS:</label> <!--Un maximo de 4 caracteres hasta 2020 --></div>
                            <div><input type='number' step='any' id='jus' name='JUS' class='numero requerido'  onKeyPress='return acceptNum(event)' onfocusout='requerir(this)' onchange='sumaTotalJus(),SumarJus()' onkeyup="saltar(event,'i-ley'), dividirJUS()" required> <br></div>
                            <div id='AñoJUS' style='color:red; position: absolute; left: 376px; top: 6px; font-size: 10.5px; font-weight: 600;'></div>
                        </div>
                        <div id='d-ley'>
                            <div><label id='l-ley' class='l-busqueda'>PROP LEY</label></div>
                            <div><input type="checkbox" id='i-ley' name='PropLey'></div>
                        </div>  
                        <div id='d-cant'>
                        <div><label id='l-cant' class='l-busqueda'>Cantidad</label></div>
                        <div><input type="text" id='i-cant' value='1' disabled='disabled' maxlength='2' onKeyPress='return acceptNum(event)' onfocusout='SumarJus(), SumarHonorario(),sumaTotalHon(),sumaTotalJus()' onKeyup='numafiliados(),  numeroMaximo(this), dividirHonorarios(), dividirJUS()'></div>
                        </div><br>
                    </div>

                        <div id='d-afil'> 
                            <div class='d-afiliado'>
                                <label for="" class='l-busqueda'>AFILIADO: 1</label>
                               
                            </div>
                            <div class='d-afiliado'>
                                <label for="" style='margin-top:-4px;width:auto;' class='l-busqueda'>Numero Afiliado: </label>
                                <input type="text" name='AFILIADO1' id='i-afil1' class='i-afil'> <br>
                                <div>
                            <span id='1' name='afiliado' class='sp-naf'></span>
                            </div>   
                            </div>        
                            <div class='d-afiliado'>
                                <label for="" id='l-1' class='l-busqueda'>Honorario $:</label>
                                <input class='hon-afil-multi' id='hon-afil1' disabled>
                            </div>
                            <div class='d-afiliado'>
                                <label for=""  style='width:auto;' class='l-busqueda'>Honorario JUS:</label>
                                <input class='hon-jus' id='hon-jus1' disabled>
                            </div><br>
                        </div>
                        <!-- <div><input type="hidden" class="hon-afil-multi sp-afil" name="Hon-Afill1"><input type="hidden" class="hon-jus sp-afil" name="Jus-Afil1"> </div> -->

                        <div id='d-afil-cant'><br> 
                   
                         </div>
                         <div id='total'>
                            <label for="TotalHon">TOTAL: </label>
                            <label id='TotalHON' name='TotalHon'></label>
                            <label for="TotalJus">TOTAL: </label>
                            <label id='TotalJUS' name='TotalJus'></label>

                        </div >
                         <div id='d-botones'>
                             <!-- <input type="submit" onclick="sumaTotalHon()"> -->
                        <input type="submit" value='Confirmar' id='btn-confirmar'>
                        <input type="reset" value='Resetear' id='resetear'>
                        <input type="button" id="DeleteLastRow" onclick="removediv(),sumaTotalHon(),sumaTotalJus(),SumarJus(), SumarHonorario();" value="Borrar" />
                        
                        </div>
                    </div>
                </div>  
                </form>
                <div class="alert alert-danger" role="alert">Los campos que estan en rojo son requeridos para finalizar el formulario</div>
            </div>
            <div class="modal">
                <div class="modal_contenido">
                    <button class="btn-dark" id="cerrar">✖</button>
                    <h4 class="titulo">Seleccione la persona correspondiente</h4>
                    <table id="jqGrid-1">
                    </table>          
                    <div id="jqGridPager-1">
                    </div>             
                </div>
            </div>
            </fieldset>
            </form>  
</body>
</html>
