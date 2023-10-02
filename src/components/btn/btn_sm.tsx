/** @format */

import { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
	children: ReactNode;

	className?: string;
	to?: string;

	onClick?: MouseEventHandler<HTMLButtonElement>;

	type?: 'button' | 'submit' | 'reset';
}

const BtnSm = ({ children, className, to, onClick, type }: Props) => {
	const extendedClassName = `btn btn-outline-primary col-2 d-xxl-block px-4 m-2   ${
		className || ''
	}`;

	return to ? (
		<Link
			className={extendedClassName}
			to={to}
			role='button'>
			{children}
		</Link>
	) : (
		<button
			className={extendedClassName}
			onClick={onClick}
			type={type}>
			{children}
		</button>
	);
};

export default BtnSm;


