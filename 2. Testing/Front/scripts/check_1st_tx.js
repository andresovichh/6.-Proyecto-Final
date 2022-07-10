/*
This module is used to check the trongrid api for incoming transactions
AND creates 1st transaction against which we will check
for new transactions.

Then:
  if a Tx was found, it will post the Tx to our API with
  "crypto_id" set to the value retrieved from trongrid for the field
  "transaction_id" and "status_tr" set to 3.

  Else if no Tx was found at the trongrid API, it will post a 
  Tx to our API with "crypto_id" set to "first_tx_discard" and
  "status_tr" set to 3.

*/

/* 
First we have to get the wallet_id of the user-selected pump
in order to pass it to the functions below that will check if
there have been any transactions against the trongri api.
*/
// var pump_id = document.getElementById("pump_wallet").value;

//var pump_id = document.getElementById("pump_wallet").value;

function first_tx() {
  const options = {method: 'GET', headers: {Accept: 'application/json'}};
  var tx_value;
  var tx_id;
  var pump_id = document.getElementById("pump_wallet").value;
  fetch('https://api.trongrid.io/v1/accounts/' + pump_id + '/transactions/trc20?only_confirmed=true&&only_to=true&limit=1', options)
          .then(response => response.json())
          .then(data => {
          /* Here we check and retrieve the value from the trongrid
          api, if data is NOT undefined, then we asume we have retrieved
                a transaction*/
                  if (data.data[0] !== undefined)
                  {

    tx_value = data.data[0].value
    tx_id = data.data[0].transaction_id
    console.log("there was a tx its id is: " + data.data[0].transaction_id);
    /*
    post a tx to https://www.andreshenderson.tech/api/tran/
    post the transaction_id to the api
    */
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    //urlencoded.append("cripto_id", data.data[0].transaction_id);
    urlencoded.append("cripto_id", tx_id);
    urlencoded.append("amount_uy", "0");
    urlencoded.append("total", tx_value);
    console.log("Value of existing TX is:" + tx_value);
    console.log("tx value has 6 zeros from end");
    // we are passing value 3 in order to
    // be able to identify this transaction as a
    // first transaction
    urlencoded.append("status_tr", "3");

    urlencoded.append("user", "1");
    urlencoded.append("pump_id", pump_id);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    fetch("https://www.andreshenderson.tech/api/tran/", requestOptions)
    .then(response => response.text())
    .then(result => console.log("SUCCESS: A TX WAS POSTED:" + result))
    .catch(error => console.log('error', error));
}
// if there was no Tx retrieved from the trongrid api:
else
{
    console.log("no data, therefore, empty tx is created")
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("cripto_id", "No_Tx_Found");
    urlencoded.append("amount_uy", "0");
    urlencoded.append("total", "0");
    // set status_tr = 3 to identify this transaction
    urlencoded.append("status_tr", "3");
    urlencoded.append("user", "1");
    urlencoded.append("pump_id", pump_id);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    fetch("https://www.andreshenderson.tech/api/tran/", requestOptions)
    .then(response => response.text())
    .then(result => console.log("SUCCESS: A TX WAS POSTED:" + result))
    .catch(error => console.log('error', error));
}
// console.log(typeof(data.length))
})
.catch(err => console.error(err));
}                             