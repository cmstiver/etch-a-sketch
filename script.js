function createTiles() {
    let numberTiles = prompt('How long and wide do you want your grid?')
    document.getElementById("grid").style.gridTemplateColumns = 'repeat('+numberTiles+', auto)';
    for(let i=0;i<(numberTiles*numberTiles);i++) {
        let grid = document.querySelector('#grid');
        let tile = document.createElement('div');
        tile.classList.add('tile');
        grid.appendChild(tile);

    }
}
function changeColor() {
    let tiles = document.querySelectorAll('.tile');
    tiles.forEach((x) => {
    x.addEventListener('mouseover', () => {x.classList.add('colored')}) 
  })
}

function resetTiles() {
    let tiles = document.querySelectorAll('.tile');
    let button = document.querySelector('#reset')
    button.addEventListener('click', () => {
        tiles.forEach((x) => {x.classList.remove('colored')})
    })
}
function createNewGrid() {
    let newgrid = document.querySelector('#newgrid')
    newgrid.addEventListener('click', removeAllChildNodes(grid))
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


createTiles()
resetTiles()
changeColor()
let newgrid = document.querySelector('#newgrid')
newgrid.addEventListener('click', ()=>{
    removeAllChildNodes(grid)
    createTiles()
    changeColor()
})




