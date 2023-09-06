/** @format */

import Heading from '../../components/heading/heading';
import PageDescription from '../../components/heading/pageDescription/pageDescription';

const Home = () => {
	const pageName = 'Dog Log';
	const pageDescription =
		' With DOG LOG you can record and monitor the main actions related to your pets health. This project was originally developed for and by dog owners, but it even works for parakeets.';
	return (
		<>
			<div className='p-4 text-center'>
				<div >
					<Heading pageName={pageName} />
				</div>
				<div className='m-4'>
					<PageDescription pageDescription={pageDescription} />
				</div>
			</div>
		</>
	);
};

export default Home;



