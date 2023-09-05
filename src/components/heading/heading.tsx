/** @format */
import '../../index.css'
interface Props {
	pageName: string;
}
const Heading = ({ pageName }: Props) => {
	return <h1 className='text-center p4-5 pageTitle'>{pageName}</h1>;
};
export default Heading;




