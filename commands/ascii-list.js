const { SlashCommandBuilder } = require("@discordjs/builders");
const { readdirSync } = require("fs");
const Discord = require("discord.js");
const PageSystem = require("dispage");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ascii-list")
    .setDescription("ascii-list"),
  async execute(interaction) {
    const n = readdirSync("node_modules/figlet/fonts/").map(n => n.slice(0, -4));

    const embeds = chunk(n, 10).map((arr,i) =>
      new Discord.MessageEmbed()
      .setTitle("Page de fonts N°"+(i+1))
      .setColor("#ff4646")
      .setDescription(arr.join("\n"))
    );

    new PageSystem(interaction.client).setEmbeds(embeds).start(interaction);

    function chunk(arr, n = 1) {
      let new_arr = [];
      for (let i = 0; i < arr.length; i += n) new_arr.push(arr.slice(i, i + n));
      return new_arr;
    }
  },
};
