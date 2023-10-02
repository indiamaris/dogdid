/** @format */

import { ReactNode } from 'react';

interface Props {
	pageName: string;
	children: ReactNode;
}

const PageDescription = ({ children, pageName }: Props) => {
	const alignment =
		pageName.toLowerCase() !== 'dog log' ? 'text-start fs2' : 'text-muted';

	return <p className={` display-6 ${alignment} `}>{children}</p>;
};
export default PageDescription;

