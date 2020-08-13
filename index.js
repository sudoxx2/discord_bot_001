const Discord = require('discord.js')

const client = new Discord.Client()

const prefix = '!'

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'ping') {
        message.channel.send('ping!')
    }
})

client.once('ready', () => {
    console.log('Nani Omeraer Shinderweee')
})

client.login('NzQyNDcxMzEyNDA4MTgyOTQ3.XzGmSw.T9SaB8cp4q3vhZb6vv394vwtpQ8')