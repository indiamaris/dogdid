/** @format */

import FormLayout from '../../components/formLayout/formLayout';


const Login = () => {
	const handleClick = (event: MouseEvent) =>
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



