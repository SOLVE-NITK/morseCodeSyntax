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
var morseTimeout;
var isPlaying = false;
const initialX = 0; // Initial X position
const initialY = 0; // Initial y position
function buttonClick(row, column) {
	
	
	// Dictionary for Morse code names and values
	var morseCodes = {
	 "1-1": { name: "/", value: "-..-." },
	 "1-2": { name: ".", value: ".-.-.-" },
	 "1-3": { name: ",", value: "--..--" },
	 "1-4": { name: "?", value: "..--.." },
	 "2-1": { name: "'", value: ".----." },
	 "2-2": { name: ":", value: "---..." },
	 "2-3": { name: ";", value: "-.-.-." },
	 "2-4": { name: "=", value: "-...-" },
	 "3-1": { name: "+", value: ".-.-." },
	 "3-2": { name: "!", value: "-.-.--" },
	 "3-3": { name: "(", value: "-.--." },
	 "3-4": { name: ")", value: "-.--.-" },
	 "4-1": { name: "&", value: ".-..." },
	 "4-2": { name: "-", value: "-....-" },
	 "4-3": { name: "_", value: "..--.-" },
	 "4-4": { name: "\"", value: ".-..-." },
	 "5-1": { name: "$", value: "...-..-" },
	 "5-2": { name: "@", value: ".--.-." }
	 
   };
   var playButton = document.getElementById('ply');
// var playButton=document.getElementById('ply');
   
	 var buttonKey = row + "-" + column;
	 var morseCode =  morseCodes[buttonKey].value;
	 var morseCodeName =   morseCodes[buttonKey].name ;
	
	 
	// clearTimeout(window.morseTimeout);
	 
      document.getElementById("dm1").innerHTML=morseCodeName;
	  document.getElementById("selctedSyntax").innerHTML=morseCodeName;
	//   document.getElementById("morseCodeDisplay").innerHTML =  morseCode;
document.getElementById('Syntax').innerHTML=morseCodeName;
	  // Play Morse code audio
	  console.log(buttonKey)
	  clearTimeout(morseTimeout);
	  document.getElementById('repeat').addEventListener('click',function(){
		
		morseCode=0;

	  });
	  document.getElementById('ply').addEventListener('click',function(){
	
		if (!isPlaying) {
            
            playButton.disabled = true;

	            index = 0;

            // Play Morse code audio
            playMorseCodeAudio(morseCode);

            // Display Morse code sequence
            displayMorseCodeSequence(morseCode);
        }
    });
	  
	 
}

function displayMorseCodeSequence(morseCode) {
	isPlaying = true; 
	var playButton=document.getElementById('ply');
	console.log()
	// var Repeatbutton=document.getElementById('repeat')
console.log('playing');
    
    var pTag = document.getElementById("morseCodeDisplay1");
	pTag.innerHTML ="";
	 index = 0;
    function displayNextSymbol() {
		
		// playButton.disabled=true;

        if (index < morseCode.length) {
             const symbol = morseCode[index];

            // Display the symbol in the <p> tag
            pTag.innerHTML += symbol;

            index++;
console.log(index);
            // Set the timeout for the next symbol
			morseTimeout = setTimeout(displayNextSymbol, 1000);
        //    setTimeout(displayNextSymbol, 1000); // 1 second interval
        } else {
            // Enable the play button when Morse code display is complete
            
			playButton.disabled = false;
			isPlaying = false; 
            document.getElementById('repeat').style.display="block";
        }
		// document.getElementById('repeat').addEventListener('click',function(){
		// 	symbol=0;
		//   });
		
    }

    // Clear the content of the <p> tag

	pTag.innerHTML ="";
    // Start displaying Morse code sequence
    displayNextSymbol();
	// clearTimeout(displayNextSymbol);
}


function playMorseCodeAudio(morseCode) {
	
	let index = 0;
	
		function playNextSymbol() {
			// const intervalDuration = 1000;
			// document.getElementById('ply').addEventListener('click',function(){
			if (index < morseCode.length) {
				const symbol = morseCode[index];
				
				const Context = new AudioContext(); 


		     var oscillator = Context.createOscillator();
		     oscillator.frequency.value=600;
		     oscillator.connect(Context.destination);
		      oscillator.start();
	
				if (symbol === '.') {
					setTimeout(function() { oscillator.stop();},100);
				
				} else if (symbol === '-') {
					setTimeout(function() { oscillator.stop();},300);
			
				}
	console.log(symbol);
				index++;
	console.log(index);
				// Set the timeout for the next symbol
				morseTimeout = setTimeout(playNextSymbol, 1000);
				// setTimeout(playNextSymbol, 1000); // Adjust the delay as needed
			}
		// })
		}
	
		// Start playing Morse code
		playNextSymbol();
		// clearTimeout(playNextSymbol)
	}
	function Table(){
         document.getElementById('container').style.visibility="visible";

		 
	}
	function ButtonMorse()
	{
		// document.getElementById('selectbutton').addEventListener('click',function(){
			console.log('imhere')
			document.getElementById('submit').style.visibility="visible";
			document.getElementById('Syntax').style.visibility="visible";
			
		//  });
		document.getElementById('submit').addEventListener('click',function(){
			document.getElementById('container').style.visibility="hidden";
			document.getElementById('submit').style.visibility="hidden";
			document.getElementById('Syntax').style.visibility="hidden";
		});
	}


function clickHidden()
{
	document.getElementById('clickHidden').style.visibility="hidden";
}

function movingTable(){
	const div = document.getElementById('container');

	// Set the desired position (adjust these values as needed)
	const targetX = 0;
	const targetY = 45;

	// Apply the new position using the transform property
	div.style.transform = `translate(${targetX}px, ${targetY}px)`;
}

function resetDiv() {
	const div = document.getElementById('container');

	// Reset the div to the initial position
	div.style.transform = `translate(${initialX}px, ${initialY}px)`;
}
function repeat(){
	
	console.log("clickedrepeat");
	
simsubscreennum = 1;
   
	document.getElementById("canvas2").style.visibility="hidden";
  
 
document.getElementById("canvas1").style.visibility="visible";
document.getElementById("repeat").style.display="none";


document.getElementById("morseCodeDisplay1").innerHTML = "";
document.getElementById("dm1").innerHTML = "";
document.getElementById("selctedSyntax").innerHTML = "";
document.getElementById('clickHidden').style.visibility="visible";
index = 0;
isPlaying = false;
clearTimeout(morseTimeout);


}




	









	
	 
	
		

























