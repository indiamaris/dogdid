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

const BtnLg = ({ children, className, to, onClick, type }: Props) => {
	const extendedClassName = `						className=' btn btn-sm  col-12 d-xxl-block p-2 m-4  '>
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

export default BtnLg;

