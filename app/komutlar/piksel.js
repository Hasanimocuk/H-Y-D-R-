const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var figlet = require('figlet');
    figlet(args.join(' '), function (err, data) {
      if (err) {
        console.log('Bir şeyler yanlış gitti...');
        console.dir(err);
        return;
      }
      message.delete()
      const embed = new Discord.MessageEmbed()
      .setColor('000000')
      .setTitle('Yazın;')
      .setDescription('```fix\n' + data + '\n```')
      .setFooter('H Y D R A', client.user.avatarURL)
      .setTimestamp()
      message.channel.send(embed);
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['piksel'],
  permLevel: 1,
};

exports.help = {
  name: 'piksel',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
