

/*const api_url = "http://44.204.28.37:8000/api/pump/"
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
  // Define an array to store the names of the pumps
  const pumps = new Array();
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  var postPumpInfo = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  }
  

  function pumpnames(){
    // This Function save Pump Name
    var pump_names = document.getElementById("pump_name").value;
    var pump_walletts = document.getElementById("pump_wallet").value;
    //alert(pump_names);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", api_url, true);
    xhr.setRequestHeader('Authorization', 'Basic YW5kcmVzOmFuZHJlcw==', 'Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        name: pump_names,
        wallet_name: pump_walletts
    }));
    console.log(pump_names)
    console.log(pump_walletts)
}*/
  
 /* 
var pump_names = document.getElementById("pump_name").value;
var pump_walletts = document.getElementById("pump_wallet").value;  
var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("name", pump_name);
urlencoded.append("wallet_id", "diego1234");
urlencoded.append("wallet_name", pump_wallet);
urlencoded.append("gas_st", "1");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("http://44.204.28.37:8000/api/pump/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));*/



  function pumpnames(){
    // This Function save Pump Name
    var pump_names = document.getElementById("pump_name").value;
    var pump_walletts = document.getElementById("pump_wallet").value;  
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", pump_names);
    urlencoded.append("wallet_id", "diego1234");
    urlencoded.append("wallet_name", pump_walletts);
    // SACAR GAS STATION Y GENERAR WALLET ID SOLO COMO LAS FECHAS
    urlencoded.append("gas_st", "1");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://44.204.28.37:8000/api/pump/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
        console.log(pump_names)
        console.log(pump_walletts)
}