let handler = async m => m.reply(`
☕ *CCLEO :* whatsapp bot\n\n🔗 *URL :* https://ccleo.online
`.trim()) // repository
handler.help = ['ccleo']
handler.tags = ['info']
handler.command = /^ccleo|repo$/i

module.exports = handler
