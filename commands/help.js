const Discord = require('discord.js');

module.exports = function(message, args) {
    const helpEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

    message.channel.send(helpEmbed).then(sentEmbed => {
        sentEmbed.react("🖥")
        sentEmbed.react("💿")
        sentEmbed.react("📡")
        sentEmbed.react("⏱")
        sentEmbed.react("🏡")
        sentEmbed.react("❌")

    const filter = (reaction, user) => {
        return ['🖥', '💿', '📡', '⏱', '🏡', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    sentEmbed.awaitReactions(filter, { max: 100, time: 60000 }).then(collected => {

            const homeReaction = collected.first();
    
            if (homeReaction.emoji.name === '🖥') {
                console.log('you reacted with a dekstop emoji.')
            } else if (homeReaction.emoji.name === '💿') {
                console.log('you reacted with a cd emoji.')
            } else if (homeReaction.emoji.name === '📡') {
                console.log('you reacted with a dish emoji.')
            } else if (homeReaction.emoji.name === '⏱') {
                console.log('you reacted with a stopwatch emoji.')
            } else if (homeReaction.emoji.name === '🏡') {
                console.log('you reacted with a house emoji.')
            } else if (homeReaction.emoji.name === '❌') {
                console.log('you reacted with a red X emoji.')
            }
        })
    })

    // const getEmoji = emojiName => client.emoji.cache.find(emoji => emoji.name === emojiName)

    // const emojis = {
    //     desktop: 'desktop',
    //     cd: 'cd',
    //     satellite: 'satellite',
    //     stopwatch: 'stopwatch',
    //     house_with_garden: 'house_with_garden',
    // }

    // const reactions = []

    // for (const key in emojis) {
    //     const emoji = getEmoji(key)
    //     reactions.push(emoji)
    // }
}