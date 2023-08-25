import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Home from "./props/Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./props/NavBar";
import { Route, Routes } from "react-router-dom";
import Menu from "./props/FoodMenu";
import Item from "./props/FoodItem";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [snacks, setSnacks] = useState([]);
	const [drinks, setDrinks] = useState([]);

	useEffect(() => {
		async function getSnacks() {
			let snacks = await SnackOrBoozeApi.getSnacks();
			setSnacks(snacks);
			setIsLoading(false);
		}
		getSnacks();
	}, []);

	useEffect(() => {
		async function getDrinks() {
			let drinks = await SnackOrBoozeApi.getDrinks();
			setDrinks(drinks);
			setIsLoading(false);
		}
		getDrinks();
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
							element={<Home />}
						/>
						<Route
							exact
							path="/snacks"
							element={
								<Menu
									items={snacks}
									title="Snacks"
									itemType="snacks"
								/>
							}
						/>
						<Route
							exact
							path="/snacks/:id"
							element={
								<Item
									items={snacks}
									cantFind="/snacks"
									itemType="snacks"
								/>
							}
						/>
						<Route
							exact
							path="/drinks"
							element={
								<Menu
									items={drinks}
									itemType="drinks"
									title="drinks"
								/>
							}
						/>
						<Route
							exact
							path="/drinks/:id"
							element={
								<Item
									items={drinks}
									cantFind="/drinks"
									itemType="drinks"
								/>
							}
						/>
						<Route
							element={
								<p>Hmmm. I can't seem to find what you want.</p>
							}
						/>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
