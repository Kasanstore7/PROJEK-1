var fetch = require('node-fetch')
var handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .grass SAXIA'
  m.reply('_Proses..._')
  var res = `https://api.botcahx.biz.id/api/photooxy/under-grass?text=${response[0]}&apikey=Admin`
  conn.sendFile(m.chat, res, 'Saxia.jpg', `「 http://ẉ˘Saꭙࣼia.id 」`, m, false)
}
handler.help = ['grass'].map(v => v + ' <text>')
handler.tags = ['photooxy']
handler.command = /^(grass)$/i

module.exports = handler
