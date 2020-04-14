const postData = async (url, data) => {

	const response = await window.axios
	// The API we're requesting data from
	.post(url, data)
	// Once we get a response, we'll map the API endpoints to our props
	.then(response => {
		return response;
	})
	// We can still use the `.catch()` method since axios is promise-based
	.catch(error => {
		return error.response;
	});

	return response;

};

export { postData };
