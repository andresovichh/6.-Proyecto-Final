function check_and_store_tx() {
    /* 
    First we get all transactions from our API.

    Then, we build a new array to store the transactions
    that matched our user-selected pump through the wallet_id.

    Then, we have to sort the array by the date in order to get
    the last Tx id for that pump.
    */
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
.then((last_tx) => {
    // last_tx is the last Tx that has been stored in our database
    console.log(last_tx)})
    .then((last_tx) =>{
        // ---------------------------------------------------------



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