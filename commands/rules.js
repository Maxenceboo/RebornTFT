const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('embed for rules.')
        .setDefaultPermission(false),
        private: true,
	async execute(interaction) {
    const embed = new Discord.MessageEmbed()
    embed.setTitle('Rules')
    embed.setDescription(`
    1) Prend notes du règlement, confirme que tu l'as bien lu et n'hésites pas à t'attribuer des rôles.

    2) Vous êtes sur un discord public, les insultes et le harcèlement sont prohibés ici.
    Vous vous devez de respecter tous les utilisateurs, tous comportements irrespectueux sera puni en conséquence.
    
    3) Il est interdit de promouvoir un parti politique ou une religion sur ce discord.
    Ce serveur est dédié à TFT, néanmoins il n'est pas interdit de parler d'autres jeux ou sujets de la vie courante.
    
    4) Pas de spam ou de flood dans les salons. Veuillez aussi utiliser les salons appropriés en fonction de ce que vous écrivez.
    
    5) Pas de contenu NSFW, de contenu controversé ou sur des activités illégales.
    
    6) Pas de pseudo, d'image de profil ou de statut inapproprié.
    
    7) Pas de promotion hors salon dédiée ou autorisation d'un modérateur (Cela inclus de ne pas envoyer de messages privés aux membres du serveur).
    
    8) Pas de spoil de manière générale, cependant un channel leak existe,vous pouvez transmettre les informations aux modérateurs pour les partager.`
    )
    embed.setColor('#77948D')
    embed.setFooter({ text : interaction.user.username, iconURL : interaction.user.avatarURL() })
    embed.setTimestamp()
    embed.setImage('https://i.postimg.cc/kM8CzyXw/Banner-rules.png')

    const row = new Discord.MessageActionRow()
    row.setComponents(new Discord.MessageButton('https://discord.gg/fzjqQZz', 'Rejoindre le serveur').setStyle('SUCCESS').setCustomId('join').setLabel('Rejoindre le serveur'))

    await interaction.reply({ embeds : [embed], components : [row] })
	},
};