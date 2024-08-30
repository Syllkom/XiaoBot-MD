process.on('uncaughtException', console.error)
require('./settings')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const cron = require('node-cron')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const cheerio = require('cheerio');
const { promisify } = require("util")
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const uploadImage = require('./lib/uploadImage')
const { URL_REGEX } = require('@whiskeysockets/baileys')
const { fileTypeFromBuffer } = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const path = require('path')
const jimp = require('jimp')
const content = JSON.stringify(m.message)
const isQuotedViewonce = m.quoted ? content.includes('viewOnceMessage') ? true : false : true
const { youtubedl, youtubedl2 } = require('@bochilteam/scraper-sosmed')
const moment = require('moment-timezone')
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const { exec, spawn, execSync } = require("child_process")
const { addExif } = require('./lib/exif')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, generateProfilePicture, getGroupAdmins, Coins, shorturl, enumGetKey, sort, toNumber, randomNumber } = require('./lib/myfunc')
const { mediafireDl } = require('./lib/mediafire.js')
///datos curiosos
const { getRandomMessage } = require('./lib/datos/sabiasq')
global.getRandomMessage = getRandomMessage
const { getRandomNakanoMikuMessage } = require('./lib/datos/nakanomiku')
global.getRandomNakanoMikuMessage = getRandomNakanoMikuMessage
////////IMAGENES 
const { getMENUpngLinks } = require('./imagenes/menuIMG/MENUpng');
global.MENUpngSendMessage = getMENUpngLinks

const { getMikuNakanoIconLinks } = require('./imagenes/iconos/mikunakanoicon.js');
global.MikuNakanoIconSendMessage = getMikuNakanoIconLinks;

//edit nostálgico & sad?
const { getEditAnimeLinks } = require('./imagenes/edits/editanime.js');
global.EditAnimeSendMessage = getEditAnimeLinks

//edit phonk anime 
const { getEditAnimePhonkLinks } = require('./imagenes/editphonk/editphonk.js');
global.EditAnimePhonkSendMessage = getEditAnimePhonkLinks

const { TelegraPH } = require("./lib/TelegraPH")
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const antilink2 = JSON.parse(fs.readFileSync('./lib/antilink2.json'))
const { ssweb, tiktok, remini, styletext } = require("./lib/scraper")
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')

//DOWNLOAD 
const { tiktokDl, ytMp4, ytMp3, Ytdl } = require('./lib/YouTubeDl');
const { wallpaper } = require('./lib/wallpaper');
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
module.exports = conn = async (conn, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

 async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: conn.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'}
conn.ev.emit('messages.upsert', msg)}
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ''
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
const Styles = (text, style = 1) => {
var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
};
var replacer = [];
xStr.map((v, i) =>
replacer.push({
original: v,
convert: yStr[style].split('')[i]
})
);
var str = text.toLowerCase().split('');
var output = [];
str.map((v) => {
const find = replacer.find((x) => x.original == v);
find ? output.push(find.convert) : output.push(v);
});
return output.join('');
};
const pushname = m.pushName || "No Name"
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await conn.decodeJid(conn.user.id)
const isRegistered = checkRegisteredUser(m.sender)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isAudio = (type == 'audioMessage')
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
const chat = m.isGroup?[m.chat] : false
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const qtod = m.quoted? "true":"false"
//================== [ TIEMPO ] ==================//
const fecha = moment.tz('America/Lima').format('dddd, DD MMMM YYYY')
const time = moment(Date.now()).tz('America/Lima').locale('id').format('HH:mm:ss z')
const tanggal2 = moment.tz('America/Lima').format('DD/MM/YY')
const wita = moment.tz('America/Lima').format('HH : mm : ss')
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
const time2 = moment().tz('America/Lima').format('HH:mm:ss');
if (time2 < "23:59:00") {
    var timeLATAM = `Buenas noches ${pushname} 🌙`;
}
if (time2 < "19:00:00") {
    var timeLATAM = `Buenas tardes ${pushname} 🌆`;
}
if (time2 < "18:00:00") {
    var timeLATAM = `Buenas tardes ${pushname} 🌅`;
}
if (time2 < "15:00:00") {
    var timeLATAM = `Buenos días ${pushname} 🏙️`;
}
if (time2 < "11:00:00") {
    var timeLATAM = `Buenos días ${pushname} 🌄`;
}
if (time2 < "05:00:00") {
    var timeLATAM = `Buenas noches ${pushname} 🌉`;
}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
const onlygp = () => {
conn.sendMessage(m.chat, {
    text: `*⚠️ Acceso denegado ⚠️*

Autor: ${ownername}
Bot: ${botname}

El bot se encuentra en modo "Solo grupo", no Puedes utilizarlo en privado.`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: ``,
        body: "Powered by @Syllkom",
        thumbnailUrl: thumbnail,
        sourceUrl: "",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   }   
// FUNCTION MONO SPACE FONT
function monospace(string) {
return '```' + string + '```'
}

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
const komReplyS = (teks, mentions = []) => {
    conn.sendMessage(m.chat, {
        text: teks,
        mentions: mentions,
        contextInfo: {
            mentionedJid: mentions,
            externalAdReply: {
                showAdAttribution: true,
                containsAutoReply: true,
                title: `${groupMetadata.subject}`,
                body: `Powered by @Syllkom`,
                previewType: "PHOTO",
                thumbnailUrl: ``,
                thumbnail: fs.readFileSync(`./imagenes/gp.png`),
                sourceUrl: syllkom
            }
        }
    }, { quoted: kom });
};
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
async function loading () {
var leni = [
"Cargando.",
"Cargando. .",
"Cargando. . .",
"Cargando.",
"Cargando. .",
"Cargando. . .",
]
let { key } = await conn.sendMessage(from, {text: '*Cargando*'},  { quoted: kom })

for (let i = 0; i < leni.length; i++) {
await sleep(100)
await conn.sendMessage(from, {text: leni[i], edit: key }, { quoted: kom });
}
}
// function reply kom
const cap = 'KOM';
let ppuser;
try {
    ppuser = await conn.profilePictureUrl(anu.id, 'image');
} catch {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
}
const kom = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: `status@broadcast` } : {})
    },
    message: {
        "contactMessage": {
            'displayName': `${pushname}`,
            'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;LoynCream,;;;\nFN:Nada\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            'jpegThumbnail': ppuser,
            thumbnail: ppuser,
            sendEphemeral: true
        }
    }
};

const reply = (texto) => {
conn.sendMessage(from, { text: texto, contextInfo:{"externalAdReply": {showAdAttribution: true, title: `XiaoBot-MD`,body: `Powered by @Syllkom`, previewType: "PHOTO",thumbnail: fs.readFileSync('./imagenes/icon.png'),sourceUrl: syllkom}}}, { quoted: kom })}

///este reply se envía con un documento, si quieres activalo ✅
/*const reply = async (texto) => {
    let profile;
    try {
        profile = await conn.profilePictureUrl(m.sender, 'image');
    } catch (e) {
        profile = global.fake.anonim;
    }
    const setv = pickRandom(global.listv);
    await conn.sendMessage(m.chat, {
        document: global.fake.docs,
        fileName: timeLATAM,
        mimetype: pickRandom(global.fake.listfakedocs),
        fileLength: '100000000000000',
        pageCount: '774',
        caption: texto,
        contextInfo: {
            mentionedJid: [m.sender, '0@s.whatsapp.net', global.owner[0] + '@s.whatsapp.net'],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: `12031853846998@newsletter`,
                serverMessageId: null,
                newsletterName: '🎐 XiaoBot-MD - All Menu'
            },
            externalAdReply: {
                showAdAttribution: true,
                title: `XiaoBot-MD`,
                body: "Powered by @Syllkom",
                thumbnail: fs.readFileSync('./imagenes/icon.png'),
                mediaType: 1,
                previewType: 0,
                renderLargerThumbnail: false,
                mediaUrl: syllkom,
                sourceUrl: syllkom
            }
        }
    }, { quoted: kom });
};*/
/////////////FAKE PDF
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}
//////////FUNCIÓN HENTAI SEARCH
async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get("https://hentai.tv/?s=" + search).then(async ({ data }) => {
      let $ = cheerio.load(data)
      let result = {}
      let res = []
      result.coder = 'rem-comp'
      result.result = res
      result.warning = "It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp"

      $('div.flex > div.crsl-slde').each(function (a, b) {
        let _thumbnail = $(b).find('img').attr('src')
        let _title = $(b).find('a').text().trim()
        let _views = $(b).find('p').text().trim()
        let _url = $(b).find('a').attr('href')
        let resultados = { thumbnail: _thumbnail, title: _title, views: _views, url: _url }
        res.push(resultados)
      })

      resolve(result)
    }).catch(err => {
      console.log(err)
    })
  })
}

// GAME bendera 
if ((from in bandera)) {
let { pregunta, respuesta, presente, tiempo } = bandera[from]
if (body.toLowerCase().includes(respuesta)) {
await reply(`Felicitaciones, tu respuesta es correcta\n\nPregunta: ${monospace(pregunta)}\nRespuesta: ${respuesta}\n`);
//users[sender].balance += presente
clearTimeout(tiempo);
delete bandera[from];
}
}
//=================================================//
//antilink kick
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, *_Esta función es para eliminar a las personas que envían enlaces de otros grupos_*`)
let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return conn.sendMessage(m.chat, {text: `\`\`\`*「Enlace detectado」*\`\`\`\n\nBarūawā no te eliminará porque es un enlace del grupo.`})
if (isAdmins) return conn.sendMessage(m.chat, {text: `\`\`\`*「 Enlace detectado 」*\`\`\`\n\nEl administrador ha enviado un enlace, el administrador es libre de enviar cualquier enlace.`})
if (isCreator) return conn.sendMessage(m.chat, {text: `\`\`\`*「 Enlace detectado 」*\`\`\`\n\n El propietario ha enviado un enlace, es libre de hacerlo.`})
await conn.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
conn.sendMessage(from, {text:`\`\`\`*「 Enlace detectado 」*\`\`\`\n\n@${m.sender.split("@")[0]} El anti enlaces esta activo, adiós.`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
//antilink2 hps link
if (m.isGroup && antilink2.includes(m.chat) && isBotAdmins) {
if (!isAdmins && !isCreator && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Lo siento, eliminé tu mensaje porque el administrador/propietario del bot activó la función *Antilink2* para eliminar los enlaces.`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync('./imagenes/alerta.png'), title: "｢ ENLACE DETECTADO ｣", previewType: "PHOTO"}}}, {quoted: kom})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
if (!conn.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
conn.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m XiaoBot-MD \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'DE', chalk.blue(pushname), 'EN', chalk.yellow(groupName ? groupName : 'Chat privado' ), 'args :', chalk.white(args.length))
            }
///===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: conn.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
conn.ev.emit('messages.upsert', msg)
}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await conn.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.data.users[m.sender] = {
name: pushname,
balance: balanceUser,
premium: false,
afkTime: -1,
afkReason: '',
claim: 1,
}
} catch (err) {
console.log(err)
}

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (autobio) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
await conn.updateProfileStatus(`${botname} • Activo durante ${uptime} • Modo: ${conn.public ? 'Publico' : 'Propio'}`).catch(_ => _)
}
if (autoread) {
conn.readMessages([m.key])
}
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
autoread: false
}

// ONLY GP
if (command) {      
if (!isCreator && grup_only && !m.isGroup)
return onlygp()
}
if (m?.isGroup && chat) {
if (!('welcome' in chat)) chat.welcome = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (m?.isGroup) global.db.data.chats[m.chat] = {
sWelcome: '',
welcome: true,
clearTime: 0
} 
//================== [ ALL - FUNCIÓN ] ==================//
const totalCMD = () =>{
            var mytext = fs.readFileSync("./kom.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`*¡No lo etiquetes!*
El esta AFK ${reason ? 'por motivos ' + reason : 'sin motivos'}
Durante ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Ha regresado de AFK ${user.afkReason ? ' razón ' + user.afkReason : ''}
Durante ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Hay un error:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Se produjo un error al escribir el archivo:', err);
                return;
            }

            console.log(`El texto del case '${caseNameToRemove}' se ha eliminado del archivo.`);
        });
    });
}


