const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch('https://api.trongrid.io/v1/accounts/TYvYRiuVU6B4dQKTuyhvxxFsJKiJZiTCfL/transactions/trc20?only_confirmed=true&&only_to=true&limit=1', options)
  .then(response => response.json())
  .then(data => {
    if (data.data[0].transaction_id)
     {
        console.log(data.data[0].value)
        console.log("there was a tx")
        // post a tx to https://www.andreshenderson.tech/api/tran/
        // post the transaction_id to the api
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("cripto_id", data.data[0].transaction_id);
        urlencoded.append("amount_uy", "0");
        urlencoded.append("total", "0");
        urlencoded.append("status_tr", "1");
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
        urlencoded.append("status_tr", "1");
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
  .then(response => console.log(response))
  .catch(err => console.error(err));