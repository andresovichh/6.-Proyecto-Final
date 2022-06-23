var urlstation = "http://44.204.28.37:8000/api/gas/";
var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(urlstation, requestOptions).then((data)=>{
    return data.json();
}).then((completedata)=>{
    console.log(completedata)
    document.getElementById('gastation_name').innerHTML = completedata[0].name;
    document.getElementById('address_station').innerHTML = completedata[0].address;
    
});