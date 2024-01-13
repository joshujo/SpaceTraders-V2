import { testToken } from './commands/test-token.js';

let savedToken = localStorage.getItem('token');
let savedRemember = localStorage.getItem('remember');

document.getElementById('token').value = savedToken;
if (savedRemember === 'true') {
    document.getElementById('remember').checked = true;
} else {
    document.getElementById('remember').checked = false;
}

function logIn() {
    const token = document.getElementById('token').value;
    const remember = document.getElementById('remember').checked;
     

    let valid;

    testToken(token)
        .then(valid => {
            console.log(valid);

            if (valid) {
                console.log("valid");
            } else {
                console.log("invalid");
            }
        


        if (valid === true) {
            if (document.getElementById('remember').checked) {
                localStorage.setItem('token', token);
                window.location.href = './homePage.html';
                localStorage.setItem('remember', 'true');
            } else {
                sessionStorage.setItem('token', token);
                localStorage.removeItem('token');
                window.location.href = './homePage.html';
                localStorage.setItem('remember', 'false');
            }
        } else {
            document.querySelector('.invalidLogin').style.display = "block";
        }
        
    });

}

document.getElementById('login').addEventListener('click', logIn);