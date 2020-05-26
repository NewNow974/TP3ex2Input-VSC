<?php
  // Generate timestamp.
  $date = date('H:i:s');

  $hour = date('H');
  $min = date('i');
  $sec = date('s');

  
  //$$tabtab = ["Il est : $data",{"hours":$data1,"minutes":$data2,"seconds":$data3}]
  $tabString = "Il est " . $hour . ":" . $min . ":" . $sec;
  $data = array($tabString,array(
      "hours" => $hour, 
      "minutes" => $min,
      "seconds"=> $sec
  ));
  $json = json_encode($data);
  
  echo $json;
?>