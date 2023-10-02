/** @format */

import { ReactNode } from 'react';
interface Props {
	icon: ReactNode;
	name: string;
}

const IconBlock = ({ icon, name }: Props) => {
	return (
		<div className=' text-center'>
			{icon}
			<div className='text-muted'>{name}</div>
		</div>
	);
};

export default IconBlock;

