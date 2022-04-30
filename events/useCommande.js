const { Client, Collection, Intents } = require('discord.js');	// impor discord.js (Client, Collection, Intents)
const client = require('../bot.js');	// impor index.js (client)


client.on('interactionCreate', async interaction => {	// on interactionCreate
	if (!interaction.isCommand()) return;	// if not interaction.isCommand() return 

	const command = client.commands.get(interaction.commandName);	// get the command from the Collection

	if (!command) return;	// if not command return 

	try{
		await command.execute(interaction);	// execute the command with the interaction as the argument 
	}catch(error){	// catch error 
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}	
});