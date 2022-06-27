var pump_name = sessionStorage.getItem('pump_name');
var wallet_id = sessionStorage.getItem('wallet_id');
console.log(pump_name);
console.log(wallet_id);
// ACA SE PASA CUANDO HAY QUE PAGAR EN DOLARES 
var urlbrou = "https://cotizaciones-brou.herokuapp.com/api/currency/latest";
fetch(urlbrou).then((data)=>{
    return data.json();
}).then((completedata)=>{
    var cotiza = completedata.rates.USD.sell;
    var cotiza2 = completedata.rates.USD.buy;
    var prome = (cotiza + cotiza2) / 2;
    var trunki = peso_amount / prome;
    var myTrunc = trunki.toFixed(2);
    console.log(cotiza);
    console.log(prome);
    console.log(myTrunc);
    document.getElementById('amount_to_usd').innerHTML = myTrunc;
    
});
document.getElementById('continueboton').disabled = true;
document.getElementById('amountpeso').addEventListener('keyup', e => {
  //Check for the input's value
  if (e.target.value == "") {
    document.getElementById('continueboton').disabled = true;
  }
  else {
    document.getElementById('continueboton').disabled = false;
  }
});

