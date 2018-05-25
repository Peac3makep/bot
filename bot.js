const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = '!'

client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'help')) {
        message.channel.sendMessage('Ввести ХЕЛП');
     }
});

client.login('NDQ5Mjg5Mjk4NjQzMjU1Mjk3.DeiqQw.7ZoMYAvDeEOZp1GnqVD7CJ-iJzc');
