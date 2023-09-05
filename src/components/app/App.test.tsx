/** @format */

import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
test('display strings', () => {
	render(<App />);
	expect(screen.getByRole('heading')).toHaveTextContent('Tu tas me testando');
});

