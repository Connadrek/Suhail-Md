const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,colombia."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348141958422" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348141958422";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348141958422,2348141958422";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2348141958422";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348141958422,2348141958422";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "CONNADREK",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "CONNADREK",
  ownername:process.env.OWNER_NAME|| "CONNADREK",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_57_02_19_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQUI1REF2RVo5REN6NGtCUUZaa0hQdFZQaDZURFVZRXlWVHRTamFPOHkyMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlEwRURZdi9oK01MY1lMbHBGbXhlMWNJRmJ6QTEvVGQyU3VvUzhpTStUejA9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV0RBY09rRWh3eGYvanBPL0R0aTNnT25VMis4L2hadk5jRldrc1VJbDIxdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlQwTGtLUklxTnZuY2R4Y0twVUwwSXduM2FNQ2prOURLclV0eHVBY1NXM0U9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicUJocDQ3SEo4U2ZrL1FNTnlsSC9xa0FHa21RSnZwTERYMUN6SzZkOWZucz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlZvbVluU0lmejQ3TFRkTEw5eENrcDhHYmVUNTJyaXF6ZWZXeDZkTldCd289XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJFRyszbHo3RUZjUjQxUStlc0RBZEVPYXhoR0drV1hiSnE2VTN2dXBKTW53PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMW84S1QrdUI2TEcyYjZ5b3RPNy85bE1naEU1WnFCTXAvYi9mNEtRSnkwND1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIzVHFFQ2t2QitIZ3VKdWtua2ZoUzU3QmZKUTRIZEdNMWZsQkhEN0E2NTd4ZlRFZmtXeWczRkNDSGorYWo2eHpxVVlSbUtQTjVTcFlVQk9lMi90RWhBQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NDAsXCJhZHZTZWNyZXRLZXlcIjpcIkxPU091aWx3SkVsclZycnNiYTMvQXoyeVp4TW5vM0JtOXRIYjNRT051dWs9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyMzQ4MTQxOTU4NDIyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjgzNkZCRUY0QzMxRkZBQzhFRDA2MjFGOEU1NEREOENDXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDgzNDAyNDR9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0ODE0MTk1ODQyMkBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI3RjdDM0IyRTVGOURBRjM2RTQ1NzcxQzMyNEZFNEY2RVwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzA4MzQwMjQ0fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwidFZ3djhHUlFUQmVtZGlYdS0yd1p1UVwiLFwicGhvbmVJZFwiOlwiZGIwNDc0OWItNzcxYi00MTdkLThmZmYtNDVmZmQ5MzU5MDQ2XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJKS1M3am5jN3l1UnRmbWVUZlozWWZwSlpnaXM9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjQvOVcxNFkyTFNKNURWYjBTNjFRTENPelB5MD1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTys4MzhvRkVJem96SzRHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIlZJUXNKZlA5RktObnluLzlLVHA1TUhOQUlWM3Z0aDNHUkpJQTc5NkdNZzg9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJRY29xSU12ZDMvQVEwcXd0aHlwK3VwTjltRnNlSGUwZ0VwblVXcU1XRUVNbHQ3N3RnMTJPdWNyN1JoQ0pwczFMZWJ2a2lvRzdXZnFRaWpoZ1orTHdEdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImZwMUJpTHNNNW5ScUVtWjFSTm0vaVVHZ1NvdFBrUk5nS3JhdElrSlQzbkx6OXNXOXY0dU5MMEppbTlQZStQNWtJQytCc05WMTAwbFl4cmVQdE5tVEFRPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ4MTQxOTU4NDIyOjJAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcIuqngeC8umNvbm5hZHJla+C8u+qnglwiLFwibGlkXCI6XCIxMzk1Mzk2Mjg3MjQyNzk6MkBsaWRcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyMzQ4MTQxOTU4NDIyOjJAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCVlNFTENYei9SU2paOHAvL1NrNmVUQnpRQ0ZkNzdZZHhrU1NBTy9laGpJUFwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDgzNDAyNDIsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBQzA5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzA3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNUZuckFxQ0RYdkR0UDBiTFRnWDhBVzlrVWFMbjJSYlZIOXZYaWxBcDhEOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDk4OTMwNzk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDMDguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKbEtvWHRJVlNxczRKOUxrVUlGYVU5TTVIOTA3T0doYS9hT3VpcTB6b2s4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0OTg5MzA3OTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDgzNDAyMDA1NTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDMDkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0WEFGOFo2N0N6SnJsVnFxUnBUSGZYUDVZM3JGQm5nYWZ4TWFsUEZKWHo0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0OTg5MzA3OTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwODM0MDI0NDY0MFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
