/** @format */

import Heading from '../../components/heading/heading';

import BlockContainer from '../../slytlesBlocks/BlockContainer';
import BlockDescription from '../../slytlesBlocks/blockDescription';
import BlockHeading from '../../slytlesBlocks/blockHeading';
import MyPageBtns from './myPageBtns';

import PackList from './packList';

const pageName = 'Welcome';

const MyPage = () => {
	return (
		<>
			<BlockContainer>
				<BlockHeading>
					<Heading pageName={pageName} />
				</BlockHeading>
				<BlockDescription
			
					pageName={'bubu'}>
					Select your pack
					<PackList />
					
				</BlockDescription>

				<BlockDescription pageName={pageName}>
					or
					<MyPageBtns />
				</BlockDescription>
			</BlockContainer>
		</>
	);
};

export default MyPage;




