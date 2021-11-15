onmessage = function (event) {
    // var timerID = null;
    var count = 0;
    if ( event.data == "start" ) {
        var  timerID = setInterval( function () {
        count++;
        postMessage(count);
    }, 1000 );
    }else { 
        clearInterval(timerID); 
    }
}