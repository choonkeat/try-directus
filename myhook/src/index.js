import { log } from 'directus:api';

export default ({ filter, action }) => {
	filter('items.create', () => {
		console.log('[console v1] Creating Item!');
		log('[sandboxed v1] Creating Item!');
	});

	action('items.create', () => {
		console.log('[console v1] Item created!');
		log('[sandboxed v1] Item created!');
	});
};
