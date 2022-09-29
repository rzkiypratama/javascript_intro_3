async function dataAPI() {
	const response = await
	fetch("https://jsonplaceholder.typicode.com/users");
	const data = await response.json();
	data.forEach((data) => {
	console.log(data.name);
	});
	}

	dataAPI();