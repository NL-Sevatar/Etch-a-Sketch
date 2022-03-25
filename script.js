const grid = document.querySelector('#container');
const base = document.createElement('div');
const elem = document.querySelectorAll('.blank')
   
function createGrid() {
    let num = prompt('',16)
    for (let i = 0; i < num; i++){
        base.classList.add('blank');
        grid.appendChild(base.cloneNode(true));
    }
}

function clearGrid() {
    document.querySelectorAll('.blank').forEach(e => e.remove())
    }