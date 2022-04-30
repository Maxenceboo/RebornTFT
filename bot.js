const fs = require("node:fs"); // impor node:fs
const { Client, Collection, Intents } = require("discord.js"); // impor discord.js (Client, Collection, Intents)
const { token, guildId } = require("./config.json"); // impor config.json (token)

const client = new Client({ intents: Object.keys(Intents.FLAGS) }); // new Client (intents : Object.keys(Discord.Intents))

client.commands = new Collection(); // new Collection () (commands)

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js")); //	scrap all files in the commands folder and filter out only the files that end with .js

  for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command); // create a new item in the Collection with the key as the command name and the value as the exported module
}
//	// "966383087749582859",

fs.readdir("./events/", (err, files) => {
  files.forEach((f) => require("./events/" + f));
}); //commands from the events folder

client.once("ready", () => {
  // once ready
  console.log("Successfully registered application commands.") // log Successfully registered application commands.
  console.log("Ready!"); // log Ready!

  client.guilds.cache.get(guildId).commands.set(client.commands.map((c) => c.data))

  

  console.log("\nCommandes : \n");
  client.commands.forEach((c) => console.log(c.data.name));
});

module.exports = client; // export client

client.login(token); // login with the token



