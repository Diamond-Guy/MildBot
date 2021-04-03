const Discord = require('discord.js');

module.exports = function(message, args) {

    let role = message.guild.roles.cache.find(r => r.name === "Shot(Muted)");

    // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
    let member = message.mentions.members.first();

    // or the person who made the command: let member = message.member;

    // Add the role!
    member.roles.add(role).catch(console.error);


    //----------------------------------------------------------------


    // // Getting all permissions for a member on a channel.
    // let perms = message.channel.permissionsFor(message.member);

    // // Checks for Manage Messages permissions.
    // let can_manage_chans = message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES", false);

    // // View permissions as an object (useful for debugging or eval)
    // message.channel.permissionsFor(message.member).serialize(false)
}