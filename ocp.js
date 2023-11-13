// Open-Close Principle (OCP) 開放封閉原則
// Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

// QuizPrinter
// Before
function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description)
    switch (question.type) {
      case 'boolean':
        console.log('1. True');
        console.log('2. False');
        break;
      case 'multipleChoice':
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        })
        break;
      case 'text':
        console.log('Answer: ____________');
        break;
    }
    console.log('');
  })
}
const questions = [
  {
    type: 'boolean',
    description: 'This video is useful.'
  },
  {
    type: 'multipleChoice',
    description: 'What is your favorite language?',
    options: ['CSS', 'HTML', 'JS', 'Python']
  },
  {
    type: 'text',
    description: 'Describe your favorite JS feature.'
  }
]
printQuiz(questions);

// ------------------------------

// After
class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log('1. True');
    console.log('2. False');
  }
}
class MultipleChoice {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }
  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    })
  }
}
class TextQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log('Answer: ____________');
  }
}
class RangeQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log('Minimum: ____________');
    console.log('Maximum: ____________');
  }
}
function printQuiz2(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log('');
  })
}

const questions2 = [
  new BooleanQuestion('This video is useful.'),
  new MultipleChoice('What is your favorite language?', ['CSS', 'HTML', 'JS', 'Python']),
  new TextQuestion('Describe your favorite JS feature.'),
  new RangeQuestion('What is the speed limit in your city?')
]
printQuiz2(questions2);