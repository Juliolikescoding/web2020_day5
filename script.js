function run(){
    var elem = document.getElementsByClassName("bird") [0];

    var pos= 0;
    var id = setInterval(frame, 5);
    function frame(){
        if(pos === 1080){
            clearInterval(id);
        }
        else{
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}