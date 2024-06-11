require('./settings')
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, PhoneNumber, process, moment, ms, speed, syntaxerror, util, openai } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const ntilink2 = JSON.parse(fs.readFileSync("./lib/antilink2.json"))
const jpm = JSON.parse(fs.readFileSync("./database/autojpm.json"))
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
//=================================================//
module.exports = hyuuxyz = async (hyuuxyz, m, msg, chatUpdate, store) => {
  try {
    const { type, quotedMsg, mentioned, now, fromMe } = m
    const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectmyReply.selectedRowId : (m.mtype == 'templateButtonmyReplyMessage') ? m.message.templateButtonmyReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectmyReply.selectedRowId || m.text) : ''
    const budy = (typeof m.text == 'string' ? m.text : '')
    const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
    const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonmyReplyMessage') && m.message.templateButtonmyReplyMessage.selectedId ? m.message.templateButtonmyReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectmyReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectmyReply.selectedRowId : ''
    const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''
    const messagesC = pes.slice(0).trim()
    const content = JSON.stringify(m.message)
    const isCmd = body.startsWith(prefix)
    const from = m.key.remoteJid
    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const botNumber = await hyuuxyz.decodeJid(hyuuxyz.user.id)
    const isDev = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isHyuu = m.sender == botNumber ? true : false
    const text = q = args.join(" ")
    const AntiLink = m.isGroup ? ntilink.includes(from) : false
    const AntiLink2 = m.isGroup ? ntilink2.includes(from) : false
    const autodelete = from && isCmd ? antidel.includes(from) : false
    const AutoJpm = from && isCmd ? jpm.includes(from) : false
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const qmsg = (quoted.msg || quoted)
    const isMedia = /image|video|sticker|audio/.test(mime)
    const isImage = (type == 'imageMessage')
    const isVideo = (type == 'videoMessage')
    const isAudio = (type == 'audioMessage')
    const isSticker = (type == 'stickerMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
    const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
    const isGroup = from.endsWith('@g.us')
    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const senderNumber = sender.split('@')[0]
    const groupMetadata = m.isGroup ? await hyuuxyz.groupMetadata(m.chat).catch(e => { }) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    const groupOwner = m.isGroup ? groupMetadata.owner : ''
    const groupMembers = m.isGroup ? groupMetadata.participants : ''
    const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const banUser = await hyuuxyz.fetchBlocklist()
    const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
    const isAsu = body.startsWith(pric)
    const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
    const isBanned = banUser ? banUser.includes(m.sender) : false
    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
    const mentionBymyReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
    const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
    const usernya = mentionBymyReply ? mentionBymyReply : mentionByTag[0]
    const Input = mentionByTag[0] ? mentionByTag[0] : mentionBymyReply ? mentionBymyReply : q ? numberQuery : false
    const isEval = body.startsWith('=>')
    const userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    const more = String.fromCharCode(8206)
    const readmore = more.repeat(4001)
    //=================================================//
    const hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))
    //=================================================//
    const nharii = moment.tz('América/Lima').format('dddd')
    const ntanggal = moment.tz('América/Lima').format('DD/MM/YY')
    const hariini = moment.tz("América/Lima").format("DD MMMM YYYY");
    const barat = moment.tz("América/Lima").format("HH:mm:ss");
    const tengah = moment.tz("América/Lima").format("HH:mm:ss");
    const timur = moment.tz("América/Lima").format("HH:mm:ss");
    const time2 = moment().tz("América/Lima").format("HH:mm:ss");
    if (time2 < "23:59:00") {
      var timeLATAM = `Buenas noches ${pushname} 🌌`;
    }
    if (time2 < "19:00:00") {
      var timeLATAM = `Buenas tardes ${pushname} 🌆`;
    }
    if (time2 < "18:00:00") {
      var timeLATAM = `Buen día ${pushname} 🌅`;
    }
    if (time2 < "15:00:00") {
      var timeLATAM = `Buen amanecer ${pushname} 🏙`;
    }
    if (time2 < "11:00:00") {
      var timeLATAM = `Buenas noches ${pushname} 🌌`;
    }
    if (time2 < "05:00:00") {
      var timeLATAM = `Buenas noches ${pushname} 🌉`;
    }
    const tahunBaru = new Date("Enero 1, 2024 00:00:00");
    const sekarang = new Date().getTime();
    const Selisih = tahunBaru - sekarang;
    const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor(
      (Selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const jmenit = Math.floor((Selisih % (1000 * 60 * 60)) / (1000 * 60));
    const jdetik = Math.floor((Selisih % (1000 * 60)) / 1000);
    const ulngthn = new Date("Octubre 31, 2023 00:00:00");
    const ayeuna = new Date().getTime();
    const ceIroh = ulngthn - ayeuna;
    const hahari = Math.floor(ceIroh / (1000 * 60 * 60 * 24));
    const hajam = Math.floor(
      (ceIroh % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const hamenit = Math.floor((ceIroh % (1000 * 60 * 60)) / (1000 * 60));
    const hadetik = Math.floor((ceIroh % (1000 * 60)) / 1000);
    const idulAdha = new Date("Junio 29, 2023 00:00:00");
    const nembe = new Date().getTime();
    const ceDadah = idulAdha - nembe;
    const hihari = Math.floor(ceDadah / (1000 * 60 * 60 * 24));
    const hijam = Math.floor(
      (ceDadah % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const himenit = Math.floor((ceDadah % (1000 * 60 * 60)) / (1000 * 60));
    const hidetik = Math.floor((ceDadah % (1000 * 60)) / 1000);

    async function loading() {
      var fload = [
        "_Hola mi nombre es XiaBot-MD_",
        "_Creado en país_",
      ]
      let { key } = await hyuuxyz.sendMessage(from, { text: 'Cargando...' })//Pengalih isu

      for (let i = 0; i < fload.length; i++) {
        await hyuuxyz.sendMessage(from, { text: fload[i], edit: key });//PESAN LEPAS
      }
    }
    if (autodelete) {
      hyuuxyz.sendMessage(m.chat,
        {
          delete: {
            remoteJid: m.chat,
            fromMe: true,
            id: mek.key.id,
            participant: mek.key.participant
          }
        })
    }

    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const createSerial = (size) => {
      return crypto.randomBytes(size).toString('hex').slice(0, size)
    }

    // ========================================= \\
    if (!hyuuxyz.public) {
      if (!isDev && !m.key.fromMe) return
    }

    if (autobio) {
      let _uptime = process.uptime() * 1000
      let uptime = clockString(_uptime)
      await hyuuxyz.updateProfileStatus(`XiaoBot-MD • ⏳ Activo durante: ${uptime} • 🤖 Modo: ${hyuuxyz.public ? 'Publico' : 'Self'}`).catch(_ => _)
    }

    if (isCommand) {
      let titida = ['composing', 'recording']
      yte = titida[Math.floor(titida.length * Math.random())]
      hyuuxyz.sendPresenceUpdate(yte, from)
    }

    //=================================================//
    if (isCommand) {
      console.log(`<================>`)
      console.log(chalk.black(chalk.bgWhite(!isCommand ? '<\> MESSAGE </>' : '<\> COMMAND </>')), chalk.black(chalk.bgGreen(hariini)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
      console.log(`<================>`)
      const cmdadd = () => {
        hit[0].hit_cmd += 1
        fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
      }
      cmdadd()
      const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
    }

    function pickRandom(list) {
      return list[Math.floor(list.length * Math.random())]
    }

    //=================================================//
    const ftroli = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "status@broadcast" }, "message": { orderMessage: { itemCount: -99999, status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: namaowner, sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
    const fdoc = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { documentMessage: { title: namaowner, jpegThumbnail: thumb } } }
    const fvn = { key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "audioMessage": { "mimetype": "audio/ogg; codecs=opus", "seconds": 359996400, "ptt": "true" } } }
    const fgif = { key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "videoMessage": { "title": botname, "h": wm, 'seconds': '359996400', 'gifPlayback': 'true', 'caption': namaowner, 'jpegThumbnail': thumb } } }
    const fgclink = { key: { participant: "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net" }, "message": { "groupInviteMessage": { "groupJid": "51933479416-1616169743@g.us", "inviteCode": "m", "groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb } } }
    const fvideo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "videoMessage": { "title": botname, "h": wm, 'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb } } }
    const floc = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { locationMessage: { name: wm, jpegThumbnail: thumb } } }
    const fkontak = { key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': namaowner, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namaowner},;;;\nFN:${namaowner}\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb, sendEphemeral: true } } }
    const fakestatus = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": wm, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": thumb, "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } }
    //=================================================//

    const myReply = (teks) => {
      hyuuxyz.sendMessage(from, {
        text: teks,
        contextInfo: {
          forwardingScore: 9999999,
          isForwarded: true
        }
      }, { quoted: fdoc })
    }
    if (isCmd && isBanned) {
      return
    }

    let list = []
    for (let i of owner) {
      list.push({
        displayName: await hyuuxyz.getName(i),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await hyuuxyz.getName(i)}\nFN:${await hyuuxyz.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
      })
    }

    async function getFile(media) {
      let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await (await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
      if (!data) return new Error("Result is not a buffer")
      let type = await FileType.fromBuffer(data) || {
        mime: "application/octet-stream",
        ext: ".bin"
      }
      return {
        data,
        ...type
      }
    }

    async function sendFile(jid, media, options = {}) {
      let file = await getFile(media)
      let mime = file.ext, type
      if (mime == "mp3") {
        type = "audio"
        options.mimetype = "audio/mpeg"
        options.ptt = options.ptt || false
      }
      else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
      else if (mime == "webp") type = "sticker"
      else if (mime == "mp4") type = "video"
      else type = "document"
      return hyuuxyz.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
    }
    //=================================================//
    if (isCmd && m.isGroup) {
      console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']'));
    }

    if (isCmd && !m.isGroup) {
      console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']'));
    }

    hyuuxyz.sendPresenceUpdate('unavailable', from)

    function pickRandom(list) {
      return list[Math.floor(list.length * Math.random())]
    }

    async function sendHyuuMessage(chatId, message, options = {}) {
      let generate = await generateWAMessage(chatId, message, options)
      let type2 = getContentType(generate.message)
      if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
      if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
      return await hyuuxyz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
    }

    //=================================================//
    // Auto Jpm
    if (AutoJpm) {
      if (budy.includes('https://')) {
        bvl = `${global.teksjpm}`
        hyuuxyz.sendMessage(m.chat, {
          text: bvl,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: namabot,
              body: ``,
              thumbnailUrl: global.thumb,
              sourceUrl: global.ownergc,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: fdoc
        })
      }
    }
    if (AntiLink) {
      if (body.match(/(chat.whatsapp.com\/)/gi)) {
        if (!isBotAdmins) return myReply(`${mess.botAdmin}, _Para expulsar a las personas que envían enlaces grupales_`)
        let gclink = (`https://chat.whatsapp.com/` + await hyuuxyz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return hyuuxyz.sendMessage(m.chat, { text: `\`\`\`「Enlace de grupo detectado」\`\`\`\n\nTu mensaje será eliminado por el bot porque lo que enviaste es un enlace de otro grupo` })
        if (isAdmins) return hyuuxyz.sendMessage(m.chat, { text: `\`\`\`「 Enlace de administrador 」\`\`\`\n\nEl administrador ha enviado un enlace, el administrador es libre de publicar cualquier enlace` })
        if (isDev) return hyuuxyz.sendMessage(m.chat, { text: `\`\`\`「 enlace de propietario」\`\`\`\n\nEl propietario ha enviado un enlace, el propietario es libre de publicar cualquier enlace` })
        await hyuuxyz.sendMessage(m.chat,
          {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant
            }
          })
        hyuuxyz.sendMessage(from, { text: `\`\`\`「 No enlaces de otros grupos 」\`\`\`\n\n@${m.sender.split("@")[0]} No envíe enlaces de grupo a este grupo!!!`, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
      }
    }
    if (AntiLink2) {
      if (body.match(/(chat.whatsapp.com\/)/gi)) {
        if (!isBotAdmins) return myReply(`${mess.botAdmin}, _Para expulsar a las personas que envían enlaces grupales_`)
        if (isAdmins) return myReply('Admin DyrKom es libre de enviar enlaces')
        if (!isDev) return myReply('Owner DyrKom es libre de enviar todo')
        hyuuxyz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        hyuuxyz.sendMessage(from, { text: `\`\`\`「 Enlace detectado 」\`\`\`\n\n@${m.sender.split("@")[0]} Te detectan enviando otro enlace de grupo de WhatsApp, lo siento, te expulsarán`, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
      }
    }
    //=================================================//
    const timestamp = speed()
    const latensi = speed() - timestamp
    const mark = "0@s.whatsapp.net"
    const readMore = String.fromCharCode(8206).repeat(850)
    //=================================================//
    switch (command) {
      case 'menu': case 'menú': case 'help':
        let fakelist = `Activo: ⏳ ${runtime(process.uptime())}\n© 2024 Anime & Onigiri All rights reserved`
        hyuuxyz.sendMessage(from, {
          text: `👋 *${timeLATAM}* , soy *XiaBot-MD*, creado únicamente para las necesidades de mi creador. No brindo funciones generales como *RPG* o *descargas.*

🪀 *I N F O / B O T* 📜
- 📌 Bot multiprefijo
- 👤 User: @${m.sender.split("@")[0]}
- 🤖 Versión: 0.1 (ʙᴇᴛᴀ)
- 🤴🏻 Creador: *@Dyr_Kom*
${readMore}
*📚 M E N U / L I S T A 📜*

📥 *D O W N L O A D* 🎥
- /tiktok *<link>*
- /gitclone *<link>*

📡 *B R O A D C A S T* ⛩️
- /bcgc *<texto>*
- /bchide *<texto>*
- /bcimg *<imagen>*

💟 *C O N V E R S O R* 🖼️
- /toimg *<tag/sticker>*
- /sticker *<imagen>*
- /rename *<tag/sticker/texto>*

🏮 *R A N D O M* 🍙
- /runtime 
- /creador 
- /ping
- /report *<texto>*

🎌 *G R U P O* ⛩️
- /antilink 
- /antilink2 
- /tagall *<texto>*
- /hidetag *<texto>*
- /settings 

🤴 *O W N E R* 🖼️
- /publico 
- /delsesi 
- /autoconsumo 
- /clearsession 
- /dyrbot *<imagen>*
- /dyrgrupo *<imagen>*

🔠 *A V A N Z A D O* ➡️
- =>
- >
- $

> Powered By *${global.ownername}*`
          ,
          mentions: [m.sender],
          contextInfo: {
            mentionedJid: [m.sender],
            "externalAdReply": {
              "showAdAttribution": [],
              "renderLargerThumbnail": [],
              "title": fakelist,
              "containsAutoReply": [],
              "mediaType": 1,
              "thumbnail": fs.readFileSync('./database/imagenes/menu.png'),
              "mediaUrl": ownerFB,
              "sourceUrl": ownerFB
            }
          }
         });
        break
          ////////////////////////RANDOM
        case 'ping': {
  const start = Date.now();
  const responses = [
    "Pong! 🎆",
    "Pong!!! 💥",
    "Pong! Responde a un golpe a 𝟷𝟼𝟶 kmh 🏎️",
    "Pong!! Lo mata ⚰️",
    "💀 Pong!! Le rompe el cráneo 🏓"
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  const end = Date.now();
  const timeTaken = (end - start) / 1000;
  const speedMessage = `⚡ Tiempo de respuesta: ${timeTaken.toFixed(2)}s`;

  await m.reply(`${response}\n${speedMessage}`);
  break;
}
case 'settings':
    hyuuxyz.sendMessage(from, {
        text: `📜 *LISTA DE AJUSTES* ⚙️\n${readMore}\n🔗 *A N T I / E N L A C E S* ✖️\n- /antilink on\n- /antilink off\n🤖 El bot *eliminará* el mensaje del participante que envi‌e un enlace en el grupo. 🛡️\n\n🖼️ *P R O F I L E / B O T* 👤\n- /dyrbot *<imagen>*\n🤖 El bot actualizara‌ el perfil asociado con el, permitiendo la inclusión de ima‌genes verticales como horizontales, sin restricciones. ♾️\n\n🖼️ *P R O F I L E / G R U P O* 🎍\n- /dyrgrupo *<imagen>*\n🤖 El bot actualizara‌ el perfil del grupo en el que este‌, permitiendo la inclusio‌n de ima‌genes horizontales cómo verticales, sin restricciones. ⛩️`,
        contextInfo: {
            mentionedJid: [m.sender],
            "externalAdReply": {
                "showAdAttribution": true,
                "title": `🤖 𝗰𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗮𝗰𝗶𝗼॔𝗻𝗲𝘀 ⛩️\nUser: ${pushname}`,
                "mediaType": 1,
                "thumbnail": fs.readFileSync('./database/imagenes/settings.png')
            }
        }
    });
    break
      // =================[ GRUPO ] ================= \\
      case 'antilink': {
        if (!isDev) return myReply('*Solo premium*')
        if (!m.isGroup) return myReply('El comando solo puede ser activado en grupos, estúpid@!!!')
        if (!isBotAdmins) return myReply('El bot no es ADM')
        if (!isAdmins) return myReply('Creo que es un administrador de grupo.')
        if (args.length < 1) return myReply('escriba on para activar\nescriba off para desactivar')
        if (args[0] === "on") {
          if (AntiLink) return myReply('Activado')
          ntilink.push(from)
          myReply('Antilink activado exitosamente. ✅')
        } else if (args[0] === "off") {
          if (!AntiLink) return myReply('Desactivado')
          let off = ntilink.indexOf(from)
          ntilink.splice(off, 1)
          myReply('Se desactivó el antilink en este grupo. ')
        } else {
          myReply('on para activar, off para desactivar')
        }
      }
        break
      case 'antilink2': {
        if (!isDev) return myReply('*Solo para usuarios Premium*')
        if (!m.isGroup) return myReply('Tonto, hazlo en un grupo')
        if (!isBotAdmins) return myReply('Los bots no son administradores, amigo.')
        if (!isAdmins) return myReply('Se considera Grupo Administrador')
        if (args.length < 1) return myReply('escriba on para activar\nescriba off para desactivar')
        if (args[0] === "on") {
          if (AntiLink2) return myReply('Activado')
          ntilink2.push(from)
          myReply('Se activo exitosamente antilink 2 en este grupo.')
        } else if (args[0] === "off") {
          if (!AntiLink2) return myReply('Desactivado')
          let off = ntilink2.indexOf(from)
          ntilink2.splice(off, 1)
          myReply('Se desactivó exitosamente antilink 2 en este Grupo.')
        } else {
          myReply('on para activar, off para desactivar')
        }
      }
      case 'antilink2': {
        if (!isDev) return myReply('*Sólo para usuarios Premium*')
        if (!m.isGroup) return myReply('Hazlo en el grupo, estúpido')
        if (!isBotAdmins) return myReply('El bot no es ADM')
        if (!isAdmins) return myReply('Se considera Grupo Administrador')
        if (args.length < 1) return myReply('escriba on para activar\nescriba off para desactivar')
        if (args[0] === "on") {
          if (AntiLink2) return myReply('Activado')
          ntilink2.push(from)
          myReply('Se activo antilik 2 en este grupo ✅')
        } else if (args[0] === "off") {
          if (!AntiLink2) return myReply('Desactivado')
          let off = ntilink2.indexOf(from)
          ntilink2.splice(off, 1)
          myReply('Se desactivó antilink 2 en este grupo. ⛩️')
        } else {
          myReply('on para activar, off para desactivar')
        }
      }
        break
      case 'tagall': case 'todos': case 'invocar': {
        if (!isAdmins && !isGroupOwner && !isDev) return
        let teks = `*👥 Invocando al grupo ⛩️*\n\n- 👀 Invocador: ${pushname}\n- 💬 *Mensaje: ${q ? q : 'UwU'}*\n\n`
        for (let mem of participants) {
          teks += `• . @${mem.id.split('@')[0]}\n`
        }
        hyuuxyz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
      }
        break
      case 'hidetag':
        if (!m.isGroup) return myReply(mess.group)
        if (!isAdmins && !isGroupOwner && !isDev) return myReply(mess.admin)
        if (!isBotAdmins) return myReply('Solo en grupos!!!')
        hyuuxyz.sendMessage(m.chat, {
          text: q ? q : '',
          mentions: participants.map(a => a.id)
        }, {
          quoted: m
        })
        break
      case 'welcome': 
case 'welcome': case 'bienvenida':
    if (!m.isGroup) return myReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isDev) return myReply(mess.admin);
    if (!isBotAdmins) return myReply('Solo en grupos!!!');
    
    const imagePath = './database/imagenes/welcome.png';

    hyuuxyz.sendMessage(m.chat, {
      image: { url: imagePath },
      caption: q ? q : `👋 Bienvenidos al grupo ⛩️\nEspero que la pasen bien, recuerda leer las reglas y ser activos para evitar ser eliminand@ del grupo.`,
      mentions: participants.map(a => a.id)
    }, {
      quoted: m
    });
    break

      case 'toimage': case 'toimg': {
        if (!quoted) throw 'myReply Image'
        if (!/webp/.test(mime)) throw `Responde a un sticker *${prefix + command}*`
        let media = await hyuuxyz.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) throw err
          let buffer = fs.readFileSync(ran)
          hyuuxyz.sendMessage(from, { image: buffer }, { quoted: m })
          fs.unlinkSync(ran)
        })
      }
        break
      // =================[ DESCARGAS ] ================= \\
      case 'tt': case 'ttdl': case 'tiktok': {
        if (!text) return myReply(`📌 Ejemplo: ${prefix + command} link`)
        if (!q.includes('tiktok')) return myReply(`Link inválido!!`)
        myReply(mess.wait)
        require('./lib/tiktok').Tiktok(q).then(data => {
          hyuuxyz.sendMessage(m.chat, { caption: `¡Aquí tienes!! (⁠◡⁠ ⁠ω⁠ ⁠◡⁠)`, video: { url: data.watermark } }, { quoted: m })
        })
      }
        break
      case 'git': case 'gitclone':
        if (!args[0]) return myReply(`¿Donde esta el enlace?\nEjemplo :\n${prefix}${command} https://github.com/DyrKom/XiaoBot-MD`)
        if (!isUrl(args[0]) && !args[0].includes('github.com')) return myReply(`Link inválido!!`)
        let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
        let [, user, repo] = args[0].match(regex1) || []
        repo = repo.replace(/.git$/, '')
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`
        let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
        hyuuxyz.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: fkontak }).catch((err) => myReply(mess.error))
        break
      // =================[ CONVERTIDOR ] ================= \\
      case 'sticker':
      case 'stiker':
      case 's': {
        if (!quoted) return myReply(`Responder a vídeo/imagen para convertirlo en sticker ${prefix + command}`)
        if (/image/.test(mime)) {
          let media = await quoted.download()
          let encmedia = await hyuuxyz.sendImageAsSticker(m.chat, media, m, {
            packname: packname,
            author: author
          })
          await fs.unlinkSync(encmedia)
        } else if (isVideo || /video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 11) return myReply('¡10 segundos como máximo!')
          let media = await quoted.download()
          let encmedia = await hyuuxyz.sendVideoAsSticker(m.chat, media, m, {
            packname: packname,
            author: author
          })
          await fs.unlinkSync(encmedia)
        } else {
          return myReply(`Envia una imagen/vídeo ${prefix + command}\nduarcion maxima 1-9 segundos`)
        }
      }
        break
      case 'smeme': {
        let respond = `Respondee a una imagen/pegatina ${prefix + command} texto1|texto2`
        if (!/image/.test(mime)) return myReply(respond)
        if (!text) return myReply(respond)
        myReply(mess.wait)
        atas = text.split('|')[0] ? text.split('|')[0] : '-'
        bawah = text.split('|')[1] ? text.split('|')[1] : '-'
        let dwnld = await hyuuxyz.downloadAndSaveMediaMessage(qmsg)
        let fatGans = await TelegraPh(dwnld)
        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
        let pop = await hyuuxyz.sendImageAsSticker(m.chat, smeme, m, {
          packname: packname,
          author: author
        })
        fs.unlinkSync(pop)
      }
        break
      case 'swm': case 'rename': {
        let [teks1, teks2] = text.split`|`
        if (!teks1) return myReply(`Responde a una imagen o sticker para cambiar la descripción o añadir descripción, ejemplo ${prefix + command} texto1|texto2`)
        if (!teks2) return myReply(`Responde a una imagen o sticker para cambiar la descripción o añadir descripción, ejemplo ${prefix + command} texto1|texto2`)
        myReply(mess.wait)
        if (/image/.test(mime)) {
          let media = await hyuuxyz.downloadMediaMessage(qmsg)
          let encmedia = await hyuuxyz.sendImageAsSticker(m.chat, media, m, {
            packname: teks1,
            author: teks2
          })
          await fs.unlinkSync(encmedia)
        } else if (/video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 11) return myReply('¡10 segundos como máximo!')
          let media = await hyuuxyz.downloadMediaMessage(qmsg)
          let encmedia = await hyuuxyz.sendVideoAsSticker(m.chat, media, m, {
            packname: teks1,
            author: teks2
          })
          await fs.unlinkSync(encmedia)
        } else {
          return myReply(`Enviar imagen/vídeo ${prefix + command}\nduarcion maxima 1-9 segundos`)
        }
      }
        break
      // =================[ OTROS ] ================= \\
      case 'report': {
        if (!text) throw 'Introduzca el informe'
        if (text.length > 300) throw 'Disculpe que el texto sea demasiado largo, ¡máximo 300 textos!'
        const laporan = `*「 📣 REPORT 」*\nNumero: wa.me/${m.sender.split`@`[0]}\n💬 Mensaje: ${text}`
        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != hyuuxyz.user.jid && v != '51933479416@s.whatsapp.net'))
          myReply(laporan, jid)
        myReply(laporan, m.sender) // Mwehehehehe
        myReply('✔️El problema ha sido informado al propietario del bot, ¡no se responderán los informes falsos/confusos!')
      }
        break
      case 'creador':
      case 'owner': {
        const kontak = {
          "displayName": 'Mi Creador 👑',
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: お Dyr. Kom\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:\n🎐 Creador principal\nURL;Email Owner:https://www.facebook.com/AnimeAndOnigiri\nORG: La peor enfermedad es el aburrimiento.\nEND:VCARD`
        }
        await hyuuxyz.sendMessage(from, {
          contacts: { contacts: [kontak] },
          contextInfo: {
            forwardingScore: 999, isForwarded: true, mentionedJid: [sender],
            "externalAdmyReply": {
              "showAdAttribution": true,
              "renderLargerThumbnail": true,
              "title": `UwU`,
              "containsAutomyReply": true,
              "mediaType": 1,
              "thumbnail": 'https://telegra.ph/file/f7511d0b9cc77dbc53ed4.jpg',
              "mediaUrl": `https://youtube.com/@AnimeAndOnigiri`,
              "sourceUrl": `https://youtube.com/@AnimeAndOnigiri`
            }
          }
        }, { quoted: fkontak })
      }
        break
      case 'runtime':
        let fakeload2 = [
          "_cargando_",
          "_Anime_",
          "_And_",
          "_Onigiri_",
          "_By:_",
          "_@Dyr_Kom_",
          "_🍙_",
          "_Carga completada!!_",
          `_⌛ Tiempo activo: ${runtime(process.uptime())}_`
        ]
        let { key } = await hyuuxyz.sendMessage(m.chat, { text: 'cargando...' })//Pengalih isu

        for (let i = 0; i < fakeload2.length; i++) {
          await hyuuxyz.sendMessage(m.chat, { text: fakeload2[i], edit: key });//PESAN LEPAS
        }
        break
      // =================[ OWNER ] ================= \\

      case 'bcgc': {
        if (!isDev) return myReply('Solo pará mi propietario')
        if (!text) myReply(`Y el texto?\n\nEjemplo: ${prefix + command} Les habla Kom!!!`)
        let getGroups = await hyuuxyz.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let anu = groups.map(v => v.id)
        myReply(`Enviar difusión a ${anu.length} Chat en grupo, Hora de finalización ${anu.length * 1.5} Segundos`)
        for (let i of anu) {
          await sleep(1500)
          hyuuxyz.sendMessage(i, { text: `${text}` }, { quoted: fdoc })
        }
        myReply(`Envío con éxito de la difusión a ${anu.length} Grupo`)
      }
        break

      case "bchidetag": case "bchide": {
        if (!isDev) return myReply(`Solo para mi creador`)
        if (!text) return myReply(`*Uso incorrecto Por favor, utilícelo así*\n${prefix + command} texto|pausa\n\nResponder Imagen Para Enviar Imagen A Todos Los Gruposp\nPara Pausa Que Retraso Tan Nominal Pausa Que 1000 = 1 segundo`)
        let getGroups = await hyuuxyz.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
        let anu = groups.map((v) => v.id)
        for (let xnxx of anu) {
          let metadat72 = await hyuuxyz.groupMetadata(xnxx)
          let participanh = await metadat72.participants
          if (/image/.test(mime)) {
            media = await hyuuxyz.downloadAndSaveMediaMessage(quoted)
            mem = await TelegraPh(media)
            await hyuuxyz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
            await sleep(text.split('|')[1])
          } else {
            await hyuuxyz.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
            await sleep(text.split('|')[1])
          }
        }
        myReply(`Envío con éxito de la difusión a ${anu.length} Grupo`)
      }
        break

      case "bcimg": {
        if (!isDev) return myReply(`Solo para mi propietario`)
        if (!text) return myReply(`*Uso incorrecto Por favor, utilícelo así*\n${prefix + command} texto|pausa\n\nResponder Imagen Para Enviar Imagen A Todos Los Grupos\nPara Pausa Que Retraso Tan Nominal Pausa Que 1000 = 1 segundo`)
        let getGroups = await hyuuxyz.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
        let anu = groups.map((v) => v.id)
        for (let xnxx of anu) {
          if (/image/.test(mime)) {
            media = await hyuuxyz.downloadAndSaveMediaMessage(quoted)
            mem = await TelegraPh(media)
            await hyuuxyz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
            await sleep(text.split('|')[1])
          } else {
            await hyuuxyz.sendMessage(xnxx, { text: text.split('|')[0] })
            await sleep(text.split('|')[1])
          }
        }
        myReply(`Envío con éxito de la difusión a ${anu.length} Grupo`)
      }
        break
      case 'publico': {
        if (!isDev) return XeonStickOwner()
        hyuuxyz.public = true
        myReply('*Éxito en el cambio al uso público*')
      }
        break
      case 'autoconsumo': {
        if (!isDev) return mess.owner
        hyuuxyz.public = false
        myReply('*Éxito en el cambio al autoconsumo*')
      }
        break
      case 'delsesi':
      case 'clearsession': {
        if (!isDev) return myReply(mess.owner)
        fs.readdir("./session", async function (err, files) {
          if (err) {
            console.log('No se puede escanear el directorio: ' + err);
            return myReply('No se puede escanear el directorio: ' + err);
          }
          let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
            item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
          )
          console.log(filteredArray.length);
          let teks = `Detectado ${filteredArray.length} archivos basura\n\n`
          if (filteredArray.length == 0) return myReply(teks)
          filteredArray.map(function (e, i) {
            teks += (i + 1) + `. ${e}\n`
          })
          myReply(teks)
          await sleep(2000)
          myReply("Eliminar archivos basura...")
          await filteredArray.forEach(function (file) {
            fs.unlinkSync(`./session/${file}`)
          });
          await sleep(2000)
          myReply("Eliminada con éxito toda la basura de la carpeta de sesión")
        });
      }
        break
      case 'setppbot': case 'dyrbot': case 'profilebot': {
        if (!isDev) return myReply(mess.owner)
        if (!quoted) return myReply(`Envie una imagen con el comando ${prefix + command} ejemplo\n\n/setppbot <imagen>`)
        if (!/image/.test(mime)) return myReply(`Envie una imagen con el comando ${prefix + command} ejemplo\n\n/setppbot <imagen>`)
        if (/webp/.test(mime)) return myReply(`Envie una imagen con el comando ${prefix + command} ejemplo\n\n/setppbot <imagen>`)
        var medis = await hyuuxyz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
        var { img } = await generateProfilePicture(medis)
        await hyuuxyz.query({
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
        myReply(`*Perfil del bot actualizado correctamente ✅*`)
      } break;

      case 'profilegrupo': case 'dyrgrupo': case 'setpp': case 'setppgrupo': {
        if (!isDev) return myReply(mess.owner)
        if (!quoted) return myReply(`Envie una imagen para actualizar el perfil del grupo con el comando:\n\n${prefix + command} <imagen>`)
        if (!/image/.test(mime)) return myReply(`Envie una imagen para actualizar el perfil del grupo con el comando:\n\n${prefix + command} <imagen>`)
        if (/webp/.test(mime)) return myReply(`Envie una imagen para actualizar el perfil del grupo con el comando:\n\n${prefix + command} <imagen>`)
        var medis = await hyuuxyz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
        var { img } = await generateProfilePicture(medis)
        await hyuuxyz.query({
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
        myReply(`*Imagen del grupo actualizado correctamente ✅*`)
      }
      break;

      //=================================================//
      default:

        if (budy.startsWith("=>")) {
          if (!isDev)
            return myReply(
              `Lo sentimos, el comando es sólo para desarrolladores de bots de WhatsApp`
            );
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return myReply(bang);
          }
          try {
            myReply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`))
            );
          } catch (e) {
            myReply(String(e));
          }
        }
        if (budy.startsWith(">")) {
          if (!isDev)
            return myReply(
              `Lo sentimos, el comando es sólo para desarrolladores de bots de WhatsApp`
            );
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await myReply(evaled);
          } catch (err) {
            await myReply(String(err));
          }
        }
        if (budy.startsWith("$")) {
          if (!isDev)
            throw `Lo sentimos, el comando es sólo para desarrolladores de bots de WhatsApp`;
          exec(budy.slice(2), (err, stdout) => {
            if (err) return myReply(err);
            if (stdout) return myReply(stdout);
          });
        }
        if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
          let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
          if (room) {
            let other = room.other(sender)
            m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
              contextInfo: {
                ...m.msg.contextInfo,
                forwardingScore: 0,
                isForwarded: true,
                participant: other
              }
            } : {})
          }
        }
    }
  } catch (err) {
    console.log(util.format(err))
    let e = String(err)
    hyuuxyz.sendMessage("51933479416@s.whatsapp.net", {
      text: "Hola desarrollador, hay una función de error " + util.format(e),
      contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true
      }
    })
  }
}

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err)
})
