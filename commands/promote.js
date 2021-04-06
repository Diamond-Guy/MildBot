const Discord = require('discord.js');

module.exports = function(message, args) {
    let role = message.guild.roles.cache.find(r => r.name === "Shot(Muted)");

    // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
    let member = message.mentions.members.first();

    // or the person who made the command: let member = message.member;


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let can_manage_chans = message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES", true);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    if (can_manage_chans === true) {
    
        // Remove a role!
        member.roles.remove(role).catch(console.error);

        //send role message
        message.channel.send(`Done, removed **${role.name}** from **${member.id}**`);
        
    } else {
        message.channel.send("**You do not have the required permissons to use this command**");
    }
}