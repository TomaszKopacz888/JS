let index=1;
const leftArrow=document.querySelector('#leftArrow')
const rightArrow=document.querySelector('#rightArrow')

let currentImg=document.querySelector('#img'+index);
let currentDot=document.querySelector('#dot'+index);

const dots=document.querySelectorAll('.dot')


const changeImage=function (action, newIndex=0){
    activateToggleImage();
    if (newIndex!==0) index=newIndex;
    else if (index===1 && action==='decrease') index=5;
    else if(index===5 && action==='increase') index=1;
    else if(action==='decrease') index--;
    else if(action==='increase') index++;
    updateData();
    activateToggleImage();
}

function activateToggleImage(){
    currentImg.classList.toggle('activeImage');
    currentDot.classList.toggle('activeDot')
}

function updateData(){
    currentImg=document.querySelector('#img'+index);
    currentDot=document.querySelector('#dot'+index);
}


leftArrow.addEventListener('click', function (){changeImage('decrease')});

rightArrow.addEventListener('click', function (){changeImage('increase')});

dots.forEach(x=>x.addEventListener('click', function (){
    const currentId=x.id.replace('dot', '');
    changeImage('', currentId);
}))

