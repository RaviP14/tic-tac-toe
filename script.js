const gameboard = (() => {
    let ArrGameboard = []

    let addToGameboard = ArrGameboard.push(value) 

    return {
        addToGameboard
    }
})();

const Player = (name, sign) => {
    const getSign = () => sign;
    const getName = () => name;
    
    return {
        getName,
        getSign
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