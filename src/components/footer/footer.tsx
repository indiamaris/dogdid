/** @format */
interface Props {
	companyName: string;
}
const Footer = ({ companyName }: Props) => {
	return <footer className='footer py-1 border-top'>{companyName}</footer>;
};

export default Footer;

