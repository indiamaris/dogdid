/** @format */

import PageDescription from '../../components/heading/pageDescription/pageDescription';
import Heading from '../../components/heading/heading';

import HomeBtns from './homeBtns';

// Import fot blosking styles

import BlockHeading from '../../slytlesBlocks/blockHeading';

import BlockContainer from '../../slytlesBlocks/BlockContainer';
import BlockDescription from '../../components/heading/blockDescription';

const pageName = 'Dog Log';

const pageDescription =
	' With DOG LOG you can record and monitor the main actions related to your pets health. This project was originally developed for and by dog owners, but it even works for parakeets.';
const Home = () => (
	<>
		<BlockContainer>
			<BlockHeading>
				<Heading pageName={pageName} />
			</BlockHeading>
			<BlockDescription>
				<PageDescription
					children={pageDescription}
					pageName={pageName}
				/>
			</BlockDescription>
			<HomeBtns />
			
		</BlockContainer>
	</>
);

export default Home;

