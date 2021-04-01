module.exports = function(message, args) {
    message.react("🏓");
    message.channel.send('Loading data').then (async (message) =>{
        message.delete()
        message.channel.send(`🏓 | Latency is: **${Date.now() - message.createdTimestamp}ms.**`);
    })
  };