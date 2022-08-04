import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Header, Favorites, Posts, Select } from '@/components';

import { Post, Routing } from '@/config';

import { angular, react, vue } from '@/assets/icon';

const StyledNavbar = styled.nav``;

const StyledList = styled.ul`
	display: grid;
	justify-content: center;
	grid-template-columns: 10ch 10ch;

	list-style-type: none;
`;

const StyledItem = styled.li``;

const StyledLink = styled(NavLink)`
	--border-colour: #d6d6d6;

	display: block;
	padding-block: 0.3ch;
	border-radius: 2px;
	border: solid 1px var(--border-colour);

	font-family: 'Roboto';
	font-weight: 500;
	color: #6a6a6a;
	text-align: center;
	text-decoration-line: none;

	&.active {
		--border-colour: #1797ff;
		color: #1797ff;
	}
`;

const options = [
	{
		text: 'Reactjs',
		icon: react,
		value: Post.React
	},
	{
		text: 'Angular',
		icon: angular,
		value: Post.Angular
	},
	{
		text: 'Vuejs',
		icon: vue,
		value: Post.Vue
	}
];

const Main = styled.div`
	display: grid;
	justify-content: center;
	margin-bottom: 2em;
`;

export function Layout() {
	return (
		<>
			<Header />
			<Main>
				<StyledNavbar>
					<StyledList>
						<StyledItem>
							<StyledLink to={Routing.Home}>All</StyledLink>
						</StyledItem>
						<StyledItem>
							<StyledLink to={Routing.Favorites}>
								My faves
							</StyledLink>
						</StyledItem>
					</StyledList>
				</StyledNavbar>
				<Select options={options} />
			</Main>
			<Routes>
				<Route path={Routing.Home} element={<Posts />} />
				<Route path={Routing.Favorites} element={<Favorites />} />
				<Route path={Routing.Page} element={<Posts />} />
			</Routes>
		</>
	);
}
