let SlHackers = require('../events');
let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('unvoice');

if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: '😎 ?(.*)', fromMe: true, desc: SPDF_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(SPDF_LINK);

        var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, SPDF_PROC, MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, filename: 'SLHackers-site-to-pdf.pdf' })

    }));
}
else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: '😎 ?(.*)', fromMe: false, desc: SPDF_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(SPDF_LINK);

        var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, SPDF_PROC, MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, filename: 'SLHackers-site-to-pdf.pdf' })

    }));
}
