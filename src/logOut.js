function logOut() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    window.location.href = './index.html';
    localStorage.setItem('remember', 'false'); 
}

document.getElementById('logOut').addEventListener('click', logOut);