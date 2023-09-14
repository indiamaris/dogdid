/** @format */

import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface Props {
	children: string;

	className?: string;
	to?: string;

	onClick?: MouseEventHandler<HTMLButtonElement>;

	type?: 'button' | 'submit' | 'reset';
}

const Btn = ({ children, className, to, onClick, type}: Props) => {
	const extendedClassName = `btn btn-primary rounded-pill ${className || ''}`;

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

export default Btn;



