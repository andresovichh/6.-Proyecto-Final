function set_liters() {
var pump_name = sessionStorage.getItem('pump_name');
var wallet_id = sessionStorage.getItem('wallet_id');
console.log(pump_name);
console.log(wallet_id);
console.log(document.getElementById("literam").value);
console.log(document.getElementById("mySelect").value);
console.log(document.getElementById("amountpeso").value);
sessionStorage.setItem("type", document.getElementById("mySelect").value);
    sessionStorage.setItem("liters", document.getElementById("literam").value);
    sessionStorage.setItem("amount_uy", document.getElementById("amountpeso").value);

};
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
	console.log(sessionStorage.getItem("type"));
    //sessionStorage.setItem("type", document.getElementById("mySelect").value);
    //sessionStorage.setItem("liters", document.getElementById("literam").value);
    //sessionStorage.setItem("amount_uy", document.getElementById("amountpeso").value);
    
});

