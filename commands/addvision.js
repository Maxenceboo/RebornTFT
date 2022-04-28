const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const path = require('path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addvision')
		.setDescription('addvision')
        .addStringOption(option =>
            option.setName('addphrase')
                .setDescription('ajoute une phrase a l\'vision')
                .setRequired(true))
        .setDefaultPermission(false),
        private: true,
	async execute(interaction) {
        // write option in a json astro.json file in the astro folder
        const file = path.join(__dirname, '../assets/vision.json');
        const json = JSON.parse(fs.readFileSync(file, 'utf8'));
        const addphrase = interaction.options.get('addphrase').value;
        json.phrase.push(addphrase);
        fs.writeFileSync(file, JSON.stringify(json));
        await interaction.reply('Phrase ajoutée');
	},
};