let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#resetkey");
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

const checkwinner=()=>{
    for(let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes [pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
    }
}
