let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + 'Atenção Grupo: \n' + users.map(v => '@' + v.replace(/@.+/, '')).join`,`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.help = ['tagall']
handler.tags = ['group']
handler.command = /^all$/i

handler.admin = true
handler.group = true

module.exports = handler
