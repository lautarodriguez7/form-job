<?php 


include('conexion.php');
$dato_desde_ajax = $_POST['afiliado_numero']; //Lo ingresamos en el DATA del ajax
$data=array();

$sql="SELECT NAF, APELL, NOMBRES, NRODOC FROM EN_MAESTRO WHERE NAF=$dato_desde_ajax";

$stid = oci_parse($connection, $sql);
oci_execute($stid);

while (($row = oci_fetch_array($stid, OCI_ASSOC)) != false) {    
    
    array_push($data, array('NAF'=>$row['NAF'],'APELL'=>$row['APELL'],'NOMBRES'=>$row['NOMBRES'],
            'NRODOC'=>$row['NRODOC']));  

}

oci_close($connection);

$json_data=array();
$json_data['DATA']=$data;

echo (json_encode($json_data));
?>
