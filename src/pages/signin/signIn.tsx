/** @format */
import FormLayout from '../../components/formLayout/formLayout';
import { useForm } from 'react-hook-form';
import { UserCredentials } from '../../interfaces/interfaces';
import NewUserCredentials from '../../components/formLayout/newUserCredentials';
import { createUser } from '../../service/auth.service';
import PageLayout from '../../components/pageLayout/pageLayout';

const SignIn = () => {
	const { register, handleSubmit } = useForm<UserCredentials>();

	const onSubmit = (data: UserCredentials) => {
		if (data) {
			createUser(data).then((res) => res);
		}
	};
	const description = 'Create a new account: ';
	const pageName = 'Sign in';
	return (
		<PageLayout
			pageName={pageName}
			description={description}>
			<FormLayout
				pageName={pageName}
				onSubmit={handleSubmit(onSubmit)}>
				<NewUserCredentials register={register} />
			</FormLayout>
		</PageLayout>
	);
};
export default SignIn;


