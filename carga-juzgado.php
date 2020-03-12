<?php 


include('conexion.php');
$dato_desde_ajax = $_POST['valor_select1']; //Lo ingresamos en el DATA del ajax en change

$data=array();

$sql="SELECT ID_CIRC||ID_SUBDIV AS CLAVE_JUZGADO, DESC_DIV || ' - ' || DESCSDIV AS JUZGADO 
    FROM V_JUZGADOS 
    WHERE CODTRIB = $dato_desde_ajax
    ORDER BY DESC_DIV, DESCSDIV";

$stid = oci_parse($connection, $sql);
oci_execute($stid);

while (($row = oci_fetch_array($stid, OCI_ASSOC)) != false) {    
    
    array_push($data, array('CLAVE_JUZGADO'=>$row['CLAVE_JUZGADO'],'JUZGADO'=>$row['JUZGADO']));  
}

oci_close($connection);

$json_data=array();
$json_data['DATA']=$data;

echo (json_encode($json_data));
?>
