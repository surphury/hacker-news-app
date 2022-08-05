import { ReactNode } from 'react';
import styled from 'styled-components';

const CardsContainer = styled.div`
	display: grid;
	justify-content: center;
	align-content: start;
	grid-template-columns: repeat(auto-fit, minmax(30ch, 55ch));
	gap: 3ch;
	padding-inline: 1em;
	min-height: 100vh;
`;

export function Cards({ children }: { children: ReactNode }) {
	return <CardsContainer>{children}</CardsContainer>;
}
