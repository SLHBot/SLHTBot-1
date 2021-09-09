

const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const got = require('got');
const Config = require('../config');
const Language = require('../language');

const Lang = Language.getString('instagram');
const Tlang = Language.getString('tiktok');
const YTV_DESC = "Youtube Video Downloader V2 ."
const YT_NEED = "*need word!.*"
const DWLOAD_VID = "*🎭Downloading Your Video...*"
const YTV_UP = "*🚀Uploading Your Video...*"
const NO_RESULT = "*🌀can't Find Anything...*"


if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'youtube ?(.*)', fromMe: true, desc: YTV_DESC, deleteCommand: false }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.client.sendMessage(message.jid, YT_NEED, MessageType.text, { quoted: message.data })
        await message.client.sendMessage(message.jid, DWLOAD_VID, MessageType.text, { quoted: message.data });
        await axios
            .get(`https://api.lolhuman.xyz/api/ytvideo?apikey=${Config.LLHAPI}&url=${link}`)
            .then(async (response) => {
                const {
                    link,
                } = response.data.result.link

                const videoBuffer = await axios.get(link, { responseType: 'arraybuffer' })

                await message.client.sendMessage(message.jid, YTV_UP, MessageType.text, { quoted: message.data });
                await message.client.sendMessage(message.jid, Buffer.from(videoBuffer.data), MessageType.video, { quoted: message.data, filename: 'SLHackers.mp4', mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAME, ptt: false })
            })
            .catch(
                async (err) => await message.client.sendMessage(message.jid, NO_RESULT, MessageType.text, { quoted: message.data }),
            )
    },
    )
}

else if (Config.WORKTYPE == 'public') {
    SlHackers.addCommand({ pattern: 'youtube ?(.*)', fromMe: false, desc: YTV_DESC }, async (message, match) => {

        const link = match[1]

        if (!link) return await message.client.sendMessage(message.jid, YT_NEED, MessageType.text, { quoted: message.data })
        var load = await message.client.sendMessage(message.jid, DWLOAD_VID, MessageType.text, { quoted: message.data })
        await axios
            .get(`https://api.lolhuman.xyz/api/ytvideo?apikey=${Config.LLHAPI}&url=${link}`)
            .then(async (response) => {
                const {
                    link,
                } = response.data.result.link

                const videoBuffer = await axios.get(link, { responseType: 'arraybuffer' })

                await message.client.deleteMessage(message.jid, { id: load.id, remoteJid: message.jid, fromMe: true });
                await message.client.sendMessage(message.jid, YTV_UP, MessageType.text, { quoted: message.data });
                await message.client.sendMessage(message.jid, Buffer.from(videoBuffer.data), MessageType.video, { quoted: message.data, filename: 'SLHackers.mp4', mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAME, ptt: false })
            })
            .catch(
                async (err) => await message.client.sendMessage(message.jid, NO_RESULT, MessageType.text, { quoted: message.data }),
            )
    },
    )
}
