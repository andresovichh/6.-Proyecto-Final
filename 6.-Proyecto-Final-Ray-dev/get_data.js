const options = {method: 'GET', headers: {Accept: 'application/json'}, mode: 'cors'};

fetch('https://api.trongrid.io/v1/accounts/TYvYRiuVU6B4dQKTuyhvxxFsJKiJZiTCfL/transactions/trc20?only_confirmed=true&limit=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));