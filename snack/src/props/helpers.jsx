// helpers.js

// import SnackOrBoozeApi from "../Api";

export const handleItemChange = (e, form, setForm) => {
	const { name, value } = e.target;
	setForm((prevForm) => ({ ...prevForm, [name]: value }));
};

export const handleItemSubmit = (
	e,
	form,
	setForm,
	add,
	navigate,
	initialFormState,
	itemType
) => {
	e.preventDefault();
	const newItem = { ...form, itemType: form.itemType };
	handleAddItem({ newItem, add });
	setForm(initialFormState);
	navigate(`/${newItem.itemType}s`);
	console.log(newItem);
};

export const handleAddItem = (
	newItem,
	add,
	snacks,
	setSnacks,
	drinks,
	setDrinks
) => {
	if (newItem.itemType === "snack") {
		setSnacks((prevSnacks) => [...prevSnacks, newItem]);
	} else if (newItem.itemType === "drink") {
		setDrinks((prevDrinks) => [...prevDrinks, newItem]);
	}
	add(newItem);
};
