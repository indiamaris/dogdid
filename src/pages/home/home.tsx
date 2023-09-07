/** @format */

import PageDescription from '../../components/heading/pageDescription/pageDescription';
import Heading from '../../components/heading/heading';
import Footer from '../../components/footer/footer';
import HomeBtns from './homeBtns';

// Import fot blosking styles
import BlockDescription from '../../slytlesBlocks/blockDescription';
import BlockHeading from '../../slytlesBlocks/blockHeading';
import BlockFooter from '../../slytlesBlocks/blockFooter';
import BlockHome from '../../slytlesBlocks/blockHome';

const pageName = 'Dog Log';
const companyName = '©2023  Grindevs';
const pageDescription =
	' With DOG LOG you can record and monitor the main actions related to your pets health. This project was originally developed for and by dog owners, but it even works for parakeets.';
const Home = () => (
	<>
		<BlockHome>
			<BlockHeading>
				<Heading pageName={pageName} />
			</BlockHeading>
			<BlockDescription>
				<PageDescription pageDescription={pageDescription} />
			</BlockDescription>
			<HomeBtns />
			<BlockFooter>
				<Footer companyName={companyName} />
			</BlockFooter>
		</BlockHome>
	</>
);

export default Home;

