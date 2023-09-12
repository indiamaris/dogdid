/** @format */

import FormLayout from '../../components/formLayout/formLayout';

const Login = () => {
	const handleClick: React.MouseEvent<HTMLElement> = (event: MouseEvent) =>
		console.log({ event }, 'clicked');
	return (
		<FormLayout
			pageName={'Login'}
			description={'Please Login '}
			onClick={handleClick}
		/>
	);
};

export default Login;

