import { useAtom } from 'jotai';
import { useState } from 'react';
import styled from 'styled-components';

import { arrow } from '@/assets/icon';

import { Icon, Option as Opt } from '@/components';

import { Option } from '@/models';

import { Post } from '@/config';

import { topicState } from '@/state';

import {
	StyledOptionsContainer,
	StyledSelectButton
} from '@/styled-components';

const Container = styled.div`
	display: grid;
	max-width: 20ch;
	position: relative;
	z-index: 1;
`;

export function Select({ options }: { options: Option<Post>[] }) {
	const [topic, setTopic] = useAtom(topicState);

	const [selected, setSelected] = useState<Option<Post>>(
		options.filter((option) => option.value === topic)[0]
	);
	const [drop, setDrop] = useState(false);

	const onSelect = (index: number) => {
		setSelected(options[index]);
		setTopic(options[index].value);
	};

	return (
		<Container>
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
		</Container>
	);
}
