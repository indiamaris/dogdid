/** @format */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from './heading';

test('display strings', () => {
	render(<Heading pageName={'Page Name'} />);
	expect(screen.getByRole('heading')).toHaveTextContent('Page Name');
});


test('display strings', () => {
	render(<Heading pageName={'@@@@@'} />);
	expect(screen.getByRole('heading')).toHaveTextContent('@@@@@');
});


