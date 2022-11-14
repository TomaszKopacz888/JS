const keySound = {
    'b': document.querySelector('#boom'),
    'o': document.querySelector('#clap'),
    'p': document.querySelector('#clap'),
    'd': document.querySelector('#kick')
}
const result = document.querySelector('#result');
const record = document.querySelectorAll(".record");
const play = document.querySelectorAll(".play");


const channel1 = [];
const channel2 = [];
const channel3 = [];
const channel4 = [];

const channels = {
    '1': channel1,
    '2': channel2,
    '3': channel3,
    '4': channel4
}

const startRecord = r=> {
    const regKey = () => {
        if (event.key === 'q') document.removeEventListener('keypress', regKey);
        else {
            channels[r.id.slice(-1)].push({
                    'time': Date.now(),
                    'key': event.key
                }
            )
            result.innerHTML+=event.key;
        }
    }

    document.addEventListener('keypress', regKey);
    if (event.key === 'q') document.removeEventListener('keypress', regKey);
}

const playByLetter=letter=>{
result.innerHTML+=letter;
}


const startPlay = p => {
    const ch = channels[p.id.slice(-1)];
    let time=0;
    for (let i=0; i<ch.length; i++){
        if (i>0){
            time=ch[i].time-ch[i-1].time;
        }
       setTimeout(()=>{playByLetter(ch[i].key)}, 1000)

    }

}

for (let i = 0; i < record.length; i++) {
    record[i].addEventListener('click', ()=>startRecord(record[i]))
}

for (let i=0; i<play.length; i++){
    play[i].addEventListener('click', ()=>startPlay(play[i]))
}