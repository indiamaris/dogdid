/** @format */

import FormLayout from '../../components/formLayout/formLayout';
import { useForm } from 'react-hook-form';
import { UserCredentials } from '../../interfaces/interfaces';

import LoginCredentials from '../../components/formLayout/userCredentials';
const Login = () => {
	const { register, handleSubmit } = useForm<UserCredentials>();
	const onSubmit = (data: UserCredentials) => console.log(data);

	return (
		<FormLayout
			pageName={'Login'}
			description={'Please Login '}
			onSubmit={handleSubmit(onSubmit)}>
			<LoginCredentials register={register} />
		</FormLayout>
	);
};

export default Login;

