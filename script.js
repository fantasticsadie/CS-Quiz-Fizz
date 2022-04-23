// Index for current question number & score is 0
let index = 0, score = 0
// Object for all the questions in the quiz
var questions = [{
		question: "Which  of the below is NOT a commonly used data type?",
		choices: ['alerts', 'Booleans', 'strings', 'numbers'],
		answer: 'Hypertext Markup Language'
	}, {
		question: "array...?",
		choices: ['12px', '16px', '20px', '24px'],
		answer: '16px'
	}, {
		question: 'Where are CSS and Javascript refrenced in an HTML document?',
		choices: ['body', 'footer', 'h3', 'head'],
		answer:'head'
	}, {
		question: 'How do you set the background color to black in CSS?',
		choices: ['background = black;', 'background {black};', 'background: black;', 'background is black;'],
		answer:'background: black;'
	}, {
		question: 'How do you comment is JavaScript?',
		choices: ['# comment', '@ comment', '// comment', '\\ comment'],
		answer:'// comment'
	}, {
		question: 'How do you change the text of an element to uppercase in CSS?',
		choices: ['text-transform: uppercase', 'font-transform = uppercase', 'You can\'t do that in css', 'font-transform: uppercase'],
		answer:'text-transform: uppercase'
	}, {
		question: 'How do you select an element with the id "content"',
		choices: ['.content', 'content', '#content', '*content'],
		answer:'#content'
	}ii
		//	INSERT HERE TO ADD A QUESTION
		/** 				FORMAT

		question: 	STRING QUESTION
		choices:		ARRAY OF CHOICES
		answer:			STRING W/CORRECT ANSWER

		*/
]

/**
 * Start the program. Set the questions
 */
reset()

/**
 * When a button is clicked evaluate the
 * answer and move to the next question
 */
$('input').click(function() {

	next(($(this).next().html() == questions[index].answer) ? 1 : 0)

	index = (index < questions.length-1) ? index+1 : 0
	if (index === 0) end()
	else run()
	$(this).prop('checked', false);
})



/**
 * When the reset button is clicked reset
 * the quiz and reshuffle the questions.
 */
$('#button').click(function() {
	reset()
})

/**
 * Display the question and the choices
 */
function run()
{
	$('p').html(questions[index].question)
	for (let i = 0; i < 4; i++)
		$('#a'+i).html(questions[index].choices[i])
}


/**
 * Display the output of the answer, correct/wrong,
 * for 1 second then go to the next question
 */
function next(x)
{
	$('.content').hide()
	$('h3').show()

	if (x == 1)
	{
		$('h3').html("Correct").css('color', '#0F0')
		score++
	}
	else
		$('h3').html("Wrong").css('color', '#F00')
	if (index != questions.length-1)
	{
		setTimeout(function() {
			$('h3').hide()
			$('.content').show()
		}, 1000)
	}
}


/**
 * When all the questions have been answered
 * end the game and reset the score
 */
function end()
{
	$('.content').hide()
	$('h3').show()

	$('h3').html(Math.round((score / questions.length) * 100) + "%").css('color', "#000")

	score = 0
	index = 0
}

/*
 * Reset the quiz. reshuffle the array and
 * reset the variables
 */
function reset()
{
	score = 0
	index = 0

	shuffle(questions)
	for (let i = 0; i < questions.length; i++)
		shuffle(questions[i].choices)

	setTimeout(function() {
		$('h3').hide()
		$('.content').show()
	}, 1000)

	run()
}


/*
 * Shuffle the array
 */
function shuffle(array)
{
	for (var i = array.length - 1; i > 0; i--)
	{
		var j = Math.floor(Math.random() * (i + 1))
		var temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
}