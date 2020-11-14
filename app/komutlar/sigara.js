const Discord = require('discord.js');
exports.run = function(client, message) {
 
  message.channel.send("Ne sigarası kardeşim zararlı zararlı içme bak 🚭")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yak'],
  permLevel: 0
};

exports.help = {
  name: 'sigara',
  description: 'Sigaraaaaa ',
  usage: 'sigara'
};