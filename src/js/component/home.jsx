import React, {useState} from "react";
import data from "../data.json"
import CharacterList from "./CharacterList.jsx";



//create your first component
const Home = () => {
	
	const [filter, setFilter] = useState("")
	
	const handleChange = (event) => {
		setFilter(event.target.value)
		
	}

	return (
		<>
			<div className="container-fluid">
				<h1>Lista</h1>
				<input onChange={handleChange} type="text" name="filterCharacter" id="filterCharacter" placeholder="Name" className="bg-dark rounded justify-content-center text-white" />
				<CharacterList list={data} filter={filter}/>
			</div>
		</>
	);
};

export default Home;
