$(document).ready(function () {

	//Question Array
		//Need to finish imputting pictures
	var currentQuestionNum = 0;

	var questions = [{
        question: "Boarding",
        choices: ["assets/images/refgamequestions/boarding.jpg","assets/images/refgamequestions/ ", "assets/images/refgamequestions/ ", "assets/images/refgamequestions/ "],
        qNum : 0,
        correct : 0,
        description: ''
        },
        {
        question: "Charging",
        choices: ["assets/images/refgamequestions/.jpg","assets/images/refgamequestions/ ", "assets/images/refgamequestions/ ", "assets/images/refgamequestions/ "],
        qNum : 1,
        correct : 1,
        description:''
        },
        {
        question: "Goal",
        choices: ["assets/images/refgamequestions/.jpg","assets/images/refgamequestions/ ", "assets/images/refgamequestions/ ", "assets/images/refgamequestions/goal.jpg "],
        qNum : 2,
        correct : 3,
        description:''
        },
        {
        question: "High Sticking",
        choices: ["assets/images/refgamequestions/high.jpg","assets/images/refgamequestions/ ", "assets/images/refgamequestions/ ", "assets/images/refgamequestions/ "],
        qNum : 3,
        correct : 1,
        description:''
        },
        {
        question: "Delayed Offsides",
        choices: ["assets/images/refgamequestions/ .jpg","assets/images/refgamequestions/.offside.jpg", "assets/images/refgamequestions/ ", "assets/images/refgamequestions/ "],
        qNum : 4,
        correct : 1,
        description:''
        },
        {
        question: "Roughing",
        choices: ["assets/images/refgamequestions/fighting.jpg","assets/images/refgamequestions/roughing.jpg", "assets/images/refgamequestions/slashing.jpg", "assets/images/refgamequestions/pshot.jpg"],
        qNum : 5,
        correct : 1,
        description:''
        },
        {
        question: "Spearing",
        choices: ["assets/images/refgamequestions/timeout.jpg","assets/images/refgamequestions/tripping.jpg", "assets/images/refgamequestions/hooking.jpg", "assets/images/refgamequestions/spearing.jpg"],
        qNum : 6,
        correct : 3,
        description:''
        },
        {
        question: "Washout",
        choices: ["assets/images/refgamequestions/.jpg","assets/images/refgamequestions/ ", "assets/images/refgamequestions/ ", "assets/images/refgamequestions/ "],
        qNum : 7,
        correct : 1,
        description:''
        },
        {
        question: "Hand Pass",
        choices: ["assets/images/refgamequestions/holding.jpg","assets/images/refgamequestions/kneeing.jpg", "assets/images/refgamequestions/ioffside.jpg", "assets/images/refgamequestions/hand.jpg"],
        qNum : 8,
        correct : 3,
        description:''
        },
        {
        question: "Misconduct",
        choices: ["assets/images/refgamequestions/misconduct.jpg","assets/images/refgamequestions/interference.jpg", "assets/images/refgamequestions/roughing.jpg", "assets/images/refgamequestions/slashing.jpg"],
        qNum : 9,
        correct : 0,
        description:''
        },
        {
        question: "Tripping",
        choices: ["assets/images/refgamequestions/timeout.jpg","assets/images/refgamequestions/tripping.jpg ", "assets/images/refgamequestions/holding-stick.jpg", "assets/images/refgamequestions/grasping.jpg"],
        qNum : 10,
        correct : 1,
        description:''
        }]

        //Global Variables
        var numberCorrect = 0;
        var currentQuestionData = questions[currentQuestionNum];
	// Intro Screen - Click to Start

	$(".start").click(function(){
			event.preventDefault();
			$("#game").show("slow");
			$("#intro").hide("slow");
                        showCurrentquestion(currentQuestionData);
		});

	// Game Play - 

	// Step 1: Load first question into class "call"
	//Get Content for Question

function showCurrentquestion(currentQuestionData){
	
        //step 1: Clear Template

        $('h4.call').html("");

        // Load first 4 pictures into class "choices"
        $('.answer1 img').attr('src', "");
        $('.answer2 img').attr('src', "");
        $('.answer3 img').attr('src', "");
        $('.answer4 img').attr('src', "");

        //step 2: populate template

	$('h4.call').html(currentQuestionData.question);

	// Load first 4 pictures into class "choices"
	$('.answer1 img').attr('src', currentQuestionData.choices[0]);
	$('.answer2 img').attr('src', currentQuestionData.choices[1]);
	$('.answer3 img').attr('src', currentQuestionData.choices[2]);
	$('.answer4 img').attr('src', currentQuestionData.choices[3]);

        }

        function checkCurrentAnswer(event, currentQuestionNum, currentQuestionData){
                 //stops us from going to outgoing link
                event.preventDefault();

               //Get the index number of clicked answer

                var index = $(".choices a").index(event.target);

               // index = the number of the picture that was clicked
                //compare that to the "correct" number in the qustion array
                 // If the index number = the "correct" number, than show .correct screen.

                if (index == correct) {
                      $("#answer .correct").show("slow");
                      $("#game").hide("slow");  
                      currentQuestionNum++;
                }

         //Else, if the index number != the "correct" number, show the .incorrect screen.

                else{
                      $("#answer .incorrect").show("slow");
                      $("#game").hide("slow"); 
                      currentQuestionNum++;
                };

        };

	// Return to question screen 

	$(".return").click(function(){
			event.preventDefault();
			$("#game").show("slow");
			$("#answer").hide("slow");
                        showCurrentquestion(currentQuestionData);
		});

        //Repeat Step 1 and 2 with new call and pictures 

        //After 10 questions

        // Display #End screen

        //Total number correct = class "Number"

        //Share on Twitter and Facebook


        $(document).on('click', '.choices a', checkCurrentAnswer(event, currentQuestionData, currentQuestionNum));
                /* Act on the event */


	// Non-Game buttons to scroll through screnes.

	// $(".choices").click(function(){
	// 		event.preventDefault();
	// 		$("#answer").show("slow");
	// 		$(".correct").show("slow");
	// 		$("#game").hide("slow");
	// 	});
	});
        