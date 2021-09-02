/* Codded by @Hirusha
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');


if (Config.WORKTYPE == 'public') {
    Asena.addCommand({ pattern: 'among ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.lolhuman.xyz/api/amongus?apikey=03ffdf45513a71ed7e669db1&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.image, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })
    }));
    Asena.addCommand({ pattern: '2attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.lolhuman.xyz/api/attp2?apikey=03ffdf45513a71ed7e669db1&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
}