const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
switch(command) {
case 'allmenu': case 'menu': case 'comandos': case 'menucompleto': case 'help': case 'menú': {
    await conn.sendMessage(m.chat, { react: { text: `⏳`, key: m.key }})
    global.sabiasq = global.getRandomMessage()
    const MENUpng = global.MENUpngSendMessage();

    const responses = MENUpng;
    const response = responses[Math.floor(Math.random() * responses.length)]

    const imageMessage = await prepareWAMessageMedia({ image: { url: response } }, { upload: conn.waUploadToServer });

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                        mentionedJid: [m.sender],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: "XiaoBot-MD",
                            body: `User: ${pushname}`,
                            mediaUrl: syllkom,
                            thumbnail: fs.readFileSync('./imagenes/icon.png'),
                            mediaType: 1
                        }
                    },
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `╭◯ *𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*
╷ *Bot multiprefijo*
╷ *Usuario:* @${m.sender.split('@')[0]}
╷ *Activo:* ${runtime(process.uptime())}
╷ *Usuarios:* ${Object.keys(db.data.users).length}
╷ *Versión:* 1.0.3
╷ *Creador:* @Syllkom
╰◯

*• ¿𝗦𝗮𝗯𝗶𝗮𝘀 𝗾𝘂𝗲‌?* ${sabiasq}
${readmore}

╭◯ *𝗚 𝗔 𝗠 𝗘 𝗦*
╷ registrar
╷ vaquero
╷ carreraanimales
╷ adivina-bandera
╷ slot1 *(fácil)*
╷ slot2 *(difícil)*
╷ minecraft (apk)
╰◯

╭◯ *𝗗 𝗢 𝗪 𝗟 𝗢 𝗔 𝗗*
╷ tiktok
╷ remini
╷ gitclone
╷ facebook
╷ mediafire
╷ instagram
╷ ytmp4
╷ ytmp3
╷ copilot *<texto>*
╰◯

╭◯ *𝗦 𝗘 𝗔 𝗥 𝗖 𝗛*
╷ yts
╷ spotify
╷ tiktoksearch
╷ wikipedia
╷ pinterest
╰◯

╭◯ *𝗖 𝗢 𝗡 𝗩 𝗘 𝗥 𝗧 𝗘 𝗥*
╷ sticker
╷ ssweb
╷ emojimix *<😌+🤤>*
╷ tinyurl
╷ convertir anime
╷ remini *<quoted/img>*
╷ tourl
╷ style (name)
╰◯

╭◯ *𝗔 𝗨 𝗗 𝗜 𝗢*
╷ bajo
╷ estropeado
╷ profundo
╷ earrape
╷ rápido
╷ gordo
╷ nightcore
╷ reverse
╷ robot
╷ slow
╷ smooth
╷ ardilla
╰◯

╭◯ *𝗔 𝗡 𝗜 𝗠 𝗘*
╷ edit anime
╷ edit phonk
╷ danbooru
╷ yandere
╷ loli
╷ logo neko *<texto>*
╷ husbando
╷ kitsune
╷ megumin
╷ neko
╷ shinobu
╷ waifu
╷ pareja (perfil)
╷ nakano miku icon 
╷ avatar anime (logo)
╷ wallpaper (name)
╰◯

╭◯ *𝗥 𝗔 𝗡 𝗗 𝗢 𝗠*
╷ afk
╷ listcase
╷ owner
╷ ping
╷ top
╷ script
╷ café
╷ rsound
╷ infobot
╰◯

╭◯ *𝗚 𝗥 𝗨 𝗣 𝗢*
╷ antilink *<on/off>*
╷ antilink2 *<on/off>*
╷ add *<número/link>*
╷ deltt
╷ kick
╷ hidetag
╷ invocar
╷ enlace del grupo 
╷ restablecer enlace
╷ enviar enlace
╷ promote *<quoted/@user>*
╷ demote *<quoted/@adm>*
╷ grupo *<abrir/cerrar>*
╷ inspect *<enlace gp>*
╷ tagme
╰◯

╭◯ *𝗡 𝗦 𝗙 𝗪  +  𝟭 𝟴*
╷ hneko
╷ hwaifu
╷ xvid
╷ hentaisearch *<texto>*
╰◯

╭◯ *𝗢 𝗪 𝗡 𝗘 𝗥*
╷ setppgruop
╷ setppbot
╷ delppbot
╷ añadir case 
╷ restart
╷ get case
╷ del case
╷ bcgp
╷ listregis
╷ public
╷ self
╷ join
╰◯`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: `Powered By @Syllkom`
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: '',
                        hasMediaAttachment: true,
                        imageMessage: imageMessage.imageMessage
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "cta_copy",
                                buttonParamsJson: `{\"display_text\":\"🤔 ¿Sabías que?\",\"id\":\"123456789\",\"copy_code\":\"${sabiasq}\"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { userJid: m.sender, quoted: kom });
    
    await conn.sendMessage(m.chat, { react: { text: `📚`, key: m.key }})
    await conn.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'mediafire': {
	if (args.length == 0) return reply(`Donde esta el enlace?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`El enlace que proporcionaste no es válido.`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 10000) return reply('Vaya, el archivo es demasiado grande...')
	const result = `╭◯ *𝗠 𝗘 𝗗 𝗜 𝗔 𝗙 𝗜 𝗥 𝗘*
╵ *Nombre:* ${baby1[0].nama}
╵ *Tamaño:*${baby1[0].size}
╵ *Type:* ${baby1[0].mime}
╰◯`
reply(`${result}`)
conn.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'danbooru': {
let user = global.db.data.users[m.sender]    
  async function DanbooruRandom() {
    try {
      let response = await axios.get('https://danbooru.donmai.us/posts.json')
      let results = response.data

      if (!Array.isArray(results) || results.length === 0) {
        throw new Error('No se encontraron imágenes')
      }

      let randomImage = results[Math.floor(Math.random() * results.length)]
      let imageUrl = randomImage.url || randomImage.sample_url || randomImage.file_url

      if (!imageUrl) {
        throw new Error('URL de la imagen no encontrada')
      }

      return { status: 200, imageUrl }
    } catch (error) {
      console.error('Error:', error)
      return { status: 500, error: error.message }
    }
  }

  async function sendRandomDanbooruImage(m) {
    try {
      let response = await DanbooruRandom()
      if (response.status !== 200) {
        throw new Error(response.error)
      }

      let imageUrl = response.imageUrl

      conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: '' }, { quoted: kom })
    } catch (e) {
      reply(e.message)
    }
  }

  sendRandomDanbooruImage(m)
}
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'bug3':
if (!isCreator) return reply(mess.owner)
const message7 = {
        interactiveMessage: {
            body: { text: 'test 1' },
            header: {
                //title: 'test 2',
                hasMediaAttachment: false
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "galaxy_message",
                        buttonParamsJson: JSON.stringify({
                            mode: "published",
                            flow_message_version: 3,
                            flow_token: "232909,179339",
                            flow_id: "409674138644027",
                            flow_cta: "CONTINUAR",
                            flow_action: "navigate",
                            flow_action_payload: {
                                screen: "ORIGIN_INPUT",
                                data: {
                                    init_values: {
                                        dummy: "dummy"
                                    },
                                    error_messages: {
                                        dummy: "dummy"
                                    },
                                    origin_label: "🚏 LOCAL DE ORIGEM?",
                                    origin_helper: "Ex: Brasília, São Paulo...",
                                    finish_label: "Pesquisar"
                                }
                            }
                        })
                    }
                ],
                messageParamsJson: ''
            }
        }
    }

    await conn.relayMessage(m.chat, { viewOnceMessage: { message: message7 } }, {})
    break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'yandere': {
let user = global.db.data.users[m.sender]    
  async function YandereRandom() {
    try {
      let response = await axios.get('https://yande.re/post.json?api_version=2')
      let results = response.data.posts

      if (!Array.isArray(results) || results.length === 0) {
        throw new Error('No se encontraron imágenes')
      }

      let randomImage = results[Math.floor(Math.random() * results.length)]
      let imageUrl = randomImage.jpeg_url || randomImage.sample_url || randomImage.file_url

      if (!imageUrl) {
        throw new Error('URL de la imagen no encontrada')
      }

      return { status: 200, imageUrl }
    } catch (error) {
      console.error('Error:', error)
      return { status: 500, error: error.message }
    }
  }

  async function sendRandomYandereImage(m) {
    try {
      let response = await YandereRandom()
      if (response.status !== 200) {
        throw new Error(response.error)
      }

      let imageUrl = response.imageUrl

      conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: '' }, { quoted: kom })
    } catch (e) {
      reply(e.message)
    }
  }

  sendRandomYandereImage(m)
}
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'facebook': case 'fb': case 'fbdl': case 'facebookdl': {
if (!text) return reply("Y el link?");
const facebookRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com\/)/;
if (!facebookRegex.test(text)) {
return reply("La URL que proporcionaste no es una URL de Facebook.");
}
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/", { url: text });
await conn.sendMessage(m.chat, { video: { url: data.medias[0].url }, caption: global.mess.success, fileName: `tiktok.mp4`, mimetype: 'video/mp4' })
}
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'style': {
if (!text) return reply(`Ejemplo: ${prefix + command} Syllkom`)
  let anu = await styletext(text)
  let txt = anu.map(a => `*${a.name}*\n${a.result}`).join`\n\n`
	reply(txt)
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'logo': {
    if (args.length < 1) {
        conn.sendMessage(m.chat, { 
            text: "Faltan argumentos. Uso correcto: *logo neko <nombre>*" 
        });
        break;
    }

    const firstArg = args[0].toLowerCase();

    if (firstArg === 'neko') {
        const q = args.slice(1).join(' '); 

        if (!q) {
            return conn.sendMessage(m.chat, { text: `¿Y el nombre?` });
        }

        conn.sendMessage(m.chat, { text: mess.wait });

        const imageUrl = `https://api.caliph.biz.id/api/girlneko?nama=${q}&nama2=dev&apikey=CcVXxbMw`;

        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: `Este es el logo` 
        }, { quoted: kom });
    } else {
        conn.sendMessage(m.chat, { 
            text: "Argumento incorrecto. Uso correcto: *logo neko <nombre>*" 
        });
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'megumin': {
    await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }});

    try {
        let response = await axios.get(`https://waifu.pics/api/sfw/megumin`);
        await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});

        const imageMessage = await prepareWAMessageMedia({ image: { url: response.data.url } }, { upload: conn.waUploadToServer });

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            externalAdReply: {
                                showAdAttribution: true,
                                title: "XiaoBot-MD",
                                body: `User: ${pushname}`,
                                mediaUrl: syllkom,
                                thumbnail: fs.readFileSync('./imagenes/icon.png'),
                                mediaType: 1
                            }
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: `El bot mas shidori tercermundista`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: `Powered By @Syllkom`
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: '',
                            hasMediaAttachment: true,
                            imageMessage: imageMessage.imageMessage
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: `{\"display_text\":\"Siguiente\",\"id\":\"megumin\"}`
                                }
                            ]
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: kom });

        await conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
    } catch (error) {
        console.error(error);
        await conn.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
        reply('Ocurrió un error al obtener los datos.');
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'shinobu': {
    await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }});

    try {
        let response = await axios.get(`https://waifu.pics/api/sfw/shinobu`);
        await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});

        const imageMessage = await prepareWAMessageMedia({ image: { url: response.data.url } }, { upload: conn.waUploadToServer });

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            externalAdReply: {
                                showAdAttribution: true,
                                title: "XiaoBot-MD",
                                body: `User: ${pushname}`,
                                mediaUrl: syllkom,
                                thumbnail: fs.readFileSync('./imagenes/icon.png'),
                                mediaType: 1
                            }
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: `El bot mas shidori tercermundista`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: `Powered By @Syllkom`
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: '',
                            hasMediaAttachment: true,
                            imageMessage: imageMessage.imageMessage
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: `{\"display_text\":\"Siguiente\",\"id\":\"shinobu\"}`
                                }
                            ]
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: kom });

        await conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
    } catch (error) {
        console.error(error);
        await conn.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
        reply('Ocurrió un error al obtener los datos.');
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'waifu': {
    await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }});

    try {
        let response = await axios.get(`https://waifu.pics/api/sfw/waifu`);
        await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});

        const imageMessage = await prepareWAMessageMedia({ image: { url: response.data.url } }, { upload: conn.waUploadToServer });

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            externalAdReply: {
                                showAdAttribution: true,
                                title: "XiaoBot-MD",
                                body: `User: ${pushname}`,
                                mediaUrl: syllkom,
                                thumbnail: fs.readFileSync('./imagenes/icon.png'),
                                mediaType: 1
                            }
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: `El bot mas shidori tercermundista`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: `Powered By @Syllkom`
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: '',
                            hasMediaAttachment: true,
                            imageMessage: imageMessage.imageMessage
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: `{\"display_text\":\"Siguiente\",\"id\":\"waifu\"}`
                                }
                            ]
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: kom });

        await conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
    } catch (error) {
        console.error(error);
        await conn.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
        reply('Ocurrió un error al obtener los datos.');
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'neko': {
    await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }});

    try {
        let response = await axios.get(`https://waifu.pics/api/sfw/neko`);
        await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});

        const imageMessage = await prepareWAMessageMedia({ image: { url: response.data.url } }, { upload: conn.waUploadToServer });

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            externalAdReply: {
                                showAdAttribution: true,
                                title: "XiaoBot-MD",
                                body: `User: ${pushname}`,
                                mediaUrl: syllkom,
                                thumbnail: fs.readFileSync('./imagenes/icon.png'),
                                mediaType: 1
                            }
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: `El bot mas shidori tercermundista`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: `Powered By @Syllkom`
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: '',
                            hasMediaAttachment: true,
                            imageMessage: imageMessage.imageMessage
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: `{\"display_text\":\"Siguiente\",\"id\":\"neko\"}`
                                }
                            ]
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: kom });

        await conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
    } catch (error) {
        console.error(error);
        await conn.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
        reply('Ocurrió un error al obtener los datos.');
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'husbando': case 'kitsune': {
await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }})
  let hus = await (await fetch(`https://nekos.best/api/v2/${command}`)).json();
  let ban = hus.results[0];
