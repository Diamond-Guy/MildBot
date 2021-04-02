const gif = require("./commands/gif.js");
const hello = require("./commands/hello.js");
const ping = require("./commands/ping.js");
const botdate = require("./commands/botdate.js");
const avatar = require("./commands/avatar.js");
const shoot = require("./commands/shoot.js");

const commands = { hello, gif, ping, botdate, avatar, shoot };

module.exports = async function(message) {
    let tokens = message.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) === "$") {
      command = command.substring(1);
      commands[command](message, tokens);
      //valid command!
      //hello, gif, ping, botdate or avatar
    }
}