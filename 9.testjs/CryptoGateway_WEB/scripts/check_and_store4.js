var counter = 0;
var interval = setInterval(function(){
    console.log("two seconds have passed");
    counter++;
    if (counter == 5)
    {
        console.log("ten seconds have passed");
        clearInterval(interval);
    }
}, 2000);