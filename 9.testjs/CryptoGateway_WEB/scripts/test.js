// const document = "index.html"
// var myHeaders = new Headers();
// myHeaders.append("Access-Control-Allow-Origin", "Special-Request-Header");
// console.log(myHeaders)
// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("http://44.204.28.37:8000/api/gas/", requestOptions).then((data)=>{
//   return data.json();
// }).then((completedata)=>{
//     console.log(completedata[5].name);
//     //document.getElementById('root').innerHTML = completedata[5].name;
//   })
//   //.catch(error => console.log('error', error));


  // ------new
const api_url = "https://44.204.28.37/api/pump/"
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
  console.log(completedata);
    // console.log(completedata[0].name);
    completedata.forEach((item) => {
      // creating an array with only the name of the pumps
      
      pumps.push(item.name);
      
    });
    pumps.forEach((item) => {
      console.log(item)
    });
    //document.getElementById('root').innerHTML = pumps[0];
    // myFunction();
    // var select = document.getElementById("root");
    // for(index in pumps) {
    //     select.options[select.options.length] = new Option(pumps[index], index);
    // }
    var selectElement = document.getElementById('ageselect');

    pumps.forEach((item) => {
      selectElement.add(new Option(item));
    });
  })
