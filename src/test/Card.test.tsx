import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import * as timeago from 'timeago.js';

import { New } from '@/models';
import { Card } from '@/components';

const new1: New = {
	created_at: '2022-08-03T13:06:05.000Z',
	author: 'agrippanux',
	story_title:
		'Nonprofit markups.org is exposing the most egregious new car prices',
	story_url:
		'https://www.themanual.com/auto/markup-exposes-car-dealership-greed/',
	created_at_i: 1659531965
};

describe('Card', () => {
	beforeEach(() => {
		render(<Card {...new1} />);
	});
	test('Should render title', () => {
		const title = screen.getByText(new1.story_title);
		expect(title.textContent).toEqual(new1.story_title);
	});

	test('Should render author and time ago', () => {
		const title = screen.getByText(
			`${timeago.format(new Date(new1.created_at))} by ${new1.author}`
		);
		expect(title).toBeDefined();
	});
});
