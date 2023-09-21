/** @format */

import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';
import BlockHome from '../../assets/slytlesBlocks/blockBackHome';
import BlockDescription from '../../assets/slytlesBlocks/blockDescription';
import BlockHeading from '../../assets/slytlesBlocks/blockHeading';
import BackHome from '../backOpt/backHome';
import Heading from './heading/heading';
import PageDescription from './pageDescription/pageDescription';

interface Props {
	pageName: string;

	pageDescription: string;
	children?: string;
}
const PageLayout = ({ pageName, pageDescription }: Props) => {
	if (pageName.toLowerCase() !== 'dog log') {
		return (
			<>
				<BlockHome>
					<BackHome />
				</BlockHome>
				<BlockContainer>
					<BlockHeading>
						<Heading pageName={pageName} />
					</BlockHeading>

					<BlockDescription pageName={pageName}>
						<PageDescription pageName={pageName}>
							{pageDescription}
						</PageDescription>
					</BlockDescription>
				</BlockContainer>
			</>
		);
	} else {
		return (
			<BlockContainer>
				<BlockHeading>
					<Heading pageName={pageName} />
				</BlockHeading>

				<BlockDescription pageName={pageName}>
					<PageDescription pageName={pageName}>
						{pageDescription}
					</PageDescription>
				</BlockDescription>
			</BlockContainer>
		);
	}
};

export default PageLayout;

