const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** <a:pano:773309973400387594>`)
  const linqo = `https://dummyimage.com/600x600/eb0949/000000&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("BLACK")
  .setImage(linqo)
  .setFooter('Basit Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'basit',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'basit <yazı>'
}