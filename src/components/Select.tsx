import { useAtom } from 'jotai';
import { useState } from 'react';
import styled from 'styled-components';

import { arrow } from '@/assets/icon';

import { Icon, Option as Opt } from '@/components';

import { Option } from '@/models';

import { Post } from '@/config';

import { PostsState } from '@/state';

import {
	StyledOptionsContainer,
	StyledSelectButton
} from '@/styled-components';

const Container = styled.nav`
	display: grid;
	max-width: 20ch;
	position: relative;
	z-index: 1;
`;

export function Select({ options }: { options: Option<Post>[] }) {
	const [posts, setPosts] = useAtom(PostsState);

	const [selected, setSelected] = useState<Option<Post>>(
		options.filter((option) => option.value === posts)[0]
	);

	const onSelect = (index: number) => {
		setSelected(options[index]);
		setPosts(options[index].value);
	};

	const [drop, setDrop] = useState(false);

	return (
		<Container>
			<>
				<StyledSelectButton
					onClick={() => setDrop((drop) => !drop)}
					tabIndex={0}
					type="button"
				>
					<Opt icon={selected.icon}>{selected.text}</Opt>
					<Icon icon={arrow} />
				</StyledSelectButton>
				<StyledOptionsContainer>
					{drop &&
						options.map(({ text, icon }, index) => (
							<Opt
								index={index}
								key={text}
								onSelect={onSelect}
								icon={icon}
							>
								{text}
							</Opt>
						))}
				</StyledOptionsContainer>
			</>
		</Container>
	);
}
