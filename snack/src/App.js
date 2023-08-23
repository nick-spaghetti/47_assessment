import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Home from "./props/Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./props/NavBar";
import { Route, Routes } from "react-router-dom";
import Menu from "./props/FoodMenu";
import Snack from "./props/FoodItem";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [snacks, setSnacks] = useState([]);

	useEffect(() => {
		async function getSnacks() {
			let snacks = await SnackOrBoozeApi.getSnacks();
			setSnacks(snacks);
			setIsLoading(false);
		}
		getSnacks();
	}, []);

	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<main>
					<Routes>
						<Route
							exact
							path="/"
							element={<Home snacks={snacks} />}
						/>
						<Route
							exact
							path="/snacks"
							element={
								<Menu
									snacks={snacks}
									title="Snacks"
								/>
							}
						/>
						<Route
							exact
							path="/snacks/:id"
							element={
								<Snack
									items={snacks}
									cantFind="/snacks"
								/>
							}
						/>
						<Route
							element={
								<p>Hmmm. I can't seem to find what you want.</p>
							}></Route>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
