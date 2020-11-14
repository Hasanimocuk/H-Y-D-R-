const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("H Y D R A v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:pano:773309973400387594> H Y D R A Logo Komutları <a:pano:773309973400387594>")
 .setTimestamp()
.setDescription("<a:right:772658236276342785> **s.dinamik** = **__Dinamik logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.altın** = **__Altın logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.ejderha** = **__Ejderha logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.banner** = **__Banner logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.basit** = **__Basit logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.elmas** = **__Elmas logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.sarı** = **__Sarı logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.neonmavi** = **__Neon mavi logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.kalın** = **__Kalın logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.anime** = **__Anime yazı tipinde logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.habbo** = **__Habbo yazı tipinde logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.arrow** = **__Ok işaretli logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.green** = **__Yeşil logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.alev** = **__Alevli logo oluşturur.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.red** = **__Kırmızı logo oluşturur.__** <a:discordcuk:773715151618703403>")
.setImage("https://cdn.discordapp.com/attachments/765939662966882356/773733112723013673/giphy.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'s.logo'
}