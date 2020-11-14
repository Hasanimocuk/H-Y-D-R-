const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("H Y D R A v12 sürümüyle sizlerle.")
.setTitle("<a:pano:773309973400387594> H Y D R A Moderasyon Komutları <a:pano:773309973400387594>")
 .setTimestamp()
.setDescription("<a:right:772658236276342785> **s.sil** = **__Yazdığınız miktarda mesajı siler.__** <a:discord:773309030357008406> \n\n <a:right:772658236276342785> **s.ban** = **__Etiketlediğiniz kişiyi banlarsınız.__** <a:discord:773309030357008406> \n\n <a:right:772658236276342785> **s.kick** = **__Etiketlediğiniz kişiyi atarsınız.__** <a:discord:773309030357008406> \n\n <a:right:772658236276342785> **s.duyuru** = **__Bota duyuru yaptırırsınız.__** <a:discord:773309030357008406> \n\n <a:right:772658236276342785> **s.küfür** = **__Küfür engel sistemini açarsınız.__** <a:discord:773309030357008406> \n\n <a:right:772658236276342785> **s.reklam** = **__Reklam engel sistemi açarsınız.__** <a:discord:773309030357008406> \n\n <a:right:772658236276342785> **s.slowmode** = **__Yavaş modu ayarlarsınız.__** <a:discord:773309030357008406> \n\n <a:right:772658236276342785> **s.forceban** = **__Birisine id ban atarsınız.__** <a:discord:773309030357008406> \n\n <a:right:772658236276342785> **s.unban** = **__Birisinin banını açarsınız.__** <a:discord:773309030357008406> \n\n <a:right:772658236276342785> **s.sa-as** = **__Bot biri sa dediği zaman cevap verir.__** <a:discord:773309030357008406> \n\n <a:right:772658236276342785> **s.sunucubilgi** = **__Sunucu bilgilerini görürsün.__** <a:discord:773309030357008406> \n\n <a:right:772658236276342785> **s.üyedurum** = **__Üyelerin durumlarını görürsün.__** <a:discord:773309030357008406> \n\n <a:right:772658236276342785> **s.çekiliş** = **__Çekiliş başlatırsınız.__** <a:discord:773309030357008406>")
.setImage("https://media.discordapp.net/attachments/765647475830554627/773288583825063996/giphy.gif")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}