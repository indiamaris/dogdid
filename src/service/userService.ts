/** @format */

import apiClient from './apiClient';

export const getPetEvent = async (id: string) => {
const token = localStorage.getItem('token');
// Set headers
const headers = {
	Authorization: `Bearer ${token}`,
};

	return apiClient
		.get(`events/${id}`, {headers})
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.error(error);
		});
};


export const postPetEvent = async (event: string) => {
	const token = localStorage.getItem('token');
	// Set headers
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	return apiClient
		.post(`events`,event, { headers })
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.error(error);
		});
};

// export const getPetEventAgain = async (id: string, Headers: AxiosRequestConfig) => {
// 	return apiClient
// 		.get(`events/${id}`, Headers)
// 		.then((response) => {
// 			console.log(response.data);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});



// };