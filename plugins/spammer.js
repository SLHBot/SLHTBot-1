const SlHackers = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const { execFile } = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const Heroku = require('heroku-client');

const Language = require('../language');
const Lang = Language.getString('spammer');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


SlHackers.addCommand({ pattern: 'killspam', fromMe: true, desc: Lang.STOP_SPAMDESC }, (async (message, match) => {

    await message.client.sendMessage(message.jid, Lang.STOP_SPAM, MessageType.text, { quoted: message.data });

    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid, error.message, MessageType.text, { quoted: message.data });

    });
}));

SlHackers.addCommand({ pattern: 'spam ?(.*)', fromMe: true, desc: Lang.SPAM_DESC }, (async (message, match) => {


    if (match[1] === '') {

        return await message.client.sendMessage(message.jid, Lang.NEED_WORD);

    }

    var spam = `${match[1]}`
    var fin = spam.replace(/#/g, "\n");

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });

    await message.client.sendMessage(message.jid, fin, MessageType.text, { quoted: message.data });
}));
