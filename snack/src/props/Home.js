import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import NewItemForm from "./form";
import { handleAddItem } from "./helpers";

function Home() {
	return (
		<>
			<section className="col-md-8">
				<Card>
					<CardBody className="text-center">
						<CardTitle>
							<h3 className="font-weight-bold">
								Welcome to Silicon Valley's premier dive cafe!
							</h3>
						</CardTitle>
					</CardBody>
				</Card>
			</section>
			{/* <NewItemForm add={handleAddItem} /> */}
		</>
	);
}

export default Home;
