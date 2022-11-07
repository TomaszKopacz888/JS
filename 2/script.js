let index=1;
const leftArrow=document.querySelector('#leftArrow')
const rightArrow=document.querySelector('#rightArrow')
let currentImg=document.querySelector('#img'+index);
let tmpImg=document.querySelector('#img'+index);
let currentDot=document.querySelector('#dot'+index);

const dots=document.querySelectorAll('.dot');


const changeImageL=()=>{
    if (index===1|| index===0) index=5;
    else index--;
    if (tmpImg!==currentImg) tmpImg.style.display="none";
    tmpImg=currentImg;
    currentDot.classList.toggle('activeDot')
    updateData();
    currentImg.style.display="inline-block";
    currentImg.classList.replace('deactivateImage', 'activeImage');
    currentImg.style.animationName='slideLeft';
    currentImg.style.animationDuration='2s';
    tmpImg.classList.replace('activeImage','deactivateImage');
    tmpImg.style.animationName='deslideLeft';
    tmpImg.style.animationDuration='2s';
    currentDot.classList.toggle('activeDot');
}
const changeImageR=()=>{
    if (index===5) index=1;
    else index++;
    if (tmpImg!==currentImg) tmpImg.style.display="none";
    tmpImg=currentImg;
    currentDot.classList.toggle('activeDot')
    updateData();
    currentImg.style.display="inline-block";
    currentImg.classList.replace('deactivateImage', 'activeImage');
    currentImg.style.animationName='slideRight';
    currentImg.style.animationDuration='2s';
    tmpImg.classList.replace('activeImage','deactivateImage');
    tmpImg.style.animationName='deslideRight';
    tmpImg.style.animationDuration='2s';
    currentDot.classList.toggle('activeDot');
}

const updateData=()=>{
    currentImg=document.querySelector('#img'+index);
    currentDot=document.querySelector('#dot'+index);
}

const loop=()=>{
    changeImageR();
    setTimeout(loop, 4000);
}
setTimeout(loop, 4000);

leftArrow.addEventListener('click', function (){changeImageL()});

rightArrow.addEventListener('click', function (){changeImageR()});

dots.forEach(x=>x.addEventListener('click', function (){
    const currentId=x.id.replace('dot', '');
    if (currentId>index){
        index=parseInt(currentId)-1;
        changeImageR()
    }
    else if (currentId<index){
        index=parseInt(currentId)+1;
        changeImageL();
    }
}))
