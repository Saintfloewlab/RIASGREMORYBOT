//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "takundfenyere@gmail.com";
global.location = "Durban South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Capetown";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "+27 65 641 5911";
global.owner = process.env.OWNER_NUMBER |+27 65 641 5911";
global.style = process.env.STYLE || "2";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || typing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM ||group "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0pLaE15ejdpMWR3NHZqVE9CY2hFWmwyV1lsYnNvY3lyRUQ2YVZoMGRtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1RDS2g5RERaRi84N2tRanloQkkyNk01Q0lYQ1dGb1hDZXNhelZCWWdVND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQ0xEWXl4QTdmOUNKaERLWGlvaWt4czliZ0ZpcDVmeTNDZ0NMWWdyZjN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrOHVOVkNneTZCMXJ4UFN0NGsyOTR1dUFTN3E0UnByZkdUVkkrSnV5bTFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1OUjdNdXZYUGpXdGUwWHdsRlFTbE15TWlza1Q2UWw2VTg0NDZFMTNwMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1TQVhoSkZJMUxocVBLK2ZMWEl0M252SjhwSHovdW1RV2dUUXc2TmRQU3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VIWlBoZ293L2o5cVNNZVFaNlU5RWprSC91blpYQU0zRlZ4Ym5veE4yRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2V0Qlg3c2lKOVJKOVY5SStIMmdMSlZ5RDF3T1FzcE1ZMVBHcENqKzQxND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ3a0pGdER4akc5SnlkNXpBOXdleTN6Nlp6Y0N6WDQ2MlBHQVNST1NhWUROTEMwWjVGZXd3TU1LTTJ3UVM2MnFaNUU3cVlrWFZKWk1lUzB6eG5UZmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQzLCJhZHZTZWNyZXRLZXkiOiI2TW5XaWE0U2hoZitkS3R4QkNEUWVOeEtnOU5vTkV3bW9jS0tCZ1lDbXpvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPeWtkN1d3clRhT1RNV2t2dHlmYmp3IiwicGhvbmVJZCI6IjBlYjcyYjc4LTI4ZDYtNDEyYy1hYzA4LWIxMjMyMDY4ODkyYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyY1RrSjJrUlVtWTlFazBOOEpNbWpOZ28wZXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzJ3M2lSeFVxWmhHQ1BhQy9wRk82a3JidklRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJXU1czRUhHIiwibWUiOnsiaWQiOiIyNzY1NjQxNTkxMTo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdl6ZA8J2XnPCdl6HwnZen8J2XmfCdl5/wnZei8J2XmPCdl6oifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ttUXNoWVEvOGYzdFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjkzUENYTUVPcGxIeXVtVWh4QTFtOXhUNm9kRXRxNmhPRHJKSmJ6bGNEeGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5oV3hLWnFZU3BRQ3dNQnhDS0k5aGkzamdjSW14RjNuM1YxaGl5ZUNXc1JqWElyUU8yb2dpRUxSU0VKbHdXSElOc2ZEUURVNStnZGltODNhUENEcUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyWnJESHdVM0RMV01ZWXFUTC9lR3NsYmlMQi9XbkhrMXZZSkNDMVg3VVhJcnhRa3l4T3JkWlpiUkg3U1JISlMrQWVYSjdwZjFWa3dJemxzYlpQYkhnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjU2NDE1OTExOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmR6d2x6QkRxWlI4cnBsSWNRTlp2Y1UrcUhSTGF1b1RnNnlTVzg1WEE4WiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzcyMDcyMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFObFQifQ==
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME ||SAINT tech,
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {alive 
  fs.unwatchFile(file);token
  console.log(`Update'${alive__filename}'`);
  delete require.cache[file];
  require(file);
}); alive 
