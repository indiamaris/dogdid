/** @format */

interface Props {
	name: string;
}
const Btn = ({ name }: Props) => {
	return (
		<span className='btn btn-primary justify-content-around btn-sm px-4 me-sm-3 d-flex flex-grow-1'>
			{name}
		</span>
	);
};

export default Btn;


