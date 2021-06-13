const gameboard = (() => {
    let arrGameboard = ['X', 'O', 'X','O', 'O', 'X','X', 'O', 'O']

    let addToGameboard = (value) => {
        arrGameboard.push(value)
        console.log(arrGameboard)
    }

    const grid = document.querySelector('.grid')

    let makeGrid = (rows, columns) => {
        grid.style.setProperty('--grid-rows', rows);
        grid.style.setProperty('--grid-cols', columns);
        for (let i = 0; i < (rows * columns); i++) {
            let gridDiv = document.createElement('div');
            gridDiv.className = 'gridDiv';
            gridDiv.value = i
            gridDiv.style.height = `${(400) / rows}px`;
            gridDiv.style.width = `${(400) / columns}px`;
            grid.appendChild(gridDiv);
        }
    }

    makeGrid(3, 3)

    const divs = document.querySelectorAll('.gridDiv');
   
    divs.forEach((div) => {
        div.addEventListener('click', addSign)
    })

    function addSign () {
        this.textContent = arrGameboard[this.value] /*might need to change value inside[] to 
        last array item*/
    }

    return {
        addToGameboard
    }
})();

const Player = (name, sign) => {
    const getSign = () => sign;
    const getName = () => name;

    let playerPoint = () => {
        gameboard.addToGameboard(getSign())
    }
    
    return {
        getName,
        getSign,
        playerPoint
    }
}

const playGame = (() => {
    const player1 = Player('player1', 'x');
    const player2 = Player('player2', 'O');

    return {
        player1,
        player2
    }
})();