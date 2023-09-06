/** @format */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from './heading';

test('render PageName', () => {
	render(<Heading pageName={'Page Name'} />);
	expect(screen.getByRole('heading')).toHaveTextContent('Page Name');
});

test('render PageName', () => {
	render(<Heading pageName={''} />);
	expect(screen.getByRole('heading')).toHaveTextContent('');
});

// esse eh o teste que nao to conseguindo rodar
test('renders a page name', () => {
	const { getByText } = render(<Heading pageName={'Dog Log'} />);
	expect(getByText('Dog Log')).toBeInTheDocument();
	expect(getByText('Dog Log').tagName).toBe('H1');
});

