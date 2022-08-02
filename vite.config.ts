import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } })
	],

	define: {
		'process.env': {}
	},

	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{
				find: './runtimeConfig',
				replacement: './runtimeConfig.browser'
			}
		]
	}
});
