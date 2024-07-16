// - When we open new Component file first letter always be Capital.
// - When we use Css then first letter always be Small.

// React installation Process
//  - npm -v
//  - npm install
//  - npx create-react-app my-app
//  Press Control and then go to code file

//- Props means  Property.
// - parent coponent madhun chaild component value pass karate is called props, Voiceversa , child component kadun parent component la pn value pass karta yete.


import React from 'react';
//import style form './FirstComponent.css'
import './FirstComponent.css';


const FirstComponent=(Props1)=>{  // This is a parameter.

    console.log(Props1);
    
    return(
        <h1 className='primaryColor'>This is my first componant:{Props1.Props}</h1>
    );
}

export default FirstComponent;