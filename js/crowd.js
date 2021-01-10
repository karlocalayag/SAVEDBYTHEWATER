//this is an artwork, but we left the notes Chris made for his students, and it is a demo about constructors!
//what if you wanted the objects you draw to have a "memory"? You could store information 
//inside the objects and then change them whenever you want. This is how you do that.

//first we set up a global variable that will hold our objects. 
//variables can hold anything, including functions.
var spacing = 28;
var txtSize = 25;
var speedinc = 1.001;
var maxSpeed = 1;
var particles = [];
var message = "IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE IN THE CROWD I FEEL MOST ALONE ";
var lastPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  lastPos = createVector(0,0);
  textFont('Courier New');
  textSize(txtSize);
}

//then we make a new function, called a constructor. 
//in this function, we pass in two variables, x,and y.
function particleConstructor(x,y)
{
  //our particle object contains two variables, position and direction
  this.pos = createVector(x,y);
  //I'm giving my particle a random direction;
  this.dir = createVector(random(-0.01,0.01),random(-0.01,0.01));
  this.life = 0;
  lastPos = createVector(mouseX,mouseY);
}


//this is a function to draw your particles. notice that we're passing in a var called i...
function renderParticle(i)
{
  
  
  
  //we'll use this variable i to check our particle array and draw a circle there
 //ellipse(particles[i].pos.x,particles[i].pos.y,10);
  textSize(20);

  text(message[i],particles[i].pos.x,particles[i].pos.y);
  

  
  
}

function draw() {
  clear();
  var distance = dist(mouseX,mouseY,lastPos.x,lastPos.y);
  if(mouseIsPressed && distance > spacing)
  {
    //"push" will add a new particle to your array.
    //this particle contains the mouseX and Y position
  	particles.push(new particleConstructor(mouseX,mouseY));
  }
  
  //then we'll use a for loop to draw all of our particles
  for(i = 0; i < particles.length; i++)
  {
  	renderParticle(i);
  }
}

