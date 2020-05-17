<?php
  // Generate timestamp.
  $data = date('H:i:s');
  $data1 = date('H');
  $data2 = date('i');
  $data3 = date('s');

  
  //$$tabtab = ["Il est : $data",{"hours":$data1,"minutes":$data2,"seconds":$data3}]
  $tab= array("Il est : $data", array("hours: $data1", "minutes: $data2", "seconds: $data3"));

  $json = json_encode($tab);
  print_r($tab);
  print_r($json);
?>