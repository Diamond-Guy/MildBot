const gif = require("./commands/gif.js");
const hello = require("./commands/hello.js");
const ping = require("./commands/ping.js");
const botdate = require("./commands/botdate.js");
const avatar = require("./commands/avatar.js");
const shoot = require("./commands/shoot.js");
const promote = require("./commands/promote.js");
const help = require("./commands/help.js");
const exhelp = require("./commands/exhelp.js");
const kitty_review = require("./commands/kitty_review.js");

const commands = { hello, gif, ping, botdate, avatar, shoot, promote, help, exhelp, kitty_review };

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