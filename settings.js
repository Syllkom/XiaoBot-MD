const fs = require('fs')
const chalk = require('chalk')
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
global.ownername = "おSyllkom" //Nombre del owner 
global.owner = ['51933479416'] //Número del owner 
global.versi = "v1.0.3",
global.botname = "XiaoBot-MD"
global.namabot = "*XiaoBot-MD*"
global.prefa = ['','!','.',',','#','/']
global.sessionName = 'XiaoSession' //Nombre de la sesión 
global.typereply = 'v4' 
global.idchannel = '120003229975019023@newsletter'
global.syllkom = 'https://beacons.ai/syllkom'
global.foter1 = 'Powered by @Syllkom'
global.foter2 = 'Powered by @Syllkom'
global.autobio = true // AutoBio
global.autoread = false // ReadChat
global.Ruztan = '`'
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
global.grup_only = false //true untuk mode gc
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
global.game = true
global.gametiempo = 60
global.bandera = {};

//limite & balance
global.limitawal = 5
global.balanceawal = 10000

global.listv = ['•','●','✦','✧','○']
///////Documento falso 
global.fake = {
	anonim: 'https://www.dropbox.com/scl/fi/sks1ev84hzfn51ioyvc8i/Polish_20240713_012423332.png?rlkey=u0ois19wbwev64z6thffpssys&st=ifry548i&dl=1',
	thumbnailUrl: 'https://www.dropbox.com/scl/fi/clhg2cxrytp61buq9zc9x/Polish_20240713_075339555.jpg?rlkey=a3c9ydvvp2q9fbnsuz8sxczvm&st=juws7q1p&dl=1',
	thumbnail: fs.readFileSync('./imagenes/icon.png'),
	docs: fs.readFileSync('./imagenes/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

//sticker 
global.stik = 'https://telegra.ph/file/3e2cd918bec03017ebd57.jpg'
global.thumb = fs.readFileSync('./imagenes/icon.png')
//mess
global.mess = {
    premium: ('*Este comando es solo para usuarios premium*'),
    done: ('*¿Listo hermano? ¡Listo!*'),
    owner: ('*Este comando solo puede ser usado por el propietario!*'),
    wait: ('*⏳ ¡Procesando!*'),
    group: '*¡Este comando solo se puede usar en un grupo de chat!*',
    admin: '*¡Este comando solo puede ser usado por los administradores del grupo!*',
    botAdmin: '*¡Este comando solo se puede usar cuando el bot es administrador del grupo!*',
    linkvalid: '*¡El enlace proporcionado no es válido!*',
    error: '*¡Se ha producido un error!*',
    limit: '*¡Has alcanzado tu límite!\nEscribe .buylimit para comprar más límite*',
    regis: ('*¡Aún no te has registrado!\nPor favor, regístrate con .reg*'),
}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})