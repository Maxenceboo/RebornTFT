const { Client, Collection, Intents } = require('discord.js');	// impor discord.js (Client, Collection, Intents)
const client = require('../bot.js');	// impor index.js (client)
const { verifyrole } = require('../config.json');	// impor config.json (verifyrole)

client.on('interactionCreate', async interaction => {	// on interactionCreate
    if (!interaction.isButton()) return;    // if not interaction.isButton() return
    if (interaction.customId === 'ticket') {
        //create a chanel for the ticket 
        let name = `ticket-${interaction.user.id}`;
        interaction.guild.createChannel(name, 'text')
        .then(console.log)
        .catch(console.error);
        //send a message to the channel
        interaction.channel.send(`${interaction.user}`);
    }
    interaction.deferUpdate()
});