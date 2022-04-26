const { Client, Collection, Intents } = require('discord.js');	// impor discord.js (Client, Collection, Intents)
const client = require('../index.js');	// impor index.js (client)
const { verifyrole } = require('../config.json');	// impor config.json (verifyrole)

client.on('interactionCreate', async interaction => {	// on interactionCreate
    if (!interaction.isButton()) return;    // if not interaction.isButton() return
    if (interaction.customId === 'join') {
        // const guild = client.guilds.cache.get(interaction.guildId);
        // if (!guild) return;
        // const member = guild.members.cache.get(interaction.userId);
        // if (!member) return;
        await interaction.member.roles.add(verifyrole);
    }
    interaction.deferUpdate()
});