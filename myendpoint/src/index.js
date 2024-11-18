export default {
	id: 'myendpoint',
	handler: (router) => {
		router.get('/', (req, res) => res.send('Hello, World!'));
	}
};