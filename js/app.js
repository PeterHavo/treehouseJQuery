//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
let color = $(".selected").css("background-color");
var ctx = $('canvas')[0].getContext('2d');
var $canvas = $('canvas');
var lastEvent;
var maousedown = false;




$(".controls").on('click','li', function(){
  //cache current color
  
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected")
  color = $(this).css("background-color");
  console.log("you just clicked on my ! "+ color );
})
//when cliking on control list item 

$("#revealColorSelect").on('click',function(){
  changeColor();
  $('#colorSelect').toggle('slow');
})
  //deselect siblings element
  //select cicked element

function changeColor() {
  	var r = $('#red').val();
  	var g = $('#green').val();
  	var b = $('#blue').val();
  	$('#newColor').css('background-color',"rgb(" + r + "," + g + "," + b + ")");

  }
$("input[type=range]").on("input", changeColor);


  $("#addNewColor").click(function () {
    console.log('you pressed add new color!!!!!!')
  	var $newColor = $("<li></li>");
        		$newColor.css('background-color',$('#newColor').css('background-color') );
            $('.controls ul').append($newColor);

  	//append the color to the controls ul 
  		//select new color 


  })
  $canvas.mousedown(function(e){
    lastEvent = e ;
    maousedown = true;
		var lastX = e.offsetX;
		var lastY = e.offsetY;

 			console.log('mousedown event triggered!! ' + ' x: ' + lastX + ' y: ' + lastY  );  //lastEvent je objekt //takze treba si dohladat cez consolu a lastEvent aby som videl secky props
	}).mousemove(function(e){
    if(maousedown){
        ctx.beginPath();
		ctx.beginPath();
		ctx.moveTo(lastEvent.offsetX,lastEvent.offsetY);
		ctx.lineTo(e.offsetX,e.offsetY);
	/*ctx.lineTo(20,20);
	ctx.lineTo(10,20);
	ctx.closePath();*/
  		ctx.strokeStyle = color;
		ctx.stroke()
 		lastEvent = e;
    	}
  }).mouseup(function(){
    maousedown = false;  
  }).mouseleave(function(){
  	$canvas.mouseup()
  })
 //on mouse events on the canvas
	//draw lines
	//document.getElementbyTagName('canvas')[0] 
	//getContext means for PC where to draw. usualy shortcut for context is ctx
	//var ctx= $('canvas')[0].getContext('2d');
	//we are going to say context start path
	/*ctx.beginPath();
	ctx.beginPath();
	ctx.moveTo(10,10);
	ctx.lineTo(20,10);
	ctx.lineTo(20,20);
	ctx.lineTo(10,20);
	ctx.closePath();
	ctx.stroke();*/
