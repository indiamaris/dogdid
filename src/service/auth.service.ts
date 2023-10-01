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





