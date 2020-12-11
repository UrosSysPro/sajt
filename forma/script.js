let signInBtn=document.getElementById("sign-in-btn");
let signUnBtn=document.getElementById("sign-up-btn");
let container=document.getElementsByClassName("container")[0];

signUnBtn.addEventListener('click',()=>{
    container.classList.add('sign-up-mode');
});
signInBtn.addEventListener('click',()=>{
    container.classList.remove('sign-up-mode');
});