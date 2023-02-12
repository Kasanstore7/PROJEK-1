var fetch = require('node-fetch')
var handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .flaming2 SAXIA'
  m.reply('_Proses..._')
  var res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${response[0]}`
  conn.sendFile(m.chat, res, 'Saxia.jpg', `「 http://ẉ˘Saꭙࣼia.id 」`, m, false)
}
handler.help = ['flaming2'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming2)$/i

module.exports = handler
