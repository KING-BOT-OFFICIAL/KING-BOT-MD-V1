const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
    VERSION: 'V 1.0.0 PUBLIC',
    MENU: process.env.MENU_CMD=== undefined ? 'menu' : process.env.MENU_CMD,
    SESSION: process.env.SESSION_NAME === undefined ? 'session' : process.env.SESSION_NAME,
    OWN_NUMBER: process.env.OWNER_NUMBER === undefined ? '94729352830' : process.env.OWN_NUMBER,
    OWN_NAME: process.env.OWNER_NAME === undefined ? 'ШHłТΞ HΛϾКΞЯS' : process.env.OWN_NAME,
    BOT_NAME: process.env.BOT_NAME === undefined ? '[🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] - ᎷᎠ' : process.env.BOT_NAME,
    ST_PKG: process.env.STICKER_PACKAGE === undefined ? '94729352830' : process.env.ST_PKG,
    SD: process.env.SONG_DOWNLOAD === undefined ? 's d' : process.env.SONG_DOWNLOAD,
    SU: process.env.SONG_UPLOAD === undefined ? 's u' : process.env.SONG_UPLOAD,
    VD: process.env.VIDEO_DOWNLOAD === undefined ? 'v d' : process.env.VIDEO_DOWNLOAD,
    VU: process.env.VIDEO_UPLOAD === undefined ? 'v u' : process.env.VIDEO_UPLOAD,
};


 