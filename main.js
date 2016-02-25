'use strict';

'use strict';

var xArray = [], oArray = [], X, O, playerOneTurn = true;

document.addEventListener('DOMContentLoaded', init);

function init() {
  document.getElementById('start').addEventListener('click', gameControl);
  document.getElementById('gameBoard').addEventListener('click', squareSelected);
  document.getElementById('replay').addEventListener('click', resetGame);
}


function gameControl() {
  var newName = document.getElementById("nameInput").value;
  var addNameDiv = document.createElement("DIV");
  var addName = document.createTextNode(newName);
  addNameDiv.classList.add('name');
  addNameDiv.appendChild(addName);
  document.getElementById('writeName').appendChild(addNameDiv);
  document.getElementById('nameInput').value = '';
  console.log("name", newName);
}

function squareSelected() {

  if(playerOneTurn === true && event.target.classList.contains('square')) {
    event.target.innerText = "X";
    event.target.classList.add('mark');
    var dataX = event.target.getAttribute('data');
    xArray.push(dataX);
    playerOneTurn = false;
    document.getElementById('gameBoard').value = '';
    checkForWinX();
  } else {
      event.target.innerText = "O";
      event.target.classList.add('mark');
      var dataO = event.target.getAttribute('data');
      oArray.push(dataO);
      checkForWinO();
      document.getElementById('gameBoard').value = '';
      playerOneTurn = true;
  }
}

function checkForWinX() {
    var possibleWins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(var a = 0; a < possibleWins.length; a++) {
      var playerXCount = 0;
      for(var b = 0; b < 3; b++) {
        if(xArray.indexOf((possibleWins[a][b]).toString()) > -1){
          playerXCount += 1;
        } if(playerXCount === 3) {
          var addDiv = document.createElement("DIV");
          var addMsg = document.createTextNode("X is the Winner");
          document.getElementById('gameBoard').value = '';
          addDiv.classList.add('winner');
          addDiv.appendChild(addMsg);
          document.getElementById('gameBoard').appendChild(addDiv);
          } else{
            console.log('false');
          }
        }
      }
    }


function checkForWinO() {
    var possibleWins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(var a = 0; a < possibleWins.length; a++) {
      var playerOCount = 0;
      for(var b = 0; b < 3; b++) {
        if(oArray.indexOf(possibleWins[a][b].toString()) > -1) {
          playerOCount += 1;
        } if(playerOCount === 3) {
          var addDiv = document.createElement("DIV");
          var addMsg = document.createTextNode("O is the Winner");
          document.getElementById('gameBoard').value = '';
          addDiv.classList.add('winner');
          addDiv.appendChild(addMsg);
          document.getElementById('gameBoard').appendChild(addDiv);
        } else{
          console.log('false');
        }
      }
    }
  }

function resetGame() {
  document.location.href = "";
}
