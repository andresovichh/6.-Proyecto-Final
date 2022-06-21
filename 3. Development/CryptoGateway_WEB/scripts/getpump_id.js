const api_url = "http://44.204.28.37:8000/api/pump/"
var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
// Define an array to store the names of the pumps
const pumps = new Array();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(api_url, requestOptions).then((data)=>{
  return data.json();
}).then((completedata)=>{
  // here I am getting the name of each one of the pumps
  // that the user can see
  // console.log(completedata);
  var needle = 'pump 2';
// This matches a pump name with a wallet_id
// iterate over each element in the array
for (var i = 0; i < completedata.length; i++){
  // look for the entry with a matching `code` value
  if (completedata[i].name == needle){
     // we found it
    console.log(completedata[i].wallet_id)
  }
}
});
