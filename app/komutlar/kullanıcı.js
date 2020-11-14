const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("H Y D R A v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:pano:773309973400387594> H Y D R A Kullanıcı Komutları <a:pano:773309973400387594>")
 .setTimestamp()
.setDescription("<a:right:772658236276342785> **s.avatar** = **__Avatarınıza bakarsınız.__**  <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.yetkilerim** = **__Yetkilerini görürsün.__**  <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.profil** = **__Profilini görürsün.__**  <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.sunucuresmi** = **__Sunucu resmini gösterir.__**  <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.ping** = **__Botun Pingine Bakarsın.__**  <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.id** = **__Birisinin id'sine Bakarsın.__**  <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.davet** = **__Beni Sunucuna Ekle.__**  <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.botbilgi** = **__Bot istatistiklerini görürsünüz.__**  <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.bug-bildir** = **__Yazdığınız bug'u yapımcılarıma bildirir.__**  <a:discordcuk:773715151618703403>")
.setImage("https://cdn.discordapp.com/attachments/772651916081627150/774776704325255188/asdasdasdad.gif")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}