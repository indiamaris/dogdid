/** @format */

import Heading from '../../components/pageLayout/heading/heading';

import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';
import BlockDescription from '../../assets/slytlesBlocks/blockDescription';
import BlockHeading from '../../assets/slytlesBlocks/blockHeading';
import MyPageBtns from './myPageBtns';

import PackList from '../../components/packList';

const pageName = 'Welcome';

const MyPage = () => {
	return (
		<>
			<BlockContainer>
				<BlockHeading>
					<Heading pageName={pageName} />
				</BlockHeading>
				<BlockDescription pageName={'bubu'}>
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

