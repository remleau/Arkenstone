import axios from 'axios';

const postData = async (url, data) => {

	const response = await axios
	.post(url, data)
	.then(response => {
		return response;
	})
	.catch(error => {
		return error.response;
	});

	return response;

};

export { postData };
