const { Wechaty } = require("wechaty");
const { PuppetPadlocal } = require("wechaty-puppet-padlocal");
const Qrterminal = require("qrcode-terminal")
// 插件 wechatyRoomForward
const wechatyRoomForward = require("wechaty-room-forward")

// 初始化 bot
const bot = new Wechaty({
  puppet: new PuppetPadlocal({
    // PUPPET_PADLOCAL_TOKEN TOKEN
    token: 'PUPPET_PADLOCAL_TOKEN',
  }),
})

// 插件参数配置
const options = {
  // 机器人微信昵称
  botName:"蔚蓝",
  // 接收人微信昵称
  bossName: ':)'
}

// 使用插件
bot.use(wechatyRoomForward(options));

bot
  .on("scan", (qrcode, status) => {
	  const qrcodeImageUrl = ["https://api.qrserver.com/v1/create-qr-code/?data=",encodeURIComponent(qrcode),].join("");
    console.log(qrcodeImageUrl)
    Qrterminal.generate(qrcode)
  })
  .start()