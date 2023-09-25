/** @format */
import { UserCredentials } from '../interfaces/interfaces';
import apiClient from './apiClient';


// const authService = {
	// Definindo a função de create user
export const createUser = async (newUser: UserCredentials) => {
	return apiClient
		.post('users', newUser)
		.then((response) => console.log(response.data));
};

	// Definindo a função de login
export const authenticate = async (user: UserCredentials) => {
	// withCredentials: true
	return apiClient.post('auth/login', user).then((response) => response.data);
};

	// Função para salar o usuário logado no local storage

	
export const getLoggedUser = async () => {
	let data = localStorage.getItem("user");
	if (!data) return null;
	try {
		let parsedData = JSON.parse(data)
		return parsedData
	} catch (error) {
		console.log(error)
		return null
	}
};

// export const setLoggedUser = (data: UserCredentials) => {
// 	let parsedData = JSON.stringify(data);
// 	localStorage.setItem('user', parsedData);
// };

// };
// export default authService;


