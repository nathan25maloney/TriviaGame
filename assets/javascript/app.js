var firstTime = true;
var answer = "";

var choices = {
	one: {Question: "Question 1", option1: "Option 1", option2: "Option 2", option3:"Option 3", option4:"Option 4", answer: "option3"},

};



function build() {
	
	for (var key in choices.one) {
	  if (choices.one.hasOwnProperty(key)) {
	    if (key === "Question") {
	    	$("#start").text(choices.one.Question);
	    	console.log(key + " -> " + choices.one[key]);
	    } else if(key === "answer") {
	    	answer = choices.one[key];
	    	console.log(answer);
	    } else {
		    var letterBtn = $("<button>");
	        letterBtn.attr("class","letter-button letter letter-button-color");
	        letterBtn.attr("id",key);
	        letterBtn.attr("data-letter",choices.one[key]);
	        letterBtn.text(choices.one[key]);
	        $('#questions').append(letterBtn);
	        console.log(key + " -> " + choices.one[key]);
	        var breakButton = $("<br>");
	        var ID = '"#'+ key +'"';
	        $("#questions").append(breakButton);
	    }
	  }
	}
}

function run() {
	if (firstTime) {
		build();
	}
	

}




$("#start").on("click", function() {
	run();
	firstTime = false;
})



$("#option1").on("click", function() {
	console.log("test1");
})
$("#option2").on("click", function() {
	console.log("test1");
})
$("#option3").on("click", function() {
	console.log("test1");
})
$("#option4").on("click", function() {
	console.log("test1");
})