await conn.sendMessage(m.chat, { react: { text: `🫂`, key: m.key }})
  conn.sendMessage(m.chat, { image: { url: ban.url }, caption: 'Aqui tienes' }, { quoted: kom });
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'couple': case 'pareja': {
    let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json");
    await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }});
    let random = anu[Math.floor(Math.random() * anu.length)];
    
    async function createImage(url) {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, {
            upload: conn.waUploadToServer
        });
        return imageMessage;
    }

    let push = [];

    push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
            text: `Para el perfil del Hombre`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
            text: `Powered by @Syllkom`
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: '🖼️ *Imagen - Hombre* ♂️',
            hasMediaAttachment: true,
            imageMessage: await createImage(random.male)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
                {
                    "name": "cta_copy",
                    "buttonParamsJson": `{\"display_text\":\"Perfil para compartir\",\"id\":\"123456789\",\"copy_code\":\"Duren 🥲\"}`
                }
            ]
        })
    });

    push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
            text: `Para el perfil de la Mujer`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
            text: `Powered by @Syllkom`
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: '🖼️ *Imagen - Mujer* ♀️',
            hasMediaAttachment: true,
            imageMessage: await createImage(random.female)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
                {
                    "name": "cta_copy",
                    "buttonParamsJson": `{\"display_text\":\"Perfil para compartir\",\"id\":\"123456789\",\"copy_code\":\"Duren csm 🥲\"}`
                }
            ]
        })
    });

    const bot = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Aquí tienes las imágenes para compartir entre perfiles:`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: [
                            ...push
                        ]
                    })
                })
            }
        }
    }, {});

    await conn.relayMessage(m.chat, bot.message, {
        messageId: bot.key.id
    });

    await conn.sendMessage(m.chat, { react: { text: `💕`, key: m.key }});
}
break;
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'wikipedia': {
if (!text) reply(`Ingrese lo que quiere buscar en Wikipedia`)
   try { const link = await axios.get(`https://es.wikipedia.org/wiki/${text}`)
      const $ = cheerio.load(link.data)
      let wik = $('#firstHeading').text().trim()
      let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
      reply(`🔎 *Buscado:* ${wik}\n\n${resulw}`)} catch (e) { reply('No se han encontrado resultados ')}
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'tourl': {
    if (!/video/.test(mime) && !/image/.test(mime)) throw reply(`*Envía/Responde al Video/Imagen Con el Mensaje* ${prefix + command}`)
    if (!quoted) throw `*Envía/Responde al Video/Imagen Con el comando* ${prefix + command}`
    let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
    let media = await conn.downloadAndSaveMediaMessage(quoted)
    if (/image/.test(mime)) {
        let anu = await TelegraPh(media)
        reply(util.format(anu))
    } else if (!/image/.test(mime)) {
        let anu = await UploadFileUgu(media)
        reply(util.format(anu))
    }
    await fs.unlinkSync(media)
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'bajo': case 'estropeado': case 'profundo': case 'earrape': case 'rápido': case 'gordo': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'ardilla': {
    try {
        let set;
        if (/bajo/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';
        if (/estropeado/.test(command)) set = '-af acrusher=.1:1:64:0:log';
        if (/profundo/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';
        if (/earrape/.test(command)) set = '-af volume=12';
        if (/rápido/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
        if (/gordo/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
        if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';
        if (/reverse/.test(command)) set = '-filter_complex "areverse"';
        if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
        if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
        if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
        if (/ardilla/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';

        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(quoted);
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return reply(err);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : kom });
                fs.unlinkSync(ran);
            });
        } else {
            reply(`Responde al audio que quieres cambiar con un mensaje *${prefix + command}*`);
        }
    } catch (e) {
        reply(e);
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'coffe': case 'cafe': case 'café': {
await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }})
conn.sendMessage(from, {image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random café UwU`},{quoted:kom})
await conn.sendMessage(m.chat, { react: { text: `☕`, key: m.key }})
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'spotify': case 'spotifydl': {
if (!text) return reply(`Ejemplo: ${prefix + command} hare hare ya`);
let api = await fetchJson(`https://api.junn4.my.id/search/spotify?query=${text}`);
const resultados = `╭◯ *𝗦 𝗣 𝗢 𝗧 𝗜 𝗙 𝗬*
╷📌 *Título:* ${api.data[0].title}
╷🚀 *Duración:* ${api.data[0].duration}
╷📈 *Popular:*  ${api.data[0].popularity}
╰◯

🔗 *Enlace de la música:*
${api.data[0].url}
`
conn.sendMessage(m.chat, {text: resultados, contextInfo:
{
externalAdReply: {
title: `${api.data[0].title}`,
body: `${pushname}`,
showAdAttribution: true,
mediaType: 1,
sourceUrl: syllkom,
thumbnail: fs.readFileSync('./imagenes/Spotify.png'),
renderLargerThumbnail: true
}
}}, {quoted: kom})
const spodl = await fetchJson(`https://api.junn4.my.id/download/spotify?url=${api.data[0].url}`) 
const spoDl = spodl.data.download
conn.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `${api.data[0].title}`,
body: `${pushname}`,
thumbnail: fs.readFileSync('./imagenes/spo.png'),
sourceUrl: syllkom,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
  }
 }
}, {
quoted: kom
})
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'vaquero': {
if (!isRegistered) return reply(mess.regis)
conn.shoot = conn.shoot || { enemigos: [], disparo: [] }
if(/izquierda/i.test(text)) {
    let izquierda = [
      ["🤠", " ⬥ ", " ⬥ ", " ⬥ ", " ⬥ "],
      [" ⬥ ", "🤠", " ⬥ ", " ⬥ ", " ⬥ "],
      [" ⬥ ", " ⬥ ", "🤠", " ⬥ ", " ⬥ "],
      [" ⬥ ", " ⬥ ", " ⬥ ", "🤠", " ⬥ "],
      [" ⬥ ", " ⬥ ", " ⬥ ", " ⬥ ", "🤠"]
    ]
    if(conn.shoot.disparo.indexOf("🤠") == 0) {
      conn.shoot.disparo = izquierda[0]
    } else if(conn.shoot.disparo.indexOf("🤠") == 1) {
      conn.shoot.disparo = izquierda[0]
    } else if(conn.shoot.disparo.indexOf("🤠") == 2) {
      conn.shoot.disparo = izquierda[1]
    } else if(conn.shoot.disparo.indexOf("🤠") == 3) {
      conn.shoot.disparo = izquierda[2]
    } else if(conn.shoot.disparo.indexOf("🤠") == 4) {
      conn.shoot.disparo = izquierda[3]
    }
    let texto = `🤠 Vaquero persiguiendo criminales 🥷\n\n`
      texto += `Tu territorio:\n${conn.shoot.disparo.join(" ")}\n`
      texto += `Territorio de los criminales:\n${conn.shoot.enemigos.join(" ")}\n`
      texto += `Ejemplo: ${prefix + command} derecha o ${prefix + command} izquierda para moverte a la derecha/izquierda y ${prefix + command} disparar para disparar`
    if(conn.shoot.enemigos.indexOf("🥷") === conn.shoot.disparo.indexOf("🤠")) return reply(texto)
    return reply(texto)
  } else if(/derecha/i.test(text)) {
    let derecha = [
      ["🤠", " ⬥ ", " ⬥ ", " ⬥ ", " ⬥ "],
      [" ⬥ ", "🤠", " ⬥ ", " ⬥ ", " ⬥ "],
      [" ⬥ ", " ⬥ ", "🤠", " ⬥ ", " ⬥ "],
      [" ⬥ ", " ⬥ ", " ⬥ ", "🤠", " ⬥ "],
      [" ⬥ ", " ⬥ ", " ⬥ ", " ⬥ ", "🤠"]
    ]
    if(conn.shoot.disparo.indexOf("🤠") == 0) {
      conn.shoot.disparo = derecha[1]
    } else if(conn.shoot.disparo.indexOf("🤠") == 1) {
      conn.shoot.disparo = derecha[2]
    } else if(conn.shoot.disparo.indexOf("🤠") == 2) {
      conn.shoot.disparo = derecha[3]
    } else if(conn.shoot.disparo.indexOf("🤠") == 3) {
      conn.shoot.disparo = derecha[4]
    } else if(conn.shoot.disparo.indexOf("🤠") == 4) {
      conn.shoot.disparo = derecha[4]
    }
    let texto = `🤠 Vaquero persiguiendo criminales 🥷\n\n`
      texto += `Tu territorio:\n${conn.shoot.disparo.join(" ")}\n`
      texto += `Territorio de los criminales:\n${conn.shoot.enemigos.join(" ")}\n`
      texto += `Ejemplo: ${prefix + command} derecha o ${prefix + command} izquierda para moverte a la derecha/izquierda y ${prefix + command} disparar para disparar`
    if(conn.shoot.enemigos.indexOf("🥷") === conn.shoot.disparo.indexOf("🤠")) return reply(texto)
    return reply(texto)
  } else if(/disparar/i.test(text)) {
    if(conn.shoot.disparo.indexOf("🤠") == conn.shoot.enemigos.indexOf("🥷")) {
      conn.shoot = {}
      conn.sendTextWithMentions(m.chat, `🎉 ¡Felicidades! ¡Has logrado perseguir a los criminales! 🎉`, m)
    }
  } else {
   let randEnemigos = [
      ["🥷", " ⬥ ", " ⬥ ", " ⬥ ", " ⬥ "],
      [" ⬥ ", "🥷", " ⬥ ", " ⬥ ", " ⬥ "],
      [" ⬥ ", " ⬥ ", "🥷", " ⬥ ", " ⬥ "],
      [" ⬥ ", " ⬥ ", " ⬥ ", "🥷", " ⬥ "],
      [" ⬥ ", " ⬥ ", " ⬥ ", " ⬥ ", "🥷"]
    ]
   let randYo = [
      ["🤠", " ⬥ ", " ⬥ ", " ⬥ ", " ⬥ "],
      [" ⬥ ", "🤠", " ⬥ ", " ⬥ ", " ⬥ "],
      [" ⬥ ", " ⬥ ", "🤠", " ⬥ ", " ⬥ "],
      [" ⬥ ", " ⬥ ", " ⬥ ", "🤠", " ⬥ "],
      [" ⬥ ", " ⬥ ", " ⬥ ", " ⬥ ", "🤠"]
    ]
    let enemigos = pickRandom(randEnemigos)
    let yo = pickRandom(randYo)
    conn.shoot.enemigos = enemigos
    conn.shoot.disparo = yo
    let texto = `🤠 Vaquero persiguiendo criminales 🥷\n\n`
      texto += `Tu territorio:\n${conn.shoot.disparo.join(" ")}\n`
      texto += `Territorio de los criminales:\n${conn.shoot.enemigos.join(" ")}\n`
      texto += `Ejemplo: ${prefix + command} derecha o ${prefix + command} izquierda para moverte a la derecha/izquierda y ${prefix + command} disparar para disparar`
    if(conn.shoot.enemigos.indexOf("🥷") === conn.shoot.disparo.indexOf("🤠")) return reply(texto)
    return reply(texto)
  }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'carreraanimales': {
if (!isRegistered) return reply(mess.regis)
  const animales = ['🐢', '🐇', '🐎', '🐌'];
  conn.race = { jugador: '🐢', posiciones: animales.slice() };

  reply(`Elige tu animal para la carrera: 🐢, 🐇, 🐎, 🐌 usando el comando ${prefix}Animal *<animal>*`);
} break;
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'adivina-bandera':
if (!isRegistered) return reply(mess.regis)
if (!global.game) return reply(`Active botsetting primero ingresando el comando *.botsetting* y luego vote`) 
if (from in bandera) return reply('Aún quedan juegos que no se han completado');
var { pregunta, respuesta } = pickRandom(JSON.parse(fs.readFileSync('./juegos/bandera.json')));
console.log('Respuesta: ' + respuesta)
await reply(`*JUEGO ADIVINA LA BANDERA*\n\nPregunta: ${pregunta}\nPista: ${monospace(respuesta.replace(/[b|c|d|f|g|h|j|k|l|m|n|p | q|r|s|t|v|w|x|y|z]/gi, '-'))}\nTiempo: ${gametiempo} segundos`)
bandera[from] = {
pregunta: pregunta,
respuesta: respuesta.toLowerCase(),
tiempo: setTimeout(function () {
if (bandera[from]) reply(`¡Se acabó el tiempo!\n\nLa respuesta a la pregunta:\n${monospace(pregunta)}\n\nEs: ${monospace(respuesta)}`);
delete bandera[from];
}, gametiempo * 600)
} 
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case "slot1": {
    const japSlot = [
        '🍣 🍣 🍣',
        '🍘 🍘 🍘',
        '🍥 🍥 🍥',
        '🍘 🍣 🍥',
        '🍣 🍥 🍘',
        '🍥 🍣 🍘',
        '🍥 🍘 🍣',
        '🍥 🍣 🍣',
        '🍣 🍘 🍥',
        '🍘 🍣 🍘',
        '🍣 🍣 🍘',
        '🍘 🍘 🍥',
        '🍘 🍥 🍥',
        '🍘 🍣 🍣',
        '🍥 🍥 🍣',
        '🍥 🍘 🍥',
        '🍣 🍥 🍥'
    ];

    const resultado = japSlot[Math.floor(Math.random() * japSlot.length)];

    let slot = `*🎰 VIRTUAL SLOT 🎰*\n\n🍘 🍥 🍣\n${resultado}\n🍥 🍣 🍘\n\n📌 *Nota:*\n_Si obtienes 3 del mismo emoji_\n_Significa que ganas_\n\n_Ejemplo : 🍣 🍣 🍣_`;

    reply(slot);
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'slot2': {
    const comidas = ['🍣', '🍥', '🍘', '🍡', '🍢', '🍱', '🍜', '🍙'];

    let rueda1 = [comidas[Math.floor(Math.random() * comidas.length)], comidas[Math.floor(Math.random() * comidas.length)], comidas[Math.floor(Math.random() * comidas.length)]];
    let rueda2 = [comidas[Math.floor(Math.random() * comidas.length)], comidas[Math.floor(Math.random() * comidas.length)], comidas[Math.floor(Math.random() * comidas.length)]];
    let rueda3 = [comidas[Math.floor(Math.random() * comidas.length)], comidas[Math.floor(Math.random() * comidas.length)], comidas[Math.floor(Math.random() * comidas.length)]];

    let texto = `🎰 ┃ *Resultado:*\n\n┏                          ┓\n   ${rueda1[0]} ┃ ${rueda1[1]} ┃ ${rueda1[2]}\n   ━━━━━━━━━━\n   ${rueda2[0]} ┃ ${rueda2[1]} ┃ ${rueda2[2]}\n   ━━━━━━━━━━\n   ${rueda3[0]} ┃ ${rueda3[1]} ┃ ${rueda3[2]}\n┗                          ┛\n\n`;

    if ((rueda1[0] === rueda2[0] && rueda2[0] === rueda3[0]) || (rueda1[1] === rueda2[1] && rueda2[1] === rueda3[1]) || (rueda1[2] === rueda2[2] && rueda2[2] === rueda3[2])) {
        texto += "🎉 *¡Felicidades!* Obtuviste tres emojis iguales. *Ganaste*.";
    } else {
        texto += "• Las comidas japonesas del centro son diferentes. *Perdiste*.";
    }

    reply(texto);
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'animal': {
if (!isRegistered) return reply(mess.regis)
  const animal = text.trim();
  if (!conn.race || !conn.race.posiciones.includes(animal)) return reply('¡Inicia un juego con el comando carreraAnimales primero y elige un animal válido!');

  conn.race.jugador = animal;
  reply(`¡Has elegido ${animal}! La carrera comenzará...`);
  
  setTimeout(() => {
    conn.race.posiciones.sort(() => Math.random() - 0.5);
    const posicionJugador = conn.race.posiciones.indexOf(conn.race.jugador) + 1;
    reply(`La carrera ha terminado.\nPosiciones: ${conn.race.posiciones.join(' ')}\nTu posición: ${posicionJugador}`);
    conn.race = null;
  }, 3000);
} break;
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'hentaisearch':
if (!text) throw reply ('*Incorrecto*, por favor ingrese la consulta')
reply(mess.wait)
let searchResults = await searchHentai(text)
var busqueda = searchResults.result.map((v, i) => `*${i + 1}.* ${v.title}
👀 • *Vistas:* ${v.views}
🔗 • *Link:* ${v.url}`).join('\n')
let randomThumbnail
if (searchResults.result.length > 0) {
let randomIndex = Math.floor(Math.random() * searchResults.result.length)
randomThumbnail = searchResults.result[randomIndex].thumbnail
conn.sendMessage(from, {image: {url:randomThumbnail}, caption:busqueda},{quoted: kom })
} else {
elorr = '*Error*'
} break 
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'avatar': {
    if (args.length < 1) {
        return reply(`Faltan argumentos. Uso correcto: *anime avatar*`);
    }

    const firstArg = args[0].toLowerCase();

    if (firstArg === 'anime') {
        await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }});
        
        try {
            let waifudd = await axios.get('https://nekos.life/api/v2/img/avatar');
            await conn.sendMessage(m.chat, { 
                image: { url: waifudd.data.url }, 
                caption: 'Aquí tienes tu avatar de anime' 
            }, { quoted: kom });

            await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
        } catch (err) {
            return reply('¡Error al obtener el avatar de anime!');
        }
    } else {
        return reply(`Argumento incorrecto. Uso correcto: *anime avatar*`);
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'xvid': case 'xvideo': {
const { xvid } = require('./lib/scraper.js')
let anu = await xvid()
let result912 = anu[Math.floor(Math.random(), anu.length)]
conn.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `📌 • *Título:* ${result912.title}\n🗃️ • *Categoría:* ${result912.category}\n📺 • *Formato:* ${result912.type}\n👀 • *Views:* ${result912.views_count}\n🔄 • *Share:* ${result912.share_count}\n🔗 • *Fuente:* ${result912.link}\n📥 • *Media Url:* ${result912.video_1}` }, { quoted: kom })
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'git': case 'gitclone': {
if (!args[0]) return reply(`Y el link?\nEjemplo: \n${prefix ? prefix : '.'}${command} https://github.com/Syllkom/XiaoBot-MD`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalido!`)
await reply(mess.wait)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
cha.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: kom }).catch((err) => reply(err))
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'ping': {
conn.sendMessage(m.chat, { react: { text: `💥`, key: m.key }})
const start = Date.now();
const responses = [
"Pong!! 🎸",
"Pong! Rompe la barrera del sonido ✈️",
"Pong!! Despierta a los vecinos 😱",
"Pong! Llueve confeti 🎊",
"Pong!! Se escucha en el espacio 🚀",
"💥 Pong! Gana el campeonato 🏆",
"Pong!! Convoca a un ejército de pingüinos 🐧",
"Pong! Vibra como un terremoto 🌪️",
"Pong!! Enciende fuegos artificiales 🎆",
"Pong! 🚁",
"Pong!! Toca una sinfonía 🎼",
"Pong! Despierta a un dragón 🐉",
"Pong!! Explota como un volcán 🌋",
"Pong! Resuena en las estrellas 🌠",
"Pong!! Brilla como el sol ☀️",
"Pong! Atrae a los extraterrestres 👽",
"Pong!! Baila bajo la lluvia 🌧️",
"Pong! Hace un agujero negro 🕳️",
"Pong!! Conquista Marte 🚀",
"Pong! Surfea una ola gigante 🌊",
"Pong! ⚡",
"Pong!!! 🔥",
"Pong! Golpea a 𝟷𝟾𝟶 kmh 🚀",
"Pong!! Derriba una pared 🧱",
"🏓 Pong!! Lo envía a la luna 🌕",
"Pong! 🌪️",
"Pong!!! 🎉",
"Pong! Responde con un contraataque a 𝟸𝟶𝟶 kmh 🏎️",
"Pong!! Despierta a los muertos 👻",
"🎯 Pong!! Acierta en el blanco 🎯",
"Pong! 🚀",
"Pong!!! 🌟",
"Pong! Golpea con fuerza de un huracán 🌪️",
"Pong!! Se escucha en todo el barrio 🏘️",
"🔊 Pong!! Hace eco por toda la ciudad 🌆",
"Pong! 🥳",
"Pong!!! 🤯",
"Pong! Causa un terremoto 🌍",
"Pong!! Destruye todo a su paso 💣",
"🌌 Pong!! Lo envía a otra dimensión 🌌"
];
const response = responses[Math.floor(Math.random() * responses.length)];
await new Promise(resolve => setTimeout(resolve, 100));

const end = Date.now();
const randomFactor = Math.random();
const timeTaken = ((end - start) / 1000) + randomFactor;
const speedMessage = `⚡ Tiempo de respuesta: ${timeTaken.toFixed(6)}s`;

await reply(`${response}\n${speedMessage}`);
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'copilot': {
  conn.sendMessage(m.chat, { react: { text: `💬`, key: m.key }})
  if (!text) reply(`*Y el texto?*`)
  let cop = await (await fetch(`https://itzpire.com/ai/bing-ai?model=Creative&q=${text}`)).json()
  conn.sendMessage(m.chat, {text: cop.result}, {quoted: kom})
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'sc': case 'script': {
    await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }});

    try {
        const repoUrl = 'https://api.github.com/repos/Syllkom/XiaoBot-MD';
        let response = await axios.get(repoUrl);
        const repo = response.data;

        await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});

        const formatSize = (sizeInKB) => {
            const units = ['KB', 'MB', 'GB', 'TB'];
            let size = sizeInKB;
            let unitIndex = 0;
            while (size >= 1024 && unitIndex < units.length - 1) {
                size /= 1024;
                unitIndex++;
            }
            return `${size.toFixed(2)} ${units[unitIndex]}`;
        };

        const info = {
            nombre: repo.name,
            descripcion: repo.description,
            fechaCreacion: moment(repo.created_at).format('YYYY-MM-DD HH:mm:ss'),
            fechaActualizacion: moment(repo.updated_at).format('YYYY-MM-DD HH:mm:ss'),
            estrellas: repo.stargazers_count,
            forks: repo.forks_count,
            issues: repo.open_issues_count,
            lenguaje: repo.language,
            enlace: repo.html_url,
            tamaño: formatSize(repo.size)
        };

        const mensaje = `╷ *Nombre:* ${info.nombre}
╷ *Creado:* ${info.fechaCreacion}
╷ *Actualización:* ${info.fechaActualizacion}
╷ *Estrellas:* ${info.estrellas}
╷ *Forks:* ${info.forks}
╷ *Issues abiertas:* ${info.issues}
╷ *Lenguaje principal:* ${info.lenguaje}
╷ *Tamaño:* ${info.tamaño}
╰◯

*🔗 Enlace:* ${info.enlace}
        `;

        const imageMessage = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/e2aa067396a671d7be44e.jpg' } }, { upload: conn.waUploadToServer });

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            externalAdReply: {
                                showAdAttribution: true,
                                title: "XiaoBot-MD",
                                body: `User: ${pushname}`,
                                mediaUrl: syllkom,
                                thumbnail: fs.readFileSync('./imagenes/icon.png'),
                                mediaType: 1
                            }
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: mensaje
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: `${info.descripcion}`
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: '╭◯ *𝗫𝗶𝗮𝗼𝗕𝗼𝘁-𝗠𝗗 (𝗖𝗮𝘀𝗲)*',
                            hasMediaAttachment: true,
                            imageMessage: imageMessage.imageMessage
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "cta_copy",
                                    buttonParamsJson: `{\"display_text\":\"Copiar Enlace\",\"id\":\"123456789\",\"copy_code\":\"${info.enlace}\"}`
                                }
                            ]
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: kom });

        await conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
    } catch (error) {
        console.error(error);
        await conn.sendMessage(m.chat, { react: { text: `❌`, key: m.key }});
        reply('Ocurrió un error al obtener los datos del repositorio.');
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'tinyurl': {    
let user = global.db.data.users[m.sender]       
 if (!text) return reply(`Ejemplo: ${prefix + command} URL`)
await loading();
    const longUrl = args[0];
    axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(text)}`)
        .then(response => {
            const shortUrl = response.data;
            reply(`*URL:* ${shortUrl}`);
        })
        .catch(error => {
            console.error(error);
            reply('Se produjo un error al generar el enlace corto');
        });
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'pinterest': case 'pin': {
  await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }})
  if (!text) return reply(`*Ejemplo:* ${prefix + command} Nakano miku icon`);
  
  await loading();
  
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: conn.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);
  
  shuffleArray(res);
  let ult = res.splice(0, 20);
  let i = 1;
  
  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Imagen - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: `Powered by @Syllkom`
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: '🔎 Resultados de búsqueda:',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Fuente","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }
  
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Aqui tienes las imágenes de tu búsqueda:*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Powered by @Syllkom`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});
  
  await conn.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  })
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'instagram': case 'ig': case 'igvideo': case 'igimagen': case 'igvid': case 'igimg': {
    if (!text) return reply(`Debes proporcionar la URL de cualquier video, publicación, carrete o imagen de Instagram.`);
    
    let res;
    try {
        res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`);
    } catch (error) {
        return reply(`Error: ${error.message}`);
    }
    
    let api_response = await res.json();
    if (!api_response || !api_response.data) {
        return reply(`No se encontró ningún video o imagen o respuesta no válida de la API`);
    }
    
    const mediaArray = api_response.data;
    
    async function createMedia(url, mediaType) {
        let media;
        if (mediaType === 'video') {
            media = await generateWAMessageContent({
                video: { url }
            }, {
                upload: conn.waUploadToServer
            });
        } else if (mediaType === 'image') {
            media = await generateWAMessageContent({
                image: { url }
            }, {
                upload: conn.waUploadToServer
            });
        }
        return media;
    }
    
    let push = [];
    
    for (const mediaData of mediaArray) {
        const mediaType = mediaData.type;
        const mediaURL = mediaData.url_download;
        
        push.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `Aqui tienes ${pushname}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: `Powered by @Syllkom`
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: mediaType.toUpperCase(),
                hasMediaAttachment: true,
                ...(await createMedia(mediaURL, mediaType))
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                    {
                        "name": "cta_url",
                        "buttonParamsJson": `{"display_text":"Ver en Instagram","url":"${text}"}`
                    }
                ]
            })
        });
    }
    
    const bot = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Aqui tienes ${pushname}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: [
                            ...push
                        ]
                    })
                })
            }
        }
    }, {});
    
    await conn.relayMessage(m.chat, bot.message, {
        messageId: bot.key.id
    });
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'convertir': {
    if (args.length < 1) {
        conn.sendMessage(m.chat, { 
            text: "Faltan argumentos. Uso correcto: *convertir anime*" 
        });
        break;
    }

    const firstArg = args[0].toLowerCase();

    if (firstArg === 'anime') {
        if (!m.quoted) return conn.sendMessage(m.chat, { text: "¿Y la foto?" });
        
        const mime = m.quoted.mimetype || '';
        if (!/image/.test(mime)) {
            return conn.sendMessage(m.chat, { 
                text: `Envía una imagen y responde con ${prefix + 'convertir anime'}` 
            });
        }

        await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }});

        const media = await conn.downloadAndSaveMediaMessage(m.quoted);
        const anu = await TelegraPH(media);

        await conn.sendMessage(m.chat, { 
            image: { url: `https://skizo.tech/api/toanime?url=${anu}&apikey=Rustan` }, 
            caption: `*Aquí tienes ${pushname}*`
        }, { quoted: kom });

        await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
    } else {
        conn.sendMessage(m.chat, { 
            text: "Argumento incorrecto. Uso correcto: *convertir anime*" 
        });
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'reg': case 'regis': case 'registrar': {
    if (isRegistered) return reply(`*${pushname} ya te encuentras registrado!*`)
    const serialUser = createSerial(20)
    reg = `╭◯ *𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗥 𝗔 𝗗 𝗢*
╷✏️ *Nombre:* ${pushname}
╷🚩 *Estado:* Registrado ✅ 
╷🔢 *Ns:* ${serialUser}
╰◯`
    veri = m?.sender
    const imageUrl = 'https://telegra.ph/file/27bbf51cc0bf38502d1ad.png'

    if (!m.isGroup) {
        addRegisteredUser(m?.sender, pushname, serialUser)
        await conn.sendMessage(m?.chat, { image: { url: imageUrl }, caption: reg }, { quoted: kom })
    } else {
        addRegisteredUser(m?.sender, pushname, serialUser)
        await conn.sendMessage(m?.chat, { image: { url: imageUrl }, caption: reg }, { quoted: kom })
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'ss': case 'ssweb': {
const scp1 = require('./lib/myfunc') 
if (!q) return reply(`Ejemplo ${prefix+command} link`)
reply(mess.search)
let krt = await scp1.ssweb(q)
conn.sendMessage(from,{image:krt.result,caption: mess.success}, {quoted:kom})
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'minecraft': {
    let Consejos = [
        'Aprende a utilizar las redstone para crear circuitos y mecanismos complejos, como puertas automáticas, sistemas de iluminación y trampas.',
        'Utiliza granjas automáticas para obtener alimentos, materiales y experiencia de manera eficiente.',
        'Practica técnicas de construcción avanzadas, como la redstone, la pistonería y los sistemas de transporte de elementos.',
        'Experimenta con diferentes estilos de construcción y utiliza bloques decorativos y detallados para crear estructuras impresionantes.',
        'Domina las técnicas de combate, como el uso del arco, la esquiva y el bloqueo, para enfrentarte a enemigos más desafiantes y jefes.',
        'Descubre y explota las mazmorras, fortalezas y templos para obtener valiosos tesoros y desbloquear secretos del juego.',
        'Participa en eventos de velocidad y parkour para poner a prueba y mejorar tus habilidades de movimiento y salto.',
        'Domina el uso de encantamientos para mejorar tus armas, herramientas y armaduras.',
        'Participa en desafíos de supervivencia personalizados o mapas de aventuras creados por la comunidad para poner a prueba tus habilidades.',
        'Experimenta con comandos de administrador para crear efectos especiales, ajustar la dificultad del juego y personalizar tu experiencia.',
        'Construye estructuras masivas y paisajes impresionantes utilizando herramientas de modelado de terreno y programas de diseño.',
        'Participa en eventos de construcción y competencias de construcción para mostrar tus habilidades y ganar reconocimiento en la comunidad.',
        'Crea y administra tu propio servidor para jugar con amigos y crear tu propio mundo personalizado.',
        'Únete a comunidades de jugadores expertos para compartir ideas, consejos y proyectos interesantes.',
        'Participa en torneos PvP para competir contra otros jugadores y mejorar tu habilidad en el combate.',
        'Experimenta con mods y paquetes de modificaciones complejas para expandir aún más las posibilidades del juego.',
        'Domina el comercio con otros jugadores o aldeanos para obtener objetos raros y valiosos.',
        'Crea tus propios desafíos personalizados, como sobrevivir en un mundo desértico o completar ciertas tareas sin morir.',
        'Utiliza herramientas externas, como editores de inventario, para experimentar y personalizar aún más tu experiencia de juego.',
        '¡Inspira a otros jugadores compartiendo tus proyectos, tutoriales y consejos en línea!'
    ];

    const Minecraft = 'https://www.dropbox.com/scl/fi/maqciebunyqhms36nvm0y/Minecraft-1-20-12-Oficial.apk?rlkey=nhs8oxd6ahhrv7ii9el8pfyz8&dl=true';
    let RandConsejos = Consejos[Math.floor(Math.random() * Consejos.length)];
    let Mensaje = `*📌 Consejo:* ${RandConsejos}`;

    await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    try {
        await conn.sendMessage(m.chat, { 
            document: { url: Minecraft }, 
            caption: Mensaje, 
            mimetype: 'application/vnd.android.package-archive', 
            fileName: 'Minecraft 1.20.12 Oficial.apk' 
        }, { quoted: m });
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (error) {
        await conn.sendMessage(m.chat, { react: { text: '❎', key: m.key } });
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'sonidorandom': case 'rsound':
 let lop = await (await fetch('https://itzpire.com/random/sound-effect')).json()
 let nnd = lop.data
 let ranIndex = Math.floor(Math.random() * nnd.length);
 let sou = nnd[ranIndex]
 let cap = `🎲 *Titulo:* ${sou.title}\n*Enlace:* ${sou.pageLink}`
 conn.sendMessage(m.chat,{audio:{url: sou.soundLink}, mimetype: 'audio/mp4'},{ quoted: kom})
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'top': {
    const topText = text.trim();
    if (!topText) return reply('Por favor, proporciona un texto para el top. Ejemplo: .top mas jotos del grupo');
    
    const groupMetadata = await conn.groupMetadata(m.chat);
    const participants = groupMetadata.participants.map(p => p.id);

    if (participants.length < 10) return reply('No hay suficientes miembros en el grupo para generar un top 10.');

    const selectedParticipants = [];
    while (selectedParticipants.length < 10) {
        const randomIndex = Math.floor(Math.random() * participants.length);
        const participant = participants[randomIndex];
        if (!selectedParticipants.includes(participant)) {
            selectedParticipants.push(participant);
        }
    }

    let topMessage = `*🗒️ Top 10 ${topText}*\n\n`;
    selectedParticipants.forEach((participant, index) => {
        topMessage += `*${index + 1}. @${participant.split('@')[0]}*\n`;
    });

    conn.sendMessage(m.chat, { text: topMessage, mentions: selectedParticipants }, { quoted: kom });
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'owner': {
const contacto = {
"displayName": 'Mi creador',
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${global.ownername}\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:\nNo le hagas spam a mi creador\nURL;Email Owner:https://beacons.ai/syllkom\nORG: Bots Fam「Kom」\nEND:VCARD`
}
await conn.sendMessage(from, {
contacts: { contacts: [contacto] },
contextInfo:{ forwardingScore: 999, isForwarded: false, mentionedJid:[sender],
externalAdReply:{
showAdAttribution: true,
renderLargerThumbnail: true,
/*title: Styles(`Mi creador @Syllkom`),*/
title: `Mi creador @Syllkom`,
containsAutoReply: true,
mediaType: 1, 
thumbnail: fs.readFileSync('./imagenes/xiao.png'),
mediaUrl: syllkom,
sourceUrl: syllkom
}}}, { quoted: kom })
}
await conn.sendVideoAsSticker(m.chat, sticker, m, {
packname: global.ownername,
author: global.botname
})
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'sticker': case 's': {
 if (!quoted) throw reply(`Responde a un vídeo/imagen con ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsStickerAV(from, media, kom, { packname: `${pushname}`, author: `` })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximo 10 segundos!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(from, media, fcall, { packname: `${pushname}`, author: `` })
await fs.unlinkSync(encmedia)
} else {
throw reply(`Responde a un vídeo/imagen con  ${prefix + command}\nMaximo 10 segundos`)
  }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return reply(`Ejemplo: emojimix 😅+🤔`)
if (!emoji2) return reply(`Ejemplo: emojimix 😅+🤔`)
await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }})
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
     for (let res of anu.results) {
        let encmedia = await conn.sendImageAsSticker(m.chat, res.url, kom, {
         packname: `${pushname}`,
         author: ``,
         categories: res.tags
       })
       await fs.unlinkSync(encmedia)
       await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = +new Date
user.afkReason = text
reply(`💤 *${m.pushName}* Estado AFK ${text ? ': ' + text : ''}`)
}
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'cambiar': {
    if (args.length < 1) {
        conn.sendMessage(m.chat, { 
            text: "Faltan argumentos. Uso correcto:\n*1.* cambiar descripción <nuevo texto>\n*2.* cambiar nombre <nuevo texto>"
        });
        break;
    }

    const firstArg = args[0].toLowerCase();
    const text = args.slice(1).join(' '); 

    if (['descripción', 'descripcion', 'description'].includes(firstArg)) {
        if (!isCreator) return reply(mess.owner);
        if (!m.isGroup) return reply(mess.group);
        if (!isBotAdmins) return reply(mess.badm);
        if (!isAdmins) return reply(mess.admin);
        if (!text) return reply(`¿Y el texto?`);

        await conn.groupUpdateDescription(m.chat, text)
            .then((res) => reply('Descripción del grupo actualizada exitosamente.'))
            .catch((err) => reply(`Error: ${err}`));
    }
    else if (['nombre', 'name', 'nama', 'namae'].includes(firstArg)) {
        if (!m.isGroup) return reply(mess.group);
        if (!isBotAdmins) return reply(mess.badm);
        if (!isAdmins && !isCreator) return reply(mess.admin);
        if (!text) return reply(`¿Y el texto?`);

        await conn.groupUpdateSubject(m.chat, text)
            .then((res) => reply('Nombre del grupo actualizado exitosamente.'))
            .catch((err) => reply(`Error: ${err}`));
    }
    else {
        conn.sendMessage(m.chat, { 
            text: "Argumento incorrecto. Uso correcto:\n*1.* cambiar descripción <nuevo texto>\n*2.* cambiar nombre <nuevo texto>"
        });
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case "delpremium": case "delprem": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("Y el número?")
let user = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (db.data.users[user].premium == false) return reply(`*Usuario ${args[0]} no es premium!*`)
if (user in db.data.users) {
db.data.users[user].premium = false
reply("Usuario removido correctamente de status premium")
} else return reply(`Usuario ${args[0]} no registrado en la base de datos del bot`)
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'restart':
if (!isCreator) return reply('Este comando solo pude ser utilizado por @Syllkom o otros owners')
reply(`_Restarting XiaoBot-MD . . ._`)
await sleep(3000)
process.exit()
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case "antilink2": {
if (!isCreator) return reply(`*On* para activar, *off* para desactivar`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return reply('Escribe *on* para activar\nescriba *off* para desactivar')
if (args[0] === "on") {
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return m.reply("*AntilinkV2* ya se encuentra activo en éste grupo!")
if (ntilink.includes(m.chat)) {
let posi = ntilink.indexOf(m.chat)
ntilink.splice(posi, 1)
await fs.writeFileSync("./lib/antilink.json", JSON.stringify(ntilinkk))
}
antilink2.push(m.chat)
await fs.writeFileSync("./lib/antilink2.json", JSON.stringify(antilink2))
m.reply("El antilinkV2 fue activado correctamente en este grupo ✅")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return m.reply("*AntilinkV2* en este grupo aún no está activo!")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./lib/antilink2.json", JSON.stringify(antilink2))
m.reply("Se desactivó antilinkV2 para este grupo")
} else {
return reply('*On* para activar, *off* para desactivar')
 }}
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'antilink': {
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins && !isCreator) return reply(`*On* para activar, *off* para desactivar`)
if (!m.isGroup) return reply('Hazlo en grupos, estúpido!')
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return reply('Escribe *on* para activar\nescriba *off* para desactivar')
if (args[0] === "on") {
if (AntiLink) return reply('Activado ✅')
ntilink.push(from)
reply('Se activo el antilink para ese grupo')
} else if (args[0] === "off") {
if (!AntiLink) return reply('Desactivado ✅')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
reply('Se desactivo el antilink en este grupo')
} else {
reply('*On* para activar, *off* para desactivar')
  }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'tiktok': case 'tt': {
    if (!text) return reply(`Ejemplo: ${prefix + command} https://vm.tiktok.com/ZMr99gDA4/`);
    if (!text.includes('tiktok.com')) return reply('¡El enlace no pertenece a TikTok!');
    
    await conn.sendMessage(m.chat, { react: { text: '🕓', key: m.key } });
    const api = require('btch-downloader');
    
    let maximus;
    try {
        maximus = await api.ttdl(text);
    } catch (e) {
        console.log(e);
        return reply('Error al obtener la información del enlace.');
    }

    let caption = `📌 *Título:* ${maximus.title}\n🎧 *Nombre del audio:* ${maximus.title_audio}\n\nSelecciona si deseas descargar el video o el audio:`;

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: caption,
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "Powered by @Syllkom",
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        imageMessage: (await prepareWAMessageMedia({ image: { url: maximus.thumbnail } }, { upload: conn.waUploadToServer })).imageMessage,
                        title: '',
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false,
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            "name": "single_select",
                            "buttonParamsJson": JSON.stringify({
                                title: "Selecciona una opción",
                                sections: [{
                                    title: "Opciones de descarga",
                                    highlight_label: "",
                                    rows: [
                                        { header: "Descargar video", title: "Video", description: "Descargar video de TikTok", id: `${prefix}ttvid ${text}` },
                                        { header: "Descargar audio", title: "Audio", description: "Descargar audio de TikTok", id: `${prefix}ttmp3 ${text}` }
                                    ]
                                }]
                            })
                        }]
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 9999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '12031853846998@newsletter',
                            newsletterName: '🚩 XiaoBot-MD - TikTok 🐼',
                            serverMessageId: 143,
                        }
                    }
                })
            }
        }
    }, {});
    
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
} break;
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'tts': case 'tiktoksearch': case 'ttsearch': {
  if (!text) return reply('_¿Qué quieres buscar?_');
  await conn.sendMessage(m.chat, { react: { text: '🔎', key: m.key } })
  try {
    const data = await fetchJson(`https://skizo.tech/api/tiktok-search?apikey=nanogembul&keywords=${encodeURIComponent(text)}`);
    const videos = data;
    if (!videos || videos.length === 0) return reply('_No se encontró ningún video_');
    
    const randomIndex = Math.floor(Math.random() * videos.length);
    const video = videos[randomIndex];
    
    const caption = `╭◯ *𝗧 𝗜 𝗞 𝗧 𝗢 𝗞* \n╵ *Usuario:* ${video.music_info.author}\n╵ *Región:* ${video.region}\n╵ *Duración:* ${video.duration} segundos\n╵ *Likes:* ${video.digg_count}\n╵ *Comentarios:* ${video.comment_count}\n╵ *Compartidos:* ${video.share_count}\n╵ *Reproducciones:* ${video.play_count}\n╰◯\n\n${readmore}• *Título:* ${video.title}`;

    const videoMessage = {
      video: { url: video.play },
      caption: caption,
      jpegThumbnail: await getBuffer(video.cover),
      contextInfo: {
        externalAdReply: {
          title: video.title,
          body: `${video.music_info.author}`,
          mediaType: 2,
          previewType: 'PHOTO',
          thumbnail: await getBuffer(video.cover),
          showAdAttribution: true, 
          mediaUrl: video.play,
          sourceUrl: video.play
        }
      }
    };

    await conn.sendMessage(m.chat, videoMessage, { quoted: kom })
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
  } catch (error) {
    console.error(error);
    reply('_Lo siento, ocurrió un error al buscar el video de TikTok_');
  }
}
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'ttvid':
case 'tiktokvideo':
case 'ttvideo': {
    if (m.key.fromMe) return;
    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} https://vm.tiktok.com/ZMry5QshF/`);
    const api = require('btch-downloader');
    if (!args[0]) return m.reply(`¡Ingrese la URL!\nejemplo\n${prefix + command} https://vm.tiktok.com/ZMry5QshF/`);
    if (!args[0].match(/tiktok/gi)) return m.reply(`La URL que proporcionaste es *¡¡incorrecta!!!*`);
    try {
        let maximus = await api.ttdl(args[0]);
        let caption = `• *Título:* ${maximus.title}\n• *Nombre del audio:* ${maximus.title_audio}`;
        await conn.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption });
        await conn.sendFile(m.chat, maximus.audio[0], 'kom.mp3', null, m);
    } catch (e) {
        console.log(e);
        reply('Descargado ✅');
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'listregis':{
if (!isCreator) return reply(mess.owner)  
let anu =  require('./database/registered')
let teks = `*USUARIOS REGISTRADOS*:\n`
teks += `*Total:* ${anu.lenght}\n\n`
anu.map((v, i) => {
teks += `• ${i+1} •\n`
teks += `*Id:* ${v.id}\n`
teks += `*Nombre:* ${v.name}\n`
teks += `*Ns:* ${v.age}\n\n`
}).join('\n\n')
teks += `${foter2}`
reply(teks) 
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'bcgp': case 'bcgrupo': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Y el texto?\n\nEjemplo: ${prefix + command} hola`)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Envío de transmisión al chat grupal de ${anu.length}, hora de finalización ${anu.length * 1,5} segundos`)
for (let i of anu) {
await sleep(1500)
conn.sendMessage(i, {text: `${text}`}, {quoted:kom})
  }
reply(`Envío exitoso de transmisión al grupo ${anu.length}`)
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case "add":{
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('Ingresa el número que deseas agregar al grupo')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case "kick": case "ban": {
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('Ingresa el @tag del usuario a eliminar')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'edit': {
    if (args.length < 1) {
        conn.sendMessage(m.chat, { 
            text: "Faltan argumentos. ¿Qué tipo de edit prefieres?\n*edit anime* o *edit phonk*" 
        });
        break;
    }

    const firstArg = args[0].toLowerCase();
    let videoUrl;
    let captionText;
    let reactText;

    if (firstArg === 'anime') {
        reactText = `🎐`;

        const EditAnime = global.EditAnimeSendMessage();
        const responses = EditAnime;
        videoUrl = responses[Math.floor(Math.random() * responses.length)];

        captionText = `🍥 *Aquí tienes ${pushname}*`;
    } else if (firstArg === 'phonk') {
        reactText = `🧨`;

        const EditAnimePhonk = global.EditAnimePhonkSendMessage();
        const responses = EditAnimePhonk;
        videoUrl = responses[Math.floor(Math.random() * responses.length)];

        captionText = `💀 *Aquí tienes ${pushname}*`;
    } else {
        conn.sendMessage(m.chat, { 
            text: "Argumento incorrecto. Uso correcto:\n*edit anime* o *edit phonk*" 
        });
        break;
    }

    conn.sendMessage(m.chat, { react: { text: reactText, key: m.key }});

    await conn.sendMessage(m.chat, { 
        video: { url: videoUrl }, 
        caption: captionText,
        contextInfo: { quotedMessage: m.message }
    });
} break;
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'nakano': {
    if (args.length < 2) {
        conn.sendMessage(m.chat, { text: "Faltan argumentos. Uso correcto: miku <nakano> <icon>" });
        break;
    }

    const firstArg = args[0].toLowerCase();
    const secondArg = args[1].toLowerCase();

    if (firstArg === 'miku' && secondArg === 'icon') {
        conn.sendMessage(m.chat, { react: { text: '💙', key: m.key }});
        
        global.nakanomiku = global.getRandomNakanoMikuMessage();
        const MikuNakanoIcon = global.MikuNakanoIconSendMessage();
        const responses = MikuNakanoIcon;
        const response = responses[Math.floor(Math.random() * responses.length)];

        const imageMessage = await prepareWAMessageMedia({ image: { url: response } }, { upload: conn.waUploadToServer });

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            externalAdReply: {
                                showAdAttribution: true,
                                title: "TanjunBot-MD",
                                body: `User: ${pushname}`,
                                mediaUrl: syllkom,
                                thumbnail: fs.readFileSync('./imagenes/icon.png'),
                                mediaType: 1
                            }
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: `🖼️ *Icon - Miku Nakano* 💙\n\n*• ¿Sabias que?* ${nakanomiku}`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: 'Powered By @Syllkom'
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: '',
                            hasMediaAttachment: true,
                            imageMessage: imageMessage.imageMessage
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: `{\"display_text\":\"Siguiente\",\"id\":\"nakano miku icon\"}`
                                }
                            ]
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: kom });

        await conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
    } else {
        conn.sendMessage(m.chat, { text: "Combinación de argumentos incorrecta. Uso correcto: Nakano <Miku> <icon>" });
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'enlace': {
    if (args.length < 2) {
        conn.sendMessage(m.chat, { 
            text: "Faltan argumentos. Uso correcto: *enlace del grupo*"
        });
        break;
    }

    const firstArg = args[0].toLowerCase();
    const secondArg = args[1].toLowerCase();

    if (firstArg === 'del' && secondArg === 'grupo') {
        if (!isCreator) return reply(mess.owner);
        if (!m.isGroup) return reply(mess.group);
        if (!isBotAdmins) return reply(mess.badm);

        let response = await conn.groupInviteCode(m.chat);
        conn.sendMessage(m.chat, { 
            text: `https://chat.whatsapp.com/${response}\n\nEnlace del grupo: ${groupMetadata.subject}`
        }, { detectLink: true });
    } else {
        conn.sendMessage(m.chat, { 
            text: "Argumentos incorrectos. Uso correcto: *enlace del grupo*"
        });
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'group': case 'grupo': { 
    if (!m.isGroup) return reply(`Solo en grupos`);
    if (!isAdmins && !isCreator) return reply(`❗¡Este comando solo puede ser utilizado por administradores de grupo!`);
    if (!isBotAdmins) return reply(`Necesito ser admin`);

    if (args[0] === 'cerrar') {
        await conn.groupSettingUpdate(m.chat, 'announcement')
            .then((res) => reply(`*Grupo cerrado con éxito*`))
            .catch((err) => m.reply(jsonformat(err)));
    } else if (args[0] === 'abrir') {
        await conn.groupSettingUpdate(m.chat, 'not_announcement')
            .then((res) => reply(`*Grupo abierto con éxito*`))
            .catch((err) => m.reply(jsonformat(err)));
    } else {
        await conn.sendMessage(m.chat, { react: { text: `⏳`, key: m.key } });
        let text = `Seleccione una opción para cambiar la configuración del grupo`;
        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ text }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: "Powered by @Dyr_Kom" }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: ``,
                            subtitle: ownername,
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [{
                                "name": "single_select",
                                "buttonParamsJson": JSON.stringify({
                                    title: "Modo de Grupo", sections: [{ title: "Configuración del Grupo", highlight_label: "Popular", rows: [
                                        { header: "Abrir Grupo 🔓", title: "Abrir Grupo", description: "Abrir el Grupo", id: `${prefix}grupo abrir` },
                                        { header: "Cerrar Grupo 🔒", title: "Cerrar Grupo", description: "Cerrar el Grupo", id: `${prefix}grupo cerrar` }
                                    ]}]
                                })
                            }]
                        }),
                        contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '12031853846998@newsletter', newsletterName: '🔐 XiaoBot-MD - Configuración del Grupo', serverMessageId: 143 } }
                    })
                }
            }
        }, {});
        await conn.sendMessage(m.chat, { react: { text: `🔑`, key: m.key } });
        await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    }
} break;
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'tagme': {
conn.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'infobot': case 'botstatus': case 'statusbot': {
    const used = process.memoryUsage()
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
        return cpu
    })
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total
        last.speed += cpu.speed / length
        last.times.user += cpu.times.user
        last.times.nice += cpu.times.nice
        last.times.sys += cpu.times.sys
        last.times.idle += cpu.times.idle
        last.times.irq += cpu.times.irq
        return last
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    })
    let timestamp = speed()
    let latencia = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
    let respuesta = `Velocidad de Respuesta: ${latencia.toFixed(4)} segundos \n ${oldd - neww} milisegundos\n\nTiempo activo: ${runtime(process.uptime())}\n\n*💻 Info del Servidor*\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n*_Uso de Memoria de NodeJS_*\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `*_Uso Total de CPU_*\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n*_Uso de CPU por Núcleo (${cpus.length} Núcleos CPU)_*\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()

    await conn.sendMessage(m.chat, { 
        caption: respuesta,
        image: { url: 'https://telegra.ph/file/6f68167676d4c09d6bb47.jpg' }
    }, { quoted: kom })
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'inspect': case 'inspeccionar': {
    if (!text) return m.reply('¡Introduce el enlace del grupo!');
    let code = q.match(/chat.whatsapp.com\/([\w\d]*)/);
    if (code === null) return m.reply('No se detectó la URL de invitación.');
    code = code[1];

    try {
        const anu = await conn.groupGetInviteInfo(code);
        let { id, subject, owner, subjectOwner, creation, desc, descId, participants, size, descOwner } = anu;
        let par = `⛩️ *Nombre del grupo:* ${subject}\n🆔 *ID:* ${id}\n${owner ? `🖊️ *Creador:* @${owner.split('@')[0]}` : '✏️ *Creador:* -'}\n📆 *Grupo creado el:* ${new Date(creation * 1000).toLocaleString()}\n🆔 *DescID:* ${descId ? descId : '-'}\n${subjectOwner ? `✏️ *Nombre del grupo cambiado por:* @${subjectOwner.split('@')[0]}` : '✏️ *Nombre del grupo cambiado por:* -'}\n${descOwner ? `🧾 *Descripción cambiada por:* @${descOwner.split('@')[0]}` : '🧾 *Descripción cambiada por:* -'}\n\n🍣 *Descripción:* \n${desc ? desc : '-'}\n`;

        const imageUrl = 'https://telegra.ph/file/af2979d2b58278bb69ddc.jpg';

        await conn.sendMessage(m.chat, {
            image: { url: imageUrl },
            caption: par,
            mentions: [owner, subjectOwner, descOwner].filter(Boolean)
        }, { quoted: kom });
    } catch (res) {
        if (res.data == 406) return reply('¡Grupo no encontrado❗');
        if (res.data == 410) return reply('¡URL del grupo ha sido restablecida❗');
        console.error('Error al obtener información del grupo:', res);
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'play': 
case 'ytplay': 
case 'yts': 
case 'ytsearch': 
case 'youtubesearch': {
    if (!text) return reply(`Ejemplo: ${prefix + command} Illenium - Fractures「 Anime MV 」`);
    await conn.sendMessage(m.chat, { react: { text: '🕓', key: m.key } });
    
    const res = await yts.search(text);
    const resultados = pickRandom(res.all);
    const PlayResultados = `╭◯ *𝗬 𝗧 - 𝗦 𝗘 𝗔 𝗥 𝗖 𝗛*\n╷📌 *Titulo:* ${resultados.title}\n╷🚀 *Canal:* ${resultados.author.name}\n╷⏳ Duración: ${resultados.seconds} segundos (${resultados.timestamp})\n╷🔗 Enlace: ${resultados.url}\n╰◯\n\n *🧾 Descripción:*${readmore} ${resultados.description}`;
    
    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: PlayResultados,
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "Powered by @Syllkom",
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        imageMessage: (await prepareWAMessageMedia({ image: { url: resultados.thumbnail } }, { upload: conn.waUploadToServer })).imageMessage,
                        title: '',
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false,
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            "name": "single_select",
                            "buttonParamsJson": JSON.stringify({
                                title: "Selecciona una opción",
                                sections: [
                                    {
                                        title: `${resultados.title}`,
                                        highlight_label: "Baja",
                                        rows: [
                                            { header: "YouTube • 144p", title: "Rápido (144p)", description: "Video de calidad baja", id: `ytquality ${resultados.url} 144p` },
                                            { header: "YouTube • 244p", title: "Rápido (240p)", description: "Calidad baja para reproducción rápida", id: `ytquality ${resultados.url} 244p` },
                                            { header: "YouTube • 360p", title: "Rápido (360p)", description: "Calidad normal para reproducción rápida", id: `ytquality ${resultados.url} 360p` },
                                            { header: "YouTube • 480p", title: "Rápido (480p)", description: "Calidad baja para reproducción rápida", id: `ytquality ${resultados.url} 480p` },
                                            { header: "YouTube • 720p", title: "Calidad alta (720p)", description: "Calidad clara y reproducción rápida", id: `ytquality ${resultados.url} 720p` },
                                            { header: "YouTube • 1080p", title: "Calidad alta (1080p)", description: "Alta definición para pantalla completa", id: `ytquality ${resultados.url} 1080p` }
                                        ]
                                    },
                                    {
                                        title: "Descarga rápida sin ningun ajuste",
                                        highlight_label: "",
                                        rows: [
                                            { header: "YouTube • Mp4", title: "ytmp4", description: "Descargar video, predeterminado 360p", id: `ytquality ${resultados.url} 360p` },
                                            { header: "YouTube • Mp3", title: "ytmp3", description: "Descargar audio", id: `${prefix}ytmp3 ${resultados.url}` }
                                        ]
                                    }
                                ]
                            })
                        }]
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 9999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '12031853846998@newsletter',
                            newsletterName: '🏮 XiaoBot-MD - YT Search 🔎',
                            serverMessageId: 143,
                        }
                    }
                })
            }
        }
    }, {});
    
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'wallpaper': {
if (!text) return m.reply(`Example: ${prefix + command} Xiao`)
let anu = await wallpaper(text)
let result = pickRandom(anu)
await conn.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `╭◯ *𝗪 𝗔 𝗟 𝗟 𝗣 𝗔 𝗣 𝗘 𝗥*\n╷ Título: ${q}\n╷ Categoria: ${result.type}\n╰◯Media url: ${result.image[2] || result.image[1] || result.image[0]}\n\n• Usa el comando "HD" pará mejorar la calidad de la imagen`}, { quoted: kom })
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'ytmp3': case 'ytaudio': case 'ytplayaudio': case 'yta': {
if (!text) return reply(`Ejemplo: ${prefix + command} https://youtu.be/TIPwE6-iT_w?si=Un3-tXMdBhlVEs_Z`)
if (!text.includes('youtu')) return reply('La URL no contiene resultados de YouTube!!!')
const resultados = await ytMp3(text);
await conn.sendMessage(m.chat, { react: { text: '🕓', key: m.key } })
await conn.sendMessage(m.chat, {
	audio: { url: resultados.result },
	mimetype: 'audio/mpeg',
	contextInfo: {
		externalAdReply: {
			title: `XiaoBot-MD • MP3`,
			body: `Powered by @Syllkom`,
			previewType: 'PHOTO',
			thumbnail: fs.readFileSync('./imagenes/icon-all.png'),
			mediaType: 1,
			renderLargerThumbnail: false,
			showAdAttribution: true, 
			sourceUrl: syllkom
		}
	}
}, { quoted: kom });
await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'ytmp4': case 'ytvideo': case 'ytplayvideo': case 'ytv': {
    if (!text) return reply(`Ejemplo: ${prefix + command} https://youtu.be/7QaFGiCAM0E?si=SXWKTvhFd8qhkrcP`);
    if (!text.includes('youtu')) return reply('¡El enlace no pertenece a YouTube!');

    await conn.sendMessage(m.chat, { react: { text: `⏳`, key: m.key } });

    let textMessage = `*Para descargar el video, selecciona primero la calidad que deseas en la lista de opciones.*`;
    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({ text: textMessage }),
                    footer: proto.Message.InteractiveMessage.Footer.create({ text: "Powered by @Dyr_Kom" }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: "",
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            "name": "single_select",
                            "buttonParamsJson": JSON.stringify({
                                title: "Ajustar calidad de video",
                                sections: [
                                    {
                                        title: `Ajusta la calidad del vídeo`,
                                        highlight_label: "Baja",
                                        rows: [
                                            { header: "YouTube • 144p", title: "Rápido (144p)", description: "Video de calidad baja", id: `ytquality ${text} 144p` },
                                            { header: "YouTube • 240p", title: "Rápido (240p)", description: "Calidad baja para reproducción rápida", id: `ytquality ${text} 240p` },
                                            { header: "YouTube • 360p", title: "Rápido (360p)", description: "Calidad normal para reproducción rápida", id: `ytquality ${text} 360p` },
                                            { header: "YouTube • 480p", title: "Rápido (480p)", description: "Calidad baja para reproducción rápida", id: `ytquality ${text} 480p` },
                                            { header: "YouTube • 720p", title: "Calidad alta (720p)", description: "Calidad clara y reproducción rápida", id: `ytquality ${text} 720p` },
                                            { header: "YouTube • 1080p", title: "Calidad alta (1080p)", description: "Alta definición para pantalla completa", id: `ytquality ${text} 1080p` }
                                        ]
                                    },
                                    {
                                        title: "Descarga rápida sin ningún ajuste",
                                        highlight_label: "",
                                        rows: [
                                            { header: "YouTube • Mp4", title: "ytmp4", description: "Descargar video, predeterminado 360p", id: `ytquality ${text} 360p` }
                                        ]
                                    }
                                ]
                            })
                        }]
                    }),
                    contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '12031853846998@newsletter', newsletterName: '🎬 XiaoBot-MD - YouTube 📥', serverMessageId: 143 } }
                })
            }
        }
    }, {});
    
    await conn.sendMessage(m.chat, { react: { text: `📥`, key: m.key } });
    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
} break;
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'ytquality': {
    if (!text.includes(' ')) return reply(`Ejemplo: ${prefix + command} https://youtu.be/7QaFGiCAM0E?si=SXWKTvhFd8qhkrcP 720p`);

    const [url, quality] = text.split(' ');
    if (!url.includes('youtu')) return reply('¡El enlace no pertenece a YouTube!');
    if (!['144p', '240p', '360p', '480p', '720p', '1080p'].includes(quality)) return reply('¡Calidad no válida!');

    await conn.sendMessage(m.chat, { react: { text: `⏳`, key: m.key } });
    try {
        const resultados = await ytMp4(url, quality);
        await conn.sendMessage(m.chat, {
            video: { url: resultados.result },
            caption: `*Calidad de video:* ${quality}`
        }, { quoted: kom });
        await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
    } catch (error) {
        console.error(error);
        await conn.sendMessage(m.chat, { react: { text: `❌`, key: m.key } });
        reply('Hubo un error al procesar tu solicitud.');
    }
} break;
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
if (!text) return reply(`Ejemplo: ${prefix + command} https://vm.tiktok.com/ZMr9usGv1/`)
if (!text.includes('tiktok.com')) return reply('El enlace no pertenece a tiktok!')
const resultados = await tiktokDl(text);
await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key } })
await conn.sendMessage(m.chat, {
	audio: { url: resultados.music_info.url },
	mimetype: 'audio/mpeg',
	contextInfo: {
		externalAdReply: {
			title: 'TikTok • ' + resultados.author.nickname,
			body: resultados.stats.likes + ' 👍🏻 likes, ' + resultados.stats.comment + ' 💬 comentarios. ' + resultados.title,
			previewType: 'PHOTO',
			thumbnailUrl: resultados.cover,
			mediaType: 1,
			renderLargerThumbnail: true,
			showAdAttribution: true, 
			sourceUrl: text
		}
	}
}, { quoted: kom });
await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'tagall': case 'todos': case 'invocar': {
    if (!isAdmins && !isGroupOwner && !isCreator) return;
    let teks = `*⛩️ ✦ 𝗜 𝗡 𝗩 𝗢 𝗖 𝗔 𝗡 𝗗 𝗢 ✦ 👻*\n\n👀 *Invocador:* ${pushname}\n💬 *Mensaje:* ${q ? q : 'UwU'}\n${readmore}\n`;
    for (let mem of participants) {
        teks += `- @${mem.id.split('@')[0]}\n`;
    }

    komReplyS(teks, participants.map(a => a.id));
}
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'hidetag': case 'tag': case 'hide':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator && !isBotAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply('El bot no es admin, para usar esta función asegúrate de que el bot cuente con los permisos necesarios.')
conn.sendMessage(m.chat, {
  text: q ? q : '',
  mentions: participants.map(a => a.id)
}, {
})
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'obtener': {
    if (args.length < 1) {
        conn.sendMessage(m.chat, { 
            text: "Faltan argumentos. Uso correcto: *obtener case <nombre del case>*" 
        });
        break;
    }

    const firstArg = args[0].toLowerCase();
    const caseName = args.slice(1).join(' ')

    if (firstArg === 'case') {
        if (!isCreator) return reply('¿Qué estás haciendo? 😅');
        if (!caseName) return reply(`Ejemplo: ${prefix}obtener case <nombre del case>`);

        try {
            const getCase = (cases) => {
                const data = fs.readFileSync("./kom.js", "utf8");
                const caseStart = data.indexOf(`case '${cases}':`);
                
                if (caseStart === -1) {
                    return `No se encontró el case '${cases}'.`;
                }

                const caseContent = data.slice(caseStart, data.indexOf("break", caseStart) + 5);
                return caseContent;
            };

            const caseContent = getCase(caseName);
            reply(caseContent);

        } catch (err) {
            console.error(err);
            reply(`Se produjo un error al extraer el case '${caseName}'.`);
        }
    } else {
        conn.sendMessage(m.chat, { 
            text: "Argumento incorrecto. Uso correcto: *obtener case <nombre del case>*" 
        });
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'setppbot': case 'profilebot': {
await conn.sendMessage(m.chat, { react: { text: `🕑`, key: m.key }})
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`Envie una imagen con el comando ${prefix + command} ejemplo\n\n/setppbot <imagen>`)
if (!/image/.test(mime)) return reply(`Envie una imagen con el comando ${prefix + command} ejemplo\n\n/setppbot <imagen>`)
if (/webp/.test(mime)) return reply(`Envie una imagen con el comando ${prefix + command} ejemplo\n\n/setppbot <imagen>`)
var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
var { img } = await generateProfilePicture(medis)
await conn.query({
  tag: 'iq',
  attrs: {
    to: botNumber,
    type: 'set',
    xmlns: 'w:profile:picture'
  },
  content: [
    {
      tag: 'picture',
      attrs: { type: 'image' },
      content: img
    }
  ]
})
fs.unlinkSync(medis)
reply(`*Perfil del bot actualizado correctamente*`)
await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
} break;
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'profilegrupo': case 'setppgruop': case 'setpp': case 'setppgrupo': {
await conn.sendMessage(m.chat, { react: { text: `🕑`, key: m.key }})
if (!isCreator) return repky(mess.owner)
if (!quoted) return reply(`Envie una imagen para actualizar el perfil del grupo con el comando:\n\n${prefix + command} <imagen>`)
if (!/image/.test(mime)) return reply(`Envie una imagen para actualizar el perfil del grupo con el comando:\n\n${prefix + command} <imagen>`)
if (/webp/.test(mime)) return reply(`Envie una imagen para actualizar el perfil del grupo con el comando:\n\n${prefix + command} <imagen>`)
var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
var { img } = await generateProfilePicture(medis)
await conn.query({
  tag: 'iq',
  attrs: {
    to: from,
    type: 'set',
    xmlns: 'w:profile:picture'
  },
  content: [
    {
      tag: 'picture',
      attrs: { type: 'image' },
      content: img
    }
  ]
})
fs.unlinkSync(medis)
reply(`*Imagen del grupo actualizado correctamente*`)
await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
      }
break;
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'delppbot': {
if (!isCreator) return reply(mess.owner)
await conn.removeProfilePicture(conn.user.id)
reply(mess.done)
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case "promote":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text && !m.quoted) reply('Ingresa el número que deseas promover a Admin')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
}
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case "demote":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text && !m.quoted) reply('Ingresa el número que deseas degradar de Admin')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'enviar': {
    if (args.length < 1) {
        conn.sendMessage(m.chat, { 
            text: "Faltan argumentos. Uso correcto: *enviar enlace <número>*" 
        });
        break;
    }

    const firstArg = args[0].toLowerCase();

    if (firstArg === 'enlace') {
        if (!isCreator) return reply(mess.owner);
        if (!m.isGroup) return reply(mess.group);
        if (!isBotAdmins) return reply(mess.badm);
        if (!args[1]) return reply(`Ejemplo: ${prefix}enviar enlace <número>\nEjemplo: ${prefix}enviar enlace 51933479416`);

        const bnnd = args[1] + '@s.whatsapp.net';
        let response = await conn.groupInviteCode(m.chat);

        await conn.sendMessage(bnnd, { 
            text: `https://chat.whatsapp.com/${response}\n\n*Enlace del grupo*: ${groupMetadata.subject}`
        });
    } else {
        conn.sendMessage(m.chat, { 
            text: "Argumento incorrecto. Uso correcto: *enviar enlace <número>*" 
        });
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'restablecer': {
    if (args.length < 1) {
        conn.sendMessage(m.chat, { 
            text: "Faltan argumentos. Uso correcto: *restablecer enlace*" 
        });
        break;
    }

    const firstArg = args[0].toLowerCase();

    if (firstArg === 'enlace') {
        if (!isCreator) return reply(mess.owner);
        if (!m.isGroup) return reply(mess.group);
        if (!isBotAdmins) return reply(mess.badm);

        await conn.groupRevokeInvite(m.chat);
        conn.sendMessage(m.chat, { 
            text: "El enlace del grupo ha sido restablecido correctamente." 
        });
    } else {
        conn.sendMessage(m.chat, { 
            text: "Argumento incorrecto. Uso correcto: *restablecer enlace*" 
        });
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'join':{
 if (!isCreator)
 if (!q) return reply(`Envia el enlace de tu grupo, ejemplo ${prefix+command} _linkgrup_`)
 var ini_urrrl = q.split('https://chat.whatsapp.com/')[1]
 var data = await conn.groupAcceptInvite(ini_urrrl)
 reply(`*${botname} se unio correctamente a tu grupo.*`)
 } break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'añadir': {
    if (args.length < 1) {
        conn.sendMessage(m.chat, { 
            text: "Faltan argumentos. Uso correcto: *añadir case <código del case>*" 
        });
        break;
    }

    const firstArg = args[0].toLowerCase();

    if (firstArg === 'case') {
        if (!isCreator) return reply('¿Qué haces? 😅');
        if (!text) return reply('¿Dónde está el case?');

        const fs = require('fs');
        const nameFile = 'kom.js';
        const newCase = `${text}`;

        fs.readFile(nameFile, 'utf8', (err, data) => {
            if (err) {
                console.error('Se produjo un error al leer el archivo:', err);
                return reply('Se produjo un error al leer el archivo.');
            }

            const posicionCaseAdd = data.indexOf("case 'addcase':");

            if (posicionCaseAdd !== -1) {
                const nuevoContenido = data.slice(0, posicionCaseAdd) + '\n' + newCase + '\n' + data.slice(posicionCaseAdd);

                fs.writeFile(nameFile, nuevoContenido, 'utf8', (err) => {
                    if (err) {
                        return reply('Se produjo un error al escribir el archivo.');
                    } else {
                        return reply('Nuevo case agregado exitosamente.');
                    }
                });
            } else {
                return reply('No se puede agregar un nuevo case en el archivo.');
            }
        });
    } else {
        conn.sendMessage(m.chat, { 
            text: "Argumento incorrecto. Uso correcto: *añadir case <código del case>*" 
        });
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'del': {
    if (args.length < 1) {
        conn.sendMessage(m.chat, { 
            text: "Faltan argumentos. Uso correcto: *eliminar case <nombre del case>*" 
        });
        break;
    }

    const firstArg = args[0].toLowerCase();
    const caseName = args.slice(1).join(' ')

    if (firstArg === 'case') {
        if (!isCreator) return reply('*Acceso denegado*\n\n*Solo propietarios*');
        if (!caseName) return reply('*Ingrese el nombre del case a eliminar*');

        const fs = require('fs');
        const filePath = './kom.js';
        
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo:', err);
                return reply('Se produjo un error al leer el archivo.');
            }
            const caseRegex = new RegExp(`case '${caseName}':[\\s\\S]*?break;`, 'g');

            if (!caseRegex.test(data)) {
                return reply(`No se encontró un case con el nombre *${caseName}*.`);
            }

            const updatedData = data.replace(caseRegex, '');

            fs.writeFile(filePath, updatedData, 'utf8', (err) => {
                if (err) {
                    console.error('Error al escribir el archivo:', err);
                    return reply('Se produjo un error al escribir el archivo.');
                } else {
                    return reply('*Se eliminó el case correctamente* ✅');
                }
            });
        });
    } else {
        conn.sendMessage(m.chat, { 
            text: "Argumento incorrecto. Uso correcto: *eliminar case <nombre del case>*" 
        });
    }
} break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case "public": {
if (!isCreator) return reply(mess.owner)
conn.public = true
reply(mess.done)
}
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case "self": {
if (!isCreator) return reply(mess.owner)
conn.public = false
reply(mess.done)
}
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'del': case 'deltt': {
if (!isCreator) return reply('Lo sentimos, este comando es sólo para propietarios.')
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return false
let { chat, fromMe, id, isBaileys } = m.quoted
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'remini': 
case 'hd': 
case 'jadihd': 
case 'hdr':
       await conn.sendMessage(m.chat, { react: { text: `🕓`, key: m.key }})
   if (!m.quoted) return reply(`Responde a una imagen`)
   reply(`${pushname} estoy procesando tu imagen, espera un momento...`)
const { remini } = require('./lib/remini')
    let media = await quoted.download()
       let proses = await remini(media, "enhance");
  conn.sendMessage(m.chat, { image: proses, caption:"Aqui tienes, tu imagen en HD"}, { quoted: kom})
  await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
case 'loli':{
let loli = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
let lolii = loli[Math.floor(Math.random() * (loli.length))]
let imagen = await getBuffer(lolii)             
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `XiaoBot-MD`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./imagenes/icon.png'),sourceUrl: syllkom
}}, image: imagen, caption: `_${command}_` ,footer: `Resultados de búsqueda de${command}`}, { quoted: m })
.catch((err) => m.reply('El servidor tiene un error, inténtalo mas tarde!'))
}
break
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
cha.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
    console.log(util.format(err))
    let e = String(err)
    conn.sendMessage(`${global.owner}@s.whatsapp.net`, {
      text: "Hola desarrollador, hay una función de error " + util.format(e),
      contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true
      }
    })
  }
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

			