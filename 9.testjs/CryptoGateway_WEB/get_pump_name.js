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
  // Here we get the name of the user-selected pump
  var needle = selected_pump;
// This matches a pump name with a wallet_id
// iterate over each element in the array
for (var i = 0; i < completedata.length; i++){
  // look for the entry with a matching `code` value
  if (completedata[i].name == needle){
     /* 
     we found that the pump name matches
     the user-selected pump,
     therefore we can get the wallet_id. 
     And we can use this wallet_id
     to console log it and then we will be 
     able to pass it to the next page.

     Instead of wallet_id we can use any of
     the parameters that are returned in the
     JSON from the API we are pinging.

     */

    var wallet_id = completedata[i].wallet_id;
    console.log(wallet_id);
    sessionStorage.setItem('wallet_id', wallet_id);
  }
}

});
























// function getCountryByCode(code) {
//     return completedata.filter(
//         function(completedata){ return completedata.code == code }
//     );
//   }
  
//   var found = getCountryByCode('pump 3');
//   console.log(found);
