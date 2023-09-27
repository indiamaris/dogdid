/** @format */

import { ReactNode } from 'react';
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
	const error: ReactNode | null | undefined = useRouteError();
	console.error(error);
	return (
		<div id='error-page'>
			<h1>Oops!</h1>
			<p>Sorry, my dog ate that page.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};

export default ErrorPage;

