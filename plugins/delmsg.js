let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `use *${usedPrefix}list${which}* para ver a lista`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `'${text}' não listado na lista de mensagens`
    delete msgs[text]
    m.reply(`Excluiu com sucesso a mensagem na lista de mensagens com o nome '${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^(-|del)(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler
