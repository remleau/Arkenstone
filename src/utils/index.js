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

const putData = async (url, data) => {

	const response = await axios
		.put(url, data)
		.then(response => {
			return response;
		})
		.catch(error => {
			return error.response;
		});

	return response;

};

const removeEmpty = (obj) => {
	Object.keys(obj).forEach((key) => (obj[key] == null || obj[key] == "") && delete obj[key]);
}

export { 
	postData,
	putData,
	removeEmpty
};
