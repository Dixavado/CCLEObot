// NurNurz
let handler = async (m, { conn, text }) => {
   if (!text) throw `Digite um novo nome para o bot`
     try {
        await conn.updateProfileName(text)
        conn.reply(m.chat, 'Sucesso ao renomear o bot', m)
     } catch (e) {
       console.log(e)
       throw `Error`
     }
}
handler.help = ['setbotname']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i
handler.owner = true

module.exports = handler
