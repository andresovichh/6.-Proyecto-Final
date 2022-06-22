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
    console.log(cotiza);
    document.getElementById('amount_to_usd').innerHTML = peso_amount / cotiza;
});

