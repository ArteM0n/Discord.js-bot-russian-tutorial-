const Discord = require("discord.js") 
const client = new Discord.Client(); 
client.login("ВАШ ТОКЕН") // ВАШ ТОКЕН 

client.on("ready" , () => {   
    console.log("Я готов!"); 
});

client.on("message", (message) =>{ 
    if (message.content.startsWith("приветик")){ 
        message.channel.send("ку-ку "+ message.author.username) 
    } 
    
    if (message.content === "help pls"){ 
        message.member.send("здраствуй") 
    }

    if (message.content === "qq"){ 
        if (message.author.bot) return 
        message.reply("qq") 
    }

    if(message.content.endsWith("embed")) { // если сообщение заканчивается на "embed" 
        var embed = new Discord.RichEmbed() // создается переменная "embed"
           .setTitle("пирожек") // заголовок
           .setAuthor("привет","https://cdn.discordapp.com/attachments/605693464151064577/607822241505214474/giphy_9.gif") // крыша сообщения
           .setURL("https://discordapp.com/channels/561512048811442198/607586745269354526/607838205479485464") // ссылка в заголовке
           .setDescription(`[торт](https://discordapp.com/channels/561512048811442198/607586745269354526/607838205479485464) яблоко`) // описание 
           .setColor("#ff0000") // цвет ленточки слева

           .addField( "кравать"   ,"колонка") // добовление поля в середину   
           .addField( "я апельсин"   ,"клавиатура") 
           .addField( "я апельсин"   ,"клавиатура") 

           .setFooter(message.author.tag , message.author.avatarURL) // подвал сообщения
           .setThumbnail("https://cdn.discordapp.com/attachments/605693464151064577/607822241505214474/giphy_9.gif") // миниатурное изображение в правом верхнем углу
           .setImage("https://cdn.discordapp.com/attachments/605693464151064577/607822361055592452/Minecraft-slime-600x398_1541817_3917463_lrg.jpg") // картинка
        message.channel.send(embed) // отправление сообщения
    }
})
