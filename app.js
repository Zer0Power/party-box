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
       
    }
    else {
        bot.sendMessage(message.chat.id, '❌ You are not authorized to perform this action.');
    }
});
