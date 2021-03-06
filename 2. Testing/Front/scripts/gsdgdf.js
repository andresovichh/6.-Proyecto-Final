function check_and_store_tx() {
    /* 
    First we get all transactions from our API.

    Then, we build a new array to store the transactions
    that matched our user-selected pump through the wallet_id.

    Then, we have to sort the array by the date in order to get
    the last Tx id for that pump.
    */
    var last_tx_arr = new Array();
    var res;
    const api_url = "https://www.andreshenderson.tech/api/tran/"
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic YW5kcmVzOmFuZHJlcw==");
    // Define an array to store the names of the pumps
    
    
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
      var needle = "TQC1Tmn1jufXpxXu2fqeTzrRYorZAYCuEF";
    // This matches a pump name with a wallet_id
    // iterate over each element in the array
    const txs = new Array();
    for (var i = 0; i < completedata.length; i++){
      // look for the entry with a matching `code` value
      if (completedata[i].pump_id == needle){
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
        txs.push(completedata[i]);
        
      
    }
   
    };
    // sort results in ascending order
    txs.sort((a, b) => b.id - a.id);
    // then get Tx at index 0, which is the last Tx
    // that has been stored in our database
    //console.log(txs[0]);
    return txs[0];
})
// .then((last_tx) => {
//     // last_tx is the last Tx that has been stored in our database
//     console.log(last_tx)})
    .then((last_tx) =>{
        console.log(last_tx);
        last_tx_arr.push(last_tx);
        // ---------------------------------------------------------
        var interval = setInterval(function (){
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              console.log("THIS IS THE LAST" + last_tx_arr[0].cripto_id);
              fetch("https://api.trongrid.io/v1/accounts/TYvYRiuVU6B4dQKTuyhvxxFsJKiJZiTCfL/transactions/trc20?only_confirmed=true&limit=1", requestOptions)
                .then(function (response) {
                    return response.json();
                })
                .then(response => {
                    //if (last_tx == response.data[0].transaction_id)
                    //console.log(response.data[0].transaction_id);
                    //clearInterval(interval);
                    console.log(last_tx)
                    // if we get a tx id from tron, it means there is a tx
                    if (response.data[0].transaction_id)
                    {
                        // if our last recorded cripto_id is same as the
                        // last data to come from tron, it means that TX
                        // hasn't changed
                        if (response.data[0].transaction_id == last_tx.cripto_id)
                        {
                            console.log("Transaction hasn't changed");
                            // clearInterval(interval);
                        }
                        /*
                        If the transaction_id is different from the last 
                        cripto_id we have recorded, it means that there
                        hase been a new transaction recorded at Tron.
                        So we can check:
                        */
                        else
                        {
                        console.log("Transaction HAS changed :" + response.data[0].transaction_id);
                        // clearInterval(interval);
                        // check if the Tx value is same as ours
                            if (response.data[0].value == "1000000")
                            {
                                console.log("Transaction value is correct");
                                window.location.replace("https://www.google.com")
                                clearInterval(interval);

                            }
                            // Tx value is incorrect, therefore unsuccessful
                            else{
                                console.log("Transaction value is incorrect");
                                //clearInterval(interval);
                            }
                        }
                    }
                    else {
                        console.log("Transaction hasn't changed");
                        // clearInterval(interval);
                    }
                // if (last_tx == response.json()[0].id) {
                //     console.log("Transaction has been confirmed");
                // }
                })
        }, 1500);
        // Run for at most, 120000 miliseconds, equal to 2 minutes
        setTimeout(function( ) { clearInterval( interval ); }, 6000);
        
    
        //----------------------------------------------------------

    });

;}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // function getCountryByCode(code) {
    //     return completedata.filter(
    //         function(completedata){ return completedata.code == code }
    //     );
    //   }
      
    //   var found = getCountryByCode('pump 3');
    //   console.log(found);
    

check_and_store_tx();