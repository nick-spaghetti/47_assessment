import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleItemChange, handleItemSubmit } from "./helpers";

const NewItemForm = ({ add }) => {
	const initialFormState = {
		itemName: "",
		itemType: "drink",
		itemDesc: "",
		itemRecipe: "",
		itemServe: "",
	};

	const [form, setForm] = useState(initialFormState);
	console.log(form);
	const navigate = useNavigate();

	return (
		<div>
			<form
				onSubmit={(e) =>
					handleItemSubmit(
						form,
						setForm,
						add,
						navigate,
						form.itemType
					)
				}>
				<div>
					<label htmlFor="itemName">Name</label>
					<input
						type="text"
						name="itemName"
						id="itemName"
						placeholder="Name"
						onChange={(e) => handleItemChange(e, form, setForm)}
						value={form.itemName}
					/>
				</div>
				<div>
					<label htmlFor="itemType">Type</label>
					<select
						name="itemType"
						id="itemType"
						value={form.itemType}
						onChange={(e) => handleItemChange(e, form, setForm)}>
						<option value="drink">drink</option>
						<option value="snack">snack</option>
					</select>
				</div>
				<div>
					<label htmlFor="itemDesc">Description</label>
					<input
						type="text"
						name="itemDesc"
						id="itemDesc"
						onChange={(e) => handleItemChange(e, form, setForm)}
						value={form.itemDesc}
					/>
				</div>
				<div>
					<label htmlFor="itemRecipe">Recipe</label>
					<input
						type="text"
						name="itemRecipe"
						id="itemRecipe"
						onChange={(e) => handleItemChange(e, form, setForm)}
						value={form.itemRecipe}
					/>
				</div>
				<div>
					<label htmlFor="itemServe">Serving</label>
					<input
						type="text"
						name="itemServe"
						id="itemServe"
						onChange={(e) => handleItemChange(e, form, setForm)}
						value={form.itemServe}
					/>
				</div>
				<button>Add Item</button>
			</form>
		</div>
	);
};

export default NewItemForm;
