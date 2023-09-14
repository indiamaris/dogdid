/** @format */

import PageDescription from '../../components/pageLayout/pageDescription/pageDescription';
import Heading from '../../components/pageLayout/heading/heading';

import HomeBtns from './homeBtns';

// Import fot blosking styles

import BlockContainer from '../../components/slytlesBlocks/BlockContainer';
import PageLayout from '../../components/pageLayout/pageLayout';

const pageName = 'Dog Log';

const pageDescription =
	' With DOG LOG you can record and monitor the main actions related to your pets health. This project was originally developed for and by dog owners, but it even works for parakeets.';
const Home = () => (
	<>
		<BlockContainer>
			<PageLayout
				pageName={pageName}
				pageDescription={pageDescription}
				children={''}></PageLayout>
			<HomeBtns />
		</BlockContainer>
	</>
);

export default Home;

