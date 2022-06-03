import chalk from "chalk";
import { numberToFormat } from '../utils/index.js'

export const initCode = console.log('----------------- Escanea el codigo qr -----------------'
)

export const logAuth = (pushname) => {
  let marco = '-'.repeat(14 + pushname.length / 2)
  console.log(`${marco} o ${marco}
${chalk.green.bold('WhatsApp')} - ${chalk.whiteBright('Bienvenido de nuevo')} ${chalk.blue.bold(pushname)}
${marco} o ${marco}`)
}

export const logMsg = (name, number, msg, type) => {
  let formatMsg = type !== 'chat' ? `Ha enviado un ${type}` : msg
  let formatedNum = numberToFormat(number)

  console.log(`${name ? chalk.green.bold('o') : chalk.red.bold('o')} ${chalk.whiteBright(name)} (${formatedNum}): ${formatMsg}`)
}

export const logGroupMsg = (name, pushname, groupName, msg, type) => {
  let formatMsg = type !== 'chat' ? `Ha enviado un ${type}` : msg

  console.log(`${name ? chalk.green.bold('o') : chalk.red.bold('o')} ${name ? name : pushname} ${chalk.blueBright(`(${groupName})`)}: ${msg}`)
}