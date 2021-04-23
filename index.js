const Discord = require("discord.js")
require('dotenv').config()
const bot = new Discord.Client()

bot.on('message', function (message){
    if (message.content === 'salut'){
        message.channel.send('Salut tu vas bien ?!')
    }
})

bot.on('guildMemberAdd', function (member){
    member.createDM().then (function(channel){
       return channel.send('Bienvenue' + member.displayName)
    }).catch(console.error)
})

bot.login(process.env.BOT_TOKEN);