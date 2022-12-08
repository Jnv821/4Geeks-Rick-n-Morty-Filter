import React, { useState } from "react";

const Options = (props) => {

    // Get Unique locations and render them
    let uniqueOptions = [...new Set(props.data.map((character) => character.location.name))]
    
    uniqueOptions.unshift("None")

    // render ALL of the options if the key of unique options = NONE (No filter)
    let options = uniqueOptions.map((option, i) => {
        if(i === 0){
            return <option key={i} value={""}>{option}</option>
        } else{
            return <option key={i} value={option}>{option}</option>
        }
    })

    return(
        <>  
        <select name="Options" id="Options" onChange={props.handler} className="bg-dark rounded justify-content-center text-white p-2 mx-5 options">
            {options}
        </select>
        </>
    )
}

export default Options