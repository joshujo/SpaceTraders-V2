export function findTrait(waypoint, trait) {

const token = sessionStorage.getItem('token');

const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  };
  
fetch('https://api.spacetraders.io/v2/systems/' + waypoint + '/waypoints?traits='+ trait, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        const traitContent = document.createElement('div');
        findTrait.id = 'traitContent';
    })
    .catch(function(err) {
        console.error(err);
    });



console.log("fired");
return findTrait;

}