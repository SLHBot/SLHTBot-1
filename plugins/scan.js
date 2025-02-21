/* Codded by @Hirusha
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('tagall');

if (Config.WORKTYPE == 'private') {
    SlHackers.addCommand({ pattern: 'scan ?(.*)', fromMe: true, desc: Lang.SCAN }, (async (message, match) => {

        if (match[1] == '') return await message.client.sendMessage(message.jid, Lang.NO, MessageType.text);

        var exists = await message.client.isOnWhatsApp(match[1])
        if (exists) {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.SUC + '\n' + exists.jid, MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.UNSUC, MessageType.text);
        }
    }));
}
else if (Config.WORKTYPE == 'public') {
    SlHackers.addCommand({ pattern: 'scan ?(.*)', fromMe: false, desc: Lang.SCAN }, (async (message, match) => {

        if (match[1] == '') return await message.client.sendMessage(message.jid, Lang.NO, MessageType.text);

        var exists = await message.client.isOnWhatsApp(match[1])
        if (exists) {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.SUC + '\n' + exists.jid, MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.UNSUC, MessageType.text);
        }
    }));
    SlHackers.addCommand({ pattern: 'scan ?(.*)', fromMe: true, dontaddCommandList: true, desc: Lang.SCAN }, (async (message, match) => {

        if (match[1] == '') return await message.client.sendMessage(message.jid, Lang.NO, MessageType.text);

        var exists = await message.client.isOnWhatsApp(match[1])
        if (exists) {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.SUC + '\n' + exists.jid, MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.UNSUC, MessageType.text);
        }
    }));
}
