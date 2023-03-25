//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const fs = require('fs');
const dotenv = require("dotenv").config();
const TelegramBot = require('node-telegram-bot-api');

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Define Bot And Admin  

const token = process.env.token;
const adminsID = [1117515898]
const bot = new TelegramBot(token, { polling: true });

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//