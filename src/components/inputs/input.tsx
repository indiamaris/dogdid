/** @format */
interface Props {
	type: string;
	className: string;
	id: string;
	label: string;
	placeholder: string;
	value?:string
	onChange?: ()=>void
}

const Input = ({ type, className, id, placeholder, label, value, onChange }: Props) => {
	return (
		<>
			<input
				type={type}
				className={className}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<label htmlFor={type}>{label}</label>
		</>
	);
};

export default Input;



