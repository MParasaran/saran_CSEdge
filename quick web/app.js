const quizContainer = document.getElementById('quiz');
const feedbackContainer = document.getElementById('feedback');
const submitButton = document.getElementById('submit');

const quizData = [
  {
    question: 'which fruit daily a day said to keep the doctor away?',
    options: ['Papaya', 'Orange', 'Apple', 'Banana'],
    correctAnswer: 'Apple'
  },
  {
    question: 'Which is not a colour in rainbow?',
    options: ['Blue', 'Orange', 'Pink', 'Violet'],
    correctAnswer: 'Pink'
  },
  {
    question: 'What is the capital of India?',
    options: ['Maharastra', 'New Delhi', 'Pune', 'Gujarat'],
    correctAnswer: 'New Delhi'
  }
];

let score = 0;

function buildQuiz() {
  quizData.forEach((data, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<p>${index + 1}. ${data.question}</p>`;
    
    const optionsList = document.createElement('ul');
    optionsList.classList.add('options');
    data.options.forEach(option => {
      const optionItem = document.createElement('li');
      optionItem.classList.add('option');
      optionItem.innerHTML = `
        <label>
          <input type="radio" name="question${index}" value="${option}">
          ${option}
        </label>
      `;
      optionsList.appendChild(optionItem);
    });
    
    questionDiv.appendChild(optionsList);
    quizContainer.appendChild(questionDiv);
  });
}

function showResults() {
  quizData.forEach((data, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption) {
      if (selectedOption.value === data.correctAnswer) {
        score++;
      }
    }
  });
  
  const totalQuestions = quizData.length;
  const percentage = (score / totalQuestions) * 100;
  
  feedbackContainer.innerHTML = `
    <p>Your score: ${score} out of ${totalQuestions}</p>
    <p>Percentage: ${percentage}%</p>
  `;
  
  submitButton.disabled = true;
}

submitButton.addEventListener('click', showResults);

buildQuiz();
