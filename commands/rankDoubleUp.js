const {
    MessageActionRow,
    MessageEmbed,
    MessageSelectMenu,
  } = require("discord.js");
  const { SlashCommandBuilder } = require("@discordjs/builders");
  const Discord = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("rankdoubleup")
      .setDescription("embed for rank double up with select menu.")
      .setDefaultPermission(false),
      private: true,
    async execute(interaction) {
      const row = new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setCustomId("selectRankdoubleup")
          .setPlaceholder("Nothing selected")
          .addOptions([
            {
              emoji: "966728234353979432",
              label: "Grey",
              description: "This is grey rank",
              value: "grey",
            },
            {
              emoji: "966727983324889159",
              label: "Green",
              description: "This is green rank",
              value: "green",
            },
            {
              emoji: "966728425123500112",
              label: "Blue",
              description: "This is blue rank",
              value: "blue",
            },
            {
              emoji: "966729027069038662",
              label: "Purple",
              description: "This is purple rank",
              value: "purple",
            },
            {
              emoji: "966729511867658262",
              label: "Orange",
              description: "This is orange rank",
              value: "orange",
            },
          ])
      );
      const embed = new Discord.MessageEmbed()
        .setTitle("Rank double up")
        .setDescription("Select your rank in the list below to see the rank in double up")
        .setColor("#77948D")
        .setFooter({
          text: interaction.user.username,
          iconURL: interaction.user.avatarURL(),
        })
        .setTimestamp()
        .setImage("https://i.postimg.cc/fbKjTvPG/banner-Roles.png");
  
      await interaction.reply({
        embeds: [embed],
        components: [row],
      });
    },
  };
  