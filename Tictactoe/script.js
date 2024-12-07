let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGamebtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw = document.querySelector(".drawGame");
let turnO=true;
const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];
let winning = true;
 const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    draw.classList.add("drawGame");

 }
let count=0;
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        
        if(turnO){
            box.innerText = "O";
            turnO=!turnO;
        }else{
            box.innerText = "X";
            turnO=!turnO;
        }
        box.disabled=true;
        checkWinner();
        if(count == 9 && winning ){
            draw.classList.remove("drawGame");

        }
    });

 });

 const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled =true;
    }
 }
 const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText=""
    }
 }
 const showWinner=(winner)=>{
    msg.innerText=`Congrats,Winner is ${winner} 700000000 `;
    msgContainer.classList.remove("hide");
    disableBoxes();
     winning =false;
 }
 const checkWinner =()=>{
    for(let pattern of winPattern){
       let pos1Val= boxes[pattern[0]].innerText;
       let pos2Val= boxes[pattern[1]].innerText;
       let pos3Val= boxes[pattern[2]].innerText;
       if(pos1Val != "" && pos2Val!="" && pos3Val!=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner",pos1Val );
            showWinner(pos1Val);
        }
       }
    }
};

newGamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
