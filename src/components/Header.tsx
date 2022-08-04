import styled from 'styled-components';

import { StyledHeader } from '@/styled-components';

const StyledTitle = styled.h1`
	text-transform: uppercase;
	display: grid;
	justify-content: center;
`;

export function Header() {
	return (
		<StyledHeader>
			<StyledTitle>Hacker News</StyledTitle>
		</StyledHeader>
	);
}
