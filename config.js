const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://github.com/Connadrek/Suhail-Md"                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348112480981";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_57_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM0LFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjExLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU5LFxuICAgICAgICA5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU4LFxuICAgICAgICA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZXNqNElnMWx4SHRXY1hxeHVycEdiWlBsNUpkVE9aTlFsbWJ2eDUvN1IzZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiem1UeTFBaEhTeW1NaUdJLWVhZ0VJd1wiLFxuICBcInBob25lSWRcIjogXCJiMWJhMmM0MC1lNWIyLTQ0MzAtOGFkMS00YWJiYjI4MmM5NzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAxNixcbiAgICAgIDQyLFxuICAgICAgMTQ0LFxuICAgICAgMjI4LFxuICAgICAgMTI0LFxuICAgICAgNDAsXG4gICAgICAyMzYsXG4gICAgICAxOTQsXG4gICAgICAxNTcsXG4gICAgICA4OCxcbiAgICAgIDE3LFxuICAgICAgMTI1LFxuICAgICAgMTY3LFxuICAgICAgMTUsXG4gICAgICA1LFxuICAgICAgNTUsXG4gICAgICAxMjYsXG4gICAgICAxMTcsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAzNSxcbiAgICAgIDE5LFxuICAgICAgMjEyLFxuICAgICAgMTE3LFxuICAgICAgMTI0LFxuICAgICAgMTg1LFxuICAgICAgMTY1LFxuICAgICAgMTc4LFxuICAgICAgNDIsXG4gICAgICAyMyxcbiAgICAgIDIxMCxcbiAgICAgIDEzMixcbiAgICAgIDEyNCxcbiAgICAgIDU4LFxuICAgICAgMTMwLFxuICAgICAgMTgzLFxuICAgICAgNjIsXG4gICAgICAxNDYsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lySCs0b0NFTk9xemJFR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU09kQWJNWUxnTmVNNTJTTlhJZkszQVBqM093bjczaGZ0Q3lwN1UwdVhpbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2aXVTdGNra2lCbmhOc1hUcmhNa0w3dndyckR6UUphMlZ5RVpKWnU3Yk9TVjJ4Wjc5T1J3ZGhMQ0p4MldlbkRGdUc1Q04vNEpNdXAvZHA5VHZVQWFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQMXYzMDFRdHloVUdVL1Nod2xIUGY5SkVHUTBlTWkwZ0VDZzBNWkI5RXBHUi93dVh5dExiLzU1VkpnZ1pPQ3dPV1JLRm5zUHd2NHppaXo0cGlsN0JEZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMTI0ODA5ODE6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMzA2NTEyMzUzMjgwOToyNkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMTI0ODA5ODE6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDY0MDIxNFxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "CONNADREK",
  ownername:process.env.OWNER_NAME|| "CONNADREK",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
