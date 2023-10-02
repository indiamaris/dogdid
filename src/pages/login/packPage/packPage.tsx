/** @format */

import { useParams } from 'react-router-dom';
import BlockContainer from '../../../assets/slytlesBlocks/BlockContainer';
import BlockDescription from '../../../assets/slytlesBlocks/blockDescription';

import BlockHeading from '../../../assets/slytlesBlocks/blockHeading';
import Heading from '../../../components/pageLayout/heading/heading';
import PetList from './petsList';
import usePack from '../../../hooks/usePack';
import Events from '../../events/events';
import BlockBtn from '../../../components/btn/blockBtn';
import BtnSucess from '../../../components/btn/btn_success';
import BtnWarning from '../../../components/btn/btn_warning';
import PageDescription from '../../../components/pageLayout/pageDescription/pageDescription';

const PackPage = () => {
	const { id } = useParams();
	// essas exclamacao significa que EU SEI QUE o id sempre chegara ateh aqui.
	const { data, error, isLoading } = usePack(id!);
	if (isLoading) return <p>Loading</p>;
	if (error) return <p>{error.message}</p>;
	const pageName = data.name;

	return (
		<>
			<BlockContainer>
				<PageDescription pageName={pageName}>
					Welcome to {pageName} pack
				</PageDescription>
				<BlockBtn>
					<BtnWarning>
						Select <strong>ALL</strong> dogs
					</BtnWarning>
				</BlockBtn>
				<BlockDescription pageName={''}>
					<PetList id={id!} />
				</BlockDescription>
				<Events />
				<BlockBtn>
					<BtnSucess>
						<strong>Finish</strong>
					</BtnSucess>
				</BlockBtn>
			</BlockContainer>
		</>
	);
};

export default PackPage;

