/** @format */

import axios, { AxiosError, CanceledError } from 'axios';

export default axios.create({
	baseURL: 'http://127.0.0.1:3000/api/',
});

export { AxiosError, CanceledError };

// export const postPack = async (event: string) => {
// 	const token = localStorage.getItem('token');
// 	// Set headers
// 	const headers = {
// 		Authorization: `Bearer ${token}`,
// 	};
// 	return apiClient
// 		.post(`packs`, event, { headers })
// 		.then((response) => {
// 			console.log(response.data);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});

// };