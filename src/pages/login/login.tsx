/** @format */

import FormLayout from '../../components/formLayout/formLayout';
import { useForm } from 'react-hook-form';
import { UserCredentials } from '../../interfaces/interfaces';
import LoginCredentials from '../../components/formLayout/userCredentials';
import PageLayout from '../../components/pageLayout/pageLayout';
import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';
import { authenticate } from '../../service/auth.service';
// import UserPage from '../userPage/userPage';
import { useNavigate } from 'react-router-dom';
const Login = () => {
	const { register, handleSubmit } = useForm<UserCredentials>();
	const navigate = useNavigate();
	const pageName = 'Login';
	const description = 'Please Login';

	const onSubmit = (user: UserCredentials) => {
		authenticate(user).then((res) => {
			sessionStorage.setItem('token', res.token);
			navigate(`/userpage/${user.email}`);
		});
	};

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

