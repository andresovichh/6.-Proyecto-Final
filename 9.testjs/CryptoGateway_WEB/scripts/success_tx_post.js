function post_success_tx() {
var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("pump_id", sessionStorage.getItem("pump_id"));
urlencoded.append("cripto_id", sessionStorage.getItem("cripto_id"));
urlencoded.append("amount_uy", sessionStorage.getItem("amount_uy"));
urlencoded.append("total", sessionStorage.getItem("amount_to_usd"));
urlencoded.append("fuel", sessionStorage.getItem("type"));
urlencoded.append("user ", "1");
urlencoded.append("liters", sessionStorage.getItem("liters"));

urlencoded.append("status_tr", "1");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://www.andreshenderson.tech/api/tran/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}