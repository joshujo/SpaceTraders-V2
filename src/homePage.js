import { infoPanel } from './commands/infoPanel.js';
import { findTrait } from './commands/findTrait.js';

const panel = infoPanel();
document.body.appendChild(panel);



const findTraitButton = document.getElementById('find-trait-button');

function FindTrait() {
    const trait = document.getElementById('find-trait').value;
    const waypoint = document.getElementById('system').value;
    findTrait(waypoint, trait);   
}

findTraitButton.addEventListener('click', FindTrait);