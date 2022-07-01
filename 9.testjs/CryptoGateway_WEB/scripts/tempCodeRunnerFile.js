if (response.data[0].transaction_id)
                {
                    // if our last recorded cripto_id is same as the
                    // last data to come from tron, it means that TX
                    // hasn't changed
                    console.log(response.data[0].transaction_id);
                    console.log(last_tx_arr[0].cripto_id);
                    if (response.data[0].transaction_id == last_tx.cripto_id)
                    {
                        console.log("Transaction hasn't changed, keep looking");
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
                    console.log("Transaction HAS changed : " + response.data[0].transaction_id);
                    // clearInterval(interval);
                    
                    console.log("This is the total amount of out last recorded tx our api: " + last_tx.total);
                    // check if the Tx value is same as what should come from the customer
                        if (response.data[0].value == 5000)
                        {
                            console.log("Transaction value is correct");
                            console.log("Our amount was : " + last_tx.total);
                            window.location.replace("https://www.google.com");

                            clearInterval(interval);
                            //window.location.href("https://andreshenderson.tech/success_qr.html")
                            // clearInterval(interval);

                        }
                        // Tx value is incorrect, therefore unsuccessful
                        else{
                            console.log("Transaction value is incorrect");
                            console.log("Tron amnt : " + response.data[0].value);
                            console.log("Our amount was : " + last_tx.total);
                            window.location.replace("https://www.google.com");

                            clearInterval(interval);
                            //window.location.href("https://andreshenderson.tech/fail_qr.html")
                            
                            
                        }
                        
                    }
            
                }
                else
                {
                    console.log("Transaction hasn't changed, keep looking");
                    // clearInterval(interval);
                }