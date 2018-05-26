const Discord = require('discord.js');

const client = new Discord.Client();


client.login('NDQ5Mjg5Mjk4NjQzMjU1Mjk3.DeiqQw.7ZoMYAvDeEOZp1GnqVD7CJ-iJzc');

var prefix = '!'



// HELP
client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'help')) {
        message.channel.sendMessage('@here Ввести ХЕЛП');
     }
});


var Players=0;
var author;

// REGISTER
client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'register ' + promt(author)) && Players == 0 ) {
    var Player1= author;
    Players= 1;

    message.channel.sendMessage('Вы успешно зарегистрировались на матч');
     }
     if(message.content.startsWith(prefix + 'register ' + promt(author)) && Players == 1 ) {
    var Player2= author;
     Players= 2;
     message.channel.sendMessage('Вы успешно зарегистрировались на матч');
     }
     if(message.content.startsWith(prefix + 'register ' + promt(author) )  && Players >= 2 ) {
     message.channel.sendMessage('@here Превышено допустимое кол-во игроков, дождитесь окончания матча');
     }

});
