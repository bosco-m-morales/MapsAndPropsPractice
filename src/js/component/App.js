import React, { useState, useEffect } from "react";
// import { Card } from "./Card";

export function App() {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/starships", {
			method: "GET",
			cache: "no-cache"
		})
			.then(resp => resp.json())
			.then(data => {
				console.log("list", data.results);
				setList(data.results);
			});
	}, []);

	return (
		<div className="card m-3" style={{ width: "300px" }}>
			{" "}
			TESTINGGGGG{" "}
		</div>
	);
}
