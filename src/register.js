function register() {
        const symbol = document.getElementById('symbol').value;
        const faction = document.getElementById('faction').value;

        if (!/^[a-zA-Z0-9-_]{3,14}$/.test(symbol)) {
                console.log("invalid symbol");
        } else {
                console.log(symbol + "" + faction);
             
                const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            symbol: symbol,
                            faction: faction,
                        }),
                    };
                    
                    fetch('https://api.spacetraders.io/v2/register', options)
                        .then(function(response) {
                                return response.json();
                        })
                        .then(function(response) {
                                console.log(response.data.token);
                                navigator.clipboard.writeText(response.data.token);
                                if (document.getElementById('remember').checked) {
                                        localStorage.setItem('token', response.data.token);
                                        window.location.href = './homePage.html';
                                        localStorage.setItem('remember', 'true');
                                        sessionStorage.setItem('token', response.data.token);
                                } else {
                                        sessionStorage.setItem('token', response.data.token);
                                        localStorage.removeItem('token');
                                        window.location.href = './homePage.html';
                                        localStorage.setItem('remember', 'false');
                                }
                        })
                        .catch(function(err) {
                                console.error(err);
                        });
        }
}

document.getElementById('registerSubmit').addEventListener('click', register);
