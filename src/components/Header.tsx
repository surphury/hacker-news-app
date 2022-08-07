import { ReactNode } from 'react';

import { StyledHeader } from '@/styled-components';

export function Header({ children }: { children: ReactNode }) {
	return <StyledHeader>{children}</StyledHeader>;
}
