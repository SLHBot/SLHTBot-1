/*Codded by RAMIYA
Telegram: t.me/Ramilka_Rodrigo 
Official Release for SLHackers */

const SlHackers = require('../events');
const Config = require('../config');
const Heroku = require('heroku-client');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('heroku');
const Name = "OWN_MESSAGE"
const Msg = "Owner Command Info"
const need = "*You don't set the Owner Details yet.!*\n To set:  *.setown {details}* \n ! For More Help type *.help setown*"


const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

if (Config.WORKTYPE == 'public') {  /* Public open */

    SlHackers.addCommand({ pattern: 'setown ?(.*)', fromMe: true, desc: Lang.SETVAR_DESC, deleteCommand: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.INVALID, MessageType.text);

        if (varValue = match[1]) {
            await heroku.patch(baseURI + '/config-vars', {
                body: {
                    [Name]: varValue
                }
            }).then(async (app) => {
                await message.client.sendMessage(message.jid, Lang.SET_SUCCESS.format(Msg, varValue) + '\n\n' + Lang.RESTART_MSG, MessageType.text);

            });
        } else {
            await message.client.sendMessage(message.jid, Lang.INVALID, MessageType.text);
        }
    }));

    SlHackers.addCommand({ pattern: 'owner', fromMe: false }, (async (message, match) => {   /* OWNER open */

        if (Config.OWNMSG === 'unset') return await message.sendMessage(need);

        var main, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11;
        main = Config.OWNMSG
        if (main.includes('#')) {
            var split = main.split('#');
            text1 = split[0];
            text2 = split[1];
            text3 = split[2];
            text4 = split[3];
            text5 = split[4];
            text6 = split[5];
            text7 = split[6];
            text8 = split[7];
            text9 = split[8];
            text10 = split[9];
            text11 = split[10];
        }
        var r_text = new Array();
        r_text[0] = "https://telegra.ph/file/40ed93cc5bbd6ebc35934.jpg";
        r_text[1] = "https://telegra.ph/file/c093e9374836bf02a59ed.jpg";
        r_text[2] = "https://telegra.ph/file/cbb3a24bcf9ad259c7715.jpg";
        r_text[3] = "https://telegra.ph/file/b2ae47b17b19266acfdd3.jpg";
        r_text[4] = "https://telegra.ph/file/5e0561d3cbb9cda856d5b.jpg";
        r_text[5] = "https://telegra.ph/file/7645d42ee46a3017ac88f.jpg";
        r_text[6] = "https://i.imgur.com/ioPSNA6.jpg";
        r_text[7] = "https://i.imgur.com/wFKpwvG.jpg";
        r_text[8] = "https://i.imgur.com/vVOdO1e.jpg";
        r_text[9] = "https://i.imgur.com/gghm9lp.jpg";



        var i = Math.floor(10 * Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '*╔═══◈⎚ BOT▿OWNER ⎚◈═══╗* \n              *┖ɴᴇᴏᴛʀᴏ x ʀᴀᴍɪʏᴀ┛* \n\n🛡️ Name : ' + text1 + '\n🔮 I am a ' + text2 + '\n\n🪀 Whatsapp : wa.me/94' + text3 + '\n🔗 Email : ' + text4 + '\n🍿 Youtube : ' + text5 + '\n🏓 Facebook : ' + text6 + '\n🎨 Insta : ' + text7 + '\n🎭 Tiktok : ' + text8 + '\n🕊️ Twitter : ' + text9 + '\n⚙️ Telegram : ' + text10 + '\n👨‍💻 Github : ' + text11 + '\n\n                 *𝕊𝕃ℍ𝕒𝕔𝕜𝕖 Team ℙ𝕣𝕠𝕛𝕖𝕔𝕥™*\n*╚═══✿══◈══⎚══◈══✿═══╝*' })
    })); /* owner close */


    SlHackers.addCommand({ pattern: 'owner', fromMe: true }, (async (message, match) => {   /* OWNER open */

        if (Config.OWNMSG === 'unset') return await message.sendMessage(need);

        var main, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11;
        main = Config.OWNMSG
        if (main.includes('#')) {
            var split = main.split('#');
            text1 = split[0];
            text2 = split[1];
            text3 = split[2];
            text4 = split[3];
            text5 = split[4];
            text6 = split[5];
            text7 = split[6];
            text8 = split[7];
            text9 = split[8];
            text10 = split[9];
            text11 = split[10];
        }
        var r_text = new Array();
        r_text[0] = "https://telegra.ph/file/40ed93cc5bbd6ebc35934.jpg";
        r_text[1] = "https://telegra.ph/file/c093e9374836bf02a59ed.jpg";
        r_text[2] = "https://telegra.ph/file/cbb3a24bcf9ad259c7715.jpg";
        r_text[3] = "https://telegra.ph/file/b2ae47b17b19266acfdd3.jpg";
        r_text[4] = "https://telegra.ph/file/5e0561d3cbb9cda856d5b.jpg";
        r_text[5] = "https://telegra.ph/file/7645d42ee46a3017ac88f.jpg";
        r_text[6] = "https://i.imgur.com/ioPSNA6.jpg";
        r_text[7] = "https://i.imgur.com/wFKpwvG.jpg";
        r_text[8] = "https://i.imgur.com/vVOdO1e.jpg";
        r_text[9] = "https://i.imgur.com/gghm9lp.jpg";



        var i = Math.floor(10 * Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '*╔═══◈⎚ BOT▿OWNER ⎚◈═══╗* \n              *┖ɴᴇᴏᴛʀᴏ x ʀᴀᴍɪʏᴀ┛* \n\n🛡️ Name : ' + text1 + '\n🔮 I am a ' + text2 + '\n\n🪀 Whatsapp : wa.me/94' + text3 + '\n🔗 Email : ' + text4 + '\n🍿 Youtube : ' + text5 + '\n🏓 Facebook : ' + text6 + '\n🎨 Insta : ' + text7 + '\n🎭 Tiktok : ' + text8 + '\n🕊️ Twitter : ' + text9 + '\n⚙️ Telegram : ' + text10 + '\n👨‍💻 Github : ' + text11 + '\n\n                 *𝕊𝕃ℍ𝕒𝕔𝕜𝕖 Team ℙ𝕣𝕠𝕛𝕖𝕔𝕥™*\n*╚═══✿══◈══⎚══◈══✿═══╝*' })
    }));

}  /* Public close */

