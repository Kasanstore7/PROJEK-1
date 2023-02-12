var fetch = require('node-fetch')
var handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .flaming4 SAXIA'
  m.reply('_Proses..._')
  var res = `https://api.botcahx.biz.id/api/photooxy/illuminated-metallic?text=${response[0]}&apikey=Admin`
  conn.sendFile(m.chat, res, 'Saxia.jpg', `「 http://ẉ˘Saꭙࣼia.id 」`, m, false)
}
handler.help = ['iluminated'].map(v => v + ' <text>')
handler.tags = ['photooxy']
handler.command = /^(iluminated)$/i

module.exports = handler
