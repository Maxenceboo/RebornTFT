const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('ban a user from the server')
        .addUserOption(option =>
            option.setName('userban')
                .setDescription('add user for ban')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('add a reason for ban')
                .setRequired(false)),
        // .setDefaultPermission(false),
	async execute(interaction) {
        
        // ban user option
        const userban = interaction.options.getUser('userban');
        // choose reason option
        const reason = interaction.options.getString('reason') || 'no reason';
        if (!interaction.member.permissions.has('ADMINISTRATOR'))
            return interaction.reply(`Vous n'étes pas modo ! <a:paimonangry:965716487706910720> pour ban ${userban} pour *${reason}*`);
        // ban user
        await interaction.guild.members.ban(userban, { days: 1, reason });
        // send message
        await interaction.reply(`${userban} banned for ${reason}`);
	},
};