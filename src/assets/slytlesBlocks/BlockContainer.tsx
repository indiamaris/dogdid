/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	pageName?: string;
}

const BlockContainer = ({ pageName, children }: Props) => {
	const spacingForPages =
		pageName?.toLowerCase() === 'dog log' ? 'm-2 p-3' : 'm-4';
	return <div className={` text-center ${spacingForPages}`}>{children}</div>;
};

export default BlockContainer;

