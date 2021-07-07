const Discord = require('discord.js');
const bot = new Discord.Client();

let PREFIX = '!';

bot.on('ready', () =>{
    console.log('this bot is online!');
});

bot.on('message', msg => {
    if(msg.content === PREFIX +'tue'){
        msg.reply('Use of application Programs Sec 6   9 a.m. - 11 a.m. MeetingID: 933 9449 9020 Passcode: 630535                   Use of application Programs Sec 7   12 p.m. - 2 p.m. MeetingID: 998 5398 4344 Passcode:161903');
    }
});

bot.on('message', msg => {
    if(msg.content === PREFIX + 'mon'){
        msg.reply('Life Skills Sec 3   16 p.m. - 18.55 p.m.                 MeetingID: 941 6511 1044 Passcode: 656855                    Digital literacy Sec 3   1 p.m. - 3 p.m.                                           เรียนใน MS ไปดูโปรเเกรมเองนะ');
    }
});

bot.on('message', msg => {
    if(msg.content === PREFIX + 'wed'){
        msg.reply('Calculus Sec 1&2 12.50 p.m. - 15.30 p.m. link: https://teams.microsoft.com/l/meetup-join/19:w7Im6xJqBbycd9hslHo0hgYlCMKfXqH8JdJ-A-oJE9g1@thread.tacv2/1625636907455?context=%7B%22Tid%22:%226dace1b9-a4db-41e8-adc1-a86cb033f78d%22,%22Oid%22:%22ef30ce27-2f94-4045-9db4-1282e9e05e39%22%7D');
    }
});

bot.on('message', msg => {
    if(msg.content === PREFIX + 'thu'){
        msg.reply('English for Communication Sec 11 9 a.m. - 12 a.m. MeetingID: 972 4615 0086 Passcode: 727330                   English for Communication Sec 12 1 p.m. - 4 p.m.             MeetingID: 935 7523 4318 Passcode: 388576');
    }
});

bot.on('message', msg =>{
    if(msg.content === PREFIX + 'fri'){
        msg.reply('คือเรียนมากไปปะนายอะ **ไปนอนนะวันนี้ไม่มีเรียน** ฝันดีๆ');
    }
});

bot.on('message', msg => {
    if(msg.content === PREFIX + 'sat'){
        msg.reply('Physics Sec 2 8.30 a.m. - 12 p.m. MeetingID: 727 535 6206 Passcode: teacherNP');
    }
});

bot.on('message', msg =>{
    if(msg.content === PREFIX + 'sun'){
        msg.reply('วันครอบครัวนะยังจะเรียนอีกหรอ **ไปนอนนะวันนี้ไม่มีเรียน** ฝันดีๆ');
    }
});

bot.on('message', msg => {
    if(msg.content === 'repeatbot ใช้ภาษาอะไรอะ'){
        msg.reply('javascript ครับ');
    }
});

bot.on('message', msg => {
    if(msg.content === PREFIX + 'backupfile'){
        msg.react('ใน E:/Earth/back up file Discord bot ครับ');
    }
});

bot.on('message', msg => {
    if(msg.content === PREFIX + 'aboutbot'){
        msg.reply('ตอนนี้บอทออนไลน์ 24/7 ใน HeroKu ครับตอนอัปเดต command ใหม่กรุณาไป ส่งไฟล์การเเก้ไขใน GitHud => commit => Push เเล้ว reset ระบบในเว็ป https://www.heroku.com ด้วยนะครับ โดยกดที่ More => run console เเล้วพิมพ์ node . ครับ ถ้ามีข้อความตอบกลับมาว่า This bot is online คือเส็จเเล้วครับ');
    }
});

bot.login(process.env.token);