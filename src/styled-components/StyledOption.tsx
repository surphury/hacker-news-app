import styled from 'styled-components';

export const StyledOption = styled.span`
	box-shadow: 0 2px 2px 0 #dad8d8;
	background-color: #fff;
	padding: 1ch 1em;
	width: 100%;

	display: inline-flex;
	align-items: center;

	&:hover {
		background-color: #eaeaea;
	}

	& > .icon {
		--size: 1.5em;
	}
`;
