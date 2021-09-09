const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const con = require('../config');

// Descriptions
const TRZAR = "Rastgele zar atar."
const ENZAR = "Roll dice randomly."
const HIZAR = "पासा के यादृच्छिक रोल"

// Sentences
const TRSEN = "🍀 ```Zar Atılıyor!``` 🎲"
const ENSEN = "🍀 ```Rolling Dice!``` 🎲"
const HISEN = "🍀 ```पासा फेंको!``` 🎲"

// Results
const TRSON = "```Zar Atıldı:``` "
const ENSON = "```Dice Rolled:``` "
const HISON = "```पासा लुढ़का:``` "

// Plugin Start 
if (con.LANG === 'TR' || 'az') {

    if (con.WORKTYPE === 'private') {

        SlHackers.addCommand({ pattern: 'roll', fromMe: true, desc: ENZAR }, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text, { quoted: message.data });
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6 * Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text, { quoted: message.data });

        }));
    }
    else if (con.WORKTYPE === 'public') {

        SlHackers.addCommand({ pattern: 'roll', fromMe: false, desc: ENZAR }, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text, { quoted: message.data });
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6 * Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text, { quoted: message.data });

        }));
    }
}
else if (con.LANG === 'HI') {

    if (con.WORKTYPE === 'private') {

        SlHackers.addCommand({ pattern: 'roll', fromMe: true, desc: ENZAR }, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text, { quoted: message.data });
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6 * Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text, { quoted: message.data });

        }));
    }
    else if (con.WORKTYPE === 'public') {

        SlHackers.addCommand({ pattern: 'roll', fromMe: false, desc: ENZAR }, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text, { quoted: message.data });
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6 * Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text, { quoted: message.data });

        }));
    }
}
else {

    if (con.WORKTYPE === 'private') {

        SlHackers.addCommand({ pattern: 'roll', fromMe: true, desc: ENZAR }, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text, { quoted: message.data });
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6 * Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text, { quoted: message.data });

        }));
    }
    else if (con.WORKTYPE === 'public') {

        SlHackers.addCommand({ pattern: 'roll', fromMe: false, desc: ENZAR }, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text, { quoted: message.data });
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6 * Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text, { quoted: message.data });

        }));
    }
}
