const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = function(message, args) {
        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${user.username}'s avatar`)
            .setImage(user.avatarURL({ dynamic: true, format: 'png', size: 1024 }));
        message.channel.send(avatarEmbed);
}