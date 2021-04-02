const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = function(message, args) {





    var role = member.guild.roles.cache.find(role => role.name === "Shot(Muted)");
    let member = message.mentions.members.first();
    member.roles.add(role);
}