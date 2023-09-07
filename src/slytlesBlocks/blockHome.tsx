/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockHome = ({children}:Props) => {
	return <div className='p-4 text-center'>{children}</div>;
};

export default BlockHome;

