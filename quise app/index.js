const hindi = [
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },

    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },

];
const science = [
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },

    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },

];
const maths = [
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },

    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },

];
const english = [
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },

    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C++", "Swift"],
        answer: "JavaScript"
    },

];

const categories = ["hindi", "english", "maths", "science"];

        

const home_container = document.getElementById('home_container');
const quiz_container = document.getElementById('quiz_container');
const result_container = document.getElementById('result_container');

//funtion for showing main page
function show_home() {
    home_container.style.display = "flex";
    quiz_container.style.display = "none";
    result_container.style.display = "none";
}

//funtion for showing main page

function show_quiz() {
    home_container.style.display = "none";
    quiz_container.style.display = "flax";
    result_container.style.display = "none";
}

//funtion for showing main page
function show_result() {
    home_container.style.display = "none";
    quiz_container.style.display = "none";
    result_container.style.display = "flax";
}

// Function for showing all categories on the main page
categories.forEach((category, index) => {
    const box = document.createElement('span');
    box.classList.add('box');
    box.dataset.index = index;
//in main page show categories
    const show_category = document.getElementById('show_category');
    box.textContent = `${category}`;

    show_category.append(box);
    
    box.addEventListener('click', () => {
        
    });

});
// for user side
const user_name= document.getElementById('user_name').value;
const user_btn= document.getElementById('user_btn');

//for showing timer and score
const show_time= document.getElementById('show_time');
const show_score= document.getElementById('show_score');

//for showing question and option
const show_question= document.getElementById('show_question');
const show_option= document.getElementById('show_option');

//for next question
const next_question= document.getElementById('next_question');

// for result page
const view_result =document.getElementById('view_result');

//for showing all in result page
const total_atmp= document.getElementById('total_atmp');
const time_taken= document.getElementById('time_taken');
const total_score= document.getElementById('total_score');
const correct_ans= document.getElementById('correct_ans');
const rong_ans= document.getElementById('rong_ans');
const Percentage = document.getElementById('Percentage');

//for return home page and again start quiz
const return_home= document.getElementById('return_home');
const start_again_btn = document.getElementById('start_again.btn');