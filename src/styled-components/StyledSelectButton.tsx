import styled from 'styled-components';

export const StyledSelectButton = styled.button`
	display: inline-flex;
	align-items: center;
	border: 1px solid;
	border-radius: 0.5em;
	background-color: #fff;
	min-width: 100%;

	& > :first-child {
		box-shadow: none;
		background-color: transparent;
	}
`;
