/*
This module is used to check the trongrid api for incoming transactions.

Then:
  if a Tx was found, it will post the Tx to our API with
  "crypto_id" set to the value retrieved from trongrid for the field
  "transaction_id" and "status_tr" set to 3.

  Else if no Tx was found at the trongrid API, it will post a 
  Tx to our API with "crypto_id" set to "first_tx_discard" and
  "status_tr" set to 3.

*/
const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch('https://api.trongrid.io/v1/accounts/TYvYRiuVU6B4dQKTuyhvxxFsJKiJZiTCfL/transactions/trc20?only_confirmed=true&&only_to=true&limit=1', options)
  .then(response => response.json())
  .then(data => {
    /* Here we check and retrieve the value from the trongrid
    api*/
    if (data.data[0].transaction_id)
     {
        
        console.log("there was a tx its id is: " + data.data[0].transaction_id);
        /*
         post a tx to https://www.andreshenderson.tech/api/tran/
         post the transaction_id to the api
        */
         var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("cripto_id", data.data[0].transaction_id);
        urlencoded.append("amount_uy", "0");
        urlencoded.append("total", "0");
        urlencoded.append("status_tr", "3");
        urlencoded.append("user", "2");
        urlencoded.append("pump_id", "1");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        fetch("https://www.andreshenderson.tech/api/tran/", requestOptions)
        .then(response => response.text())
        // .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    // if there was no Tx retrieved from the trongrid api:
    else
    {
    console.log("no data")
    var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("cripto_id", "1");
        urlencoded.append("amount_uy", "0");
        urlencoded.append("total", "0");
        urlencoded.append("status_tr", "3");
        urlencoded.append("user", "2");
        urlencoded.append("pump_id", "1");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        fetch("https://www.andreshenderson.tech/api/tran/", requestOptions)
        .then(response => response.text())
        // .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    })
  .catch(err => console.error(err));