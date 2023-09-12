/** @format */
interface Props {
	type: string;
	className: string;
	id: string;
	label: string;
	placeholder: string;
}

const Input = ({ type, className, id, placeholder, label }: Props) => {
	return (
		<>
			<input
				type={type}
				className={className}
				id={id}
				placeholder={placeholder}
			/>
			<label htmlFor={type}>{label}</label>
		</>
	);
};

export default Input;

