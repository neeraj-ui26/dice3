var randomNumber1= Math.floor(Math.random()*6)+1;// creating a random number
var randomDiceImage = "dice"+ randomNumber1+".png";//applying randomization to dice image
var randomImageSource= randomDiceImage;// combininng image with the source
var image1= document.querySelectorAll("img")[0];//Selecting the image attribute
image1.setAttribute("src", randomImageSource);// setting the setAttribute

var randomNumber2=  Math.floor(Math.random()*6)+1;
var randomImage = "dice"+ randomNumber2+ ".png";
var randomImageSource2=  randomImage;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
