import { useAtom } from 'jotai';
import * as timeago from 'timeago.js';
import styled from 'styled-components';

import { Icon } from '@/components';

import { clock, heart, solidHeart } from '@/assets/icon';

import { favoritesState } from '@/state';

import { New } from '@/models';

import { LikeButton, StyledCard, StyledCardDetails } from '@/styled-components';

const StyledCardTitle = styled.h2`
	font-size: 0.875rem;
	font-weight: 500;
	margin-block: 0;
`;

const StyledAnchor = styled.a`
	color: inherit;
	text-decoration-line: none;
`;

const Container = styled.div`
	grid-area: details;
	display: flex;
	flex-direction: column;
	row-gap: 0.5em;

	padding: 1em;
`;

export function Card({
	author,
	created_at_i,
	created_at,
	story_title,
	story_url
}: New) {
	const [favorites, setFavorites] = useAtom(favoritesState);

	const favorite = favorites
		.map((fav) => fav.created_at_i)
		.includes(created_at_i);

	return (
		<StyledAnchor href={story_url} target="_blank" rel="noreferrer">
			<StyledCard>
				<Container>
					<StyledCardDetails>
						<Icon icon={clock} />
						{timeago.format(new Date(created_at))} by {author}
					</StyledCardDetails>
					<StyledCardTitle>{story_title}</StyledCardTitle>
				</Container>
				<LikeButton
					onClick={(event) => {
						event.preventDefault();
						if (favorite) {
							setFavorites(
								favorites.filter(
									(fav) => fav.created_at_i !== created_at_i
								)
							);
						} else {
							setFavorites([
								...favorites,
								{
									author,
									created_at_i,
									created_at,
									story_title,
									story_url
								}
							]);
						}
					}}
				>
					<Icon icon={favorite ? solidHeart : heart} />
				</LikeButton>
			</StyledCard>
		</StyledAnchor>
	);
}
