// // async function subscribe() {
// //     let buildingState = null
// //     while (true) {
// //       const response = await api_answer()
// //       if (response.status != 200) {
// //         // An error - let's show it
// //         showMessage(response.statusText)
// //       } 
  
// //       // Get and show the message
// //       const message = await response.json()
// //       // a function that returns true/false if the state is different
// //       if (stateChanged(message, buildingState)) {
// //         updateDiscordBot(message)
// //         buildingState = message
// //       }
// //       // wait five seconds and repeat
// //       await new Promise(resolve => setTimeout(resolve, 5000));
// //     } 
// //   }
// //   subscribe();
// var now_time;
// var last_tx_time;
// var tx_id;
// var tx_input_amount = 50000000;
// var api_value;
// var foo_return_value;
// var retval;
// function api_answer() {
//     const options = {method: 'GET', headers: {Accept: 'application/json'}};
//     fetch('https://api.trongrid.io/v1/accounts/TYvYRiuVU6B4dQKTuyhvxxFsJKiJZiTCfL/transactions/trc20?only_confirmed=true&limit=1', options)
//     .then(response => response.json())
//     .then((response) =>{
//         now_time = Date.now()
//         last_tx_time = response.data[0].block_timestamp
//         tx_id = response.data[0].transaction_id
//         api_value = response.data[0].value
//         console.log(now_time)
//         console.log(last_tx_time)
//         console.log(tx_id)
//     })
//     .then((response) => {   
//         // we check if the time of the last transaction we get from the API
//         // is greater than the time at which "OK" was pressed
//         if (now_time < last_tx_time) {
//             console.log("keep waiting")
//             }
//         else{
//             console.log("tx is newer than now")
//             // if tx_input_amount is different from api_value
//             // then we know that the tx has not been confirmed
//             if (tx_input_amount != api_value){
//                 console.log("tx is not the same")
//                 retval = 0
//             }
//             else{
//                 console.log("tx is the same")
//                 retval = 1
//             }
//         }
//         }
//         )
//     .then(console.log(now_time))
//     .catch(err => console.error(err));
//     //
//   };
//     foo_return_value = api_answer();
//     console.log(foo_return_value);
//     // if (now_time > last_tx_time){
//     //     console.log("not yet")
//     // }
//     // else{
//     //     console.log("keep going")
//     // }
function get_api_data() {
    var api_url = 'https://api.trongrid.io/v1/accounts/TYvYRiuVU6B4dQKTuy
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch('https://api.shasta.trongrid.io/v1/accounts/TKWy9cszJmNtmv5oSaW8ZBQLZ8VWkroHoB/transactions?only_confirmed=true&limit=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(response => {return response})
    .catch(err => console.error(err));
    }

console.log(get_api_data());