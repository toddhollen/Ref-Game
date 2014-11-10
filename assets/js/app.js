	//Question Array
		//Need to add Answer Pictures to each
	currentQuestionNum = 0;

	questions = [{
        question: "Boarding",
        choices: ["assets/images/refgamequestions/boarding.jpg","assets/images/refgamequestions/behind.jpg", "assets/images/refgamequestions/charging.jpg", "assets/images/refgamequestions/cross.jpg"],
        qNum : 0,
        correct : 0,
        correctImage : ["assets/images/refgameanswers/boarding.jpg"],
        description: ''
        },
        {
        question: "Charging",
        choices: ["assets/images/refgamequestions/hooking.jpg","assets/images/refgamequestions/charging.jpg", "assets/images/refgamequestions/delay.jpg", "assets/images/refgamequestions/tripping.jpg"],
        qNum : 1,
        correct : 1,
        correctImage : ["assets/images/refgameanswers/charging.jpg"],
        description:''
        },
        {
        question: "Goal",
        choices: ["assets/images/refgamequestions/timeout.jpg","assets/images/refgamequestions/roughing.jpg", "assets/images/refgamequestions/offside.jpg", "assets/images/refgamequestions/goal.jpg"],
        qNum : 2,
        correct : 3,
        correctImage : ["assets/images/refgameanswers/goal.jpg"],
        description:''
        },
        {
        question: "High Sticking",
        choices: ["assets/images/refgamequestions/high.jpg","assets/images/refgamequestions/kneeing.jpg", "assets/images/refgamequestions/ioffside.jpg", "assets/images/refgamequestions/holding-stick.jpg"],
        qNum : 3,
        correct : 0,
        correctImage : ["assets/images/refgameanswers/high.jpg"],
        description:''
        },
        {
        question: "Delayed Offsides",
        choices: ["assets/images/refgamequestions/cross.jpg","assets/images/refgamequestions/offside.jpg", "assets/images/refgamequestions/interference.jpg", "assets/images/refgamequestions/misconduct.jpg"],
        qNum : 4,
        correct : 1,
        correctImage : ["assets/images/refgameanswers/offside.jpg"],
        description:''
        },
        {
        question: "Roughing",
        choices: ["assets/images/refgamequestions/fighting.jpg","assets/images/refgamequestions/roughing.jpg", "assets/images/refgamequestions/slashing.jpg", "assets/images/refgamequestions/pshot.jpg"],
        qNum : 5,
        correct : 1,
        correctImage : ["assets/images/refgameanswers/roughing.jpg"],
        description:''
        },
        {
        question: "Spearing",
        choices: ["assets/images/refgamequestions/timeout.jpg","assets/images/refgamequestions/tripping.jpg", "assets/images/refgamequestions/hooking.jpg", "assets/images/refgamequestions/spearing.jpg"],
        qNum : 6,
        correct : 3,
        correctImage : ["assets/images/refgameanswers/spearing.jpg"],
        description:''
        },
        {
        question: "Washout",
        choices: ["assets/images/refgamequestions/fighting.jpg","assets/images/refgamequestions/washout.jpg", "assets/images/refgamequestions/high.jpg", "assets/images/refgamequestions/spearing.jpg"],
        qNum : 7,
        correct : 1,
        correctImage : ["assets/images/refgameanswers/washout.jpg"],
        description:''
        },
        {
        question: "Hand Pass",
        choices: ["assets/images/refgamequestions/holding.jpg","assets/images/refgamequestions/kneeing.jpg", "assets/images/refgamequestions/ioffside.jpg", "assets/images/refgamequestions/hand.jpg"],
        qNum : 8,
        correct : 3,
        correctImage : ["assets/images/refgameanswers/hand.jpg"],
        description:''
        },
        {
        question: "Misconduct",
        choices: ["assets/images/refgamequestions/misconduct.jpg","assets/images/refgamequestions/interference.jpg", "assets/images/refgamequestions/roughing.jpg", "assets/images/refgamequestions/slashing.jpg"],
        qNum : 9,
        correct : 0,
        correctImage : ["assets/images/refgameanswers/misconduct.jpg"],
        description:''
        },
        {
        question: "Tripping",
        choices: ["assets/images/refgamequestions/timeout.jpg","assets/images/refgamequestions/tripping.jpg", "assets/images/refgamequestions/holding-stick.jpg", "assets/images/refgamequestions/grasping.jpg"],
        qNum : 10,
        correct : 1,
        correctImage : ["assets/images/refgameanswers/tripping.jpg"],
        description:''
        }]

        //Global Variables
        var numberCorrect = 0;
        var currentQuestionData = questions[currentQuestionNum];

	// Intro Screen - Click to Start
    var getCurrentQuestionData = function(questions, currentQuestionNum){
        return questions[currentQuestionNum];
    }

    // Setting functions outside of document ready
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

$(document).ready(function() {
    
    $(".start").click(function(){
        event.preventDefault();
        $("#game").show("slow");
        $("#intro").hide("slow");
        showCurrentquestion(currentQuestionData); 
    });

    $(".return").click(function(){
        event.preventDefault();

        // Bring in UI for Game
        $("#game").show("slow");
        $("#answer").hide("slow");

        // Clear out original responses
        $(".correct, .incorrect").hide();
        $(".correct-image").attr('src', '');

    

        // Get Data to display
        var cqd = getCurrentQuestionData(questions, currentQuestionNum);

        // Display Data
        if (currentQuestionNum > questions.length){ 
            //    show end of game screen
            $("#answer, .correct, .incorrect, #game").hide("slow");
            $("#end").show("slow");
        } else {
            showCurrentquestion(cqd);
        }
});
	
    $('.choices a').on('click', function(event){
        //stops us from going to outgoing link
        event.preventDefault();
        var currentItem;
         if(event.target.nodeName == 'A'){
            currentItem = event.target;
            } else if(event.target.nodeName == 'IMG'){
            currentItem = $(event.target).parent();
            } 

        //Get the index number of clicked answer
        var index = $(".choices a").index(currentItem);
        var cqd = getCurrentQuestionData(questions, currentQuestionNum);

        var correct = cqd.correct;
        var correctImage = cqd.correctImage;
            if (index == correct) {
                $("#answer, .correct").show("slow");
                $(".correct-image").attr('src', cqd.correctImage);
                $("#game").hide("slow");  
                ++currentQuestionNum;
            } else {
                $("#answer, .incorrect").show("slow");
                $(".correct-image").attr('src', cqd.correctImage);
                $("#game").hide("slow"); 
                ++currentQuestionNum;
            }
    });

});