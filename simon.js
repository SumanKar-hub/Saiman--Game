
let gameSeq =[];
let userSeq=[];
let started = false;
let level = 0;
let btns = ["red","green","yellow","blue"];//collor choice
let h4 = document.querySelector('h4');

let cont = document.querySelector('.contener')

document.addEventListener('keypress',function(){

    if(started == false){
        console.log("game started");
        started = true;
    
        levelUp();
    }
    
})


function gameFlash(btn){
   
    btn.classList.add("flash")
    setTimeout(()=>{
        btn.classList.remove("flash");
    },300);

}
function userFlash(btn){
   
    btn.classList.add("userFlash")
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    },300);

}


function levelUp(){
    userSeq=[];
    level++;
    
    h4.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random()*4);
    randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIndex);
    // console.log(randColor);
    // console.log(randBtn);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

  


    // if (randBtn) {
    //     btnFlash(randBtn);
    //     gameSeq.push(randColor);
    // } else {
    //     console.error("Button not found for color:", randColor);
    // }
}

function checkAns(idx){
    console.log('current level',level);
    //let idx = level-1;fixed index
    if(started == true){

        if(userSeq[idx] == gameSeq[idx] ){
            console.log ("same value");
            if(userSeq.length == gameSeq.length){
                setTimeout(levelUp, 1000);
            
            }
        }
        else{
            //console.log("game over ! press any key to start");
            h4.innerHTML = `game over ! your score is :<b>${level}</b> <br> Press any key to Start `;
            body = document.querySelector('body');
            body.style.backgroundColor='red';
            setTimeout(()=>{
                body.style.backgroundColor='white';
            },200)
            reset();
        }
    }
}


function btnPress(){
    //console.log(this);
    if(started == true){
        let btn = this;
        userFlash(btn);
        let userColor = btn.getAttribute('id');
        console.log(userColor);
        userSeq.push(userColor);
    
        checkAns(userSeq.length-1);
    }

}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started = false;
    gameSeq =[];
    userSeq =[];
    level = 0;
}
let restart = document.querySelector('#restart');
restart.addEventListener('click',(btn)=>{

    if(started == true){
        console.log('game restart');
        h4.innerHTML = `game <b>Restarted</b> ! your score is :<b>${level}</b> <br> Press any key to Start `;
        //userFlash(btn);
        restart.style.backgroundColor = "pink";
        setTimeout(()=>{
            restart.style.backgroundColor = "aqua";
        },250);
        reset();

    }




});










