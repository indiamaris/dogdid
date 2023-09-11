/** @format */

import FormLayout from '../../components/formLayout/formLayout';
	const handleClick = (event: MouseEvent) =>
		console.log({ event }, 'clicked ;)');

const SignIn = () => {
	return (
		<FormLayout
			pageName={'Sign in'}
			description={'Create a new account: '}
			onClick={handleClick}
		/>
	);
};

export default SignIn;



