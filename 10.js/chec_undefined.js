var pump_id = "TXSw8R2k8h9GnaYjWAvtHxKB5AAa6A3jQX";
function first_tx() {
  const options = {method: 'GET', headers: {Accept: 'application/json'}};
  var tx_value;
  fetch('https://api.trongrid.io/v1/accounts/' + pump_id + '/transactions/trc20?only_confirmed=true&&only_to=true&limit=1', options)
    .then(response => response.json())
    .then(data => {
      /* Here we check and retrieve the value from the trongrid
      api*/
      {
        if (data.data[0] !== undefined) {
          console.log("there was data")
        }
        else {
          console.log("no data")
        }
      }
    })};

    first_tx();