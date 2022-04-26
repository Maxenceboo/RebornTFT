const fs = require('node:fs');	// impor node:fs
const { Client, Collection, Intents, ClientUser } = require('discord.js');	// impor discord.js (Client, Collection, Intents)
const { token, guildId } = require('./config.json');	// impor config.json (token)

const client = new Client({ intents : Object.keys(Intents.FLAGS) });	// new Client (intents : Object.keys(Discord.Intents))

client.commands = new Collection();	// new Collection () (commands) 

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));  //	scrap all files in the commands folder and filter out only the files that end with .js
for (const file of commandFiles) {	// for (const file of commandFiles)
	const command = require(`./commands/${file}`);	
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);	// create a new item in the Collection with the key as the command name and the value as the exported module
}

fs.readdir('./events/',(err,files) =>{ files.forEach(f => require('./events/'+f)) })	//commands from the events folder


client.once('ready', () => {	// once ready
	console.log('Ready!');	// log Ready!
	client.emit('guildMemberAdd', client.guilds.cache.get(guildId).me	);	// emit guildMemberAdd with the client.user as the argument
});


module.exports = client;	// export client

client.login(token);	// login with the token


//https://discord.js.org/#/docs/discord.js/stable/class/GuildMemberRoleManager
//https://discordjs.guide/creating-your-bot/command-handling.html#dynamically-executing-commands