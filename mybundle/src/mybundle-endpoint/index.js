export default (router) => {
	router.get('/', (req, res) => {
		console.log('[console.log] My Bundle Endpoint, Lah!');
		res.send('My Bundle Endpoint, Lah!');
	});
};
