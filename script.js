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
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }, {
        question: 'Who is the president of the Philippines?',
        a: 'Stephen Talorong',
        b: 'Donald Trump',
        c: 'Jessica Soho',
        d: 'Rodrigo Duterte',
        correct: 'd'
    }, {
        question: 'What does HTML stand for?',
        a: 'How To Make Lumpia',
        b: 'Home Tool Markup Language',
        c: 'HyperText Markup Language',
        d: 'HypoText Markup Language',
        correct: 'c'
    }, {
        question: 'What year was Javascript launched?',
        a: '2020',
        b: '2019',
        c: '2018',
        d: 'None of the above',
        correct: 'd'
    }
]

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.querySelector('button');


let currentQuiz = 0;

const currentQuizData = quizData[currentQuiz];

loadQuiz();

function loadQuiz() {
    console.log(currentQuizData);
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.choices.a;
    b_text.innerHTML = currentQuizData.choices.b;
    c_text.innerHTML = currentQuizData.choices.c;
    d_text.innerHTML = currentQuizData.choices.d;



    // currentQuiz++;
}

function check() {
    const values = Object.values(currentQuizData.choices);


    values.forEach(item => {
        // console.log(item);
        if(item.checked) {
            if(item === currentQuizData.correct) {
                console.log("Correct!");
            }
        }
    })
}

submit.addEventListener('click', check);



