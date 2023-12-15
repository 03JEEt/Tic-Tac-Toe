let boxes=document.querySelectorAll('.btn');
let winner=document.querySelector('.hide');
let reset=document.querySelector('#reset');
console.log(boxes);
let turn=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let dis=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
        box.style.backgroundColor='black';
    })
}
let ena=()=>{
    boxes.forEach((box)=>{
        console.log("heelo");
        box.disabled=false;
        box.style.backgroundColor='white';
        box.innerText="";
        winner.innerHTML="";
        turn=true;
    })
}
let draw=()=>{
    let i=0;
    boxes.forEach((box)=>{
        if(box.disabled==true)
        i++;
    }
    )
    if(i==9){
        winner.innerText=`Draw!!!`;
    }
}
let check=()=>{
    for(i of win){
        let one=boxes[i[0]].innerText;
        let two=boxes[i[1]].innerText;
        let thr=boxes[i[2]].innerText;
        if(one!='' && two!='' && thr!=''){
            if(one==two && two==thr){
                dis();
                winner.innerText=`Congratulations winner is ${one}!!!`;
                turn=true;
                return true;
            }
        }
    }
    return false;
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn==true){
            box.innerText='X';
            turn=false;
            box.disabled=true;
            box.style.backgroundColor='black';
        }
        else{
            box.innerText='O';
            turn=true;
            box.disabled=true;
            box.style.backgroundColor='black';
        }
        if(!check()){
            draw();
        }
    })
});
reset.onclick=()=>{
    ena();
}