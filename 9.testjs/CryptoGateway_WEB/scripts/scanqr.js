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
    sessionStorage.setItem('amount_to_usd', myTrunc);
    var tipo = document.getElementById("mySelect");
    var litros = document.getElementById("literam");
    var p_amount = document.getElementById("amountpeso");
    sessionStorage.setItem("type", tipo.value);
    sessionStorage.setItem("liters", litros.value);
    sessionStorage.setItem("amount_uy", p_amount.value);
    
});

