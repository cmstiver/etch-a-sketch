function createTiles(x) {
    document.getElementById("grid").style.gridTemplateColumns = 'repeat('+x+', auto)';
    for(let i=0;i<(x*x);i++) {
        let grid = document.querySelector('#grid');
        let tile = document.createElement('div');
        tile.classList.add('tile');
        grid.appendChild(tile);

    }
}
function changeColor() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((x) => {
    x.addEventListener('mouseover', () => {x.classList.add('colored')}) 
  })
}

createTiles(16)
changeColor()




