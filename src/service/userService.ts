/** @format */

import { UserCredentials } from '../interfaces/interfaces';
import apiClient from './apiClient';

export const createUser = (newUser: UserCredentials) => {
	return apiClient.post('users', newUser).then((response) => response.data);
};

export const logginUser = (user: UserCredentials) => {
	return apiClient.post('users', user).then((response) => response.data);
};
