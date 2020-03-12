<?php 


include('conexion.php');
$dato_desde_ajax = strtoupper($_POST['afiliado_apellido']); //Lo ingresamos en el DATA del ajax
$data=array();

$sql="SELECT NAF AS AFILIADO, APELL, NOMBRES, NRODOC FROM EN_MAESTRO WHERE APELL like '%$dato_desde_ajax%' ORDER BY APELL, NOMBRES";

$stid = oci_parse($connection, $sql);
oci_execute($stid);

while (($row = oci_fetch_array($stid, OCI_ASSOC)) != false) {    
    
    array_push($data, array('NAF'=>$row['AFILIADO'],'APELL'=>$row['APELL'],'NOMBRES'=>$row['NOMBRES'],
            'NRODOC'=>$row['NRODOC']));  

}

oci_close($connection);

$json_data=array();
$json_data['DATA']=$data;

echo (json_encode($json_data));
?>
