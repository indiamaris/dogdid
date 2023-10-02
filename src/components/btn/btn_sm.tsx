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
	const extendedClassName = `col-4 btn btn-sm btn-outline-primary m-3 rounded-pill ${
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

