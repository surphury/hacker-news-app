import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import '@/App.css';

import { Layout } from '@/components';

export function App() {
	return (
		<Suspense fallback={''}>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</Suspense>
	);
}
