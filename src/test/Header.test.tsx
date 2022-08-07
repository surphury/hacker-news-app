import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import { Header } from '@/components';

const text = 'I am just text';

describe('Header', () => {
	beforeEach(() => {
		render(<Header>{text}</Header>);
	});

	test('Should render children', () => {
		const title = screen.getByText(text);
		expect(title).toBeDefined();
	});
});
