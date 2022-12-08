import React, {useState} from "react";
import data from "../data.json"
import CharacterList from "./CharacterList.jsx";
import Options from "./Options.jsx"


//create your first component
const Home = () => {
	
	const [filter, setFilter] = useState("")
	
	const handleChange = (event) => {
		setFilter(event.target.value)
		
	}

	
    const [option, setOption] = useState("")

    const handleOptionChange = (event) =>{
        setOption(event.target.value)
    }

	return (
		<>
			<div className="container-fluid">
				<h1 className="display-2 text-center">Rick & Morty Card List</h1>
				<input onChange={handleChange} type="text" name="filterCharacter" id="filterCharacter" placeholder="Name" className="bg-dark rounded justify-content-center text-white p-2 mx-5" />
				<Options data={data} handler={handleOptionChange}/>
				<CharacterList list={data} filter={filter} option={option}/>
			</div>
		</>
	);
};

export default Home;
