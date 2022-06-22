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
    var trunki = peso_amount / cotiza;
    var myTrunc = trunki.toFixed(2);
    console.log(cotiza);
    console.log(myTrunc);
    document.getElementById('amount_to_usd').innerHTML = myTrunc;
    
});

