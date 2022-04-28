const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const path = require('path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vision')
		.setDescription('vision'),
	async execute(interaction) {
		//read phrase from json file in the astro folder
		const file = path.join(__dirname, '../assets/vision.json');
		const json = JSON.parse(fs.readFileSync(file, 'utf8'));
		const phrase = json.phrase;s
		//randomize the phrase
		const random = Math.floor(Math.random() * phrase.length);
		const vision = phrase[random];
		//send the phrase
		await interaction.reply(vision);
	},
};