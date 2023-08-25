import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind, itemType }) {
	const { id } = useParams();

	const item = items.find((item) => item.id === id);
	if (!item) return <Navigate to={cantFind} />;

	return (
		<section>
			{item ? (
				<Card>
					<CardBody>
						<CardTitle className="font-weight-bold text-center">
							{item.name}
						</CardTitle>
						<CardText className="font-italic">
							{item.description}
						</CardText>
						<p>
							<b>Recipe:</b> {item.recipe}
						</p>
						<p>
							<b>Serve:</b> {item.serve}
						</p>
					</CardBody>
				</Card>
			) : null}
		</section>
	);
}

export default FoodItem;
