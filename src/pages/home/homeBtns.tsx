/** @format */

import BlockBtn from '../../components/btn/blockBtn';
import Btn from '../../components/btn/btn';
const HomeBtns = () => {
	return (
		<>
			<BlockBtn>
				<Btn to='login'>Login</Btn>
				<Btn to='signIn'>Create a new account</Btn>
			</BlockBtn>
		</>
	);
};

export default HomeBtns;

