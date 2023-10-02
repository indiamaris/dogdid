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

export interface NewPackForm {
	packName: string;
	name: string;
	breed: string;
	color: string;
	birthDate: string;
	id?: string;
}

export interface Pet {
	name: string;
	breed: string;
	color: string;
	birthDate: string;
	id?: string;
}

export interface NewPackRequest {
	name: string;
	pets: Pet[];
}
export interface Pack {
	name: string;
	id: string;
}

export interface PackResponse {
	packs: Pack[];
	pagination: {
		page: number;
		pageSize: number;
		total: 0;
	};



}