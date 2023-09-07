/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockFooter = ({ children }: Props) => {
	return (
		<footer className='mb-footer py-2 text-mute text-end pe-1 '>
{children}
		</footer>
	);
};

export default BlockFooter;








