const Discord = require("discord.js");
const Util = require("../util/Util.js");

module.exports.run = async (bot, message, args) => {
  //

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      "<a:no:772658247172620308> **Bu komutu kullanmak için Mesajları Yönet yetkisine sahip olmalısın.**"
    );
  if (!args[0])
    return message.reply(
      "<a:no:772658247172620308> **En Az** `1 - 100` **Arasında Bir Tam Sayı Değeri Girmelisiniz.**"
    );
  message.channel.bulkDelete(args[0]).then(() => {
   const tamamdır = new Discord.MessageEmbed()
  .setColor("#000000")    
   .setThumbnail('https://cdn.discordapp.com/attachments/767544528537649193/774057334862512128/Geri-Donusum-Sembolleri-90859.gif')
  .setTitle('BAŞARILI')
  .addField(`\`${message.author.username}\` Başarıyla **\`${args[0]}\`** Mesajı Sildim <a:onays:773266899391741952>`,`H Y D R A İyi Muhabbetler Diler...`)
 message.channel.send(tamamdır)
    message.react('👍')
   
   });
};

module.exports.help = {
  name: "sil"
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sil",
  description: "",
  usage: ""
}; 
