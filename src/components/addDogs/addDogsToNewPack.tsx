/** @format */

import PageLayout from '../pageLayout/pageLayout';
import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';
import AddDogBtns from './addDogsBtn';
import NewDog from '../dogToLog/newDog';
const pageDescription = 'Lets add dogs to your pack';
const pageName = 'Add Dog';
const AddDogs = () => {
	return (
		<BlockContainer>
			<PageLayout
				pageName={pageName}
				children={''}
				pageDescription={pageDescription}
			/>
			<NewDog />
			<AddDogBtns />
		</BlockContainer>
	);
};

export default AddDogs;

