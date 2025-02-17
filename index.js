let currentindex=0;
const slides=document.querySelectorAll(".slide");

function changeslide(direction){
    slides[currentindex].classList.remove("active");
    currentindex += direction;
    if(currentindex>slides.length -1 ){
        currentindex=0;
    }else if(currentindex < 0){
        currentindex=slides.length-1;
    }
    console.log(currentindex);
    
    slides[currentindex].classList.add("active")
    
}
setInterval(() => {
    changeslide(1); 
}, 3000);