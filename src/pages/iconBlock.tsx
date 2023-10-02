/** @format */

import { ReactNode } from 'react';
import Input from '../components/inputs/input';
interface Props {
	icon: ReactNode;
	name: string;
}

const IconBlock = ({ icon, name }: Props) => {
	return (
		<div className=' text-center text-muted'>
			{icon}
			<Input
				className='text-muted'
				type='checkbox'
				id='flexCheckDefault'
				placeholder='{name}'
				label=''></Input>
			<div>{name}</div>
		</div>
	);
};



export default IconBlock;






