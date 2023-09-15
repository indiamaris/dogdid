/** @format */

import apiClient from '..service/apiClient'


export interface User {
	id: number;
	name: string;
}

const userRoute = '/users/';

class UserService {
	getAllUsers() {
		const controler = new AbortController();
		const request = apiClient.get<User[]>(userRoute, {
			signal: controler.signal,
		});
		return { request, cancel: ()=>controler.abort() };
	}

	deleteUser(id: number) {
		return apiClient.delete(userRoute + id);
	}

	createUser(user: User) {
		return apiClient.post(userRoute, user);
	}

	updateUser(user: User) {
		return apiClient.patch(userRoute + user.id, user);
	}
}

export default new UserService();

