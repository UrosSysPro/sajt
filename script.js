let popUpWindow;
let frame;
function otvori(a){
    popUpWindow.style.top="0";
    console.log(frame);
    frame.src=a;
}
function zatvori(){
    popUpWindow.style.top="100%";
}
function load(){
    popUpWindow=document.getElementsByClassName("popUpWindow")[0];
    frame=document.getElementsByTagName('iframe')[0];
    document.body.scrollIntoView();
}
