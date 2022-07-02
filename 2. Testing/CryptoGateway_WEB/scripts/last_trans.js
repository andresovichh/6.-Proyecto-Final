/*fetch('https://jsonplaceholder.typicode.com/todos/')
.then(response => response.json())
.then(json => {
    console.log(json)
    var pumpa = json[2].id;
    console.log(pumpa);
    var amounts = json[2].userId;
    console.log(amounts);
    var liters = json[2].title;
    console.log(liters);
    var newp = document.createElement("p"); // Create p
    var divilines = document.createElement('div'); // Create Lines to separete
    divilines.classList.add('divi_lines'); // ADd class to the lines
    var newContent = document.createTextNode(pumpa + liters + amounts); // Here is the invoice data
    newp.appendChild(newContent); // Append the data to the p element
    console.log(newp);
    console.log(divilines);
    var selectplement = document.getElementById('container-trans'); //Get div to insert the p and lines
    selectplement.appendChild(newp); // apending to the div (text)
    selectplement.appendChild(divilines); // appendong to the div (lines)
})
*/
/*fetch('https://jsonplaceholder.typicode.com/todos/').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1 = "";
    completedata.map((values)=>{
        data1+= `<div class="divi_lines"></div> <p> ${values.title} - $U ${values.id} - 5 Liters</p>`;
    });
    document.getElementById('container-trans').innerHTML=data1;
})*/

fetch('https://www.andreshenderson.tech/api/tran/').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1 = "";
    completedata.map((values)=>{
        data1+= `<div class="divi_lines"></div> <p> ${values.amount_uy} - $U ${values.liters} - ${values.fuel}</p>`;
    });
    document.getElementById('container-trans').innerHTML=data1;
})





