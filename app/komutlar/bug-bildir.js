const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
  const tamamdır = new Discord.MessageEmbed()
  .setColor("#000000")    
  .setTitle('BAŞARILI')
  .addField()
  let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Bug Bildirmek için Bir Bug Yazınız.** <a:no:772658247172620308>')
 message.channel.send(tamamdır)
    message.react('👍')
  
const embed = new Discord.MessageEmbed()
.setTitle("H Y D R A Bug Sistemi")
.setColor('BLACK')
.setDescription(`**Bug Kanalı** ${message.channel.name} \n **Bug Bildirilen Sunucu** \`${message.guild.name}\` \n **Bugu Bildiren Kullanıcı** <@${message.author.id}> \n **Bildirilen Bug :** \`${istek}\``)
client.channels.cache.get('773759385515589653').send(embed)
  
message.channel.send("Bug bildiriminiz gönderildi. <a:onays:773266899391741952>").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}
/////////////////////////////help volkan