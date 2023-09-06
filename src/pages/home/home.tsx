/** @format */
import Footer from '../../components/footer/footer';
import Heading from '../../components/heading/heading';
import PageDescription from '../../components/heading/pageDescription/pageDescription';
import HomeBtns from './homeBtns';

const Home = () => {
	const pageName = 'Dog Log';
	const companyName = '©2023,  Grindy';
	const pageDescription =
		' With DOG LOG you can record and monitor the main actions related to your pets health. This project was originally developed for and by dog owners, but it even works for parakeets.';
	return (
		<>
			<div className='p-4 text-center'>
				<div>
					<Heading pageName={pageName} />
				</div>
				<div className='m-4 mt-5'>
					<PageDescription pageDescription={pageDescription} />
				</div>
				<div>
					<HomeBtns />
				</div>
				<div className='mb-footer'>
					<Footer companyName={companyName} />
				</div>
			</div>
		</>
	);
};

export default Home;





