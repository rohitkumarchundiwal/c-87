canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/

ctx.beginPath();
ctx.color = "grey";
ctx.linewidth = 1;
ctx.x = 430, y = 200(x, y, width, height);
ctx.stroke();

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "blue".
    Use lineWidth and set the width to 5.
    Use arc() to create a circle at x = 250 and y = 210
with 40 as radius, 0 startAngle and 2 * Math.PI endAngle.
*/

ctx.beginPath();
ctx.color = "blue";
ctx.lineWidth = 5;
ctx.x = 250, y = 40(x, y, r, startAngle, endAngle);
ctx.stroke();

// Similarly, create a black circle with position 350 and 210

ctx.beginPath();
ctx.color = "black";
ctx.lineWidth = 5;
ctx.x = 350, y = 210(x, y, r, startAngle, endAngle);
ctx.stroke();

// Similarly, create a red circle with position 210 and 40

ctx.beginPath();
ctx.color = "red";
ctx.lineWidth = 5;
ctx.x = 210, y = 40(x, y, r, startAngle, endAngle);
ctx.stroke();

// Similarly, create an orange circle with position 300 and 250

ctx.beginPath();
ctx.color = "orange";
ctx.lineWidth = 5;
ctx.x = 300, y = 250(x, y, r, startAngle, endAngle);
ctx.stroke();

// Similarly, create a green circle with position 400 and 250

ctx.beginPath();
ctx.color = "green";
ctx.lineWidth = 5;
ctx.x = 400, y = 250(x, y, r, startAngle, endAngle);
ctx.stroke();