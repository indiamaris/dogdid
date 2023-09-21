/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockHeading = ({ children }: Props) => {
	return <div className='text-center'>{children} </div>;
};

export default BlockHeading;

