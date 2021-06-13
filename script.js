function createTiles(x) {
    document.getElementById("grid").style.gridTemplateColumns = 'repeat('+x+', auto)';
    for(let i=0;i<(x*x);i++) {
        let grid = document.querySelector('#grid');
        let tile = document.createElement('div');
        tile.classList.add('tile');
        grid.appendChild(tile);

    }
}

createTiles(16)



