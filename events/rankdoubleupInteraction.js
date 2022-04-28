const { Client, Collection, Intents } = require("discord.js"); // impor discord.js (Client, Collection, Intents)
const client = require("../index.js"); // impor index.js (client)

const role = {
  grey: "966708387893104700",
  green: "966708470948704286",
  blue: "966708833722449970",
  purpule: "966709218071687208",
  orange: "966709313995407390",
};

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isSelectMenu()) return; // if not interaction.isSelectMenu() return

  if (interaction.customId === "selectRankdoubleup") {
    if (interaction.values[0] === "grey") {
      if (!interaction.member.roles.cache.has(role.grey)) {
        // grey
        await interaction.member.roles.add(role.grey); // grey
      } else await interaction.member.roles.remove(role.grey);
    } else if (interaction.values[0] === "green") {
      if (!interaction.member.roles.cache.has(role.green)) {
        // green
        await interaction.member.roles.add(role.green); // green
      } else await interaction.member.roles.remove(role.green); // green
    } else if(interaction.values[0] === "blue") {
        if (!interaction.member.roles.cache.has(role.blue)) {
            // blue
            await interaction.member.roles.add(role.blue); // blue
        } else await interaction.member.roles.remove(role.blue); // blue
    } else if(interaction.values[0] === "purpule") {
        if (!interaction.member.roles.cache.has(role.purpule)) {
            // purpule
            await interaction.member.roles.add(role.purpule); // purpule
        } else await interaction.member.roles.remove(role.purpule); // purpule
    }else if(interaction.values[0] === "orange") {
            if (!interaction.member.roles.cache.has(role.orange)) {
                // orange
                await interaction.member.roles.add(role.orange); // orange
            } else await interaction.member.roles.remove(role.orange); // orange
        }
    interaction.reply({ content: "You have update ranked double up!", ephemeral: true });
  }
});