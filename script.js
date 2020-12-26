const quizData = [
    {
        question: 'How old is Stephen?',
        choices: {
            a: '11',
            b: '20',
            c: '25',
            d: '23'
        },
        correct: 'b'
    }, {
        question: 'What is the most used programming language?',
        choices: {
            a: 'Java',
            b: 'C',
            c: 'Python',
            d: 'Javascript'
        },
        correct: 'd'
    }, {
        question: 'Who is the president of the Philippines?',
        choices: {
            a: 'Stephen Talorong',
            b: 'Donald Trump',
            c: 'Jessica Soho',
            d: 'Rodrigo Duterte'
        },
        correct: 'd'
    }, {
        question: 'What does HTML stand for?',
        choices: {

            a: 'How To Make Lumpia',
            b: 'Home Tool Markup Language',
            c: 'HyperText Markup Language',
            d: 'HypoText Markup Language'
        },
        correct: 'c'
    }, {
        question: 'What year was Javascript launched?',
        choices: {
            a: '2020',
            b: '2019',
            c: '2018',
            d: 'None of the above'

        },
        correct: 'd'
    }
]
const startBtn = document.querySelector('button.start-quiz');
const startPage = document.querySelector('.start-page');
const quizContainer = document.querySelector('.quiz-container');
quizContainer.style.display = 'none';

startBtn.addEventListener('click', function() {
    startPage.style.display = 'none';
    quizContainer.style.display = 'block';
});

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.querySelector('button.submit-answer');





let currentQuiz = 0;


let currentQuizData = quizData[currentQuiz];

loadQuiz();
function loadQuiz() {
    currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.choices.a;
    b_text.innerHTML = currentQuizData.choices.b;
    c_text.innerHTML = currentQuizData.choices.c;
    d_text.innerHTML = currentQuizData.choices.d;



    
}



function check() {
    const aOption = document.querySelector('#a');
    const bOption = document.querySelector('#b');
    const cOption = document.querySelector('#c');
    const dOption = document.querySelector('#d');
    const options = [aOption, bOption, cOption, dOption];
    options.forEach(option => {

        if(option.checked) {
            if(option.id === currentQuizData.correct) {

                option.checked = false;
                if((currentQuiz +1) < quizData.length) {
                    currentQuiz++;
                    loadQuiz();
                } else {
                    congrats();
                }
            } else {
                alert('Oops, Try Again.');
                option.checked = false;
            }
        }
    })

}

submit.addEventListener('click', check);


function congrats() {
    const quiz = document.querySelector('.quiz-header');
    quiz.innerHTML = '';
    const congratsMessage = document.createElement('h1');
    congratsMessage.classList.add('congrats');
    congratsMessage.innerText = 'Congratulations!';
    congratsMessage.style.color = '#01ab87';
    quiz.appendChild(congratsMessage);   
    const messageDetails = document.createElement('p');
    messageDetails.innerText = 'You Passed!';
    messageDetails.style.textAlign = 'center';
    quiz.appendChild(messageDetails);
}



