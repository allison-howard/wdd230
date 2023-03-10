<?php
$url = $_GET['url'];
$headers = array(
  'Origin: https://goosee5.github.io',
  'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
);
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$response = curl_exec($ch);
curl_close($ch);
header('Content-Type: application/json');
echo $response;
?>