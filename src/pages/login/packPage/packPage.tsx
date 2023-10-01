/** @format */

import { useParams } from 'react-router-dom';
import BlockContainer from '../../../assets/slytlesBlocks/BlockContainer';
import BlockDescription from '../../../assets/slytlesBlocks/blockDescription';

import BlockHeading from '../../../assets/slytlesBlocks/blockHeading';
import Heading from '../../../components/pageLayout/heading/heading';
import PetList from './petsList';


const PackPage = () => {
	const pageName = ' Pack Name ';
	const {id}= useParams()
	return (
		<>
			<BlockContainer>
				<BlockHeading>
					<Heading pageName={pageName} />
				</BlockHeading>
				<BlockDescription pageName={''}>
					<PetList id={id}/>
				</BlockDescription>
			</BlockContainer>
		</>
	);
};

export default PackPage;

