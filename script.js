let input = document.querySelector('input');
let userName=document.getElementById('username');
input.addEventListener('keyup',function(event){
    userName.innerText=input.value;    
});

let stenButton = document.getElementById('sten');
let userVAL =document.getElementById('userval');
let randomVal=Math.floor(Math.random()*3);
let pcVal=document.getElementById('pcval');
let userPoang =document.getElementById('userpoang');
let pcPoang=document.getElementById('pcpoang');
let body=document.querySelector('body');
let userCounter = 0;
 let pcCounter = 0;
 const tie =document.getElementById('tie');
 function checkWinner(){
    if (userCounter === 3) {
        body.style.backgroundColor=('blue');
        alert(`${input.value} Vann`)
        location.reload(true)

      }
      else if (pcCounter === 3) {
          body.style.backgroundColor=('red')
        alert('Dator vann!')
        location.reload(true)
      }

 }
 tie.style.display=('none');


 
userPoang.innerText='0'
pcPoang.innerText='0'

stenButton.addEventListener('click',function(){
    tie.style.display=('none');
    randomVal = Math.round(Math.random() * 3);
    userVAL.innerText='sten';
    if(randomVal ===0){
        pcVal.innerText=('Pc choice :sten')
        tie.style.display=('') ;
   }
    else if(randomVal ===1){
        userCounter++
        pcVal.innerText=('Pc choice :säxe')
        userPoang.innerText=`${userName.innerText} point: ${userCounter}`
    }
    else {
        pcCounter++
        pcVal.innerText=('pc choice :papper')
        pcPoang.innerText=`pc point ${pcCounter}`

    }
    checkWinner();
});

let papperButton = document.getElementById('papper');
papperButton.addEventListener('click',function(){
    tie.style.display=('none');
    randomVal = Math.round(Math.random() * 3);
    userVAL.innerText='papper'
    if(randomVal ===0){
         userCounter++
        pcVal.innerText=('Pc choice :sten')
        userPoang.innerText=`${userName.innerText} point: ${userCounter}`
    }
    else if(randomVal ===1){
        pcCounter++
        pcVal.innerText=('Pc choic :säxe')
        pcPoang.innerText=`pc point ${pcCounter}`
    }
    else {
        pcVal.innerText=('pc choice :papper')
        tie.style.display=('') ;
    }
    checkWinner();

});


let saxeButton = document.getElementById('säxe');
saxeButton.addEventListener('click',function(){
    randomVal = Math.round(Math.random() * 3);
    tie.style.display=('none');
    userVAL.innerText='säxe'

    if(randomVal ===0){
        
        pcCounter++
        pcVal.innerText=('Pc choice :sten')
        pcPoang.innerText=`pc point ${pcCounter}`
    }
    else if(randomVal ===1){
        pcVal.innerText=('säxe')
        tie.style.display=('') ;
        }
    else {
        userCounter++

        pcVal.innerText=('Pc choice :papper')
        userPoang.innerText=`${userName.innerText} point: ${userCounter}`

    }
    checkWinner();

});


