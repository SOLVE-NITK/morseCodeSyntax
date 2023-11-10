let simsubscreennum=0;
let temp=0;


	
function navNext()
{
	
	for(temp=0;temp<2;temp++)
	{ 
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	
	simsubscreennum+=1;
	//
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();

	
	
}

function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}

function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

function blinkArrow(l,t,d,h)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
}

function magic()
{
	if(simsubscreennum==1)
	{
		blinkArrow(520,270,360,40);
		
	}
	
	
}
function character(){
	console.log("submitbuttonclicked")

	var obj = document.getElementById("myselect");
	var warningMessage = document.getElementById("warningMessage");

	// Check if the selected value is an empty string
	if (obj.value === "selectchar") {
	  // Display a warning message in the <p> tag
	  warningMessage.innerHTML = "Please select an character.";
	} else {
	  // Clear the warning message
	//   warningMessage.innerHTML = "";
	  // Perform other actions based on the selection
	  // For example, you can process the selected value here
	  document.getElementById("submit").addEventListener('click',function navNext() {
		var obj = document.getElementById("myselect");
		document.getElementById("morse1").innerHTML = ("selected alphabet: ")+
		obj.options[obj.selectedIndex].text;

		var obj = document.getElementById("myselect");
		document.getElementById("dm1").innerHTML =
		obj.options[obj.selectedIndex].text;
		
		console.log(document.getElementById("myselect").value);

		});
         navNext();
	}
	
	   
}

