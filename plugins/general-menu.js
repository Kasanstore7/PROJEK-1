/** Menu Untuk Whatsapp List Ringan 
 Udah gua buat biar ringan cuma gak manggil semua menu

Note:
Ini ada menu payment tujuan nya biar kalo lu run panel atau 
Run di platform yang kecil disk nya ( penyimpanan )
Agar terap bisa di gunakan dan tidak ada kendala seperti
[Error: ENOENT: no such file or directory, open ''] 
**/ 

var handler = async (m, { 
conn 
}) => {
const templateButtons = [
  {index: 1, urlButton: {displayText: 'Website Bot', url: 'https://bit.ly/SaxiaShop'}},
  {index: 2, quickReplyButton: {displayText: 'ᴍᴇɴᴜ', id: '.menulist'}},
  {index: 3, quickReplyButton: {displayText: 'ᴀʟʟ', id: '.? all'}},
]
let atas = `Hai Kak👋
❑ Saꭙࣼia˘Botz ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʏᴀɴɢ ᴅɪʙᴜᴀᴛ ᴅᴇɴɢᴀɴ ɴᴏᴅᴇᴊs. 
ᴅᴀɴ ᴋᴇᴍᴜɴɢᴋɪɴᴀɴ ᴍᴇᴍɪʟɪᴋɪ sᴇᴅɪᴋɪᴛ ʙᴜɢ.
ғɪᴛᴜʀ ᴅᴀʀɪ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ʙᴇʀsᴇɴᴀɴɢ sᴇɴᴀɴɢ ᴀᴛᴀᴜ
ᴍᴇɴɢᴅᴏᴡɴʟᴏᴀᴅ sᴇsᴜᴀᴛᴜ.
klik button dibawah Dan jangan Spam!!`
var keiko = {
caption: atas,
image: { 
url: "https://telegra.ph/file/b993bdac4ba1d327da3be.jpg"},		
footer: '「 http://ẉ˘Saꭙࣼia.id 」',
templateButtons: templateButtons,
}
await conn.sendMessage(m.chat, keiko,m)
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m(enu)?|help|\?)$/i
handler.limit = 1

module.exports = handler
