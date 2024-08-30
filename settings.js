const fs = require('fs')
const chalk = require('chalk')
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
}
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
global.ownername = "おSyllkom" //Nombre del owner 
global.owner = ['51933479416'] //Número del owner 
global.version = "0.3",
global.botname = "XiaoBot-MD"
/*global.namebot = Styles("*XiaoBot-MD*")*/
global.namebot = "XiaoBot-MD"
global.prefa = ['','!','.',',','#','/'] 
global.typereply = 'v4' 
global.idchannel = '120003229975019023@newsletter'
global.syllkom = 'https://beacons.ai/syllkom'
global.syllkom2 = ('Powered by @Syllkom')
global.autobio = true // AutoBio
global.autoread = false // ReadChat
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
global.grup_only = false
global.baileys = require('@whiskeysockets/baileys')
//===•===•===•===•===•===•===•===•===•===•===•===•===•===•====•===/>
global.game = true
global.gametiempo = 60
global.bandera = {};

//limite & balance
global.limitawal = 5
global.balanceawal = 10000

global.listv = ['•','●','✦','✧','○']
global.setreply = "v1"
///////Documento falso Este no esta agregado al bot, puedes quitarlo si gustas 
global.fake = {
	anonim: 'https://www.dropbox.com/scl/fi/sks1ev84hzfn51ioyvc8i/Polish_20240713_012423332.png?rlkey=u0ois19wbwev64z6thffpssys&st=ifry548i&dl=1',
	thumbnailUrl: 'https://www.dropbox.com/scl/fi/clhg2cxrytp61buq9zc9x/Polish_20240713_075339555.jpg?rlkey=a3c9ydvvp2q9fbnsuz8sxczvm&st=juws7q1p&dl=1',
	thumbnail: fs.readFileSync('./imagenes/icon.png'),
	docs: fs.readFileSync('./imagenes/fake.json'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

//sticker 
global.stikcker = 'https://telegra.ph/file/3e2cd918bec03017ebd57.jpg'
global.thumb = fs.readFileSync('./imagenes/icon.png')
//mensaje
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