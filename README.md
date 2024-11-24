Sandboxed Extensions seem to [only support](https://github.com/directus/directus/blob/3de40390fe9b174ccb20b52f057ab46b74235e6a/api/src/extensions/lib/sandbox/generate-api-extensions-sandbox-entrypoint.ts#L15) `endpoint`, `hook`, and `operation` extensions

```
"directus:extension": {
    "type" = "endpoint" | "hook" | "operation"
}
```
