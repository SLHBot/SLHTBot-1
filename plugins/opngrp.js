
const SlHackers = require('../events');

const { MessageType } = require('@adiwajshing/baileys');

const OP = ('This command for OPEN the  Group at MORNING');

const code = ('!unmute')
const FINAL = "```The group  has opened 🔓!```"
const TMUTE = "Trying to open the group"
const TST = ".tagall .gm"
const SCXR = "Opening..."
SlHackers.addCommand({ pattern: 'open', fromMe: true, deleteCommand: false, desc: OP, }, (async (message, match) => {

  var msg = await message.reply('Preforming....');

  await message.client.sendMessage(
    message.jid, TMUTE, MessageType.text, { quoted: message.data });

  await message.client.sendMessage(
    message.jid, SCXR, MessageType.text, { quoted: message.data });

  await message.client.sendMessage(
    message.jid, code, MessageType.text, { quoted: message.data });

  await message.client.sendMessage(
    message.jid, TST, MessageType.text, { quoted: message.data });

  await message.client.sendMessage(
    message.jid, FINAL, MessageType.text, { quoted: message.data });


}));
