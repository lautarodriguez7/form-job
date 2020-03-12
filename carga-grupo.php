<?php 


include('conexion.php');
// $dato_desde_ajax = $_POST['valor_select1']; //Lo ingresamos en el DATA del ajax en change

$data=array();

$sql="SELECT GRUPO AS GRUPO, TO_CHAR(GRUPO, '999') || ' - ' || DESCGRP  AS DESCGRP
        FROM AUT_GRUPO
        WHERE PRIVADO = 'N'
        ORDER BY GRUPO";

$stid = oci_parse($connection, $sql);
oci_execute($stid);

while (($row = oci_fetch_array($stid, OCI_ASSOC)) != false) {    
    
    array_push($data, array('GRUPO'=>$row['GRUPO'],'DESCGRP'=>$row['DESCGRP']));  
    // array_push($data, array('GRUPO'=>$row['GRUPO']));  
}

oci_close($connection);

$json_data=array();
$json_data['DATA']=$data;

echo (json_encode($json_data));
?>
