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
        var currentQuestionData = questions[currentQuestionNum]
	// Intro Screen - Click to Start

	$(".start").click(function(){
			event.preventDefault();
			$("#game").show("slow");
			$("#intro").hide("slow");
		});

	// Game Play - 

	// Step 1: Load first question into class "call"
	//Get Content for Question
$('#game').ready(function() {
	
	$('h4.call').html(currentQuestionData.questions);

	// Load first 4 pictures into class "choices"
	$('.answer1 img').attr('scr', currentQuestionData.choices[0]);
	$('.answer2 img').attr('scr', currentQuestionData.choices[1]);
	$('.answer3 img').attr('scr', currentQuestionData.choices[2]);
	$('.answer4 img').attr('scr', currentQuestionData.choices[3]);

	});

	// One picture matches "call"

	// Step 2: If picture matches call- class "correct" screne

	// Else class "incorrect"

	// Return to question screen 

	$(".return").click(function(){
			event.preventDefault();
			$("#game").show("slow");
			$("#answer").hide("slow");
		});


	//Repeat Step 1 and 2 with new call and pictures 

	//After 10 questions

	// Display #End screen

	//Total number correct = class "Number"

	//Share on Twitter and Facebook





	// Non-Game buttons to scroll through screnes.

	// $(".choices").click(function(){
	// 		event.preventDefault();
	// 		$("#answer").show("slow");
	// 		$(".correct").show("slow");
	// 		$("#game").hide("slow");
	// 	});
	});
        