const { SlashCommandBuilder } = require('@discordjs/builders');
const {
	MessageActionRow,
	MessageEmbed,
	MessageButton,
  } = require("discord.js");

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
		const row = new MessageActionRow()
		row.setComponents(new MessageButton('https://discord.gg/fzjqQZz', 'cree un ticket')
			.setStyle('SECONDARY')
			.setCustomId('ticket')
			.setLabel('cree un ticket'),
		)
		if (!interaction.member.permissions.has('ADMINISTRATOR'))
			return interaction.reply( 'vous n\'ete pas modo !');
		await interaction.reply({ embeds : [embed], components : [row] })
	}
};
