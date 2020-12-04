//Hello everyone! I Forgot to record the beginning of this video with me installing discord.js and stuff so lets do this
//Go into your terminal and type
//run both of those and then you can get started
const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client()

const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file=> file.endsWith('.js'));

client.once('ready', () => {
    console.log(`${client.user.tag} is ready`) //this is what your bot will say in the terminal upon start up
}) //right here it will say "const file of commands" switch that to commandFiles
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on('message', async message => {
//this is saying if the command does not start with your prefix or if a bot sent it  your bot will do nothing
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ + /)
    const commandName = args.shift().toLowerCase();

//this is basically saying that if you run a command without it being a command in your folder, your bot will do nothing
    if(!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    try{
        command.execute(client, message, args); //this is saying that its gonna try to execute your command but if there is a error it will say There was a error ERROR: ${error}
    }catch(error){
        console.log(error);
        message.reply(`There was a error ERROR: ${error}`)
    }
})
//now to log your bot online you will need to do
client.login(token);

//now we can do our first command!

//now that our bot it on, lets go to discord

//now we can run node index.js