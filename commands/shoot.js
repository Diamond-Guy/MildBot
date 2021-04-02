const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = function(message, args) {
    minArgs; 2,
    expectedArgs; "<Target user's @> <The role name>",
    permissions: "MANAGE_ROLES",
    callback: (message, args) => {
        const targetUser = message.mentions.users.first()
        if (!targetUser) {
            console.log("target = user")
            return
        }

        args.shift()

        const roleName = args.join(' ')
        const { guild } = message

        const role = guild.roles.cache.find((role) => {
            return role.name === roleName
        })
        if (!role) {
            message.reply(`There is no role with the name "${roleName}"`)
        }

        console.log('Made it this far')
    };
}