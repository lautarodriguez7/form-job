<?php 


include('conexion.php');
$dato_desde_ajax = $_POST['valor_select1']; //Lo ingresamos en el DATA del ajax en change

$data=array();

$sql="SELECT CODTRIB,JUZGADO 
        FROM JUZ_TRIBUNAL 
        WHERE CIRCUN=$dato_desde_ajax 
        ORDER BY JUZGADO";

$stid = oci_parse($connection, $sql);
oci_execute($stid);

while (($row = oci_fetch_array($stid, OCI_ASSOC)) != false) {    
    
    array_push($data, array('JUZGADO'=>$row['JUZGADO'],'CODTRIB'=>$row['CODTRIB']));  

}

oci_close($connection);

$json_data=array();
$json_data['DATA']=$data;

echo (json_encode($json_data));
?>
