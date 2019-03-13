import React from 'react';

  // NB: all the classname=... is just styling!
// using the Semantic UI library 
const RolePresenter = props => {
    return (
        <div className="ui raised card">
            <div className="ui image">
                <img src={props.roleData.ImgSrc}/>
            </div>
            <div className="content">
                <h1 className="header">{props.roleData.RoleDesc}</h1>
                <div className="meta">
                    <h3>{props.roleData.AttackTypes}</h3>
                </div>
                <div className="meta">
                    <h3>{"(" + props.roleData.MinDmg + " - " + props.roleData.MaxDmg + " damage) "}</h3>
                </div>
                <div className="description">
                    {props.roleData.Desc}
                </div>
            </div>
        </div>
    );  
}

export default RolePresenter;  