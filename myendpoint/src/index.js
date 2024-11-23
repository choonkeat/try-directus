export default {
    id: 'myendpoint',
    handler: (router) => {
        router.get('/', (req, res) => {
            console.log("[console.log] Hello, World!\n");
            res.send("Hello, World!\n")
        });
    }
};