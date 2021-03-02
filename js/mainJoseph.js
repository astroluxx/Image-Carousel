let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg']; //creates an array and stores it to the variable 'images' and adds each image name + file extension as it's own element.
let currentImg = 0; //initializes the current image to be the first element in the array.
document.querySelector('.carousel>img').src = 'images/' + images[0]; //selects the img within the 'carousel' class and adds 'images/mountain1.jpg' to the empty src.

document.querySelector('.carousel').addEventListener('click', function (evt){ //
    if (evt.target.classList.contains('control')) {
        if (evt.target.classList.contains('next')) {
            if (currentImg >= images.length -1) { //images.length is 3, but we count 0 1 & 2. Hence the -1. You can put as many pictures in the array it will always work.
				currentImg = -1; //Sadly we do a little dirty code here, You could fix it with the right scope but that will change a lot of fundaments. I go -1 because it will increment 1 after this.
            }
            currentImg ++; //will increment by one. I kept it here in the scope. If you can get it to work elsewhere you might get rid of the ugly -1 (jump to 0 dirt)
        } else if (evt.target.classList.contains('prev')){
            if (currentImg <= 0) {//added this code to prevent it from decrementing lower than 0.
				currentImg = images.length; //if it does surpass it will go as high as the items in the array
            }
            currentImg --; //used the decrement -- here otherwise I would define te integer instead of decrementing (try -1 here and see what happens
        }
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];
    }
		
	console.log("currentImg: " + currentImg);
	console.log("images: " + images[currentImg]);
});

//Goal: find a way to make it loop back to the highest value in the array when you hit previous & vice-versa for the next button instead of preventing it to decrement/ increment