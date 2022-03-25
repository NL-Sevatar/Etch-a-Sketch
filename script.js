const grid = document.querySelector('#container');
const base = document.createElement('div');
   
function sGrid(num) {
    for (let i = 0; i < num; i++){
        base.classList.add('blank');
        grid.appendChild(base.cloneNode(true));
    }
}