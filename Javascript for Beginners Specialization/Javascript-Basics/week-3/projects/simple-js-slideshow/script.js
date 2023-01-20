

(function(){
    "use strict"
    const myImages = ["img/image1.jpg","img/image2.jpg","img/image3.jpg","img/image4.jpg","img/image5.jpg"];
    let currnetImage = 0;
    //next
    document.getElementById("next").onclick = nextPhoto ;
    function nextPhoto(){
        currnetImage++;
        if(currnetImage > myImages.length-1){
            currnetImage =  0;
        }
        document.getElementById("my-img").src = myImages[currnetImage];
        
    }
    
    //prev
    document.getElementById("previous").onclick = prevPhoto;
    function prevPhoto(){
        currnetImage--;
        if(currnetImage < 0){
            currnetImage = myImages.length-1;
        }
        document.getElementById("my-img").src = myImages[currnetImage];
    }
})()