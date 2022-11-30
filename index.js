const Discord = require("discord.js");
const Client = new Discord.Client
const prefix = "/";
Client.on('ready', () => {
    console.log('Bot is online.')
});

Client.on('message', (Message) => {
    if(!Message.content.startsWith(prefix)) return;
    if(Message.content.startsWith(prefix + "hello")){
        Message.channel.send("Hello.")
    }
});

Client.login("<Token Here>");