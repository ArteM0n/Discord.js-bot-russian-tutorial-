const Discord = require("discord.js") 
const client = new Discord.Client(); 
client.login("ВАШ ТОКЕН");

client.on("ready" , () => {   
    console.log("Я готов!");
    client.user.setStatus("online"); // Устанавливаекм статус, один из: dnd (красный), idle (оранжевывй) , online (зеленый) , invisible (нивидимка) 
    client.user.setActivity("Minecraft",{type:"STREAMING",url:"https://www.twitch.tv/destroyteamproject"}) // вместо Minecraft - пишем во что играет / слушает / смотрит / стримит бот ; вместо STREAMING можно записать WATCHING (смотрит) / LISTENING (слушает) / PLAYING (играет); Если бот стримит - тогда нужно вписать url *TWITCH* стрима , если нет - убрать этот параметр вместе с запятой перед ним
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
        var embed = new Discord.RichEmbed() 
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
        message.channel.send(embed) 
    }

})
