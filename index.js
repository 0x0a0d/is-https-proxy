const tls = require('tls')

/**
 * check if proxy supports https protocol
 * @param {ConnectionOptions} options
 * @return {Promise<boolean>}
 */
function isHttpsProxy (options) {
  return new Promise(resolve => {
    const conn = tls.connect(options, () => {
      resolve(true)
      conn.end()
    })
    conn
      .on('error', err => {
        resolve(err === false)
      })
  })
}

module.exports = isHttpsProxy