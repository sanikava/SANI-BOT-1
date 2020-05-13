const Discord = require('discord.js');
const Bot = new Discord.Client();

const token = 'NzA5MTM2MjM2OTg3ODA5ODkz.XrhgnQ.19ERvpBZ_68jmkCqJXXLnFsi5YM';

Bot.on('ready', () =>{
    console.log('This bot is online!');
})

Bot.on('message', msg=>{
    if(msg.content === "1352"){
        msg.reply("HI IM SANI-BOT-1.0 NOW I DON'T HAVE SKILLS BUT SOON I WILL");
    }
})



Bot.on('message', msg=>{
    if(msg.content === "hi"){
        msg.reply("HI IM SANI-BOT-1.0 WHATSUP ");
    }
})




Bot.on('message', msg=>{
    if(msg.content === "HI"){
        msg.reply("HI IM SANI-BOT-1.0 WHATSUP ");
    }
})

Bot.on('message', msg=>{
    if(msg.content === "BYE"){
        msg.reply("BYE HAVE A GOOD TIME");
    }
})



Bot.on('message', msg=>{
    if(msg.content === "bye"){
        msg.reply("BYE HAVE A GOOD TIME");
    }
})


Bot.on('message', msg=>{
    if(msg.content === "how are you"){
        msg.reply("I AM FINE AND YOU?");
    }
})

Bot.on('message', msg=>{
    if(msg.content === "HOW ARE YOU"){
        msg.reply("I AM FINE AND YOU?");
    }
})

Bot.on('message', msg=>{
    if(msg.content === "@SANI-BOT HELP"){
        msg.reply("HI I AM MADE BY BHAWANI SHANKAR MISHRA AND I MADE WITH JS LANGUAGE");
    }
})

Bot.on('message', msg=>{
    if(msg.content === "what am i"){
        msg.reply("AND I KNOWN YOU ARE NOT LIKE ME YOU ARE HUMAN LOL");
    }
})


Bot.login(token);