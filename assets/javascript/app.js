var firstTime = true;
var answer = "";
var img = "";
var intervalId;
var intervalId2;
var number = 30;
var correct = 0;
var incorrect = 0;
var isCorrect = false;
var isStopped = false;
var choicesLength = 0;
var result = "";
var secondTime = false;
var option1Text = "";
var option2Text = "";
var option3Text = "";
var option4Text = "";
var correctAnswer = "";

var choices = {
	1: {Question: "Which character has a small dog?", option1: "Kiba", option2: "Naruto", option3:"Lee", option4:"Gaara", answer: "option1", img: "./assets/images/Kiba.gif", boolean: true},
	2: {Question: "Which akatsuki character hides their true identity?", option1: "Itachi", option2: "Tobi", option3:"Pain", option4:"Konan", answer: "option2", img: "./assets/images/Tobi1.gif", boolean: true},
	3: {Question: "Which charatcter calls them selves a avenger?", option1: "Kakashi", option2: "Hinata", option3:"Obito", option4:"Sasuke", answer: "option4", img: "./assets/images/Sasuke.gif", boolean: true},
	4: {Question: "Which character hosts the jinchuriki of the 8-tails?", option1: "Kisame", option2: "Gaara", option3:"Killer Bee", option4:"Naruto", answer: "option3", img: "./assets/images/KillerBee.gif", boolean: true},
	5: {Question: "Who is the father of Asuma?", option1: "Minato", option2: "Hiruzen", option3:"Kakashi", option4:"Jiraiya", answer: "option2", img: "./assets/images/Hiruzen.jpg", boolean: true},
	6: {Question: "Who did the 4th hokage train?", option1: "Asuma, Might Guy and Kakashi", option2: "Kurenai, Might Guy, and Asuma", option3:"Obito, Kakashi and Asuma", option4:"Rin, Kakashi and Obito", answer: "option4", img: "./assets/images/Rin-Kakashi-Obito.gif", boolean: true},
	7: {Question: "Who does NOT have a curse mark?", option1: "Anko", option2: "Jirobo", option3:"Tobi", option4:"Tayuya", answer: "option3", img: "./assets/images/Tobi.gif", boolean: true},
	8: {Question: "Who are the Legendary Sannin?", option1: "Tsunade, Jiraiya and Orochimaru", option2: "Kakashi, Might Guy and Asuma", option3:"Jiraiya, Tsunade and Kakashi", option4:"Tsunade, Orochimaru and Asuma", answer: "option1", img: "./assets/images/Sannin.gif", boolean: true},
	9: {Question: "Which two ninja accompanied Danzo to the Five Kage Summit?", option1: "Kakashi and Sasuke", option2: "Jiraiya and Orochimaru", option3:"Torune and Fu", option4:"Sai and Naruto", answer: "option3", img: "./assets/images/Fu-Torune.jpg", boolean: true},
	10: {Question: "Who helped Itachi kill his clan?", option1: "Obito", option2: "Danzo", option3:"Hiruzen", option4:"Sasuke", answer: "option1", img: "./assets/images/MaskedMan.gif", boolean: true},
	11: {Question: "Who betrayed Obito?", option1: "Kakashi", option2: "Madara", option3:"Minato", option4:"Rin", answer: "option2", img: "./assets/images/Madara.gif", boolean: true},
	12: {Question: "Which hidden mist ninja has a stolen byakugan?", option1: "Chojuro", option2: "Ameyuri Ringo", option3:"Mangetsu", option4:"Ao", answer: "option4", img: "./assets/images/Ao.jpg", boolean: true}
};


$("#start").on("click", function() {
		if(firstTime){
			console.log("Step 1");
			correct = 0;
			incorrect = 0;
			
			run();
		} else if (secondTime){
			document.getElementById('correct').remove();
			document.getElementById('incorrect').remove();
			console.log("Step 1");
			correct = 0;
			incorrect = 0;
			
			run();
		}
	})


function reset() {
	
	answer = "";
	img = "";
	number = 30;
	isCorrect = false;
	isStopped = false;
	choicesLength = 0;
	firstTime = false;
	secondTime = true;
	$("#start").css("opacity", "1.0");
	$("#start").text("Start");
	var correctText =  $("<div>");
	correctText.attr("id","correct");
	correctText.text("You got "+ correct + " questions correct!");
	$('#questions').append(correctText);
	var incorrectText =  $("<div>");
	incorrectText.attr("id","incorrect");
	incorrectText.text("You got "+ incorrect + " questions incorrect...");
	$('#questions').append(incorrectText);


}

function run() {
	isStopped = false;
	$("#start").css("opacity", "1.0");
	function decrement() {
      number--;
      $("#show-number").html("<h3>Time Remaining: " + number + "</h3>");
      if (number <= 0) {
      	checkAnswer();
        stop();
        $("#show-number").html("<h3>Time's Up!</h3>");
      }
    }
	if (firstTime) {
		intervalId = setInterval(decrement, 1000);
		firstTime = false;
		console.log("Step 2");
		build();
	} else {
		console.log("Second Question");
		number = 30;
		intervalId = setInterval(decrement, 1000);
		build();
	}
	$("#option1").on("click", function() {
		stop();
		console.log("going to check the answer.");
		checkAnswer("option1");
	})
	$("#option2").on("click", function() {
		stop();
		console.log("going to check the answer.");
		checkAnswer("option2");	
	})
	$("#option3").on("click", function() {
		stop();
		console.log("going to check the answer.");
		checkAnswer("option3");	
	})
	$("#option4").on("click", function() {
		stop();
		console.log("going to check the answer.");
		checkAnswer("option4");	
	})	
}

