const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mute")
    .setDescription("mute a user from the server")
    .addUserOption((option) =>
      option
        .setName("usermute")
        .setDescription("add user for mute")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("add a reason for mute")
        .setRequired(false)
    ),
  /**
   * @param {Discord.CommandInteraction} interaction
   */
  async execute(interaction) {
    // mute user option
    const usermute = interaction.options.getMember("usermute");
    if (!(usermute instanceof Discord.GuildMember)) return;
    // choose reason option
    const reason = interaction.options.getString("reason") || "no reason";
    if (!interaction.member.permissions.has("ADMINISTRATOR"))
      return interaction.reply(
        `Vous n'étes pas modo ! <a:paimonangry:965716487706910720> pour mute ${usermute} pour *${reason}*`
      );
    // mute user
    usermute.voice.setMute(true)
    .catch((err) => {
      if (err.message === "Missing Permissions")
        return interaction.reply(`Je n'ai pas les permissions pour mute ${usermute}`);
      console.error(err);
      interaction.reply(`Je n'ai pas pu mute ${usermute}`);
    })
    .then(() => interaction.reply(`Je viens de mute ${usermute} pour ${reason}`));
  },
};
