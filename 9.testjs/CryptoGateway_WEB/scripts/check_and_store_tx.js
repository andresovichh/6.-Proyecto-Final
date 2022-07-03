function check_and_store_tx() {
    /* 
    First we get all transactions from our API.

    Then, we build a new array to store the transactions
    that matched our user-selected pump through the wallet_id.

    Then, we have to sort the array by the date in order to get
    the last Tx id for that pump.
    */
   // EMPTY WALLET
   // var needle = "THADUYLJNFYXUXpqkYZw6vY84eDoaM3ArF";
    //var needle = "TK8ooYkVidQDSjag8T1ZSdJPxXgVa1NtSc";
    var needle = sessionStorage.getItem("wallet_id");
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

    fetch(api_url, requestOptions).then((data) => {
            return data.json();
        }).then((completedata) => {
            // here I am getting the name of each one of the pumps
            // that the user can see
            // console.log(completedata);
            // Here we get the name of the user-selected pump
            // var needle = sessionStorage.getItem("wallet_id");
            // This matches a pump name with a wallet_id
            // iterate over each element in the array

            const txs = new Array();
            for (var i = 0; i < completedata.length; i++) {
                // look for the entry with a matching `code` value
                if (completedata[i].pump_id == needle) {
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
            console.log(txs);
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
        .then((last_tx) => {
            console.log(last_tx);
            last_tx_arr.push(last_tx);
            // ---------------------------------------------------------
            /*
            Here with our setInterval function we are going to check for new
            transactions against our database every 
            */
            var check_every_x_seconds = 5000;
            // Eg. 3 times every 5 seconds = 15 seconds total runtime
            var check_x_times = 3;
            var counter = 0;
            var interval = setInterval(function() {


                if (counter < check_x_times) {

                    var requestOptions = {
                        method: 'GET',
                        redirect: 'follow'
                    };
                    //console.log("THIS IS THE LAST :" + last_tx_arr[0].cripto_id);
                    fetch('https://api.trongrid.io/v1/accounts/' + needle + '/transactions/trc20?only_confirmed=true&limit=1', requestOptions)
                        .then(function(response) {
                            return response.json();
                        }).then(response => {

                            if (typeof(response.data[0]) != "undefined") {
                                // if our last recorded cripto_id is same as the
                                // last data to come from tron, it means that TX
                                // hasn't changed
                                console.log(response.data[0].transaction_id);
                                console.log(last_tx_arr[0].cripto_id);

                                /* If the last recorded cripto_id is different than the Tx id
                                 that we retrieve from Tron API, it means that there is not 
                                 a new TX on the blockchain. Therefore, we keep looking.
                                */
                                if (response.data[0].transaction_id == last_tx_arr[0].cripto_id) {
                                    console.log("Transaction hasn't changed, keep looking");

                                    // clearInterval(interval);
                                }
                                /*
                                If the transaction_id is different from the last 
                                cripto_id we have recorded, it means that there
                                hase been a new transaction recorded at Tron.
                                So we can check:
                                */
                                else {
                                    console.log("Transaction HAS changed, new Tx id from TRON is : " + response.data[0].transaction_id);
                                    // clearInterval(interval);
                                    console.log("This is the total amount of our last recorded tx, our api: " + last_tx.total);
                                    // check if the Tx value is same as what should come from the customer
                                    console.log('\n');
                                    console.log('\n');
                                    console.log('\n');
                                    if (response.data[0].value == sessionStorage.getItem("amount_to_usd"))
                                    {
                                        console.log("Transaction value is correct, the user shoud pay :" + sessionStorage.getItem("amount_to_usd"));
                                        console.log("And what came back from tron was: " + response.data[0].value);
                                        clearInterval(interval);
                                        window.location.href = "https://www.andreshenderson.tech/success_qr.html";
                                        clearInterval(interval);

                                    }
                                    // Tx value is incorrect, therefore unsuccessful
                                    else {
                                        console.log("Transaction value is incorrect, the user should pay :" + sessionStorage.getItem("amount_to_usd"));
                                        console.log("Tron amnt : " + response.data[0].value);
                                        console.log("Our stored last amount amount was : " + last_tx.total);

                                        window.location.href = "https://www.andreshenderson.tech/fail_qr.html";
                                        clearInterval(interval);

                                    }

                                }

                            } else {
                                console.log("No transaction recorded");
                                // clearInterval(interval);
                            }
                        })



                } else {
                    console.log("Time has passed, ending loop");
                    window.location.href = "https://www.andreshenderson.tech/fail_qr.html";
                    clearInterval(interval);
                }
                counter++;
                console.log(counter);

            }, check_every_x_seconds);



            //----------------------------------------------------------

        });

    ;
}
check_and_store_tx();