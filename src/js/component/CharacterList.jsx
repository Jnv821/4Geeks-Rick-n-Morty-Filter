import React from "react";
import CharacterCard from "./CharacterCard.jsx";

const CharacterList = ((props) => {

    
    
    const filteredList = props.list.filter((character) => (
    character.name.toLowerCase().includes(props.filter.toLowerCase()) && character.location.name.includes(props.option)));

    const auxList = filteredList.map((character) => {
        
    // Check Genders
    let styles = ""
    switch(character.gender){
        case "Male":
        styles = "inline male"
        break;
        case "Female":
        styles = "inline female"
        break;
        case "unknown":
        styles = "inline unknowngender"
        break;
    }
        
        return (<li key={character.id} className={styles}>
                <CharacterCard character={character}/>
                </li>)
    })


    return(
        <>
        <ul className="nostyle">
            {auxList}
        </ul>
        </>
    )
})

export default CharacterList