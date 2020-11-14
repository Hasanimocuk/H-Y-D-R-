const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setTitle("Beni Sunucuna Ekle <a:kral:773266848347193425>")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=773243648610795521&scope=bot&permissions=8) \n [__**Destek Sunucusu**__](https://discord.gg/EfrKN5E)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};