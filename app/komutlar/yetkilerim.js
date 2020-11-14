const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = "<a:onays:773266899391741952>"
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = "<a:no:772658247172620308>"
    
    //Denetim kaydı
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:onays:773266899391741952>"
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:no:772658247172620308>"
    
    //Sunucuyu yönet
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:onays:773266899391741952>"
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:no:772658247172620308>"
    
    //Rolleri yönet
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:onays:773266899391741952>"
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:no:772658247172620308>"
    
    //Kanalları yönet
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:onays:773266899391741952>"
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:no:772658247172620308>"
    
    //üyeleri at
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:onays:773266899391741952>"
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:no:772658247172620308>"
    
    //üyeleri yasakla
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:onays:773266899391741952>"
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:no:772658247172620308>"
    
    //mesajları yönet
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:onays:773266899391741952>"
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:no:772658247172620308>"
    
    //kullanıcı adlarını yönet
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:onays:773266899391741952>"
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:no:772658247172620308>"
    
    //emojileri yönet
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:onays:773266899391741952>"
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:no:772658247172620308>"
    
    //webhookları yönet
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:onays:773266899391741952>"
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:no:772658247172620308>"
     const embed = new Discord.MessageEmbed()
  .setColor('BLACK')
    .setDescription(` ${x} **__Yönetici__** \n\n${x2} **__Denetim Kaydını Görüntüle__**\n\n ${x3} **__Sunucuyu Yönet__** \n\n${x4} **__Rolleri Yönet__** \n\n${x5} **__Kanalları Yönet__** \n\n${x6} **__Üyeleri At__** \n\n${x7} **__Üyeleri Yasakla__** \n\n${x8} **__Mesajları Yönet__** \n\n${x9} **__Kullanıcı Adlarını Yönet__** \n\n${x10} **__Emojileri Yönet__** \n\n${x11} **__Webhook'ları Yönet__**`);
 msg.channel.send(embed);

  
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilerim'],
  permLevel: 0,
    kategori: "kullanıcı"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};