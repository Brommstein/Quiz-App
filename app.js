/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';
/**
 * Example store structure
 */

// Characters that will be fighting... Ashe, Garen, Ziggs, Alistar, Fiora, Zed

const characters = {
  char: [
    {
      name: 'Ashe',
      type: 'Marksman',
      image: '<img src="images/poroAshe.jpg" alt="Ashe">',
      pro: 'Likes long fights at a range.',
      con: 'Loses to high damage.',
      loss: ['Zed', 'Ziggs'],
      tie: 'Darius',
      wins: ['Braum', 'Garen']
    },
    {
      name: 'Braum',
      type: 'Support',
      image: '<img src="images/poroBraum.jpg" alt="Braum">',
      pro: 'Good defense and good sustain.',
      con: 'Loses to long range.',
      loss: ['Ashe', 'Garen'],
      tie: 'Zed',
      wins: ['Ziggs', 'Darius']
    },
    {
      name: 'Darius',
      type: 'Fighter',
      image: '<img src="images/poroDarius.jpg" alt="Darius">',
      pro: 'Likes long fights.',
      con: 'Loses to good sustain.',
      loss: ['Braum', 'Ziggs'],
      tie: 'Ashe',
      wins: ['Garen', 'Zed']
    },
    {
      name: 'Garen',
      type: 'Tank',
      image: '<img src="images/poroGaren.jpg" alt="Garen">',
      pro: 'High defense.',
      con: 'Loses to long range.',
      loss: ['Ashe', 'Darius'],
      tie: 'Ziggs',
      wins: ['Braum', 'Zed']
    },
    {
      name: 'Zed',
      type: 'Assasssin',
      image: '<img src="images/poroZed.png" alt="Zed">',
      pro: 'High damage and high mobility.',
      con: 'Loses to long fights.',
      loss: ['Garen', 'Darius'],
      tie: 'Braum',
      wins: ['Ashe', 'Ziggs']
    },
    {
      name: 'Ziggs',
      type: 'Mage',
      image: '<img src="images/poroZiggs.png" alt="Ziggs">',
      pro: 'Good damage from long distance.',
      con: 'Loses to high damage.',
      loss: ['Zed', 'Braum'],
      tie: 'Garen',
      wins: ['Ashe', 'Darius']
    },
  ]
};

function fightResults(one, two){
  if (characters.char[one].tie === characters.char[two].name || characters.char[one].name === characters.char[two].name){
    return 'Tie';
  } else {
    for (let i = 0; i < 2; i++){
      if (characters.char[one].loss[i] === characters.char[two].name){
        return characters.char[two].name;
      }
      if (characters.char[one].wins[i] === characters.char[two].name){
        return characters.char[one].name;
      }
    }
  }
}

//generate my questions
function start() {
  for (let i = 0; i < 10; i++) {
    let numOne =Math.floor(Math.random()*5);
    let numTwo = Math.floor(Math.random()*5);
    let randVsOne = characters.char[numOne].name;
    let randVsTwo = characters.char[numTwo].name;
    if (randVsTwo === randVsOne) {
      randVsTwo = characters.char[numTwo].name;
    }
    store.questions.push({
      question: `Who will win between ${randVsOne} and ${randVsTwo}?`,
      answers: [
        `${randVsOne}`,
        `${randVsTwo}`,
        'Tie'
      ],
      correctAnswer: fightResults(numOne, numTwo)
    });
  }
}

