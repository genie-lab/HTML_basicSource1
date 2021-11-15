onconnect = function(event) {
    var port = event.ports[0];
    port.onmessage = function(event) {
    var num = event.data;
    var i, sum = 0;
    for(i=1; i<=num; i++)
        sum = sum + i;
        port.postMessage(sum);
    }
}