/** @format */
import { NewPackRequest } from '../interfaces/interfaces';
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

export const getPacks = async () => {
	const token = localStorage.getItem('token');
	// Set headers
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	return apiClient
		.get(`packs`, { headers })
		.then((response) => {
			console.log(response.data);
			console.log(response);
			return response.data;
		})
		.catch((error) => {
			console.error(`this is a error ${error}`);
		});
};

export const getPack = async (id: string) => {
	const token = localStorage.getItem('token');
	// Set headers
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	return apiClient
		.get(`packs/${id}`, { headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error(error);
		});
};

export const getPetsPack = async (id: string) => {
	const token = localStorage.getItem('token');
	// Set headers
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	return apiClient
		.get(`packs/${id}/pets`, { headers })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error(error);
		});
};

export const createPack = async (newPack: NewPackRequest) => {
	const token = localStorage.getItem('token');
	// Set headers
	const headers = {
		Authorization: `Bearer ${token}`,
	};
	return apiClient
		.post('packs', newPack, { headers })
		.then((response) => console.log(response.data));
};

// export const getPackPets = async (id: string) => {
// 	const token = localStorage.getItem('token');
// 	// Set headers
// 	const headers = {
// 		Authorization: `Bearer ${token}`,
// 	};

// 	return apiClient
// 		.get(`packs/${id}/pets`, { headers })
// 		.then((response) => {
// 			console.log(response.data);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});
// };

