let handler = async (m, { conn, text }) => {
  if (!text) throw 'Nenhum texto'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention <texto>']
handler.tags = ['tools']

handler.command = /^mention$/i

module.exports = handler
