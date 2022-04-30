const { Client, Collection, Intents } = require("discord.js"); // impor discord.js (Client, Collection, Intents)
const client = require("../bot.js"); // impor index.js (client)

const role = {
  iron: "966698864251899936",
  bronze: "966700745506291722",
  silver: "966700899588268155",
  gold: "966700987547021342",
  platinum: "966701084099903489",
  diamond: "966701219257155614",
  master: "966701319190634537",
  grandmaster: "966702039755276299",
  challenger: "966702270706253876",
};

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isSelectMenu()) return; // if not interaction.isSelectMenu() return

  if (interaction.customId === "selectRank") {
    if (interaction.values[0] === "iron") {
      if (!interaction.member.roles.cache.has(role.iron)) {
        // iron
        await interaction.member.roles.add(role.iron); // iron
      } else await interaction.member.roles.remove(role.iron);
    } else if (interaction.values[0] === "bronze") {
      if (!interaction.member.roles.cache.has(role.bronze)) {
        // bronze
        await interaction.member.roles.add(role.bronze); // bronze
      } else await interaction.member.roles.remove(role.bronze); // bronze
    } else if (interaction.values[0] === "silver") {
      if (!interaction.member.roles.cache.has(role.silver)) {
        // silver
        await interaction.member.roles.add(role.silver); // silver
      } else await interaction.member.roles.remove(role.silver); // silver
    } else if (interaction.values[0] === "gold") {
      if (!interaction.member.roles.cache.has(role.gold)) {
        // gold
        await interaction.member.roles.add(role.gold); // gold
      } else await interaction.member.roles.remove(role.gold); // gold
    } else if (interaction.values[0] === "platinum") {
      if (!interaction.member.roles.cache.has(role.platinum)) {
        // platinum
        await interaction.member.roles.add(role.platinum); // platinum
      } else await interaction.member.roles.remove(role.platinum); // platinum
    } else if (interaction.values[0] === "diamond") {
      if (!interaction.member.roles.cache.has(role.diamond)) {
        // diamond
        await interaction.member.roles.add(role.diamond); // diamond
      } else await interaction.member.roles.remove(role.diamond); // diamond
    } else if (interaction.values[0] === "master") {
      if (!interaction.member.roles.cache.has(role.master)) {
        // master
        await interaction.member.roles.add(role.master); // master
      } else await interaction.member.roles.remove(role.master); // master
    } else if (interaction.values[0] === "grandmaster") {
      if (!interaction.member.roles.cache.has(role.grandmaster)) {
        // grandmaster
        await interaction.member.roles.add(role.grandmaster); // grandmaster
      } else await interaction.member.roles.remove(role.grandmaster); // grandmaster
    } else if (interaction.values[0] === "challenger") {
      if (!interaction.member.roles.cache.has(role.challenger)) {
        // challenger
        await interaction.member.roles.add(role.challenger); // challenger
      } else await interaction.member.roles.remove(role.challenger); // challenger
    }
    interaction.reply({ content: "You have update ranked!", ephemeral: true });
  }
});
