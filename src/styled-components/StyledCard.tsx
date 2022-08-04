import styled from 'styled-components';

export const StyledCard = styled.article`
	border-radius: 6px;
	border: solid 1px #979797;
	background-color: #fff;

	display: grid;
	align-items: center;

	grid-template-areas: 'details button' 'details button';

	grid-template-columns: 1fr 6.8ch;

	transition: opacity 300ms;

	&:hover {
		opacity: 0.4;
	}
`;
