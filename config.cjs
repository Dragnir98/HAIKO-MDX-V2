

// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "HAIKO~MDX~DNwhhSRC#RSrsuUHwr3SwF8n0v-APeEVPrGK9SqSC3VgulBIZICA",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'false' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'false : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'false : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false : false,
   /*auto block only for 221 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false : false,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'false' : false,
  CHATBOT: process.env.CHATBOT !== undefined ? process.env.CHATBOT === 'true' : false,
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
ANTI_LINK: process.env.ANTI_LINK !== undefined ? process.env.ANTI_LINK === 'true' : true, // Control if Antilink is on or off
  ACTION: delete,warn,kick , // The action (delete, warn, kick) selected for Antilink
  WARNINGS: {PA FÈL YN DEZYÈM FWA}, // Object to keep track of warnings for users (for warn action)
  MODE: process.env.MODE || "PRIVATE",
  OWNER_NAME: process.env.OWNER_NAME || "© MR AFRIKEN",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "50932844372",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'False : false, 
};


module.exports = config;

