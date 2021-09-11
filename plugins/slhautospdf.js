let SlHackers = require('../events');
let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('amazone');

if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: '😎 ?(.*)', fromMe: true, desc: Lang.SPDF }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.SPDF_LINK, MessageType.text, { quoted: message.data });

        var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Lang.SPDF_PROC, MessageType.text, { quoted: message.data });

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, filename: 'SLHackers-Team-Bot-Site-to-Pdf-Made-By-Hirusha Dayarathne.pdf', });

    }));

}
