var numsquares = 6
var	colors =generateColors(numsquares);
var squares = document.querySelectorAll(".squares");
var  pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDispalay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var allButtons = document
// var buttons = document.querySelectorAll("button");

// buttons.addEventListener("mouseover", function(){
// 	alert("Chris")
// });

easyBtn.addEventListener("click", function(){
	    numsquares = 3;
		easyBtn.classList.add("selected")
		hardBtn.classList.remove("selected")
		colors = generateColors(numsquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for (i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
	    squares[i].style.display= "none";
	  }
	}
});

hardBtn.addEventListener("click", function(){
		numsquares = 6;
		hardBtn.classList.add("selected")
		easyBtn.classList.remove("selected")
		colors = generateColors(numsquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for (i=0; i<squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
	        squares[i].style.display= "block";
	  
	}
	})


resetBtn.addEventListener("click", function(){
	//generate new colors
	colors =  generateColors(numsquares);
	// pick a new randomColor
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	// change calors of the squares
	for (i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor ="steelblue";
	messageDispalay.textContent = "";
	this.textContent="New Colors";

})
// var selectedColor = ""
for (i=0; i<squares.length;i++){
	//add initial color to squares
	squares[i].style.backgroundColor = colors[i];	
	//add Listenenrs to squares
	squares[i].addEventListener("click", function(){
	//grab color of the clicked square
	  var clickedColor = this.style.backgroundColor;
	  if(clickedColor===pickedColor){
		  messageDispalay.textContent="correct!";
		  changecolors(clickedColor);
		  h1.style.backgroundColor=pickedColor;
		  resetBtn.textContent='play again'
	  }
	  else{
		  this.style.backgroundColor = "#232323";
		  messageDispalay.textContent ="Try again";
	  }
	//compare colors
	// if (clickedColor === pickColor){
	// 	alert("the match");
	// }
	// else{
	// 	alert("they d'ont match");
	// }
	//      // this.style.
	    // var selectedColor=colors[i];
	    // alert("Yuppy");
	  })
  };
  function changecolors(color){
		  //loopthrough all squares
		for ( var i=0; i<colors.length; i++){
		  squares[i].style.backgroundColor=color;
		}
	}

  function pickColor(){
      var randomIndex = Math.floor(Math.random()*colors.length);
      return colors[randomIndex]; 
  }
  function generateColors(num){
  	//Make an array
  	var arr = []
  	//add num random color to array
  	for (var i = 0; i<num; i++){
  		arr.push(randomColor());

  	}
  	// return
  	return arr;
  }
  
  function randomColor(){
  	//pick a red from 0to 255
  	var r = Math.floor(Math.random()*256);
  	//green from 0-255
  	var g = Math.floor(Math.random()*256);
  	//0-255
  	var b = Math.floor(Math.random()*256);
  	return "rgb("+r+", "+g+", "+b+")";
  }









  // function pickColor(){
  // 	var rgbList = ();
  // 	for(i=0; i<3; i++){
  // 	   var randomIndex = Math.floor(Math.random()*255+1);
  // 	   rgbList.push(randomInde
  // 	   return 
  // 	}
  	 
  // }
