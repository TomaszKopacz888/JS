const notesDiv = document.querySelector('#myNotes');
const submit = document.querySelector('#submit');
const result = document.querySelector('#actionResult');

let notes = [];
const showNotes = () => {
    const jsonNotes = localStorage.getItem('notes');
    if (jsonNotes !== null) {
        notes = JSON.parse(jsonNotes);
        const important=[];
        const notImportant=[];
        for (let i=0; i<notes.length;i++){
            if (notes[i].pin===true) important.push(notes[i]);
            else notImportant.push(notes[i]);
        }
        console.log(important)
        console.log(notImportant)
        renderNotes(important)
        //renderNotes(notImportant)
    }
}

    const renderNotes=arr=>{
        for (let i = 0; i < arr.length; i++) {
            const divNote = prepareNote(i)
            notesDiv.appendChild(divNote);
        }

    }

    const prepareNote = (i) => {
        const divNote = document.createElement('div');
        divNote.classList.add('note');
        const divDescription = document.createElement('div');
        divDescription.classList.add('description');
        const pin = document.createElement('div');
        pin.innerHTML = '&#128392;';
        pin.id=i;
        pin.classList.add('pin');

        if (notes[i].pin === true) {
            pin.classList.add('clickedPin');
        }


        const date = new Date(notes[i].date);
        divNote.innerHTML = date.toLocaleString() + '<br><br>Title: ' + notes[i].title + '<br><br>';
        divNote.appendChild(pin);
        divNote.style.backgroundColor = notes[i].color;
        divDescription.innerHTML = notes[i].description;
        divNote.appendChild(divDescription);
        return divNote;
    }

    const addNewNote = () => {
        console.log(notes);
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
        const color = document.querySelector('#color').value;
        const pin = false;
        const date = Date.now();
        const note = {
            'title': title,
            'description': description,
            'color': color,
            'pin': pin,
            'date': date
        }
        if (title.value !== '') {
            notes.push(note);
            localStorage.setItem('notes', JSON.stringify(notes));
            location.reload();
        } else result.innerHTML = 'Title can\'t be null';
    }

    const clickPin = x => {
        x.classList.toggle('clickedPin')
        if (notes[x.id].pin===true){
            notes[x.id].pin=false;
        }
        else {
            notes[x.id].pin = true;

        }
        localStorage.setItem('notes', JSON.stringify(notes));
        location.reload();
    }


showNotes();
    const pins = document.querySelectorAll('.pin');
    submit.addEventListener('click', addNewNote);
    for (let i = 0; i < pins.length; i++) {
        pins[i].addEventListener('click', () => clickPin(pins[i]))
    }


