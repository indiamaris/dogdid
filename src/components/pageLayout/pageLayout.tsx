/** @format */

import { ReactElement } from 'react';
import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';
import BlockHome from '../../assets/slytlesBlocks/blockBackHome';
import BlockDescription from '../../assets/slytlesBlocks/blockDescription';
import BlockHeading from '../../assets/slytlesBlocks/blockHeading';
import BackHome from '../backOpt/backHome';
import Heading from './heading/heading';
import PageDescription from './pageDescription/pageDescription';

interface Props {
	pageName: string;

	description: string;
	children?: ReactElement;
}
const PageLayout = ({ pageName, description, children }: Props) => {
	return (
		<>
			{pageName.toLowerCase() !== 'dog log' && (
				<BlockHome>
					<BackHome />
				</BlockHome>
			)}

			<BlockContainer>
				<BlockHeading>
					<Heading pageName={pageName} />
				</BlockHeading>
				<BlockDescription pageName={pageName}>
					<PageDescription pageName={pageName}>
						{description}
					</PageDescription>
				</BlockDescription>
				{children}
			</BlockContainer>

			{/* <Back /> */}
		</>
	);
};

export default PageLayout;

