var squares = document.querySelectorAll('.square');
var PLAYER_X = 'X';
var PLAYER_O = 'O';
let turn = PLAYER_X;

var boardState = Array(squares.length);
boardState.fill(null)
//Elements
var strike = document.getElementById('strike');
var gameOverArea = document.getElementById('game-over-area');
var gameOverText = document.getElementById('game-over-text');
var playAgain = document.getElementById('play-again');
playAgain.addEventListener('click', startNewGame);


function setHoverText() {
    //remove all hover text
    squares.forEach((square)=> {
        square.classList.remove('x-hover');
        square.classList.remove('o-hover');
    });

var hoverClass = `${turn.toLowerCase()}-hover`;
squares.forEach((square) => {
    if (square.innerText == '') {
        square.classList.add(hoverClass);
    }
})

}

setHoverText()
    function squareClick(event) {
    
        if (gameOverArea.classList.contains('visible')) {
            return
        }
    }


squares.forEach((square) => square.addEventListener('click', squareClick));
    function squareClick(event) {
        if (gameOverArea.classList.contains('visible')) {
        
            return;
        }
        var square = event.target;
        var squareNumber = square.dataset.index;
        if (square.innerText != "") {
            return;

        }

        if (turn === PLAYER_X) {
            square.innerText = PLAYER_X;
            boardState[squareNumber - 1] = PLAYER_X;
            turn = PLAYER_O


        }
        else {
            (turn === PLAYER_O)
            square.innerText = PLAYER_O
            boardState[squareNumber - 1] = PLAYER_O;
            turn = PLAYER_X

        }
    }
setHoverText();
checkWinner();

function checkWinner() {
    //check for winner
    for (var winningCombination of winningCombination) {
       
        var { combo, strikeClass } = winningCombination;
        var squareValue1 = boardState[combo[0] - 1];
        var squareValue2 = boardState[combo[1] - 1];
        var squareValue3 = boardState[combo[2] - 1];
        
        if (squareValue1 != null &&
            squareValue1 === squareValue2 &&
            squareValue1 === squareValue3
        ) {
            
            strike.classList.add(strikeClass);
            gameOverScreen(squareValue1);
            return;
        }
        //check for  a draw
    
        var allSquareFilledIn = boardState.every((square) => square !== null);
        if (allSquareFilledIn) {
            gameOverScreen(null);
        }
    
        function gameOverScreen(winnerText) {
            let text = 'Draw!';
            if (winnerText != null) {
                text = `Winner is ${winnerText}!`;
            }
            gameOverArea.className = 'visible';
            gameOverText.innertext = text;
        }

        function startNewGame() {
            strike.className = 'strike';
            gameOverArea.ClassName = 'hidden';
            boardState.fill(null);
            squares.forEach((square) => (square.innerText = ""));
            turn = PLAYER_X;
            setHoverText();
        }

        var winningCombination = [
            //row
            { combo: [1, 2, 3], strikeClass: 'strike-row-1' },
            { combo: [4, 5, 6], strikeClass: 'strike-row-2' },
            { combo: [7, 8, 9], strikeClass: 'strike-row-3' },
            //columns
            { combo: [1, 4, 7], strikeClass: 'strike-column-1' },
            { combo: [2, 5, 8], strikeClass: 'strike-column-2' },
            { combo: [3, 6, 9], strikeClass: 'strike-column-3' },
            //diagonals 
            { combo: [1, 5, 9], strikeClass: 'strike-diagonal-1' },
            { combo: [3, 5, 7], strikeClass: 'strike-diagonal-2' },
    

        ];
    }
}

    

 
    
    





            
    
        


