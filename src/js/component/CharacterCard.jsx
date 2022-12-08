import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faQuestionCircle} from "@fortawesome/free-regular-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";


const CharacterCard = ((props) => {

    let statusStyle = []
    let statusStyleAux = ""

    switch(props.character.status){
        case "Alive":
        statusStyle = faFaceSmile
        statusStyleAux = "status alive"
        break;

        case "Dead":
        statusStyle = faSkull
        statusStyleAux = "status dead"
        break;
        
        case "unknown":
        statusStyle = faQuestionCircle
        statusStyleAux = "status unknown" 
        break;
    }

    return(
        <article>
            <img src={props.character.image} alt={props.character.name} className="rounded"></img>
            <h3>{props.character.name}</h3>
            <FontAwesomeIcon icon={statusStyle} className={statusStyleAux}/>
            <p>{props.character.location.name}</p>
        </article>
    )
})

export default CharacterCard