
(function(){
  
    "use strict"
let currnetImage = 0;
const myImages = ["img/image1.jpg","img/image2.jpg","img/image3.jpg","img/image4.jpg","img/image5.jpg"];
const container = document.getElementById("container");
const nextBtn = document.getElementById("next");
const prevbtn = document.getElementById("previous");


//next-btn
nextBtn.addEventListener("click",function(event){
    
    currnetImage++;
        if(currnetImage > myImages.length-1){
            currnetImage =  0;
        }
        swapImage()
})

//previous-btn
 prevbtn.addEventListener("click",function(event){
        
        currnetImage--;
        if(currnetImage < 0){
        currnetImage = myImages.length-1;
        }
        
        swapImage()
}) 

//swap-function
function swapImage(){
    const newSlide = document.createElement("img");
    newSlide.src = myImages[currnetImage];
    newSlide.className = "fadeimg";
    container.appendChild(newSlide);
    if(container.children.length > 2){
        container.removeChild(container.children[0])
    }
}
})()
