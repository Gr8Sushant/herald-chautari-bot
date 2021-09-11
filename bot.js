



const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ">";

const fs = require('fs');



client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

// client.mCommands = new Discord.Collection();

// const musicFiles = fs.readdirSync('./music/').filter(file => file.endsWith('.js'))
// for (const musicFile of musicFiles){
//     const mCommand = require(`./music/${musicFile}`);

//     client.mCommands.set(mCommand.name, mCommand)
// }

client.on('ready', () => {
    console.log('Bot Online')
    //client.commands.get('ping').execute(message);
    client.user.setActivity("with your mom")
    
   
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){    /* Strict operator  Type must be same too*/ 
        client.commands.get('ping').execute(message, args);
    } else if (command === 'av'){    
        client.commands.get('av').execute(message, args);
    }

})





const key = require('./key.json');



client.login((key['CLIENT-ID']));