module.exports = function(message, args) {
    var date = new Date();
    console.log(date.toLocaleTimeString());
    console.log(date.toLocaleString());
    console.log(date.toLocaleDateString());
    message.channel.send(`${(date.toLocaleString())}`)
}