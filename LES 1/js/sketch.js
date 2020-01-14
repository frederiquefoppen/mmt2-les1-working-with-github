// scope var 

// variabelen 'leven'alleen binnen de functie waarin ze zijn geplaatst 

//global variabel
var xPos = 10; 

function setup() {

createCanvas(600,400);


}

function draw() { 

    xPos = xPos + 1;
    console.log(xPos);


    ellipseMode(CORNER)

    var colorR = 255;
    var colorG = 0;
    var colorB =0;

    var newColor = map(mouseX, 0, width, 0, 255);

    //console.log(color);

   background(newColor, colorG, colorB);
   ellipse( xPos, 0, 80, 80);

}