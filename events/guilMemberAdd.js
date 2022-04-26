const { Client, Collection, Intents } = require('discord.js');	// impor discord.js (Client, Collection, Intents)
const client = require('../index.js');	// impor index.js (client)
const { welcomeChannel } = require('../config.json');	// impor config.json (welcomeChannel)

client.on('guildMemberAdd', async member => {	// on guildMemberAdd
	const channel = client.channels.cache.get(welcomeChannel);	// get the channel from the Collection")
	if (!channel) return;	// if not channel return
	//welcom menber in server
	await channel.send(`Welcom ${member} in to **${member.guild.name}**`);	// send the message to the channel
});