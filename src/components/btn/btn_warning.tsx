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

const BtnWarning = ({ children, className, to, onClick, type }: Props) => {
	const extendedClassName = `						className='col-12 btn btn-sm btn-warning '>
 rounded-pill ${className || ''}`;

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

export default BtnWarning;

