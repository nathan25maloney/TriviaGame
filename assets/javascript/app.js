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

var choices = {
	one: {Question: "How many feet are in a yard", option1: "2", option2: "5", option3:"1", option4:"3", answer: "option4", img: "./assets/images/three.jpg"},
	two: {Question: "How many inches are in a foot", option1: "8", option2: "14", option3:"12", option4:"6", answer: "option3", img: "./assets/images/twelve.jpg"}
};

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
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










function build() {
	var result = pickRandomProperty(choices);

	for (var key in choices) {
	
		if (key === result){
			for (var key in choices[result] ) {
			    if (choices[result].hasOwnProperty(key)) {
				    if (key === "Question") {
				    	$("#start").text(choices[result].Question);
				    	console.log(key + " -> " + choices[result][key]);
				    } else if(key === "answer") {
				    	answer = choices[result][key];
				    	console.log(answer);
				    } else if(key === "img") {
				    	img = choices[result][key];
				    	console.log(key);
				    } else {
					    var letterBtn = $("<button>");
				        letterBtn.attr("class","letter-button letter letter-button-color");
				        letterBtn.attr("id",key);
				        letterBtn.attr("data-letter",choices[result][key]);
				        letterBtn.text(choices[result][key]);
				        $('#questions').append(letterBtn);
				        console.log(key + " -> " + choices[result][key]);
				        var breakButton = $('<br id="breakButton"><br id="breakButton">');
				        $("#questions").append(breakButton);
				    };
			    };
			};
		} 
	};
};


function run() {
	isStopped = false;
	function decrement() {
      number--;
      $("#show-number").html("<h2>Time Remaining: " + number + "</h2>");
      if (number <= 0) {
      	checkAnswer();
        stop();
        $("#show-number").html("<h2>Time's Up!</h2>");
      }
    }

	if (firstTime) {
		intervalId = setInterval(decrement, 1000);
		firstTime = false;
		build();
	} else {
		
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



    


function checkAnswer(ans) {
	remove();
	console.log("should have removed old buttons.");
	if(answer === ans){
		correct += 1;
		isCorrect = true;
		console.log("should be correct");

		function decrement2() {

	      number--;
	      $("#show-number").html("<h2>You choose the correct answer</h2>");
	      if (number <= 3) {
	        $("#show-number").html("<h2>Next Question!</h2>");
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
		imgTag.attr("src","./assets/images/correct.png")
		$('#questions').append(imgTag);
		number = 15;
		intervalId2 = setInterval(decrement2, 1000);

	} else {

		incorrect += 1;
		isCorrect = false;	

		function decrement2() {
	      number--;
	      $("#show-number").html("<h2>You choose the incorrect answer</h2>");
	      if (number <= 3) {
	        $("#show-number").html("<h2>Next Question!</h2>");
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
		number = 15;
		intervalId2 = setInterval(decrement2, 1000);
	}
}









$("#start").on("click", function() {
	if (firstTime){
		run();
	}
	
	
})



	
