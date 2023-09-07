/** @format */
import Footer from '../../components/footer/footer';
import Heading from '../../components/heading/heading';
import PageDescription from '../../components/heading/pageDescription/pageDescription';
import BlockDescription from './slytlesBlocks/BlockDescription';
import BlockFooter from './slytlesBlocks/blockFooter';
import BlockHome from './slytlesBlocks/blockHome';
import HomeBtns from './homeBtns';

const pageName = 'Dog Log';
const companyName = '©2023  Grindevs';
const pageDescription =
	' With DOG LOG you can record and monitor the main actions related to your pets health. This project was originally developed for and by dog owners, but it even works for parakeets.';
const Home = () => (
	<>
		<BlockHome>
			<Heading pageName={pageName} />
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

