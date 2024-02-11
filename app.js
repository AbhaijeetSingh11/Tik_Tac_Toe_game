let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#resetkey");
let newgame=document.querySelector("#newkey");
let msgcontainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");


let turnO=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if (turnO) {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
}
);

const resetgame =()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const diasableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations!, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    diasableboxes();
}
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let postion1=boxes[pattern[0]].innerText;
        let postion2=boxes[pattern[1]].innerText;
        let postion3=boxes[pattern[2]].innerText;

        if(postion1!="" && postion2!="" && postion3!=""){
            if(postion1===postion2 && postion2===postion3){
                console.log("Winner!",postion1);
                showwinner(postion1);
            }
        }
    }
};

newgame.addEventListener('click',resetgame);
resetbutton.addEventListener("click",resetgame);