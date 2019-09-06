<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>
        <form action="#" method="post">
            <fieldset>
                <legend align='center'>AFILIADO:</legend>
                <label for='n° profesional'>N° del Profesional:</label>
                <input type='number'><br>  
                <label for='apellido'>Apellido:</label>
                <input type='text'> 
            </fieldset> <br>

            <fieldset>
                <legend align='center'>N° DE ORDEN:</legend>
                <br>
            </fieldset> <br>

            <fieldset>
                <legend align='center'>N° AFILIADO:</legend>
                <label for='dni'>DNI: </label>
                <input type='number'> <br>
                <label for='apellido'>APELLIDO:</label>
                <input type='text'>
            </fieldset> <br>

            <fieldset>
                <label for='N° del Profesional' >Fecha de regulacion:</label>
                <input type='date' value='<?php echo date("Y-m-d");?>' min='1947-01-01' max='<?php echo date("Y-m-d");?>' required> <br>
                <label for='caratula'>Caratula: </label>
                <input type='text' required> <br>
                <label for='honorario regulado'>Honorario regulado:</label>
                <input type='number' required>
                <label for='jus' class='label2'>JUS</label>
                <input type='number' required> <br>
                <label for='observacion'>Observacion:</label>
                <input type='text'>
                <label for='cuij' id='cuij' class='label2'>CUIJ</label>
                <input type='text'><br>
                <label for='nro. de auto' class='expte'>Nro. de auto:</label>
                <input type='number' required>
                <label for='expediente' id='expte' class='expte label2'>Expediente:</label>
                <input type='text'>
                <label for='año expediente' class='expte label2'>Año expediente:</label>
                <input type='date' value='<?php echo date("Y-m-d");?>' min='1948-01-01' max='<?php echo date("Y-m-d");?>' required><br>
                <label for='circuscripcion' required>Circunscripcion:</label>
                <input type='number' required>
                <label for='tribunal'class='label2'>Tribunal</label>
                <input type='number' required><br>
                <label for='cam/juz'>Camara/Juzgado</label>
                <input type='number' required><br>
                <label for='nomin/sala'>Nominacion/Sala</label>
                <input type='number' required><br>
                <label for='libro'>Libro</label>
                <input type='number' required>
                <label for='folio' class='label2'>Folio (Hoja)</label>
                <input type='number' required><br>
                <label for='grupo'>Grupo</label>
                <input type='number' required>
            </fieldset><br>
                <input type='submit' onclick='required2()' id='enviar'>
                <input type='reset' id='reset'> <br><br>
        </form>
    </div>
</body>
</html>