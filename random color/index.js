const box = document.querySelectorAll('.box');
const length = box.length;

let val = setInterval(setColor, 500);
function setColor(){
    let color=rgb();
    for(i=0;i<length;i++){
        box[i].style.backgroundColor=color;
    } 
}
   function rgb(){
        let colors=['red','pink','orange','blue','grey','yellow'];
     return colors[Math.floor(Math.random()*colors.length)];
     }
// clearInterval(val);