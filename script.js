let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choices');
choices.forEach((val)=>{
    val.addEventListener('click',()=>{
        let userChoice=val.getAttribute('id');
        gamelogic(userChoice);
        document.querySelector('#player-score').innerText=userScore;
        document.querySelector('#comp-score').innerText=compScore;
    });
});

const gamelogic=(userChoice)=>{
    let option=['rock','paper','scissors'];
    let compchoice=Math.floor(Math.random()*3);
    let bg=document.querySelector('.result');
    if(userChoice==='rock'){
        if(option[compchoice]==='scissors'){
            document.querySelector('#text').innerText='You Win 🎉';
            bg.style.backgroundColor='green';
            userScore++;
        }else if(option[compchoice]==='paper'){
            document.querySelector('#text').innerText='Computer Wins 🤖';
            bg.style.backgroundColor='red';
            compScore++;
        }else{
            document.querySelector('#text').innerText='Draw 🤝';
            bg.style.backgroundColor='#081b31';
        }
    }else if(userChoice==='paper'){
        if(option[compchoice]==='scissors'){
            document.querySelector('#text').innerText='Computer Wins 🤖';
            bg.style.backgroundColor='red';
            compScore++;
        }else if(option[compchoice]==='paper'){
            document.querySelector('#text').innerText='Draw 🤝';
            bg.style.backgroundColor='#081b31';
        }else{
            document.querySelector('#text').innerText='You Win 🎉';
            bg.style.backgroundColor='green';
            userScore++;
        }
    }else if(userChoice==='scissors'){
        if(option[compchoice]==='scissors'){
            document.querySelector('#text').innerText='Draw 🤝';
            bg.style.backgroundColor='#081b31';
        }else if(option[compchoice]==='paper'){
            document.querySelector('#text').innerText='You Win 🎉';
            bg.style.backgroundColor='green';
            userScore++;
        }else{
            document.querySelector('#text').innerText='Computer Wins 🤖';
            bg.style.backgroundColor='red';
            compScore++;
        }
    }
}