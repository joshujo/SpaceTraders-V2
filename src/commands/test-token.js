export function testToken(token) {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    };

    return fetch('https://api.spacetraders.io/v2/my/agent', options)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            if (Object.hasOwn(response, 'data')) {
                return true;
            } else {
                return false;
            }
        })
        .catch(function(err) {
            console.error(err);
            return false;
        });
}

