import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '@/App.css';
import { Header } from './components';

/* import { Loading } from '@/components'; */

/* import { userState } from '@/state'; */

export function App() {
	const Home = lazy(() => import('@/pages/Home'));

	/* const [user] = useAtom(userState); */

	return (
		<Suspense fallback={''}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="*" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}
