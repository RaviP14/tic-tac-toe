const gameboard = (() => {
    let arrGameboard = []

    let addToGameboard = (value) => {
        if (arrGameboard.length < 9 && arrGameboard[arrGameboard.length - 1] !== value) {
            arrGameboard.push(value)
            console.log(arrGameboard)
        }
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
    function addPlayerToArray() {
        if (arrGameboard.length === 0) {
            playGame.player1.playerPoint()
        } else if (arrGameboard[arrGameboard.length - 1] === 'O') {
            playGame.player1.playerPoint()
        } else if (arrGameboard[arrGameboard.length - 1] === 'X') {
            playGame.player2.playerPoint()
        }
    }

    function addSign() {
        if (this.textContent === '') {
            addPlayerToArray()
            this.textContent = arrGameboard[arrGameboard.length - 1] //this.value
        }
    }



    divs.forEach((div) => {
        div.addEventListener('click', addSign)
    })

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
    const player1 = Player('player1', 'X');
    const player2 = Player('player2', 'O');

    return {
        player1,
        player2
    }
})();