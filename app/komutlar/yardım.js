const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("H Y D R A v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:pano:773309973400387594> H Y D R A'in yardım menüsüne hoşgeldin! <a:pano:773309973400387594>")
.setTimestamp()
.setDescription("<a:squidwarddance:773262989272547379> **s.eğlence** = **__Eğlence komutlarını görüntülersiniz.__** <a:discordcuk:773715151618703403> \n\n<a:alaarm:773264882295504896> **s.moderasyon** = **__Moderasyon komutlarını görüntülersiniz.__** <a:discordcuk:773715151618703403> \n\n <a:kral:773266848347193425> **s.kullanıcı** = **__Kullanıcı komutlarını görüntülersiniz.__** <a:discordcuk:773715151618703403> \n\n <a:blue:773267581267345428> **s.logo** = **__Logo komutlarını görüntülersiniz.__** <a:discordcuk:773715151618703403>")
.setImage("https://cdn.discordapp.com/attachments/765647475830554627/773896717992329256/giphy.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}