var firstTime = true;
var answer = "";
var intervalId;
var number = 30;
var correct = 0;
var incorrect = 0;

var choices = {
	one: {Question: "How many feet are in a yard", option1: "2", option2: "5", option3:"1", option4:"3", answer: "option4"},
	two: {Question: "How many inches are in a foot", option1: "8", option2: "14", option3:"12", option4:"6", answer: "option3"}
};

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
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
				    } else {
					    var letterBtn = $("<button>");
				        letterBtn.attr("class","letter-button letter letter-button-color");
				        letterBtn.attr("id",key);
				        letterBtn.attr("data-letter",choices[result][key]);
				        letterBtn.text(choices[result][key]);
				        $('#questions').append(letterBtn);
				        console.log(key + " -> " + choices[result][key]);
				        var breakButton = $("<br><br>");
				        $("#questions").append(breakButton);
				    };
			    };
			};
		} 
	};
};


function run() {
	function decrement() {
      number--;
      $("#show-number").html("<h2>Time Remaining: " + number + "</h2>");
      if (number === 0) {
        stop();
        $("#show-number").html("<h2>Time's Up!</h2>");
      }
    }

	if (firstTime) {
		intervalId = setInterval(decrement, 1000);
		build();
	}
	

}



    //  The stop function
function stop() {
     clearInterval(intervalId);
}

function checkAnswer(ans) {
	console.log(answer);
	console.log(ans);
	if(answer === ans){
		stop();
		correct += 1;
		console.log(correct);
	} else {
		incorrect += 1;
		console.log(incorrect);
		console.log("wrong answer");
	}
}






$("#start").on("click", function() {
	run();
	firstTime = false;

	$("#option1").on("click", function() {
		checkAnswer("option1");
	})

	$("#option2").on("click", function() {
		checkAnswer("option2");
	})

	$("#option3").on("click", function() {
		checkAnswer("option3");
	})

	$("#option4").on("click", function() {
		checkAnswer("option4");
	})

})



	
