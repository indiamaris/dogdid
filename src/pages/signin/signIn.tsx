/** @format */

import FormLayout from '../../components/formLayout/formLayout';

const SignIn = () => {
	const handleClick: React.MouseEvent<HTMLElement> = (event: MouseEvent) =>
		console.log({ event }, 'clicked ;)');
	return (
		<FormLayout
			pageName={'Sign in'}
			description={'Create a new account: '}
			onClick={handleClick}
		/>
	);
};

export default SignIn;

