import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faQuestionCircle} from "@fortawesome/free-regular-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";


const CharacterCard = ((props) => {
    const status = props.character.status
    let statusStyle = ""
    let statusStyleAux = ""

    if(status === "Alive"){statusStyle = faFaceSmile; statusStyleAux = "status alive"}
    if(status === "Dead"){statusStyle = faSkull; statusStyleAux = "status dead"}
    if(status === "unknown"){statusStyle = faQuestionCircle; statusStyleAux = "status unknown"}
    

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