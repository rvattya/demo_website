
document.addEventListener('DOMContentLoaded', () => {
    const third_container = document.getElementById("third_container");
    const flip_box = document.getElementById('flip_box');

    third_container.addEventListener("click", () => {
        if (!flip_box.classList.contains('flipped')) {
            flip_box.classList.add('flipped');
        }
    });
});

const openLoginBtn = document.getElementById('openLoginBtn');
const openSignupBtn = document.getElementById('openSignupBtn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

document.addEventListener('DOMContentLoaded', () => {

    const openLoginBtn = document.getElementById('openLoginBtn');
    const login_popup = document.getElementById('login_popup');
    const login_btn = document.getElementById('login_btn');
    const signup_btn = document.getElementById('signup_btn');
    const login_page = document.getElementById('login_page');
    const signup_page = document.getElementById('signup_page');
    const login_submit = document.getElementById('login_submit');
    const signup_submit = document.getElementById('signup_submit');

    openLoginBtn.addEventListener('click', () => {
        login_popup.classList.remove('hidden');
        
    });


    login_page.addEventListener('click', () => {
        login_btn.classList.remove('hidden');
        signup_btn.classList.add('hidden');
    });
    signup_page.addEventListener('click', () => {
        signup_btn.classList.remove('hidden');
        login_btn.classList.add('hidden');
    });
    login_submit.addEventListener('ckick', () => {
        login_popup.classList.add('hidden')
    });
    signup_submit.addEventListener('ckick', () => {
        signup_submit.classList.add('hidden')
    });

    login_submit.addEventListener('click',()=> {
        login_popup.classList.add('hidden');
    });

    signup_submit.addEventListener('click',()=> {
        login_popup.classList.add('hidden');
    });

    window.addEventListener('click', (event) => {
        if (event.target === login_popup) {
            login_popup.classList.add('hidden');
        };
    });   
});
 const output=()=>{


 const User_name = document.getElementById('User_name').value;
    const password = document.getElementById('password').value;

    const entername = document.getElementById('enter_name').value;
    const rollnumber = document.getElementById('roll_name').value;
    const fathername = document.getElementById('father_name').value;
    const mothername = document.getElementById('mother_name').value;
    const schoolname = document.getElementById('school_name').value;
    const addressname = document.getElementById('address_name').value;


     output_name= document.getElementById('output_name');
     output_roll= document.getElementById('output_roll');
     output_fathername= document.getElementById('output_fathername');
     output_mothername= document.getElementById('output_mothername');
     output_class= document.getElementById('output_class');
     output_schoolname= document.getElementById('output_schoolname');

    output_name.innerHTML= ` ${entername}`;
    output_roll.innerHTML= ` ${rollnumber}`;
    output_fathername.innerHTML= ` ${fathername}`;
    output_mothername.innerHTML= ` ${mothername}`;
    output_class.innerHTML= ` ${schoolname}`;
    output_schoolname.innerHTML= ` ${addressname}`;

 };
 
const parsentage=()=>{


 const Hindi_10th= parseInt(document.getElementById('Hindi_10th').value);
 const English_10th= parseInt(document.getElementById('English_10th').value);
 const Maths_10th= parseInt(document.getElementById('Maths_10th').value);
 const Science_10th= parseInt(document.getElementById('Science_10th').value);
 const Socialscience_10th= parseInt(document.getElementById('Socialscience_10th').value);
 

 const Final_marks = Hindi_10th + English_10th + Maths_10th + Science_10th + Socialscience_10th;

    const get_parsentage= (Final_marks/500)* 100;
    const finalmarks= document.getElementById('final_marks');
    const parsentage = document.getElementById('parsentage');

    

    finalmarks.innerHTML=` Your Total Marks is ${Final_marks}`;
    parsentage.innerHTML=`You Get ${get_parsentage}% in 10th Class`;
 }
