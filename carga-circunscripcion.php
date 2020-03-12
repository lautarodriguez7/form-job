<?php 


include('conexion.php');

$data=array();

$sql="SELECT DISTINCT
  CASE WHEN CIRCUN = 1 THEN '1- SANTA FE'
       WHEN CIRCUN = 2 THEN '2- ROSARIO'
       WHEN CIRCUN = 3 THEN '3- VENADO TUERTO'
       WHEN CIRCUN = 4 THEN '4- RECONQUISTA'
       WHEN CIRCUN = 6 THEN '6- FUERA DE LA PROVINCIA'       
       WHEN CIRCUN = 5 THEN '5- RAFAELA'       
       WHEN CIRCUN = 6 THEN '6- FUERA DE LA PROVINCIA'       
       ELSE 'VER' 
  END AS CIRCUNSCRIPCION, CIRCUN

FROM EN_MAESTRO ORDER BY 1";

$stid = oci_parse($connection, $sql);
oci_execute($stid);

while (($row = oci_fetch_array($stid, OCI_ASSOC)) != false) {    
    
    array_push($data, array('CIRCUNSCRIPCION'=>$row['CIRCUNSCRIPCION'],'CIRCUN'=>$row['CIRCUN']));  

}

oci_close($connection);

$json_data=array();
$json_data['DATA']=$data;

echo (json_encode($json_data));
?>
