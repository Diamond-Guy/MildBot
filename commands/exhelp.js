/*
const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = async function(message, args) {
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
        await sentEmbed.react('1️⃣');
        await sentEmbed.react('2️⃣');
        await sentEmbed.react('3️⃣');
        const filter = (reaction, user) => (reaction.emoji.name == '1️⃣' || reaction.emoji.name == '2️⃣' || reaction.emoji.name == '3️⃣');
        const collected = await sentEmbed.awaitReactions(filter, { max: 1, time: 30000 })
            .catch(() => {
                msg.edit('No answer after 30 seconds, operation canceled.');
                return;
            });
        if(!collected) return;
        if (collected.first().emoji.name == '1️⃣') {
            console.log("1");
        }
        if (collected.first().emoji.name == '2️⃣') {
            console.log("2");
        }
        if (collected.first().emoji.name == '3️⃣') {
            console.log("3");
        }
    });
}
*/