/** @format */

import apiClient from './apiClient';

export const getEvent = async (id: string) => {
	const token = localStorage.getItem('token');
	// Set headers
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	return apiClient
		.get(`events/${id}`, { headers })
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.error(error);
		});
};

export const postEvent = async (event: string) => {
	const token = localStorage.getItem('token');
	// Set headers
	const headers = {
		Authorization: `Bearer ${token}`,
	};
	return apiClient
		.post(`events`, event, { headers })
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.error(error);
		});
};

export const getAllPacks = async () => {
	const token = localStorage.getItem('token');
	// Set headers
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	return apiClient
		.get(`packs`, { headers })
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			console.error(error);
		});
};

export const getPack = async (id: string) => {
	const token = localStorage.getItem('token');
	// Set headers
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	return apiClient
		.get(`packs/${id}/pets`, { headers })
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

