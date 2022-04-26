const fs = require('node:fs');	// impor node:fs
const { REST } = require('@discordjs/rest');	// impor @discordjs/rest (REST)
const { Routes } = require('discord-api-types/v9');	// impor discord-api-types/v9 (Routes)
const { clientId, guildId, token } = require('./config.json');	// impor config.json (clientId, guildId, token)

const commands = [];	// create an empty array (commands)
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));	// scrap all files in the commands folder and filter out only the files that end with .js

for (const file of commandFiles) {	// for (const file of commandFiles)
	const command = require(`./commands/${file}`);	// require the file
	commands.push(command.data.toJSON());	// push the command to the array
}

const rest = new REST({ version: '9' }).setToken(token);	// new REST (version: '9') and setToken (token)

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })	// put the commands to the REST endpoint
	.then(() => console.log('Successfully registered application commands.'))	// log Successfully registered application commands.
	.catch(console.error);	// log error