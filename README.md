# is-https-proxy

> npm i is-https-proxy

check if proxy supports https protocol

```js
const isHttpsProxy = require('is-https-proxy')
const httpsProxy = {
// luminati default proxy
  host: 'zproxy.lum-superproxy.io',
  port: 22225
}
isHttpsProxy(httpsProxy)
  .then(console.log) // true
  .catch(console.error) // for sure
```

## isHttpsProxy(options)
* options: [tls.connectOptions](https://nodejs.org/api/tls.html#tls_tls_connect_options_callback)
    * require { host, port }