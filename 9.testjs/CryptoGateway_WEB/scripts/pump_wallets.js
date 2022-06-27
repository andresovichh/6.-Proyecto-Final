function pumpnames(){
  // This Function save Pump Name
  var pump_names = document.getElementById("pump_name").value;
  var pump_walletts = document.getElementById("pump_wallet").value;
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("name", pump_names);
  urlencoded.append("id", pump_walletts);
  urlencoded.append("wallet_id", pump_walletts);
  urlencoded.append("wallet_name", pump_walletts);
  // SACAR GAS STATION Y GENERAR WALLET ID SOLO COMO LAS FECHAS
  urlencoded.append("gas_st", "1");



  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("https://www.andreshenderson.tech/api/pump/", requestOptions)
    .then(response => response.text())
    .then(result => console.log("The infro from Tron API :" + result))
    .catch(error => console.log('error', error));
    console.log("Success, a pump was created:")
    console.log("The pump name is: " + pump_names)
    console.log("The wallet adress is :" + pump_walletts)
}
