const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ticket')
		.setDescription('embed a ticket'),
	async execute(interaction) {
		// embed ticket
		const embed = new MessageEmbed()
			.setTitle('Ticket')
			.setDescription('Pour cree un ticket, cliquez sur le btn ci-dessous')
			.setColor(0x00AE86)
			.setTimestamp()
			.setFooter({
				text: interaction.user.username,
				iconURL: interaction.user.avatarURL(),
			  })
		// send ticket
		const row = new Discord.MessageActionRow()
		row.setComponents(new Discord.MessageButton('https://discord.gg/fzjqQZz', 'cree un ticket')
			.setStyle('DEFUALT')
			.setCustomId('ticket')
			.setLabel('cree un ticket'),
		)
		await interaction.reply({ embeds: [embed], components: [row] })
	},
};
