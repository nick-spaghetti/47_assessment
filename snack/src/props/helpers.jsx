// helpers.js

// import SnackOrBoozeApi from "../Api";

export const handleItemChange = (e, form, setForm) => {
	const { name, value } = e.target;
	setForm((prevForm) => ({ ...prevForm, [name]: value }));
};

export const handleItemSubmit = (
	items,
	e,
	form,
	setForm,
	navigate,
	initialFormState,
	state
	// itemType
) => {
	e.preventDefault();
	const { drink, setDrinks, snacks, setSnacks } = state;
	const itemType = items.itemType;
	const newItem = { ...form, itemType };
	handleAddItem(e, items, newItem, setDrinks, setSnacks);
	setForm(initialFormState);
	navigate(`/${newItem.itemType}s`);
};

export const handleAddItem = (e, items, newItem, setDrinks, setSnacks) => {
	e.preventDefault();
	if (newItem.itemType === "snack") {
		setSnacks((prevSnacks) => [...prevSnacks, newItem]);
	} else if (newItem.itemType === "drink") {
		setDrinks((prevDrinks) => [...prevDrinks, newItem]);
	}
};
