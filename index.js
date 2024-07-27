let choice = 'X';

let content = document.querySelector('.game-info');

let player = document.querySelector('.player'); 
let b1 = document.getElementsByClassName('box1')[0];
let b2 = document.getElementsByClassName('box2')[0];
let b3 = document.getElementsByClassName('box3')[0];
let b4 = document.getElementsByClassName('box4')[0];
let b5 = document.getElementsByClassName('box5')[0];
let b6 = document.getElementsByClassName('box6')[0];
let b7 = document.getElementsByClassName('box7')[0];
let b8 = document.getElementsByClassName('box8')[0];
let b9 = document.getElementsByClassName('box9')[0];


let arr = [b1, b2, b3, b4, b5, b6, b7, b8, b9];

for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', function () {
        if (arr[i].innerHTML === '') {
            arr[i].innerHTML = choice;
            choice = choice === 'X' ? 'O' : 'X';
            player.innerHTML = choice; // Corrected position to update player content
            checkfn();
        } else {
            alert('This box is already selected');
        }
    });
}

async function checkfn() {
    // row-check
    for (let i = 0; i < 9; i += 3) {
        if (arr[i].innerHTML === 'X' && arr[i + 1].innerHTML === 'X' && arr[i + 2].innerHTML === 'X') {
            await setcolorfn(i, i + 1, i + 2, 'red');
        }
        if (arr[i].innerHTML === 'O' && arr[i + 1].innerHTML === 'O' && arr[i + 2].innerHTML === 'O') {
            await setcolorfn(i, i + 1, i + 2, 'green');
        }
    }

    // column-check
    for (let j = 0; j < 3; j++) {
        if (arr[j].innerHTML === 'X' && arr[j + 3].innerHTML === 'X' && arr[j + 6].innerHTML === 'X') {
            await setcolorfn(j, j + 3, j + 6, 'red');
        }
        if (arr[j].innerHTML === 'O' && arr[j + 3].innerHTML === 'O' && arr[j + 6].innerHTML === 'O') {
            await setcolorfn(j, j + 3, j + 6, 'green');
        }
    }

    // diagonal-check
    if (arr[0].innerHTML === 'X' && arr[4].innerHTML === 'X' && arr[8].innerHTML === 'X') {
        await setcolorfn(0, 4, 8, 'red');
    }
    if (arr[0].innerHTML === 'O' && arr[4].innerHTML === 'O' && arr[8].innerHTML === 'O') {
        await setcolorfn(0, 4, 8, 'green');
    }
    if (arr[2].innerHTML === 'X' && arr[4].innerHTML === 'X' && arr[6].innerHTML === 'X') {
        await setcolorfn(2, 4, 6, 'red');
    }
    if (arr[2].innerHTML === 'O' && arr[4].innerHTML === 'O' && arr[6].innerHTML === 'O') {
        await setcolorfn(2, 4, 6, 'green');
    }
}

function setcolorfn(a, b, c, color) {
    arr[a].style.backgroundColor = color;
    arr[b].style.backgroundColor = color;
    arr[c].style.backgroundColor = color;
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.pointerEvents = 'none';
    }
    content.innerHTML = color === 'red' ? ' Player X is winner' : 'Player Y is winner';
}

async function resetfn(){
    for(let i=0; i<arr.length; i++){
        arr[i].innerHTML = '';
        arr[i].style.backgroundColor = 'transparent';
        arr[i].style.pointerEvents = 'auto';
        content.innerHTML = 'Current Player - X';
        choice = 'X';
    }
}
