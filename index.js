const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '안녕하세요') {
    message.reply('안녕하세요 [KR] 서버에 오신걸 환영합니다');
  }
});

client.login(token);