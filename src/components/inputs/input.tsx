/** @format */

import { InputHTMLAttributes, forwardRef } from 'react';

/** @format */
interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
	({ id, label, ...inputProps }, ref) => {
		return (
			<>
				<input
					id={id}
					{...inputProps}
					ref={ref}
				/>
				<label htmlFor={id}>{label}</label>
			</>
		);
	}
);

export default Input;

