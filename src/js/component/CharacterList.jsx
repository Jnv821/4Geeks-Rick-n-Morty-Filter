import React from "react";
import CharacterCard from "./CharacterCard.jsx";

const CharacterList = ((props) => {

    
    
    const filteredList = props.list.filter((character) => (
    character.name.toLowerCase().includes(props.filter.toLowerCase()) && character.location.name.includes(props.option)));

    const auxList = filteredList.map((character) => {
        
    // Check Genders
    let styles = ""
    if(character.gender === "Male") styles = "inline male"
    if(character.gender === "Female") styles = "inline female"
    if(character.gender === "unknown") styles = "inline unknowngender"
        
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