const SlHackers = require('../events')

const { MessageType } = require('@adiwajshing/baileys')

const axios = require('axios')

const cn = require('../config');

const Language = require('../language')

const { errorMessage, infoMessage } = require('../helpers')

const Lang = Language.getString('instagram')

const Tlang = Language.getString('mediafire')

SlHackers.addCommand({ pattern: 'mediafire ?(.*)', fromMe: false, dontAddCommandList: true }, async (message, match) => {

  const userName = match[1]

  if (!userName) return await message.client.sendMessage(message.jid, Tlang.NEED, MessageType.text, { quoted: message.data })

  await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text, { quoted: message.data })

  await axios

    .get(`https://api.xteam.xyz/dl/mediafire?url=${userName}&APIKEY=1d372151fb9f8bc5`)

    .then(async (response) => {

      const {

        server_1,

      } = response.data

      const profileBuffer = await axios.get(server_1, {

        responseType: 'arraybuffer',

      })

      await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.png, {

        caption: 'apk downloader\n 𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭| ©2021❤️',

      })

    })

    .catch(

      async (err) => await message.client.sendMessage(message.jid, Tlang.NOT + userName, MessageType.text, { quoted: message.data }),

    )

},

)
