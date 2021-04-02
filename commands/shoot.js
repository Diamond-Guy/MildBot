module.exports = function(message, args) {


    // Getting all permissions for a member on a channel.
    let perms = message.channel.permissionsFor(message.member);

    // Checks for Manage Messages permissions.
    let can_manage_chans = message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES", false);

    // View permissions as an object (useful for debugging or eval)
    message.channel.permissionsFor(message.member).serialize(false)


    let role = message.guild.roles.cache.find(role => role.name === "Shot(Muted)");
    let member = message.mentions.members.first();
    member.roles.add(role).catch(console.error);
}