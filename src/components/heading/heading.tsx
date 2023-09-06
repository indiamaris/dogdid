/** @format */
import '../../index.css';
interface Props {
	pageName: string;
}
const Heading = ({ pageName }: Props) => {
	return <h1 className='pageTitle'>{pageName}</h1>;
};
export default Heading;


