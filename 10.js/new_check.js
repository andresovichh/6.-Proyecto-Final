var tx_value;
const options = {method: 'GET', headers: {Accept: 'application/json'}};
async function getvals(){
const response = await fetch('https://api.trongrid.io/v1/accounts/TYvYRiuVU6B4dQKTuyhvxxFsJKiJZiTCfL/transactions/trc20?only_confirmed=true&limit=1', options)
.then(response => response.json())
.then(response => tx_value = response.data[0].value)
//.then(response => console.log(response))
//.then(response => {return response})
.catch(err => console.error(err));
}

getvals();
console.log(tx_value);
// getvals().then(response => {console.log(response.data[0].value)});

