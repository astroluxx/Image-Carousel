let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg']; //creates an array and stores it to the variable 'images' and adds each image name + file extension as it's own element.
let currentImg = 0; //initializes the current image to be the first element in the array.
document.querySelector('.carousel>img').src = 'images/' + images[0]; //selects the img within the 'carousel' class and adds 'images/mountain1.jpg' to the empty src.

console.log(images.length);

document.querySelector('.carousel').addEventListener('click', function (evt){ //selects the 'carousel' class and adds an event listener of click to it.
    if (evt.target.classList.contains('control')) { // this prevents the click event from triggering on elements that don't have the 'control' class.
        if (evt.target.classList.contains('next')) {
            if (currentImg > 2) { //added this code to prevent it from incrementing higher than 2.
                currentImg = 0;
             } //else {
            currentImg += 1;
        // }
        } else if (evt.target.classList.contains('prev')){
            if (currentImg < 0) {//added this code to prevent it from decrementing lower than 0.
                currentImg = images.length //- 1;
            } //else {
            currentImg -= 1;
        // }
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];
    
    }

}

});