function morseTocode(){

const selectElement= document.getElementById("myselect");
const morsedisplay= document.getElementById("morsedisplay");
const selectedOption = selectElement.value;
var obj = document.getElementById("myselect");
document.getElementById("morse1").innerHTML = ("selected alphabet: ")+
obj.options[obj.selectedIndex].text;

var obj = document.getElementById("myselect");
document.getElementById("dm1").innerHTML =
obj.options[obj.selectedIndex].text;



	const characterToMorse = { 
		'slash': '-..-.', 'period':'.-.-.-','comma':'--..--',
		'questionmark':'..--..','apostrophe':'.----.','colon':'---...',
		'semicolon':'-.-.-.','doubledash':'-...-','plus':'.-.-.',
		'exclamation':'-.-.--','parethesis_open':'-.--.','parethesis_close':'-.--.-',
		'ampersand':'.-...','minus':'-....-','underscore':'..--.-',
		'quotation':'.-..-.','dollar':'...-..-','atsign':'.--.-.',
		
      
};
let selectedMorseCode = characterToMorse[selectedOption];
//   console.log(selectedOption)

  let submit= document.getElementById("submit");
  submit.addEventListener('click',function () {
	// const selectedMorseCode = characterToMorse[selectedOption];
	// morsedisplay.innerHTML= ` ${selectedMorseCode}`;
	
		
		
	

	console.log(selectedMorseCode)

});
}
 function play()
{
	console.log("clicked play")
	const characterToMorse = { 
		'slash': '-..-.', 'period':'.-.-.-','comma':'--..--',
		'questionmark':'..--..','apostrophe':'.----.','colon':'---...',
		'semicolon':'-.-.-.','doubledash':'-...-','plus':'.-.-.',
		'exclamation':'-.-.--','parethesis_open':'-.--.','parethesis_close':'-.--.-',
		'ampersand':'.-...','minus':'-....-','underscore':'..--.-',
		'quotation':'.-..-.','dollar':'...-..-','atsign':'.--.-.'
		
    };
	

	const selectElement= document.getElementById("myselect");
	const morsedisplay= document.getElementById("morsedisplay");
	const repeatbutton= document.getElementById("repeat");
	const dotAudio = document.getElementById('dotAudio');
   const dashAudio = document.getElementById('dashAudio');
   const playbutton = document.getElementById('ply');
   const intervalDuration = 1000;  // 1 second interval
  
   morsedisplay.innerHTML  = ''; 


    let currentIndex = 0;
	let selectedOption = selectElement.value;
	let selectedMorseCode = characterToMorse[selectedOption];
	let interval;

	function seqMorse(){
		
		
	if (currentIndex < selectedMorseCode.length) {
	playbutton.disabled = true;
		
		const currentChar = selectedMorseCode[currentIndex];
		const Context = new AudioContext(); 


		var oscillator = Context.createOscillator();
		oscillator.frequency.value=600;
		oscillator.connect(Context.destination);
		oscillator.start();
		// Play audio for dots and dashes
		if (currentChar === '.') {
			setTimeout(function() { oscillator.stop();},100);
		//   dotAudio.play();
		} else if (currentChar === '-') {
			setTimeout(function() { oscillator.stop();},300);

		//   dashAudio.play();
		}
		
    // Update the Morse code being displayed
    morsedisplay.innerHTML += currentChar;
    
    // Move to the next character
	
    currentIndex++;
	console.log(currentIndex)
	repeatbutton.style.display = 'none';
	
  } 
      
    else {
   
   
       console.log("hello")
	//    selectedOption = selectElement.value;
	   
	//    morsedisplay.innerHTML  = ''; 
    // Optionally, you can stop the interval here
	document.getElementById("ply").addEventListener('click',function (){
		document.getElementById("repeat").style.visibility="visible";

	});
    clearInterval(interval);

	repeatbutton.style.display='block';
//  morsedisplay.innerHTML  = '';
	// currentIndex = 0; 
	playbutton.disabled = false;
	
  }
}
 seqMorse();
 
 document.getElementById('repeat').addEventListener('click',function(){
	morsedisplay.innerHTML  = '';
 });

// selectElement.addEventListener('change', function () {
//  selectedOption = selectElement.value;
//  selectedMorseCode = characterToMorse[selectedOption];
//  morsedisplay.innerHTML  = ''; // Clear the previous Morse code
//   currentIndex= 0;	
 // clearInterval(interval); // Clear any existing interval
	// interval = setInterval(seqMorse, intervalDuration); // Set a new interval
//   });



// Set an interval to continue playing Morse code


// Add a click event for the "playbutton" button
playbutton.addEventListener('click', function () {
	// Disable the "Start" button to prevent multiple clicks
	playbutton.disabled = true;
	repeatbutton.style.display = 'none';
	currentIndex= 0;	
    clearInterval(interval);
	
	// Trigger the Morse code playback by simulating a select change
	const event = new Event('change');
	selectElement.dispatchEvent(event);

	
	
// repeatbutton.addEventListener('click', function () {
// 	// Hide the "New Character" button
	
  
// 	// Trigger the Morse code playback by simulating a select change
// 	const event = new Event('change');
// 	selectElement.dispatchEvent(event);
//   });
});
 interval = setInterval(seqMorse, intervalDuration);
    
   
//    repeatbutton.addEventListener('click',function () {
	
//      console.log("clickedrepeat")
	
//     temp=1;
// 	 simsubscreennum=1;

// 	 document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
// 	 document.getElementById("canvas2").style.visibility="hidden";
// 	 document.getElementById("repeat").style.visibility="hidden";
	
// });

}
function repeat(){
	
	console.log("clickedrepeat");
	// for(temp=0;temp<2;temp++)
	// { 
	// 	document.getElementById("canvas"+temp).style.visibility="hidden";
	// }
	
	// simsubscreennum+=1;
	// //
	// document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	// document.getElementById("nextButton").style.visibility="hidden";
   
simsubscreennum = 1;
   
	document.getElementById("canvas2").style.visibility="hidden";
  
 
document.getElementById("canvas1").style.visibility="visible";
document.getElementById("repeat").style.visibility="hidden";

const selectclear=document.getElementById('myselect');
selectclear.selectedIndex=0;
}
// if (simsubscreennum > 1) { // Check if there are previous steps
//     simsubscreennum--; // Move to the previous step
// 	// document.getElementById("canvas"+simsubscreennum).style.visibility="visible"
//     navNext(simsubscreennum); // Show the content for the previous step
//   }


function submit(){
	// document.getElementById("submit").addEventListener('click',function (){
	// 	document.getElementById("repeat").style.visibility="visible";

	// });
}

	









	
	 
	
		

























