let data = [];
const options = {method: 'GET', headers: {Accept: 'application/json'}};

async function getRandomUser(){
  // gets the response from the api and put it inside a constant
  const response = await fetch('https://api.trongrid.io/v1/accounts/TYvYRiuVU6B4dQKTuyhvxxFsJKiJZiTCfL/transactions/trc20?only_confirmed=true&limit=1', options);
  //the response have to be converted to json type file, so it can be used
  const data = await response.json();
  //the addData adds the object "data" to an array
  addData(data)
  return data;
}

function addData(object) {
  // the push method add a new item to an array
  // here it will be adding the object from the function getRandomUser each time it is called
  data.push(object.data);
  //the fetched data is available only on this scope
  console.log("This is the value of date inside the function addData:")
  console.log(data)
}

//Calls the function that fetches the data
console.log(getRandomUser());

  console.log("This is the value of data outside the scope")
  console.log(data)
  