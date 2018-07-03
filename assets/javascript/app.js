//** User clicks start to start the game
//      Wrap game in a function
//** The game will show only one question until the player answer it or the time runs out
//      Create an array of objects. with question and 4 choices. The oject should have 3 inncorrect choices and 1 correct choice. 

//      Create a function. it should have setTImeout() in function. The function should call an question and all choices
//** The game will display time remaining, the question and 4 answer choices
//** If the player selects the correct answer, show a screen congratulating them for choosing the right option with a gif. After 5 seconds, display the next question -- do this without user input.
//** If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
//** If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//** On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

window.onload = function () {

    //Keeps track of correct & incorrect choices
    var correctAnswers = 0;
    var incorrectAnswers = 0;

    var time = 10;

  

    //Object storing question and answers
    var game = [
        {
            question: "What city are the Falcons based in?",
            choices: ["New York", "Atlanta", "Los Angeles", "Chicago"],
            answer: "Atlanta"
        },
        {
            question: "Who is the starting quarterback for the Philadelphia Eagles?",
            choices: ["Nick Foles", "Tom Brady", "Carson Wentz", "Aaron Rodgers"],
            answer: "Carson Wentz"
        },
        {
            question: "Who owns the New England Patriots?",
            choices: ["Arthur Blank", "Jim Irsay", "Dan Rooney", "Robert Kraft"],
            answer: "Robert Kraft"
        },
        {
            question: "Which team has won the most Super Bowls?",
            choices: ["Pittsburgh Steelers", "New England Patriots", "Dallas Cowboys", "San Francisco 49ers"],
            answer: "Pittsburgh Steelers"
        },
        {
            question: "Which team won the first ever Super Bowl?",
            choices: ["Kansas City Chiefs", "Dallas Cowboys", "Green Bay Packers", "Baltimore Colts"],
            answer: "Green Bay Packers"
        }
    ];

    var messages = {
        correct: "Correct!",
        incorrect: "Sorry, That is incorrect",
        endTime: "You ran out of time!",
        finished: "Let look at your results"
    }



    //Creates New Button
    function newBtn(param) {
        var buttonChoices = $("<button>")
        buttonChoices.addClass("answerBtn")
        buttonChoices.text(game[param].choices);
        $("#bottomContent").append(buttonChoices);
    };



    // //Creates an element for the question
    function questionDisplay(param) {
        var newQuestionDiv = $("<div>");
        newQuestionDiv.text(game[param].question);
        $("#topContent").append(newQuestionDiv);
    }


    //Function that Loops through game[].choices array and creates an element of all the choices
    function questionChoices(param) {
        game[param].choices.forEach(function (j) {
            var newChoiceBtn = $("<button>");
            newChoiceBtn.addClass("choiceBtn");
            newChoiceBtn.attr("id", "item-" + j);
            newChoiceBtn.text(j);
            $("#bottomContent").append(newChoiceBtn);
        });
    }






    questionGameIndex = 0
    var interval = setInterval(function () {
        //Clears previous question and answer 
        $("#bottomContent").empty();
        $("#topContent").empty();

        //Displays question and answer
        questionDisplay(questionGameIndex);
        questionChoices(questionGameIndex);

        //incriments questionGameIndex
        questionGameIndex++;

        if (questionGameIndex === game.length) {
            clearInterval(interval);
        };
        console.log(interval);

    }, 5000);




    function beginGame() {


        $("#startbutton").on("click", begintimer);

        function begintimer() {

            //$("#startbutton").empty();

            var intervalId;
            function startTime() {
                intervalId = setInterval(decrement, 1000);
            };

            //decrement time, displays it to the timeClock div and clear interval once it hits 30
            function decrement() {
                time--;
                $("#timeClock").text(time);
                if (time === 0) {
                    stopTime();
                };
            };


            function stopTime() {
                clearInterval(intervalId);
                time = 10;
                //startTime();
            }

            startTime();




        };














    };

    beginGame();













};

   