const store = {
  // 5 or more questions are required
  questions: [],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates



function generateMain() {
  return $('.mainPage').html(`<form>
  <h2>Lets begin!</h2>
  <div class="group">
  <div class="itemOne">
  <img src="images/poroNasus.jpg" alt="Nasus">
  </div>
  <div class="itemThree"><button id="startQuiz" type="submit">Start!</button></div>
  <div class="itemTwo">
  <img src="images/poroRenek.jpg" alt="Renekton">
  </div>
  </div>
  </form>
  `);
}

function generateQuestion() {
  let charOne = characters.char.find(function (characters) {
    return store.questions[store.questionNumber].answers[0] === characters.name;
  });
  let charTwo = characters.char.find(function (characters) {
    return store.questions[store.questionNumber].answers[1] === characters.name;
  });
  return $('.mainPage').html(`<form class="questions">
    <h2>${store.questions[store.questionNumber].question}</h2>
    <div class="group">
    <div class="itemOne">
    ${charOne.image}
    <p>${charOne.type}</p>
    <p>${charOne.pro}</p>
    <p>${charOne.con}</p>
    </div>
    <div class="itemThree">
    <ul>
        <li><input type="radio" id="a" name="answers" value="${store.questions[store.questionNumber].answers[0]}"><label for="a"> ${store.questions[store.questionNumber].answers[0]} </label></li>
        <li><input type="radio" id="b" name="answers" value="${store.questions[store.questionNumber].answers[1]}"><label for="b"> ${store.questions[store.questionNumber].answers[1]} </label></li>
        <li><input type="radio" id="c" name="answers" value="${store.questions[store.questionNumber].answers[2]}"><label for="c"> ${store.questions[store.questionNumber].answers[2]} </label></li>
    </ul>
    <button id="results" type="button">Results</button>
    </div>
    <div class="itemTwo">
    ${charTwo.image}
    <p>${charTwo.type}</p>
    <p>${charTwo.pro}</p>
    <p>${charTwo.con}</p>
    </div>
    </div>
    <br>
    <br>
    <br>
    <div class="group scoreBoard">
    <div class="itemOne">
    <p>Question ${store.questionNumber + 1} out of ${store.questions.length}</p>
    </div>
    <div class="itemTwo">
    <p>Current score: ${store.score}</p>
    </div></div>
</form>`);
}

function generateFeedback(answer, correct) {
  if (store.questionNumber === store.questions.length - 1) {
    if (answer === correct) {
      store.score++;
      return $('.mainPage').html(`<div class="results">
    <h2>Correct!</h2>
    <p>Good job! You got that one correct!</p>
    <button id="finalResult"type="button">Final Results</button>
  </div>`);
    } else {
      return $('.mainPage').html(`<div class="results">
    <h2>Incorrect...</h2>
    <p>Sorry but that's incorrect...</p>
    <p>The correct answer was ${store.questions[store.questionNumber].correctAnswer}</p>
    <button id="finalResult"type="button">Final Results</button>
  </div>`);
    }
  } else {
    if (answer === correct) {
      store.score++;
      return $('.mainPage').html(`<div class="results">
    <h2>Correct!</h2>
    <p>Good job! You got that one correct!</p>
    <button id="nextQuestion"type="button">Next Question</button>
  </div>`);
    } else {
      return $('.mainPage').html(`<div class="results">
      <h2>Incorrect...</h2>
      <p>Sorry but that's incorrect...</p>
      <p>The correct answer was ${store.questions[store.questionNumber].correctAnswer}.</p>
      <button id="nextQuestion"type="button">Next Question</button>
</div>`);
    }
  }
}

function generateResults() {
  return $('.mainPage').html(`<div class="finalResult">
  <h2>Final Results</h2>
  <p>You scored a ${store.score} out of ${store.questions.length}!</p>
  <p>Let me know what you thought about my quiz/game!</p>
  <p>Or play again!</p>
  <button id="restart" type="button">Play Again</button>
</div>`);
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store




function render() {
  if (store.quizStarted === false) {
    generateMain();
  } else {
    generateQuestion();
  }
}




/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)



function submit() {
  $('.mainPage').on('submit', '', function (event) {
    event.preventDefault();
    store.quizStarted = true;
    render();
  });
}

function nextResult() {
  $('.mainPage').on('click', '#results', function () {
    let answer = $('input[name="answers"]:checked').val();
    let correct = store.questions[store.questionNumber].correctAnswer;
    if (answer !== undefined) { generateFeedback(answer, correct); }
  });
}

function nextQuestion() {
  $('.mainPage').on('click', '#nextQuestion', function () {
    store.questionNumber++;
    generateQuestion();
  });
}

function finalResult() {
  $('.mainPage').on('click', '#finalResult', function () {
    generateResults();
  });
}

function restart() {
  $('.mainPage').on('click', '#restart', function () {
    store.questionNumber = 0;
    store.score = 0;
    render();
  });
}

function generateHTML() {
  $('.mainBody').html();
}

function main() {
  start();
  generateHTML();
  render();
  submit();
  nextResult();
  nextQuestion();
  finalResult();
  restart();
}

$(main);