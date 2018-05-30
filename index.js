const Discord = require('discord.js');
const holybot = new Discord.Client();


holybot.login("NDQ5Mjg5Mjk4NjQzMjU1Mjk3.De_p3A.NYicxX4Voasl2eUk1ZdQtw4bIrc");


holybot.on('message', (message) => {
if(message.content == "!войти") 
   message.reply("Вы зарегистрированы. ")

})


const commando = require('discord.js-commando');
const holybot = new commando.Client();
holybot.registry.registerGroup('random', 'Random');
holybot.registrydefaults();
holybot.registry.registerCommandsIn(__dirname + "/commands");
