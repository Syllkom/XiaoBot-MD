const chalk = require("chalk")
const fs = require("fs")
const { format } = require('./lib/myfunc')
const moment = require('moment-timezone')
moment.tz.setDefault("América/Lima").locale("id")
const hariini = moment.tz('America/Lima').format('dddd, DD MMMM YYYY')
const wib = moment.tz('América/Lima').format('HH:mm:ss')

//=================================================//
global.owner = ['51933479416']
global.ownernomer = "51933479416"
global.ownername = "お Dyr. Kom."
global.namaowner = "お Dyr. Kom."
global.ytname = "YouTube : @AnimeAndOnigiri"
global.socialm = "Instagram : @anime_and_onigiri"
global.location = "Perú ??"
//=================================================//
global.ownerFB = "https://beacons.ai/dyrkom"
global.botname = "XiaoBot"
global.namabot = "XiaoBot"
global.ownerNumber = ["51933479416@s.whatsapp.net"]
global.ownerweb = "https://beacons.ai/dyrkom"
global.themeemoji = '🪀'
global.wm = "Dameji"
global.packname = `ㅤㅤㅤㅤ 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐛𝐲 𝚾𝐢𝐚𝐨𝚩𝐨𝐭-𝚳𝐃ㅤㅤ
ㅤㅤㅤㅤㅤ beacons.ai/dyrkomㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤ  𝐁𝐲 @Dyr_Komㅤㅤㅤㅤㅤ
© 2024 Anime & Onigiri All rights reserved`
global.author = ''
global.prefa = ['/','!','.','#','']
global.sessionName = 'XiaoSession'
global.tekspushkon = ''
global.keyopenai ='iigf'
global.autoread = true
global.autobio = true
global.teksjpm = 'Text Push Member'
//=================================================//
global.thumb = { url: 'https://telegra.ph/file/f7511d0b9cc77dbc53ed4.jpg' }
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
//=================================================//
global.mess = {
    selesai: 'Hecho !!', 
    owner: 'Sólo propietarios',
    private: 'Especial Privado',
    group: 'Grupo especial',
    wait: 'Espera un momento...',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
