/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	pageName: string;
}

const BlockDescription = ({ children, pageName }: Props) => {
	const paddingForPages =
		pageName.toLowerCase() === 'dog log' ? 'px-4 m-2' : 'm-2';
	return <div className={`mt-5 ${paddingForPages}`}>{children}</div>;
};

export default BlockDescription;

