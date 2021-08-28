
window.onload = function () {
    (function (){
        var pBar = document.getElementById('bar');
        var tState = document.getElementById('work');
        var cnt=0, timerID;
        timerID = setInterval(function() {
        if ( cnt <= 100 ) {
            tState.textContent = cnt;
        } else {
            stopDownload();
        } 
        pBar.value = cnt++;
        }, 100);

        function stopDownload () {
            tState.textContent ="100"; 
            clearInterval (timerID);
        };

    })();
};
