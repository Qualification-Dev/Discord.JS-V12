//now head over to your commands folder and make a file called "ping.js"
module.exports = {
    name: 'ping',
    //this is what your bot will respond to, for example this bot would respond to !ping
    execute(client, message, args) {
        //this is basically executing your command
        message.channel.send('Pong') //this is your bots response to !ping
    }
}
//lets head back to our index.js real quick