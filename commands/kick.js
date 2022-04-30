const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("kick")
    .addUserOption((option) =>
      option
        .setName("userkick")
        .setDescription("add user for kick")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("add a reason for kick")
        .setRequired(false)
    )
    .addStringOption((option) =>
      option
        .setName("time")
        .setDescription(
          "add a time for kick in minutes and default is 5 minutes and this comand is a tilmeout"
        )
        .setRequired(false)
    ),
  // .setDefaultPermission(false),
  private: true,
  async execute(interaction) {
    
    // kick user option
    const userkick = interaction.options.getMember("userkick");
    // choose reason option
    const reason = interaction.options.getString("reason") || "Aucune raison";
    // choose time option
    // fonction check time is a number and is positive
    function checkTime(times) {
      return !isNaN(times) && times > 0;
    }
    let time = 0;

    // if time is not set or is not chektime, set time to 5 minutes by default
    if (
      checkTime(interaction.options.getString("time")) === false ||
      interaction.options.getString("time") === undefined
    ) {
      time = 5;
    } else {
      time = interaction.options.getString("time");
    }
    // time in milliseconds
    const timeInMs = time * 60000;
    if (!interaction.member.permissions.has('ADMINISTRATOR'))
        return interaction.reply(`Vous n'étes pas modo ! <a:paimonangry:965716487706910720> pour kick ${userkick} pour *${reason}* pendant ${time} minutes`);  
    // kick user
    await userkick.timeout(timeInMs, reason)
    .catch((err) => {
      if (err.message === "Missing Permissions")
        return interaction.reply(`Je n'ai pas les permissions pour timeout ${usermute}`);
      console.error(err);
      interaction.reply(`Je n'ai pas pu timeout ${usermute}`);
    })
    // send message
    await interaction.reply(`${userkick} kicked for ${reason} for ${time} minutes`);
  },
};
