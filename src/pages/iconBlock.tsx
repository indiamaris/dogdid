/** @format */

import { children } from 'react';
interface Props {
	icon: string;
	name: string;
}

const IconBlock = ({ icon, name }: Props) => {
	return (
	
			<div className=
				' text-center text-center'>
				{icon}
				<div className='text-muted'>{name}</div>
			</div>

	);
};

export default IconBlock;


