const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const path = require('path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('resetvision')
		.setDescription('reset vision'), 
        // .setDefaultPermission(false),
    private: true,
	async execute(interaction) {
        // reset pharse in a json vision.json file in the asset folder
        if (!interaction.member.permissions.has('ADMINISTRATOR'))
            return interaction.reply(`Vous n'étes pas modo ! <a:paimonangry:965716487706910720>`);
        const file = path.join(__dirname, '../assets/vision.json');
        const json = JSON.parse(fs.readFileSync(file, 'utf8'));
        json.phrase = [];
        fs.writeFileSync(file, JSON.stringify(json));
        await interaction.reply('Vision réinitialisée !');
	},
};