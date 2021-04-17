

# wechaty-room-forward

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/chatie/wechaty)
[![Wechaty开源激励计划](https://img.shields.io/badge/Wechaty-开源激励计划-green.svg)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)
[![Wechaty Contributor Program](https://img.shields.io/badge/Wechaty-Contributor%20Program-green.svg)](https://wechaty.js.org/docs/contributor-program)

将所在群聊@到自己的消息转发到小号,一个很简单的插件，会监听你所有群聊房间中提到自己的消息进行转发

## Installation

```bash
npm install wechaty-room-forward
```
## Usage

```javascript
const wechatyRoomForward = require("wechaty-room-forward")

const options = {
    botName:'botName',
  	bossName: 'bossName'
}

bot.use(wechatyRoomForward(options))
```

## Completely

```
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
```

## Test

```bash
npm run dev
```

[插件地址](https://www.npmjs.com/package/wechaty-room-forward)

