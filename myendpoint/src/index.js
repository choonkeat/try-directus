export default (router) => {
    router.get('/', ({ url, headers, body }, res) => {
        let responseBody = `Hello, ${JSON.stringify({ url, headers, body })} !\n`
        console.log(`[console.log v1] ${responseBody}`);

        if (res && typeof res.send === 'function') {
            return res.send(`res.send: ${responseBody}`);
        } else {
            return { status: 200, body: `return: ${responseBody}` };
        }
    });
};