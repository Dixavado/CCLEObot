let handler = async m => m.reply(`
ā *CCLEO :* whatsapp bot\n\nš *URL :* https://ccleo.online
`.trim()) // repository
handler.help = ['ccleo']
handler.tags = ['info']
handler.command = /^ccleo|repo$/i

module.exports = handler
