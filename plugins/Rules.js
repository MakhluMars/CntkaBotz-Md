let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `Kebijakan Privasi, Syarat Ketentuan dan Peraturan *FACHRIBOT*

*Kebijakan Privasi*
1. KinanBOT-MD tidak akan merekam data riwayat chat user.
2. KinanBOT-MD tidak akan menyebarkan nomor users.
3. KinanBOT-MD tidak akan menyimpan media yang dikirimkan oleh users.
4. KinanBOT-MD tidak akan menyalah gunakan data data users.
5. Owner KinanBOT-MD berhak melihat data riwayat chat users.
6. Owner KinanBOT-MD berhak melihat status users.
7. Owner KinanBOT-MD dapat melihat riwayat chat, dan media yang dikirimkan users.

*Peraturan KinanBOT-MD*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

*Syarat Ketentuan KinanBOT-MD*
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. KinanBOT-MD dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. KinanBOT-MD *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. KinanBOT-MD akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. KinanBOT-MD bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

~ Jaka

Peraturan: 11/jul/22
`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".menu"},
        {title: 'Sewa Bot', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewaa"},
        {title: 'Nomor Owner', description: "CHAT *P* TIDAK DI BALAS", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: fkontak })
}

handler.alias = ['general']
handler.command = /^(rules|rule)$/i

export default handler
