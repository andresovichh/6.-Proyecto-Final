/*
This function is intended to send information to the
API that will be used to check if the TX goes through or not.
*/
var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("pump_id", "pump_id_value");
urlencoded.append("cripto_id", "wallet_address");
urlencoded.append("amount_uy", "peso_amount");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://44.204.28.37/api/pump/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));