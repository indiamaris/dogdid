/** @format */
interface Props {
	companyName:string
}
const Footer = ({ companyName }:Props) => {
	return (
		<footer className='   footer mt-auto py-1 border-top bg-body-tertiary'>
			{companyName}
		</footer>
	);
};

export default Footer;


