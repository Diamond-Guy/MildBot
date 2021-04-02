const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = function(message, args) {
    const mainrole = message.member.roles.cache.find(
        role => role.name === "Shot(Muted)"
    );
    const member = message.member;
    member.roles.add(mainrole.id);
}