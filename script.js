let popUpWindow=document.getElementsByClassName("popUpWindow")[0];
let frame=document.getElementsByTagName('iframe')[0];
function otvori(a){
    popUpWindow.style.top="0";
    console.log(frame);
    frame.src=a;
}
function zatvori(){
    popUpWindow.style.top="100%";
}