import React from "react";
import { Link } from "react-router-dom";
import "../styles/FoodMenu.css";
import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	ListGroup,
	ListGroupItem,
} from "reactstrap";
import NewItemForm from "./form";
import { handleItemSubmit } from "./helpers";

function FoodMenu({ items, itemType, state }) {
	return (
		<>
			<section className="col-md-4">
				<Card>
					<CardBody>
						<CardTitle className="font-weight-bold text-center">
							Food Menu
						</CardTitle>
						<CardText>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</CardText>
						<ListGroup>
							{items.map((item) => (
								<Link
									to={`/${itemType}/${item.id}`}
									key={item.id}>
									<ListGroupItem>{item.name}</ListGroupItem>
								</Link>
							))}
						</ListGroup>
					</CardBody>
				</Card>
			</section>
			<NewItemForm
				itemType={itemType}
				items={items}
				submit={handleItemSubmit}
				state={state}
			/>
		</>
	);
}

export default FoodMenu;
