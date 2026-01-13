let turn = "X";
let gameover=false;
let playerA= "Player 1"
let playerB= "Player 2";


function resetGame() {
    // 1. Select all boxes
    let boxes = document.getElementsByClassName("box");

    // 2. Loop through every box and clear the text
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "";
    }

    // 3. Reset game variables
    turn = "X";
    gameover = false;
}
function checkempty(){
    let box = document.getElementsByClassName("box");
    for(let i=0;i<box.length;i++){
        if(box[i].innerText===""){
            return false;
        }
    }
    return true;
} 
function openPopup(message) {
  document.getElementById("popupMsg").innerText = message;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function restartFromPopup() {
  closePopup();
  resetGame();
}
function checkWin() {

      let box = document.getElementsByClassName("box");
      let empty = false;

        if (
          (box[0].innerText !== "" &&
          box[0].innerText === box[1].innerText &&
          box[1].innerText === box[2].innerText) ||

          (box[3].innerText !== "" &&
          box[3].innerText === box[4].innerText &&
          box[4].innerText === box[5].innerText) ||

          (box[6].innerText !== "" &&
          box[6].innerText === box[7].innerText &&
          box[7].innerText === box[8].innerText) ||

          // columns
          (box[0].innerText !== "" &&
          box[0].innerText === box[3].innerText &&
          box[3].innerText === box[6].innerText) ||

          (box[1].innerText !== "" &&
          box[1].innerText === box[4].innerText &&
          box[4].innerText === box[7].innerText) ||

          (box[2].innerText !== "" &&
          box[2].innerText === box[5].innerText &&
          box[5].innerText === box[8].innerText) ||

          // diagonals
          (box[0].innerText !== "" &&
          box[0].innerText === box[4].innerText &&
          box[4].innerText === box[8].innerText) ||

          (box[2].innerText !== "" &&
          box[2].innerText === box[4].innerText &&
          box[4].innerText === box[6].innerText)) {
          return true;
        }
      return false;
      }

function handleClick(box) {

      if(box.innerText !== "" || gameover){
          return;
      }

      box.innerText = turn;

      if (turn === "X") {
        turn = "O";

      } else {

        turn = "X";

      }
      if (checkWin()) {

          if(turn==="X"){

            openPopup(playerB + " wins! 🎉");
            }

            else{

            openPopup(playerA + " wins!");

          }

          resetGame();

        return;
      }
      if(checkempty()){
          openPopup("It's a draw! 🤝");
          resetGame();
      }
  }
