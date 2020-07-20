const Discord = require("discord.js") 
const client = new Discord.Client(); 
client.login("ВАШ ТОКЕН");

var settedChannel = "734086104164204544";

client.on("ready" , () => {   
    console.log("Я готов!");
    client.user.setStatus("online");
    client.user.setActivity("Minecraft",{type:"STREAMING" ,url:"https://www.twitch.tv/destroyteamproject"})
});

client.on("message", (message) =>{ 
    if (message.content.startsWith("приветик")){ 
        message.channel.send("ку-ку "+ message.author.username) 
    } 
    
    if (message.content === "help pls"){ 
        message.member.send("здраствуй") 
    }

    if (message.content === "hi"){ 
        if (message.author.bot) return 
        message.reply("qq") 
    }

    if(message.content.endsWith("embed")) { 
        var embed = new Discord.MessageEmbed() 
           .setTitle("пирожек") 
           .setAuthor("привет","https://cdn.discordapp.com/attachments/605693464151064577/607822241505214474/giphy_9.gif") 
           .setURL("https://discordapp.com/channels/561512048811442198/607586745269354526/607838205479485464") 
           .setDescription(`[торт](https://discordapp.com/channels/561512048811442198/607586745269354526/607838205479485464) яблоко`) 
           .setColor("#ff0000") 

           .addField( "кравать"   ,"колонка") 
           .addField( "я апельсин"   ,"клавиатура") 
           .addField( "я апельсин"   ,"клавиатура") 

           .setFooter(message.author.tag , message.author.avatarURL) 
           .setThumbnail("https://cdn.discordapp.com/attachments/605693464151064577/607822241505214474/giphy_9.gif") 
           .setImage("https://cdn.discordapp.com/attachments/605693464151064577/607822361055592452/Minecraft-slime-600x398_1541817_3917463_lrg.jpg") 
        message.channel.send(embed) // отправление сообщения
    }

    if(message.content == "другой канал"){
        client.channels.cache.get("734086104164204544").send("сообщение отправленно в другой канал.")
    }

    if(message.content == "send to new-channel"){
        client.channels.cache.find(e=>e.name == "new-channel").send("сообщение отправленно в другой канал. (по названию канала)")
    }

    if(message.content == "send to new-channel mention"){
        client.channels.cache.find(e=>e.id == settedChannelMention).send("сообщение отправленно в другой канал. (установленно по упоминанию)")
    }

    if(message.content.startsWith("setChannel 123")){
        var channelMention = message.mentions.channels.first();
        var msgArray = message.content.split(" ")
        var channel = msgArray[3-1] // 
        var channelObj = channel?client.channels.cache.find(ch=> ch.name==channel):false;
        if(channel && channelObj){
            message.channel.send("Установлен "+channel+" канал");
            settedChannel = channelObj.id;
        } else if(channelMention){
            message.channel.send("Установлен "+channelMention+" канал (по упомянанию)");
            settedChannel = channelMention.id;
        } else {
         message.channel.send("Вы не указали существующий канал!")   
        }
    }

    if(message.content == "send to channel"){
        client.channels.cache.find(e=>e.id == settedChannel).send("сообщение отправленно в другой канал!")
    }
    //new-channel

    if(message.content.startsWith("setChannel (mention)")){
        var channelMention = message.mentions.channels.first();
        if(channelMention){
            message.channel.send("Установлен "+channelMention+" канал (по упомянанию)");
            settedChannelMention = channelMention.id;
        } else { 
            message.channel.send("Вы не указали существующий канал!")   
        }
    } // settedChannelMention
})

client.on("guildMemberAdd",member=>{
    var embed = new Discord.MessageEmbed()
        .setTitle("Новый пользователь!")
        .setDescription(`Привет , ${member}`)
        .setImage(member.user.displayAvatarURL())
    client.channels.cache.get("605693464151064577").send(embed);
    member.send("Спасибо что зашел! :)");
})

client.on("guildMemberRemove",member=>{
    var embed = new Discord.MessageEmbed()
        .setTitle("Пользователь ушел!")
        .setDescription(`${member.user.tag} покинул нас!`)
        .setImage(member.user.displayAvatarURL())
    client.channels.cache.get("605693464151064577").send(embed); 
})
