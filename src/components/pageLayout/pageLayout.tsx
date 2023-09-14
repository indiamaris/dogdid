/** @format */

import BlockDescription from '../slytlesBlocks/blockDescription';
import BlockHeading from '../slytlesBlocks/blockHeading';
import Heading from './heading/heading';
import PageDescription from './pageDescription/pageDescription';

// import { children } from 'react';
interface Props {
	pageName: string;
	children: string;
	pageDescription: string;
}
const PageLayout = ({ pageName, pageDescription }: Props) => {
	return (
		<>
			<BlockHeading>
				<Heading pageName={pageName} />
			</BlockHeading>
			<BlockDescription pageName={pageName}>
				<PageDescription pageName={pageName}>
					{pageDescription}
				</PageDescription>
			</BlockDescription>
		</>
	);
};

export default PageLayout;

