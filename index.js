const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzMyNjAyMjUwNzUyNjg4MjA4.Xw5rrQ.UVzsevff-uGCQ_KfODSYK_u_1l8';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);