else if (Config.WORKTYPE == 'private') {  /* private open */

    SlHackers.addCommand({ pattern: 'owner', fromMe: true }, (async (message, match) => {   /* OWNER open */

        if (Config.OWNMSG === 'unset') return await message.sendMessage(need);

        var main, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11;
        main = Config.OWNMSG
        if (main.includes('#')) {
            var split = main.split('#');
            text1 = split[0];
            text2 = split[1];
            text3 = split[2];
            text4 = split[3];
            text5 = split[4];
            text6 = split[5];
            text7 = split[6];
            text8 = split[7];
            text9 = split[8];
            text10 = split[9];
            text11 = split[10];
        }
        var r_text = new Array();
        r_text[0] = "https://telegra.ph/file/40ed93cc5bbd6ebc35934.jpg";
        r_text[1] = "https://telegra.ph/file/c093e9374836bf02a59ed.jpg";
        r_text[2] = "https://telegra.ph/file/cbb3a24bcf9ad259c7715.jpg";
        r_text[3] = "https://telegra.ph/file/b2ae47b17b19266acfdd3.jpg";
        r_text[4] = "https://telegra.ph/file/5e0561d3cbb9cda856d5b.jpg";
        r_text[5] = "https://telegra.ph/file/7645d42ee46a3017ac88f.jpg";
        r_text[6] = "https://i.imgur.com/ioPSNA6.jpg";
        r_text[7] = "https://i.imgur.com/wFKpwvG.jpg";
        r_text[8] = "https://i.imgur.com/vVOdO1e.jpg";
        r_text[9] = "https://i.imgur.com/gghm9lp.jpg";



        var i = Math.floor(10 * Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '*╔═══◈⎚ BOT▿OWNER ⎚◈═══╗* \n              *┖ɴᴇᴏᴛʀᴏ x ʀᴀᴍɪʏᴀ┛* \n\n🛡️ Name : ' + text1 + '\n🔮 I am a ' + text2 + '\n\n🪀 Whatsapp : wa.me/94' + text3 + '\n🔗 Email : ' + text4 + '\n🍿 Youtube : ' + text5 + '\n🏓 Facebook : ' + text6 + '\n🎨 Insta : ' + text7 + '\n🎭 Tiktok : ' + text8 + '\n🕊️ Twitter : ' + text9 + '\n⚙️ Telegram : ' + text10 + '\n👨‍💻 Github : ' + text11 + '\n\n                 *𝕊𝕃ℍ𝕒𝕔𝕜𝕖 Team ℙ𝕣𝕠𝕛𝕖𝕔𝕥™*\n*╚═══✿══◈══⎚══◈══✿═══╝*' })
    })); /* owner close */


    SlHackers.addCommand({ pattern: 'setown ?(.*)', fromMe: true, desc: Lang.SETVAR_DESC, deleteCommand: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.INVALID, MessageType.text);

        if (varValue = match[1]) {
            await heroku.patch(baseURI + '/config-vars', {
                body: {
                    [Name]: varValue
                }
            }).then(async (app) => {
                await message.client.sendMessage(message.jid, Lang.SET_SUCCESS.format(Msg, varValue) + '\n\n' + Lang.RESTART_MSG, MessageType.text);
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.INVALID, MessageType.text);
        }
    }));

}	/* private close */

/*Codded by RAMIYA
Telegram: t.me/Ramilka_Rodrigo
Official Release for SLHackers */
