/*[[Ini untuk setting Bot
Untuk gambar background menu 
ada 
di plugins menu
untuk lainya saran jangan 
di ubah bre nanti eror]]*/

/*global owner*/
global.owner = ['6283805685278']  
global.mods = ['6283805685278'] 
global.prems = ['6283805685278']
/*Nomor Owner & payment*/
global.nameowner = 'Tio'
global.numberowner = '6283805685278' 
global.mail = 'marcellsaputra5@gmail.com' //enter your email 🗿
global.dana = '--'
global.pulsa = '--'
global.gopay = '--'
/*Nama Bot & Grouplink*/
global.namebot = '「 http://ẉ˘Saꭙࣼia.id 」'
global.gc = 'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'
global.web = 'https://bit.ly/SaxiaShop'
global.instagram = 'https://instagram.com/m.rxcl_'
/*global wm*/
global.lolkey = 'rey2k22'
global.zenzkey = 'BagasPrdn'
global.wm = '「 http://ẉ˘Saꭙࣼia.id 」'
global.watermark = wm
global.wm2 = '「 http://ẉ˘Saꭙࣼia.id 」'
global.wm3 = '「 http://ẉ˘Saꭙࣼia.id 」'
global.wm4 = '「 http://ẉ˘Saꭙࣼia.id 」'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.wait = '「 Wait 98% 」ᴅɪᴘʀᴏꜱᴇꜱ...'
global.eror = '「 ``404 ᴇʀʀᴏʀ`` 」'
global.benar = 'вєɴαʀ'
global.salah = 'ѕαlαн'
global.stiker_wait = '「98%」Loading...'
global.packname = 'sᴛɪᴄᴋᴇʀ ʙʏ'
global.author = 'Saxia˘Botz\nWa.me/6283111136642'
global.mursid = '+6283111136642'
global.succes = 'Nih Kak Dah Jadi'
/*Rest api setting*/
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'https://api.botcahx.biz.id',
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.botcahx.biz.id': 'Admin', //daftar sendiri kalo abis
  'https://api.lolhuman.xyz': 'Deffbotz',
}

/*Setting Rpg*/
global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

/*Jangan merubah bagian ini!*/
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
