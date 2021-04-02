module.exports = function(message, args) {
    let role = message.guild.roles.cache.find(r => r.name === "Shot(Muted)");
    let member = message.mentions.members.first();
    member.roles.add(role).catch(console.error);
}