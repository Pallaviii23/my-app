import React from 'react';
import './SecondComponent.css';


const SecondComponent=(getclientname)=>{
    console.log(getclientname);
    return(
        <h1 className='secondaryColor'>This is my Second componant:{getclientname.clientName.B}</h1>

    )

}
export default SecondComponent;