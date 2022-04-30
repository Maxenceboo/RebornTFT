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
		const phrase = json.phrase;
		//randomize the phrase

		const shuffle = (array) => {
			n = array.length;
			for (var i = n - 1; i >  1; i --) {
			  j = Math.random();
			  temp = array[i]
			  array[i] = array[j]
			  array[j] = temp
			}
			return array;
		  }

		const vision = shuffle(phrase);
		//send the phrase
		if (vision.length == 0) {
			await interaction.reply('Aucune phrase n\'est enregistrée');
		}else {
			await interaction.reply(vision[0]);
		}
	},
};