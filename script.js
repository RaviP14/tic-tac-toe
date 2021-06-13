const gameboard = (() => {
    let ArrGameboard = ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'O', 'O' ]

    let addToGameboard = (value) => {
        ArrGameboard.push(value)
        console.log(ArrGameboard)
    }

    const grid = document.querySelector('.grid')

    let makeGrid = (rows, columns) => {
        grid.style.setProperty('--grid-rows', rows);
        grid.style.setProperty('--grid-cols', columns);
        for (let i = 0; i < (rows * columns); i++) {
            let gridDiv = document.createElement('div');
            gridDiv.style.height = `${(400) / rows}px`;
            gridDiv.style.width = `${(400) / columns}px`;
            grid.appendChild(gridDiv);
        }
    }

    makeGrid(3, 3)

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