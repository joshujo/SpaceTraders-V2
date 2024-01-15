export function findTrait(waypoint, trait) {

    let i = 0; 

   
let response;

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

        traitInfoResults.innerHTML = '';

        const traitBox = document.querySelector('.traitBox');

        response.data.forEach(function(object, i) {
            const content = document.createElement('div');
            content.classList.add('traitContent');
            const traitInfoResults = document.getElementById('traitInfoResults');

            const panelContent = document.createElement('div');
            panelContent.classList.add('traitPanelContent');

            let traitThing = []
            let traitList;

            function something() {
                for (let r = 0; r < response.data[i].traits.length; r++) {


                    traitThing.push(`<a href="#" id="${response.data[i].traits[r].symbol}">` + response.data[i].traits[r].symbol + '</a>');
                }
      
                traitList = traitThing.join(`, `);
    
            

            }

            let orbitalThing = [];
            let orbitalList;

            function orbitals() {
                for (let r = 0; r < response.data[i].orbitals.length; r++) {

                    orbitalThing.push(response.data[i].orbitals[r].symbol);
                }
           
               
                

                if (response.data[i].orbitals.length === 0) {
                    orbitalList = 'None';
                } else {
                    orbitalList = orbitalThing.join(`, `);
                }

            }

            orbitals();
            something();

            const htmlString = `
            <p>Waypoint Symbol: <strong><a href="#" id="model${i}" value="${i}">${response.data[i].symbol}</a></strong></p>
            <p>Waypoint Type: <strong>${response.data[i].type}</strong></p>
            <p>Waypoint Position: <strong>(${response.data[i].x}, ${response.data[i].y})</strong></p>
            <p>Waypoint Faction: <strong>${response.data[i].faction.symbol}</strong></p>

            <div class="modelInfo" id="Model${i}">
                <div class="modelInfoContent" id="modelInfoContent${i}">
                    <span class="close${i}">&times;</span>
                    <h1>Waypoint: ${response.data[i].symbol}</h1>
                    <p>Waypoint Symbol: <strong>${response.data[i].symbol}</strong></p>
                    <p>Waypoint Type: <strong>${response.data[i].type}</strong></p>
                    <p>Waypoint Position: <strong>(${response.data[i].x}, ${response.data[i].y})</strong></p>
                    <p>Waypoint Faction: <strong>${response.data[i].faction.symbol}</strong></p>
                    <p>Waypoint Traits: <strong>${traitList}</strong></p>
                    <p>Waypoint Orbitals: <strong>${orbitalList}</strong></p>
                </div>
            </div>
            `;

   
   
    



            






            panelContent.innerHTML = htmlString;
            content.appendChild(panelContent);

            traitInfoResults.appendChild(content);
            

            const modelButton = document.getElementById(`model${i}`);
            const modelInfo = document.getElementById(`Model${i}`);
            const closeBtn = modelInfo.querySelector(`.close${i}`);

            modelButton.addEventListener('click', function() {
                modelInfo.style.display = 'block';
            });

            closeBtn.addEventListener('click', function() {
                modelInfo.style.display = 'none';
            });
            i++;
        });

        console.log(response.data.length);
        
    })


    






        



    
    .catch(function(err) {
        console.error(err);
    });

    







return findTrait;
}