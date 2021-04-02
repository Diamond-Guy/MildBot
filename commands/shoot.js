module.exports = function(message, args) {
    let mutedRole = message.guid.roles.cache.find(r => r.name === "Shot(Muted)");
    member.roles.add(mutedRole).catch(console.error);
}