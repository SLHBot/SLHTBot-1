const Asena = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"

if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'glitch ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'freefire ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikeyqzXRlER89xXLoOvXH8VPmVCh5ye=&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'cfire ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'light ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'cslogo ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 's3d ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'nlogo ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'blackpink ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'neonlight ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'pornhub ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by :\n*🔰SLHαcĸerѕ Teαм Boт🔰*' })

    }));

    Asena.addCommand({ pattern: 'blood ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by :\n*🔰SLHαcĸerѕ Teαм Boт🔰*' })

    }));

    Asena.addCommand({ pattern: '3dtext ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by :\n*🔰SLHαcĸerѕ Teαм Boт🔰*' })

    }));

    Asena.addCommand({ pattern: 'nfire ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by :\n*🔰SLHαcĸerѕ Teαм Boт🔰*' })

    }));

    Asena.addCommand({ pattern: 'ninjalogo ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by :\n*🔰SLHαcĸerѕ Teαм Boт🔰*' })

    }));

    Asena.addCommand({ pattern: 'nglow ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'nleaves ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'nsky ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'buttonyt ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'bcwall ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'anony ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=03ffdf45513a71ed7e669db1&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by ⚡🔰SLHαcĸerѕ Teαм Boт🔰*' })

    }));

    Asena.addCommand({ pattern: 'vtext ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: '```Made by ⚡🔰SLHαcĸerѕ Teαм Boт🔰```' })

    }));

    Asena.addCommand({ pattern: 'ptext ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: '```Made by ⚡🔰SLHαcĸerѕ Teαм Boт🔰```' })

    }));

    Asena.addCommand({ pattern: 'colortext ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: '```Made by ⚡🔰SLHαcĸerѕ Teαм Boт🔰```' })

    }));

    Asena.addCommand({ pattern: 'emoji ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var uri = encodeURI(match[1])

        var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&emoji=' + uri, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'nsky ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/skytext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'silk ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/silktext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'sand ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/sandw?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'glowtext ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/glowtext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'flametext ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/flametext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'flowertext ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/flowertext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'blood ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/blood?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'luxury ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/luxury?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'xmas ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/xmas?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'toxic ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/toxic?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'njoker ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/joker?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'glossy ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/glossy-carbon?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'nethu ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/blood?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'metald ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/metal-dark?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'marvel ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/marvel?text1=${topText}&text2=${bottomText}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'space3d ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/space-3d?text1=${topText}&text2=${bottomText}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'horror ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/horror?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'dgold ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/deluxe-gold?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'nwolf ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/wolf?text1=Neotrox&text2=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'nxwolf ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/wolf2?text1=Neotrox&text2=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'nxninja ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);
        var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/ninja?text1=${match[1]}&text2=Neotrox&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    //============================================================I Edited logo====================================================================================
    Asena.addCommand({ pattern: 'smoke ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/smoke?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'candy ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/candy?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'gradientavatar ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'fur ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'flaming ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/flaming?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'bevel ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/bevel?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'lolcover ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'dota2avatar ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/dota2avatar?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'crossfire ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/crossfire?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'warfacecover ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/warfacecover?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'aov ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'pokemon ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/pokemon?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'kopi2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/kopi2?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'underwebmatrix ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'watermelon ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/watermelon?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'rock ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*⚜SLHackers Bot Pro⚜*' })

    }));

    Asena.addCommand({ pattern: 'lion ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
        }

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/lionlogomascot?text=${topText}&text2=${bottomText}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Produced by :```\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'ultragloss ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

    Asena.addCommand({ pattern: 'denim ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

        var webimage = await axios.get(`https://api.xteam.xyz/textpro/denim?text=${match[1]}&APIKEY=1d372151fb9f8bc5`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' })

    }));

}
