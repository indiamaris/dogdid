/** @format */

import FormLayout from '../../components/formLayout/formLayout';
import { useForm } from 'react-hook-form';
import { UserCredentials } from '../../interfaces/interfaces';

import LoginCredentials from '../../components/formLayout/userCredentials';
import PageLayout from '../../components/pageLayout/pageLayout';
import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';
const Login = () => {
	const { register, handleSubmit } = useForm<UserCredentials>();
	const onSubmit = (data: UserCredentials) => console.log(data);
	const pageName = 'Login';
	const description = 'Please Login';

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


