let tranlateX=document.getElementsByClassName("translate-X");
let tranlateY=document.getElementsByClassName("translate-Y");
let tranlateW=document.getElementsByClassName("translate-W");

window.addEventListener('scroll',()=>{
    let offset=window.pageYOffset;
    // console.log(offset);
    for(let element of tranlateY){
        let speed=element.dataset.speed;
        element.style.transform="translateY("+speed*offset+"px)";
    }
});