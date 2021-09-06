/* created by HIRUSHA
*/

const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');



if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'sfb ?(.*)', fromMe: true, desc: Lang.DEVICE, dontAddCommandList: false }, async (message, match) => {
        const url = `https://api.lolhuman.xyz/api/facebook2?apikey=${Config.LLHAPI}&url=${match[1]}`;
        try {
            const response = await got(url);

            const json = JSON.parse(response.body);

            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 'Result      : *' + json.message + '* \n\n' + 'DOWNLOAD URL      : *' + json.result + '*', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
    Asena.addCommand({ pattern: 'vfb ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: '```Made by ⚡🔰SLHαcĸerѕ Teαм Boт🔰```' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'sfb ?(.*)', fromMe: false, desc: Lang.DEVICE, dontAddCommandList: false }, async (message, match) => {
        const url = `https://api.lolhuman.xyz/api/facebook2?apikey=${Config.LLHAPI}&url=${match[1]}`;
        try {
            const response = await got(url);

            const json = JSON.parse(response.body);

            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 'Result      : *' + json.message + '* \n\n' + 'DOWNLOAD URL      : *' + json.result + '*', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
        }
    });
    Asena.addCommand({ pattern: 'what now', fromMe: true, desc: Lang.NEWEP }, (async (message, match) => {

        await message.sendMessage('*CMND* \n .device\n *DESC* \n know details of a mobilephone\n *example:* .device rog 5\n\n *CMND* \n .rdmore\n *DESC* \n add readmore after give text\n *example:* .rdmore SLHackers\n\n *CMND* \n.brdmore\n *DESC* \n add readmore before given text\n *example:* .brdmore SLHackers\n\n *CMND* \n.bgm one \n .bgm two \n *DESC* \n will change the type of reply bgm \n *example:* .bgm one (.bgm one \n is the default bgm mode - to change that use .bgm two ) ', MessageType.text, { quoted: message.data });

    }));
    Asena.addCommand({ pattern: 'vfb ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: '```Made by ⚡🔰SLHαcĸerѕ Teαм Boт🔰```' })

    }));
}
