import { Client } from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal'
import { initCode, logAuth } from './styles/index.js'
import { controller } from './controller/index.js'

const client = new Client()

client.on('qr', qr => {
  initCode
  qrcode.generate(qr, { small: true })
})

client.on('ready', () => {
  const { pushname } = client.info
  logAuth(pushname)
})

client.on('message',  (message) => {
  controller(message)
})

client.initialize() 