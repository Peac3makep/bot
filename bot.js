const Discord = require('discord.js');
const holybot = new Discord.Client();


holybot.login("NDUwNjE1NjAwMzAyMTI5MTUy.De88OQ.7n08MAGKj4QLdYBvpLbGx3CBvF0");


holybot.on('message', (message) => {
if(message.content == "!войти") 
   message.reply("Вы зарегистрированы. ")

})


const commando = require('discord.js-commando');
const holybot = new commando.Client();
holybot.registry.registerGroup('random', 'Random');
holybot.registrydefaults();
holybot.registry.registerCommandsIn(__dirname + "/commands");
