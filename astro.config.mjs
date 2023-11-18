import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import solid from '@astrojs/solid-js';

export default defineConfig({
	site: 'https://astro-frontend-masters.netlify.app',
	output: 'server',
	integrations: [
		solid({
			include: ['**/solid/*'],
		}),
		react({
			include: ['**/react/*'],
		}),
	],
});
