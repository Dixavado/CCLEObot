let handler = async (m, { conn }) => {
  let txt = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : '✔️'}]`).join`\n\n`
  conn.reply(m.chat, 'Lista de Grupos:\n' + txt, m)
}
handler.help = ['groups/grouplist']
handler.tags = ['owner']
handler.command = /^(list)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

