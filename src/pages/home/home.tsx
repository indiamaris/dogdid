/** @format */

import PageDescription from '../../components/pageDescription/pageDescription';
import Heading from '../../components/heading/heading';

import HomeBtns from './homeBtns';


import BlockContainer from '../../slytlesBlocks/BlockContainer';
import PageLayout from '../../components/pageLayout';

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

