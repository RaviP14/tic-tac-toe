const gameboard = (() => {
    let arrGameboard = []

    let addToGameboard = (value) => {
        if (arrGameboard.length < 9 && arrGameboard[arrGameboard.length - 1] !== value) {
            arrGameboard.push(value)
        }
    }
    
    const grid = document.querySelector('.grid')
    grid.style.display = 'none'
    let makeGrid = (rows, columns) => {
        grid.style.setProperty('--grid-rows', rows);
        grid.style.setProperty('--grid-cols', columns);
        for (let i = 0; i < (rows * columns); i++) {
            let gridDiv = document.createElement('div');
            gridDiv.className = 'gridDiv';
            gridDiv.id = 'div' + i;
            gridDiv.value = i
            gridDiv.style.height = `${(400) / rows}px`;
            gridDiv.style.width = `${(400) / columns}px`;
            grid.appendChild(gridDiv);
        }
    }
    makeGrid(3, 3)

    const startGame = document.querySelector('.startGame');
    const resetGame = document.querySelector('.reset');
    const newGame = document.querySelector('.newGame')
    resetGame.style.display = 'none'
    newGame.style.display = 'none'

    startGame.addEventListener('click', () => {
        playGame.player1.setMyNickname();
        nickName1 = playGame.player1.getNickname()
        playGame.player2.setMyNickname();
        display.textContent = nickName1 + '\'s (X\'s) turn'
        grid.style.display = 'grid'
        startGame.style.display = 'none'
        resetGame.style.display = 'block'
        newGame.style.display = 'block'
    })

    resetGame.addEventListener('click', () => {
        divs.forEach((div) => {
            div.textContent = ''
            arrGameboard = []
            display.textContent = nickName1 + '\'s (X\'s) turn'
        })
    })
    
    newGame.addEventListener('click', () => {
        divs.forEach((div) => {
            div.textContent = ''
            arrGameboard = []
            
        })
        playGame.player1.setMyNickname();
        nickName1 = playGame.player1.getNickname()
        playGame.player2.setMyNickname();
        display.textContent = nickName1 + '\'s (X\'s) turn'
    })

    const divs = document.querySelectorAll('.gridDiv');
    let display = document.querySelector('.display');

    function addPlayerToArray() {
        if (arrGameboard.length === 0) {
            playGame.player1.playerPoint()
            display.textContent = playGame.player2.getNickname() + '\'s (O\'s) turn'
        } else if (arrGameboard[arrGameboard.length - 1] === 'O') {
            playGame.player1.playerPoint()
            display.textContent = playGame.player2.getNickname() + '\'s (O\'s) turn'
        } else if (arrGameboard[arrGameboard.length - 1] === 'X') {
            playGame.player2.playerPoint()
            display.textContent = nickName1 + '\'s (X\'s) turn'
        }
    }

    function addSign() {
        if (this.textContent === '' && (display.textContent === (nickName1 + '\'s (X\'s) turn') || display.textContent === (playGame.player2.getNickname() + '\'s (O\'s) turn'))) {
            addPlayerToArray()
            this.textContent = arrGameboard[arrGameboard.length - 1] //this.value
            playGame.winner()
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

    let setMyNickname = () => {
        myNickname = prompt( name +'\'s ' + '(' + sign + ')' + ' Name?, ')
        
    }

    const getNickname = () => myNickname

    return {
        getName,
        getSign,
        playerPoint,
        setMyNickname,
        getNickname
    }
}

const playGame = (() => {
    const player1 = Player('player1', 'X');
    const player2 = Player('player2', 'O');
   let div0 = document.querySelector('#div0')
   let div1 = document.querySelector('#div1')
   let div2 = document.querySelector('#div2')
   let div3 = document.querySelector('#div3')
   let div4 = document.querySelector('#div4')
   let div5 = document.querySelector('#div5')
   let div6 = document.querySelector('#div6')
   let div7 = document.querySelector('#div7')
   let div8 = document.querySelector('#div8')

   let winner = () => {
        let display = document.querySelector('.display')
        if (div0.textContent === 'X' && div3.textContent === 'X' && div6.textContent === 'X' ||
        div1.textContent === 'X' && div4.textContent === 'X' && div7.textContent === 'X' ||
        div2.textContent === 'X' && div5.textContent === 'X' && div8.textContent === 'X' ||
        div0.textContent === 'X' && div1.textContent === 'X' && div2.textContent === 'X' ||
        div3.textContent === 'X' && div4.textContent === 'X' && div5.textContent === 'X' ||
        div6.textContent === 'X' && div7.textContent === 'X' && div8.textContent === 'X' ||
        div0.textContent === 'X' && div4.textContent === 'X' && div8.textContent === 'X' ||
        div2.textContent === 'X' && div4.textContent === 'X' && div6.textContent === 'X') {
            display.textContent = nickName1 + ' (X) Wins'
        } else if (div0.textContent === 'O' && div3.textContent === 'O' && div6.textContent === 'O' ||
        div1.textContent === 'O' && div4.textContent === 'O' && div7.textContent === 'O' ||
        div2.textContent === 'O' && div5.textContent === 'O' && div8.textContent === 'O' ||
        div0.textContent === 'O' && div1.textContent === 'O' && div2.textContent === 'O' ||
        div3.textContent === 'O' && div4.textContent === 'O' && div5.textContent === 'O' ||
        div6.textContent === 'O' && div7.textContent === 'O' && div8.textContent === 'O' ||
        div0.textContent === 'O' && div4.textContent === 'O' && div8.textContent === 'O' ||
        div2.textContent === 'O' && div4.textContent === 'O' && div6.textContent === 'O') {
            display.textContent = playGame.player2.getNickname() + ' (O) Wins'
        } else if (div0.textContent !== '' && div1.textContent !== '' && div2.textContent !== '' && 
        div3.textContent !== '' && div4.textContent !== '' && div5.textContent !== '' &&
        div6.textContent !== '' && div7.textContent !== '' && div8.textContent !== '') {
            display.textContent = 'It\'s a tie'
        }
    }

    return {
        player1,
        player2,
        winner
    }
})();