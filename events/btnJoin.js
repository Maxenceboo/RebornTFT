const { Client, Collection, Intents } = require('discord.js');	// impor discord.js (Client, Collection, Intents)
const client = require('../bot.js');	// impor index.js (client)
const { verifyrole } = require('../config.json');	// impor config.json (verifyrole)

client.on('interactionCreate', async interaction => {	// on interactionCreate
    if (!interaction.isButton()) return;    // if not interaction.isButton() return
    if (interaction.customId === 'join') {
        await interaction.member.roles.add(verifyrole);
    }
    interaction.deferUpdate()
});