'use strict'

const minecraft = require('minecraft-server-util')

const host = process.env.MINECRAFT_HOST || 'mc.houkiserver.com'
const port = Number.parseInt(process.env.MINECRAFT_PORT || '25565', 10)

exports.handler = async () => {
  try {
    const result = await minecraft.status(host, port, { timeout: 3000 })

    return response(200, {
      isServerOnline: true,
      result,
    })
  } catch (error) {
    console.warn('Minecraft status check failed', error)

    // An unreachable game server is a valid status response, not an API error.
    return response(200, {
      isServerOnline: false,
    })
  }
}

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=5',
    },
    body: JSON.stringify(body),
  }
}
