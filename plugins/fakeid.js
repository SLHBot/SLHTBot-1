const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
	SlHackers.addCommand({ pattern: 'fake id ?(.*)', fromMe: true, desc: '', dontaddCommandList: true }, async (message, match) => {
		const url = `https://docs-jojo.herokuapp.com/api/fake_identity?lang=en&type=json`;
		try {
			const response = await got(url);

			const json = JSON.parse(response.body);

			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 'NAME  :' + json.name + '\n' + 'GENDER :' + json.gender + 'AGE  :' + json.age + '\n' + 'BDAY :' + json.birtday + 'JOB  :' + json.occupation + '\n' + 'ADDRESS :' + json.address + 'PIN  :' + json.zip_code + '\n' + 'PLACE :' + json.state + 'COUNTRY  :' + json.country + '\n' + 'PHONE :' + json.phone, MessageType.text);
		} catch {
			return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
		}
	});
}

else if (Config.WORKTYPE == 'public') {


	SlHackers.addCommand({ pattern: 'fake id ?(.*)', fromMe: false, desc: '', dontaddCommandList: true }, async (message, match) => {
		const url = `https://docs-jojo.herokuapp.com/api/fake_identity?lang=en&type=json`;
		try {
			const response = await got(url);

			const json = JSON.parse(response.body);

			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 'NAME  :' + json.name + '\n' + 'GENDER :' + json.gender + 'AGE  :' + json.age + '\n' + 'BDAY :' + json.birtday + 'JOB  :' + json.occupation + '\n' + 'ADDRESS :' + json.address + 'PIN  :' + json.zip_code + '\n' + 'PLACE :' + json.state + 'COUNTRY  :' + json.country + '\n' + 'PHONE :' + json.phone, MessageType.text);
		} catch {
			return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
		}
	});
}
