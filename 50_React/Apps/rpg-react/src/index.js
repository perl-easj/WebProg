// Import of React libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import components from the application itself
import RolePresenter from './RolePresenter';

// All the data about RPG roles...
// Should probably be moved to a separate file :-)
var knightRole = {}
knightRole.RoleDesc = "Knight";
knightRole.MinDmg = 80;
knightRole.MaxDmg = 150;
knightRole.AttackTypes = "Meele/Ranged";
knightRole.ImgSrc = "Knight.jpg";
knightRole.Desc = "Versatile combatant, capable of dealing significant damage at close range, but also excels in ranged combat diciplines such as archery and rifle marksmanship";

var warriorRole = {}
warriorRole.RoleDesc = "Warrior";
warriorRole.MinDmg = 90;
warriorRole.MaxDmg = 220;
warriorRole.AttackTypes = "Meele";
warriorRole.ImgSrc = "Warrior.jpg";
warriorRole.Desc = "Specialises in dealing massive amounts of damage at close range, while having limited capacity for strategic thinking and combat logistics in general.";

var wizardRole = {}
wizardRole.RoleDesc = "Wizard";
wizardRole.MinDmg = 75;
wizardRole.MaxDmg = 150;
wizardRole.AttackTypes = "Magic";
wizardRole.ImgSrc = "Wizard.jpg";
wizardRole.Desc = "Having limited physical capabilities, a Wizard devotes his/her efforts to afflicting devastating damage to opponents by invocation of dark forces from forgotten ages.";

var paladinRole = {}
paladinRole.RoleDesc = "Paladin";
paladinRole.MinDmg = 80;
paladinRole.MaxDmg = 200;
paladinRole.AttackTypes = "Ranged/Magic";
paladinRole.ImgSrc = "Paladin.jpg";
paladinRole.Desc = "Drawing on both physical excellence and mental mastery, the Paladin can approach enemies with a lethal combination of ranged physical attacks and potent magic.";
 


// Create the App component, which is used as 
// a parameter to ReactDOM.render (see below)
const App = () => {  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
        <div className="ui four cards">
            <RolePresenter role="Knight" roleData={knightRole} />
            <RolePresenter role="Warrior" roleData={warriorRole} />
            <RolePresenter role="Wizard" roleData={wizardRole} />
            <RolePresenter role="Paladin" roleData={paladinRole} />
        </div>
    </div>
    );
}

// Render the React component in the browser
ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);