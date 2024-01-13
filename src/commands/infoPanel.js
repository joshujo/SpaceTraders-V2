export function infoPanel() {
    const infoPanel = document.createElement('div');
    infoPanel.id = 'info-panel';
    
    const token = localStorage.getItem('token');


    const options = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
      };
      
      fetch('https://api.spacetraders.io/v2/my/agent', options)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            infoPanel.innerHTML = `
        <div id="info-panel-header">
            <h1>Personal Information</h1>
            <p>Symbol: <strong>${response.data.symbol}</strong></p>
            <p>Account ID: <strong>${response.data.accountId}</strong></p>
            <p>Credits: <strong>${response.data.credits}</strong></p>
            <p>Headquaters: <strong>${response.data.headquarters}</strong></p>
            <p>Faction: <strong>${response.data.startingFaction}</strong></p>
            <p>Ships: <strong>${response.data.shipCount}</strong></p>
                </div>
            </div>
        </div>
    `;
        })
        .catch(function(err) {
            console.error(err);
        });
    
        
        


    return infoPanel;

}