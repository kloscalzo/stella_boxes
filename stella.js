//Katharine LoScalzo
//4 October 2016
//Frank Stella's work made in code

//variables
var xPos = 65; //rect's x position
var yPos = 230; //rect's y position
var sizeR = 375; //size of rect's sides

function setup() {
    createCanvas(865, 625);
    background(215, 206, 197);

    //black boxes repeated within each other
    for (var i = 0; i < 10; i++) {

        //creates colored and sized borders, fills between
        strokeWeight(3.5);
        stroke(215, 206, 197);
        fill(0);

        //location and size of internal boxes
        xPos = xPos + (17);
        yPos = yPos + (17);
        sizeR = sizeR - (35);

        rect(xPos, yPos, sizeR, sizeR);
    }


    function draw() {

    }

}
