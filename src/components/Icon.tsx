import styled from 'styled-components';

interface Props {
	icon: string;
}

interface ComponentProps {
	icon: string;
	mask?: boolean;
	className?: string;
}

const StyledIcon = styled.span<Props>`
	--size: 1em;
	--icon: url(${({ icon }) => icon});
	content: var(--icon);
	max-width: var(--size);
`;

const StyledIconWithMask = styled.span<Props>`
	--size: 1em;
	&::before {
		content: '';
		mask-image: url(${({ icon }) => icon});
		mask-repeat: no-repeat;
		width: var(--size);
		aspect-ratio: 1 / 1;
		display: inline-block;
		overflow: hidden;
		background-color: currentColor;
		mask-size: contain;
		mask-position: center;
	}
`;

export function Icon({ icon, mask, className }: ComponentProps) {
	return mask ? (
		<StyledIconWithMask icon={icon} className={className} />
	) : (
		<StyledIcon icon={icon} className={className} />
	);
}
