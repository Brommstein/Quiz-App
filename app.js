'use strict';
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who will win between Ashe and Zed?',
      answers: [
        'Ashe',
        'Zed',
        'Tie'
      ],
      correctAnswer: 'Zed'
    },
    {
      question: 'Who will win between Garen and Alistar?',
      answers: [
        'Garen',
        'Alistar',
        'Tie'
      ],
      correctAnswer: 'Garen'
    },
    {
      question: 'Who will win between Fiora and Alistar?',
      answers: [
        'Fiora',
        'Alistar',
        'Tie'
      ],
      correctAnswer: ''
    },
    {
      question: 'Who will win between Ziggs and Zed?',
      answers: [
        'Ziggs',
        'Zed',
        'Tie'
      ],
      correctAnswer: ''
    },
    {
      question: 'Who will win between Fiora and Ashe?',
      answers: [
        'Fiora',
        'Ashe',
        'Tie'
      ],
      correctAnswer: ''
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

// Characters that will be fighting... Ashe, Garen, Ziggs, Alistar, Fiora, Zed

const characters = {
  char: [
    {
      name: 'Ashe',
      type: 'Marksman',
      pro: 'High range, Constant damage, Easily kite opponent',
      con: 'Very squishy'
    },
    {
      name: 'Alistar',
      type: 'Support',
      pro: 'Good ',
      con: ''
    },
    {
      name: 'Fiora',
      type: 'Fighter',
      pro: '',
      con: ''
    },{
      name: 'Garen',
      type: 'Tank',
      pro: '',
      con: ''
    },{
      name: 'Zed',
      type: 'Assasssin',
      pro: 'High damage',
      con: 'Very squishy'
    },
    {
      name: 'Ziggs',
      type: 'Mage',
      pro: 'High range',
      con: 'Very Squishy'
    },
  ]
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



/*
function generateMain(){
  console.log('Generate Main has started...');
  return $('.mainPage').html(`<form><h2>Lets begin!</h2>
  <button id="startQuiz" type="submit">Start!</button></form>`);
}
  
function generateQuestion(){
  console.log('Generate Question has started...');
  return $('.mainPage').html(`<form class="questions">
  <ul>
      <li><input type="radio" id="a"><label for="a"> A </label></li>
      <li><input type="radio" id="b"><label for="b"> B </label></li>
      <li><input type="radio" id="c"><label for="c"> C </label></li>
  </ul><button id="nextQuestion" type="submit">Next</button>
</form>`);
}
  
function generateFeedback(){
  console.log('Generate Feedback has started...');
  return '';
}
*/



/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store



/*
function render(){
  if (store.quizStarted === false){
    console.log('Starting Main');
    generateMain();
  } else {
    console.log('Starting Questions');
    generateQuestion();
  }
}
*/



/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


/*
function submit(){
  $('.mainPage').on('submit', '', function(event){
    event.preventDefault();
    console.log('Starting...');
    store.quizStarted = true;
    render();
  });
}

function click(){
  
}

function main(){
  render();
  submit();
}

$(main);
*/