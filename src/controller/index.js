import { logGroupMsg, logMsg } from "../styles/index.js"

export const controller = async (message) => {
  const { name, number, pushname } = await message.getContact()
  const { isGroup, name: groupName } = await message.getChat()
  const msg = message.body
  let msgType = message.isGif ? 'gif' : message.type
  if(!message.isStatus) {
    isGroup ? logGroupMsg(name, pushname, groupName, msg, msgType)
      : logMsg(name, number, msg, msgType)

  }
}