function build() {
	console.log("Step 3");
	$("#start").css("opacity", "1.0");
	pickRandomProperty(choices);
	console.log("build Step");
	console.log(typeof(result));
	if(typeof(result) !== 'undefined'){
		for (var key in choices) {
		
			if (key === result){
				for (var key in choices[result] ) {
				    if (choices[result].hasOwnProperty(key)) {
					    if (key === "Question") {
					    	$("#start").text(choices[result].Question);
					    	
					    } else if(key === "answer") {
					    	answer = choices[result][key];
					    	
					    } else if(key === "img") {
					    	img = choices[result][key];
					    	
					    } else if (key === "boolean") { 

					    } else {
						    var letterBtn = $("<button>");
					        letterBtn.attr("class","letter-button letter letter-button-color");
					        letterBtn.attr("id",key);
					        letterBtn.attr("data-letter",choices[result][key]);
					        letterBtn.text(choices[result][key]);
					        $('#questions').append(letterBtn);
					        
					        var breakButton = $('<br id="breakButton"><br id="breakButton">');
					        $("#questions").append(breakButton);
					        console.log("Step 5");
					        if (key === "option1"){
					        	option1Text = choices[result][key];
					        } else if (key === "option2"){
					        	option2Text = choices[result][key];
					        } else if (key === "option3"){
					        	option3Text = choices[result][key];
					        } else {
					        	option4Text = choices[result][key];
					        }
					    };
				    };
				} 
			}
		console.log("End build: ", result);
		};
	};
};

function checkAnswer(ans) {
	remove();
	console.log("should have removed old buttons.");
	if (answer == "option1"){
		correctAnswer = option1Text;
	} else if (answer == "option2") {
		correctAnswer = option2Text;
	} else if (answer == "option3"){
		correctAnswer = option3Text;
	} else {
		correctAnswer = option4Text;
	}

	$("#start").css("opacity", "0.0");
	if(answer === ans){
		correct += 1;
		isCorrect = true;
		console.log("should be correct");

		function decrement2() {

	      number--;
	      $("#show-number").html("<h3>You choose the correct answer!</h3>");
	      if (number <= 3) {
	        $("#show-number").html("<h3>Next Question!</h3>");
	      } 
	      if (number <= 0) {
	      	console.log("should have removed the img");
	      	document.getElementById('thirdScreen').remove();
	      	stop2();
	      	run();
	      }
	    }
		
		
		var imgTag = $("<img>");
		imgTag.attr("id","thirdScreen");
		imgTag.attr("src","./assets/images/correct.gif")
		$('#questions').append(imgTag);
		number = 8;
		intervalId2 = setInterval(decrement2, 1000);

	} else {

		incorrect += 1;
		isCorrect = false;	

		function decrement2() {
	      number--;

	      $("#show-number").html("<h3>The correct answer was: "+correctAnswer+"</h3>");
	      if (number <= 3) {
	        $("#show-number").html("<h3>Next Question!</h3>");
	      } 
	      if (number <= 0) {
	      	console.log("should have removed the img");
	      	document.getElementById('thirdScreen').remove();
	      	stop2();
	      	run();
	      }
	    }
		
		$("#start").text("");
		var imgTag = $("<img>");
		imgTag.attr("id","thirdScreen");
		imgTag.attr("src",img)
		$('#questions').append(imgTag);
		number = 8;
		intervalId2 = setInterval(decrement2, 1000);
	}
}




function size(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
}

function pickRandomProperty(obj) {
	var random = Math.floor(Math.random()*size(obj))+1;
	console.log(random);
	result = "";
	var foundResult = false;
	console.log("Step 4");
	for (var prop in obj) {
		var holder = parseInt(prop);

		if (holder == random){
			console.log("Step 5");
			if (choices[prop].boolean){
				console.log("good guess");
				choices[prop].boolean = false;
				foundResult = true;
				result = prop;
				console.log(prop);
				choicesLength = choicesLength +1;
				return result;
				
			} 
		} 
	}
	console.log("running");
	if(choicesLength === size(obj)){
		for (var prop in obj) {
			choices[prop].boolean = true;
		}

		stop();
		stop2();
		reset();
		
		console.log("Reset Step");
	} else if (!foundResult) {
		console.log("Recursive Step");
		pickRandomProperty(choices);

	}
    
}

function remove() {

    document.getElementById('option1').remove();
    document.getElementById('option2').remove();
    document.getElementById('option3').remove();
    document.getElementById('option4').remove();
    for (var i = 0; i < 8; i++) {
    	document.getElementById('breakButton').remove();
    };
    
}

//  The stop function
function stop() {
    clearInterval(intervalId);
    isStopped = true;
}

function stop2() {
	clearInterval(intervalId2);
    isStopped = true;
}
















    















	
