require('./settings')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const axios = require('axios')
const FileType = require('file-type')
const readline = require("readline");
const yargs = require('yargs/yargs')
const CFonts = require('cfonts')
const { HttpsProxyAgent } = require("https-proxy-agent");
const agent = new HttpsProxyAgent("http://proxy:clph123@103.123.63.106:3128");
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, imageToWebp3, videoToWebp, writeExifImg, writeExifImgAV, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()



// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
async function connectToWhatsApp() {
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
const cha = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ["Ubuntu", "Chrome", "20.0.04"],
});

    CFonts.say('Xiao', {
        font: 'simple3d',
        color: 'candy',
        gradient: ['red', 'magenta'],
        align: 'center'
    });

    CFonts.say('By @Syllkom\n© Copyright 2024 Anime & Onigiri All rights reserved', {
        font: 'console',
        align: 'center',
        gradient: ['red', 'magenta']
    });

    console.log('Ejecutando el Bot mas shidori tercer mundista :D');
    console.log('   ');
    
if(usePairingCode && !cha.authState.creds.registered) {
		const phoneNumber = await question('Ingresa tu número de WhatsApp:\n');
		const code = await cha.requestPairingCode(phoneNumber.trim())
		console.log(`Tu código de empadronamiento: ${code}`)

	}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!cha.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(cha, mek, store)
require("./kom")(cha, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

/*WELCOME
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));*/


cha.ev.on('call', async (celled) => {
let botNumber = await cha.decodeJid(cha.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await cha.sendTextWithMentions(kopel.from, `*${cha.user.name}* ¿No se aceptan llamadas ${kopel.isVideo? `vídeo`: `sonido`}. Lo sentimos @${kopel.from.split('@')[0]}, serás bloqueado. Comuníquese con el propietario para abrir el bloque. !`)
cha.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await cha.updateBlockStatus(kopel.from, "block")
}
}
}
})
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.ev.on('contacts.update', update => {
for (let contact of update) {
let id = cha.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.getName = (jid, withoutContact  = false) => {
id = cha.decodeJid(jid)
withoutContact = cha.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = cha.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === cha.decodeJid(cha.user.id) ?
cha.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.public = true
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.ev.on('creds.update', saveCreds)
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
 cha.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
 cha.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await cha.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.sendText = (jid, text, quoted = '', options) => cha.sendMessage(jid, { text: text, ...options }, { quoted })
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.sendTextWithMentions = async (jid, text, quoted, options = {}) => cha.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await cha.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

cha.sendImageAsStickerAV = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImgAV(buff, options)
} else {
buffer = await imageToWebp2(buff)}
await cha.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

cha.sendImageAsStickerAvatar = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp3(buff)}
await cha.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await cha.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
 cha.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
 cha.cMod = (jid, copy, text = '', sender = cha.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === cha.user.id
return proto.WebMessageInfo.fromObject(copy)}
cha.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await cha.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await cha.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
cha.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await cha.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.sendReact = async (jid, emoticon, keys = {}) => {
let reactionMessage = {
react: {
text: emoticon,
key: keys
}
}
return await cha.sendMessage(jid, reactionMessage)
}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
cha.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
cha.serializeM = (m) => smsg(cha, m, store)
cha.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log('Archivo de sesión incorrecto, por favor elimine la sesión y escanee de nuevo');
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Conexión cerrada, reconectando....");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Conexión perdida del servidor, reconectando...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Conexión reemplazada, se abrió otra nueva sesión, reinicie el bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log('Dispositivo cerrado sesión, elimine la carpeta de sesión y escanee de nuevo.');
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Se requiere reinicio, reiniciando...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Conexión expirada, reconectando...");
connectToWhatsApp();
  } else {
console.log(`Razón de desconexión desconocida: ${reason}|${connection}`);
connectToWhatsApp();
  }
}
// console.log('Connected...', update)
});
return cha
}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
