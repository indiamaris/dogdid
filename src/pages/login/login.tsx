/** @format */

import FormLayout from '../../components/formLayout/formLayout';
import { useForm } from 'react-hook-form';
import { UserCredentials } from '../../interfaces/interfaces';
	import { generatePath } from "react-router";
import LoginCredentials from '../../components/formLayout/userCredentials';
import PageLayout from '../../components/pageLayout/pageLayout';
import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';
import  {authenticate}  from '../../service/auth.service';
const Login = () => {
	const { register, handleSubmit } = useForm<UserCredentials>();



	const pageName = 'Login';
	const description = 'Please Login';

	const onSubmit = (user: UserCredentials) =>
		authenticate(user).then((res) => {
			sessionStorage.setItem('token', res.token);
		
	
		});

	return (
		<BlockContainer pageName={pageName}>
			<PageLayout
				pageName={pageName}
				description={description}>
				<FormLayout
					pageName={pageName}
					onSubmit={handleSubmit(onSubmit)}>
					<LoginCredentials register={register} />
				</FormLayout>
			</PageLayout>
		</BlockContainer>
	);
};

export default Login;






