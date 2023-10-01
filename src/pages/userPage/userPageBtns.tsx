/** @format */

import BlockBtn from '../../components/btn/blockBtn';
import Btn from '../../components/btn/btn';

const MyPageBtns = () => {
	return (
		<BlockBtn>
			<Btn to='/userpage/newpack'>Create new pack</Btn>
			<Btn to='/joinpack'>Join a pack</Btn>
		</BlockBtn>
	);
};

export default MyPageBtns;

