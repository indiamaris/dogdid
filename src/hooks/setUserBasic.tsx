/** @format */

import apiClient from '../service/apiClient';
import { useEffect, useState } from 'react';
// interface Props
// {
// 	name: 'string',
// 			email: 'string',
// 			password: 'string',
// }
const  SetUser = (name:string,email:string, password:string) => {
	const [data, setdata] = useState(null);
	useEffect(() => {
	apiClient
		.post('users', {
			name:{name},
			email:{email},
			password: {password}
		})
		.then((response) => setdata(response.data));
	});
};

export default SetUser;

