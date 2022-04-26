const { Client, Collection, Intents } = require('discord.js');	// impor discord.js (Client, Collection, Intents)
const client = require('../index.js');	// impor index.js (client)
const { createChannel } = require('../config.json');	// impor config.json (createChannel)

// create a channel in the server with the name of the member that joined the server and the type of text channel
client.on('voiceStateUpdate', (oldState, newState) => {
    if(!newState.channel) return;
    if(newState.member.user.bot) return;
    if(newState.channelId !== createChannel) return;
    console.log(newState.member.user.username);
    newState.guild.channels.create(newState.member.user.username, { type : 'GUILD_VOICE', parent : newState.channel.parentId })
    // moove the member to the new channel
    .then(channel => newState.member.voice.setChannel(channel))
    .catch(console.error);
    });

client.on('voiceStateUpdate', (oldState, newState) => {
    // delet the channel if not member in to the channel
    if(!oldState.channel) return;
    if(oldState.member.user.bot) return;
    if(oldState.channelId === createChannel) return;
    if(oldState.channel.parentID !== client.channels.cache.get(createChannel).parentID) return;
    if(oldState.channel.members.size === 0) oldState.channel.delete();
});
