import React from "react";
import './ThirdComponent.css';

const ThirdComponent=(getcourseDetails1)=>{
    console.log(getcourseDetails1);
    return(
        <>
        <h1 className="thirdComponent">This is a Third Component:{getcourseDetails1.courseDetails[2]}</h1>
        </>
    )
}
export default ThirdComponent;