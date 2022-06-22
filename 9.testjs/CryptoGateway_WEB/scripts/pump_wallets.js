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

    fetch("https://44.204.28.37/api/pump/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
        console.log(pump_names)
        console.log(pump_walletts)
}

