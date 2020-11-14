const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("H Y D R A v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:pano:773309973400387594> H Y D R A Eğlence Komutları <a:pano:773309973400387594>")
.setTimestamp()
.setDescription("<a:right:772658236276342785> **s.tersyazı** = **__Bir Yazıyı Bot Ters Yazar.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.mcskin** = **__Yazdığınız ismin minecraft görünüşünü atar.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.fbi** = **__Bot FBi Gif Atar.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.aduket-çek** = **__Etiketlediğiniz kişiye aduket çekersiniz.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.token** = **__Tokenimi Öğrenmek İstemezmisin?__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.düello** = **__Düello Atarsın.__** <a:discordcuk:773715151618703403>  \n\n <a:right:772658236276342785> **s.wasted** = **__Polis tarafından yakalanırsın.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.aşk-ölç** = **__Etiketlediğiniz kişi ile aşk ölçersiniz.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.sarıl** = **__Etiketlediğiniz kullanıcıya sarılırsınız.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.öp** = **__Etiketlediğiniz kişiyi öpersiniz.__** <a:discordcuk:773715151618703403> \n\n <a:right:772658236276342785> **s.atatürk** = **__Dene ve gör... (1881-1938)__** <a:discordcuk:773715151618703403> ")
.setImage("https://cdn.discordapp.com/attachments/772651916081627150/773270077565829150/giphy.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}