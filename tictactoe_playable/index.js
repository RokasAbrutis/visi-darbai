// win con kinda
const winCon = {
    con1: "XXX",
    con2: "OOO"
}
// gameState == false means game ongoing gameState == true means game finished
let gameState = false;
// getting the main div
let root = document.querySelector('.root');
// creating a table and appending it to the div
let table = document.createElement('table');
root.append(table);

let winner = document.querySelector('.winner');


//starting squares array which contains all squares
let squares = [];
// loop creates the table
for(let i = 0; i < 9; i++) {
    if(i % 3 == 0) {
        var tr = document.createElement('tr');
        table.append(tr)
    }
    let td = document.createElement('td');
    td.className = `square${i}`;
    tr.append(td);

    squares[i] = document.querySelector(`.square${i}`);

    
}
// adds event listener to squares
squares.map(square => {
    square.addEventListener('click', () => {
        if(square.innerHTML == '' && gameState == false) {
            turn == false ? square.innerHTML = "O" : square.innerHTML = "X";
            checkWin();
            playerTurn();
        } else if(gameState == true) {
            for(let i = 0; i < 9; i++) {
                squares[i].innerHTML = "";
                squares[i].style.backgroundColor = "white";
            }
            gameState = false;
            turn = false;
            winner.innerHTML = "Tic Tac Toe";
        }
    })
});

// turn == false means its O turn turn == true means its X turn
let turn = false;

// switches turns
function playerTurn() {
    turn = !turn;
}


// checking if anyone won
function checkWin() {
    if(squares[0].innerHTML + squares[1].innerHTML + squares[2].innerHTML == winCon.con1 || squares[0].innerHTML + squares[1].innerHTML + squares[2].innerHTML == winCon.con2) {
        turn == false ? winner.innerHTML = "Player O Wins!" : winner.innerHTML = "Player x Wins!";
        squares[0].style.backgroundColor = "green";
        squares[1].style.backgroundColor = "green";
        squares[2].style.backgroundColor = "green";
        gameState = !gameState;
    } else if (squares[3].innerHTML + squares[4].innerHTML + squares[5].innerHTML == winCon.con1 || squares[3].innerHTML + squares[4].innerHTML + squares[5].innerHTML == winCon.con2) {
        turn == false ? winner.innerHTML = "Player O Wins!" : winner.innerHTML = "Player x Wins!";
        squares[3].style.backgroundColor = "green";
        squares[4].style.backgroundColor = "green";
        squares[5].style.backgroundColor = "green";
        gameState = !gameState;
    } else if(squares[6].innerHTML + squares[7].innerHTML + squares[8].innerHTML == winCon.con1 || squares[6].innerHTML + squares[7].innerHTML + squares[8].innerHTML == winCon.con2) {
        turn == false ? winner.innerHTML = "Player O Wins!" : winner.innerHTML = "Player x Wins!";
        squares[6].style.backgroundColor = "green";
        squares[7].style.backgroundColor = "green";
        squares[8].style.backgroundColor = "green";
        gameState = !gameState;
    } else if (squares[0].innerHTML + squares[4].innerHTML + squares[8].innerHTML == winCon.con1 || squares[0].innerHTML + squares[4].innerHTML + squares[8].innerHTML == winCon.con2) {
        turn == false ? winner.innerHTML = "Player O Wins!" : winner.innerHTML = "Player x Wins!";
        squares[0].style.backgroundColor = "green";
        squares[4].style.backgroundColor = "green";
        squares[8].style.backgroundColor = "green";
        gameState = !gameState;
    } else if(squares[2].innerHTML + squares[4].innerHTML + squares[6].innerHTML == winCon.con1 || squares[2].innerHTML + squares[4].innerHTML + squares[6].innerHTML == winCon.con2) {
        turn == false ? winner.innerHTML = "Player O Wins!" : winner.innerHTML = "Player x Wins!";
        squares[2].style.backgroundColor = "green";
        squares[4].style.backgroundColor = "green";
        squares[6].style.backgroundColor = "green";
        gameState = !gameState;
    } else if(squares[0].innerHTML + squares[3].innerHTML + squares[6].innerHTML == winCon.con1 || squares[0].innerHTML + squares[3].innerHTML + squares[6].innerHTML == winCon.con2) {
        turn == false ? winner.innerHTML = "Player O Wins!" : winner.innerHTML = "Player x Wins!";
        squares[0].style.backgroundColor = "green";
        squares[3].style.backgroundColor = "green";
        squares[6].style.backgroundColor = "green";
        gameState = !gameState;
    } else if(squares[1].innerHTML + squares[4].innerHTML + squares[7].innerHTML == winCon.con1 || squares[1].innerHTML + squares[4].innerHTML + squares[7].innerHTML == winCon.con2) {
        turn == false ? winner.innerHTML = "Player O Wins!" : winner.innerHTML = "Player x Wins!";
        squares[1].style.backgroundColor = "green";
        squares[4].style.backgroundColor = "green";
        squares[7].style.backgroundColor = "green";
        gameState = !gameState;
    } else if(squares[2].innerHTML + squares[5].innerHTML + squares[8].innerHTML == winCon.con1 || squares[2].innerHTML + squares[5].innerHTML + squares[8].innerHTML == winCon.con2) {
        turn == false ? winner.innerHTML = "Player O Wins!" : winner.innerHTML = "Player x Wins!";
        squares[2].style.backgroundColor = "green";
        squares[5].style.backgroundColor = "green";
        squares[8].style.backgroundColor = "green";
        gameState = !gameState;
    } else if(squares[0].innerHTML && squares[1].innerHTML && squares[2].innerHTML && squares[3].innerHTML && squares[4].innerHTML && squares[5].innerHTML && squares[6].innerHTML && squares[7].innerHTML && squares[8].innerHTML) {
        winner.innerHTML = "Draw";
        gameState = !gameState;
    }
}

