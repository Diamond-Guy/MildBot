const Discord = require('discord.js');

module.exports = function(message, args) {
    let role = message.guild.roles.cache.find(r => r.name === "Shot(Muted)");

    // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
    let member = message.mentions.members.first();

    // or the person who made the command: let member = message.member;

    // Remove a role!
    member.roles.remove(role).catch(console.error);


    //----------------------------------------------------------------


    message.channel.send(`Done, removed **${role.name}** from **${member.id}**`);
}