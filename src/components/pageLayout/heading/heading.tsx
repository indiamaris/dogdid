/** @format */

import BlockHome from '../../../assets/slytlesBlocks/blockBackHome';
import BlockHeading from '../../../assets/slytlesBlocks/blockHeading';
import BackHome from '../../backOpt/backHome';

/** @format */
interface Props {
	pageName: string;
}

const Heading = ({ pageName }: Props) => {
	const sizesForPages =
		pageName.toLowerCase() === 'dog log'
			? 'sizesForHomeTitle'
			: 'sizesForPagesTitle';
	return <h1 className={`  decoratedFont ${sizesForPages}`}>{pageName}</h1>;
};

export default Heading;

