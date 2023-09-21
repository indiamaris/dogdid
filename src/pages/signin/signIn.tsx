/** @format */
import FormLayout from '../../components/formLayout/formLayout';
import { useForm } from 'react-hook-form';
import { UserCredentials } from '../../interfaces/interfaces';
import NewUserCredentials from '../../components/formLayout/newUserCredentials';
import { createUser } from '../../service/userService';
import IconBlock from '../iconBlock';

const SignIn = () => {
	const { register, handleSubmit } = useForm<UserCredentials>();

	const onSubmit = (data: UserCredentials) => {
		if (data) {
			createUser(data).then((res) => console.log(res));
		}
	};

	return (
	
		<FormLayout
			pageName={'Sign in'}
			description={'Create a new account: '}
			onSubmit={handleSubmit(onSubmit)}>
			<NewUserCredentials register={register} />
		</FormLayout>
		
	);
};

export default SignIn;

