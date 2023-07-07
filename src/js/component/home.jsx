import React from "react";
import { SecondsCounter } from "./SecondsCounter";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<header className="d-flex flex-column align-items-center text-white pt-5">
				<h1 className="pt-5">REACT SIMPLE SECONDS COUNTER</h1>
				<div className="pt-5">
					<SecondsCounter />
				</div>
			</header >

		</>

	);
};

export default Home;
