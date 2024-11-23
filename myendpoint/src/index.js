import { log } from 'directus:api';

export default (router) => {
    router.get('/', ({ url, headers, body }, res) => {
        let responseBody = `Hello, ${JSON.stringify({ url, headers, body })} !\n`
        log(`[sandboxed v1] ${responseBody}`);

        if (res && typeof res.send === 'function') {
            return res.send(`res.send: ${responseBody}`); // non-sandbox
        } else {
            return { status: 200, body: `return: ${responseBody}` }; // sandbox
        }
    });
};