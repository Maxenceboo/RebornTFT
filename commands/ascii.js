const { SlashCommandBuilder } = require("@discordjs/builders");
const figlet = require("figlet");
const { readdirSync } = require("node:fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ascii")
    .setDescription("transform text into ascii")
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("add text to transform")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("font")
        .setDescription("add a font for ascii")
        .setRequired(false)
    ),

  // .setDefaultPermission(false),
  async execute(interaction) {
    figlet(
      interaction.options.getString("text"),
      interaction.options.getString("font"),
      (err, res) => {
        if (err) return interaction.reply('Font invalide. Vous pouvez voir une liste de font avec /ascii-list');
        interaction.reply(`\`\`\`\n${res.slice(0, 1900)}\n\`\`\``);
      }
    );
  },
};
