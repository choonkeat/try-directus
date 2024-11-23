import { log } from 'directus:api';

export default ({ filter, action }) => {
	filter('items.create', () => {
		log('[sandboxed] Creating Item!');
	});

	action('items.create', () => {
		log('[sandboxed] Item created!');
	});
};
