module.exports = function(message, args) {
    let mutedRole = message.guid.roles.cache.find(r => r.name === "Shot(Muted)");
    let member = message.mentions.members.first();
    member.roles.add(mutedRole).catch(console.error);
}