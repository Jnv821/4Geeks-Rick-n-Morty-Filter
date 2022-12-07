import React from "react";
import CharacterCard from "./CharacterCard.jsx";

const CharacterList = ((props) => {


    const filterList = props.list.filter((character) => (character.name.toLowerCase().includes(props.filter.toLowerCase())));

    const auxList = filterList.map((character) => {
        return (<li key={character.id} className="inline">
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