<?php 


include('conexion.php');
 $dato_desde_ajax = $_POST['valor_select1']; //Lo ingresamos en el DATA del ajax en change
//$dato_desde_ajax = '01/06/2019';
var_dump($dato_desde_ajax);
$dato_desde_ajax = date("d-m-Y", strtotime($dato_desde_ajax));
var_dump($dato_desde_ajax);
$data=array();

$sql="SELECT OBTENER_JUS_FECHA('$dato_desde_ajax') AS VALOR_JUS
        FROM DUAL"; 



$stid = oci_parse($connection, $sql);
oci_execute($stid);


while (($row = oci_fetch_array($stid, OCI_ASSOC)) != false) {    

    array_push($data, array('VALOR_JUS'=>$row['VALOR_JUS'])); 
    // array_push($data, array('GRUPO'=>$row['GRUPO']));  
}

oci_close($connection);

$json_data=array();
$json_data['DATA']=$data;

echo (json_encode($json_data));
?>