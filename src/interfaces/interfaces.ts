/** @format */

export interface Page {
	namePage: string;
}

export interface Events {
	id: number;
	name: string;
	slug: string;
}



export interface UserCredentials {
	email: string;
	password: string;
	name?: string;
}

