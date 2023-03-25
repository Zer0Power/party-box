//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Define Bot And Admin  

const token = process.env.token;
const adminsID = [1117515898]
const bot = new TelegramBot(token, { polling: true });

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
// Message Event 

bot.on('message', async (message) => {

    // Ignore messages that are more than 2 minutes old
    const currentTime = Math.floor(Date.now() / 1000);
    const messageTime = message.date;
    const ageInSeconds = currentTime - messageTime;
    const maxAgeInSeconds = 2 * 60; // 2 minutes
    if (ageInSeconds > maxAgeInSeconds) {
        return;
    }


    // Check if the user is an admin or not
    if (adminsID.includes(message.chat.id)) {

        if (message.audio) {

            bot.sendMessage(message.chat.id, `📫 File ${message.audio.title} recieved , download started!`)

            //Define Path and File Name
            const fileId = message.audio.file_id;
            const fileSize = message.audio.file_size;
            const filePath = `./musics/${message.audio.file_name}`;


            if (fileSize > 50 * 1024 * 1024) { // check if file is too big
                bot.sendMessage(message.chat.id, `❌ Sorry, the file is too big to be sent.`);
            } else {
               // bot.downloadFile(fileId, './musics/').then(() => {
                    const fileStream = fs.createWriteStream(filePath);
                    bot.getFileStream(fileId).pipe(fileStream);
                    fileStream.on('finish', () => {
                        console.log(`File ${fileId} saved to ${filePath}`);
                        bot.sendMessage(message.chat.id, `📥 File ${message.audio.title} saved to server!`);
                    //});
                });
            }
        } else {

            bot.sendMessage(message.chat.id, `I'm sorry, I don't understand what you're saying.`);

        }


    }
    else {
        bot.sendMessage(message.chat.id, `❌ You are not authorized to perform this action.\n Your ID : ${message.chat.id}`);
    }
});
