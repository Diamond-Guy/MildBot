const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = function(message, args) {
    message.member.roles.cache.find(role => role.name === "Shot(Muted)")
}