/** @format */

import { User, NewUser } from '../interfaces/interfaces';
import apiClient from './apiClient';

export const createUser = (newUser: NewUser) => {
	return apiClient.post('users', newUser).then((response) => response.data);
};

export const logginUser = (user: User) => {
	
	return apiClient.post('users', user).then((response) => response.data);

};