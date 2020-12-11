let items=document.getElementsByClassName('item');

for(let j=0;j<items.length;j++){
    items[j].addEventListener('click',()=>{
        for(let i=0;i<items.length;i++){
            items[i].classList.remove('show');
        }
        items[j].classList.add('show');
    });
}