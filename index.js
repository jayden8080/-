const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzMyNjAyMjUwNzUyNjg4MjA4.Xw2_Aw.O9P2nYi8Jge3XYokQbQu2VOQWAE';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '안녕하세요') {
    message.reply('어서오세요');
  }
});

client.login(token);