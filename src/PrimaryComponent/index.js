import React from "react";
import './PrimaryComponent.css';
import FirstComponent from '../FirstComponent';
import SecondComponent from '../SecondComponent';
import ThirdComponent from '../ThirdComponent';

const PrimaryComponent=()=>{

  let name="Devloper Guru";  // simple variable
  // let name1="Pallaviii";
  // let name2="classes";    // variables first letter always be small and then seconcod letter capital.
  let courseDetails={'H':'HTML','B':'BOOTSTRAP','C':'CSS'}   //Object
  let courseDetails1=['JAVA','PHP','PYTHON','NODE JS'];   //Array
      return(
        <>
        <h1 className="fourthColor">This is a Primary componant</h1>
        <FirstComponent Props={name}/>  {/*This is a Reference varible, use for Props Method*/}
        <SecondComponent clientName={courseDetails}/>
        <ThirdComponent courseDetails={courseDetails1}/> 
        {/* <ThirdComponent Props={name2}/> */}
        </>

        
    )

}
export default PrimaryComponent;