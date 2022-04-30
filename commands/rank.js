const {
  MessageActionRow,
  MessageEmbed,
  MessageSelectMenu,
} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rank")
    .setDescription("embed for rank with select menu."),
    // .setDefaultPermission(false),
    private: true,
  async execute(interaction) {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("selectRank")
        .setPlaceholder("Nothing selected")
        .addOptions([
          {
            emoji: "966704406160617502",
            label: "iron",
            description: "This is iron rank",
            value: "iron",
          },
          {
            emoji: "966704608028262510",
            label: "bronze",
            description: "This is bronze rank",
            value: "bronze",
          },
          {
            emoji: "966704664408105020",
            label: "Silver",
            description: "This a rank Silver",
            value: "silver",
          },
          {
            emoji: "966704686092652584",
            label: "Gold",
            description: "This a rank Gold",
            value: "gold",
          },
          {
            emoji: "966704707831754853",
            label: "Platinum",
            description: "This a rank Platinum",
            value: "platinum",
          },
          {
            emoji: "966704736621428746",
            label: "Diamond",
            description: "This a rank Diamond",
            value: "diamond",
          },
          {
            emoji: "966704776727392316",
            label: "Master",
            description: "This a rank Master",
            value: "master",
          },
          {
            emoji: "966704805491925062",
            label: "Grandmaster",
            description: "This a rank Grandmaster",
            value: "grandmaster",
          },
          {
            emoji: "966704842460495882",
            label: "Challenger",
            description: "This a rank Challenger",
            value: "challenger",
          },
        ])
    );
    const embed = new Discord.MessageEmbed()
      .setTitle("Rank")
      .setDescription("Select your rank in the list below to see the rank") 
      .setColor("#77948D")
      .setFooter({
        text: interaction.user.username,
        iconURL: interaction.user.avatarURL(),
      })
      .setTimestamp()
      .setImage("https://i.postimg.cc/fbKjTvPG/banner-Roles.png");
    
    if (!interaction.member.permissions.has("ADMINISTRATOR"))
      return interaction.reply( "vous n'ete pas modo !");
    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};

// const embed = new MessageEmbed()
// 	.setColor('#0099ff')
// 	.setTitle('Some title')
// 	.setURL('https://discord.js.org/')
// 	.setDescription('Some description here');

// await interaction.reply({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [row] });

// });
