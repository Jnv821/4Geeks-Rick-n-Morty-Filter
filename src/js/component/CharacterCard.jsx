import React from "react";

const CharacterCard = ((props) => {

    return(
        <article>
            <img src={props.character.image} alt={props.character.name}></img>
            <h3>{props.character.name}</h3>
            <p>{props.character.location.name}</p>
        </article>
    )
})

export default CharacterCard