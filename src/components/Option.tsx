import { Icon } from '@/components';

import { StyledOption } from '@/styled-components';

export function Option({
	children,
	icon,
	onSelect,
	index
}: {
	onSelect?: (from: number) => void;
	index?: number;
	children: string;
	icon: string;
}) {
	return (
		<StyledOption
			onClick={
				onSelect && index !== undefined
					? () => onSelect(index)
					: undefined
			}
		>
			<Icon icon={icon} className="icon" />
			{children}
		</StyledOption>
	);
}
