let dice_dom = document.getElementById('dice-game')
let app = new PIXI.Application({ width: 640, height: 360, backgroundColor: 0x227338});

dice_dom.appendChild(app.view)

const style = new PIXI.TextStyle({
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 36,
    fill: '#ebc636'
})
const infoStyle = new PIXI.TextStyle({
    fontFamily: 'Roboto',
    fontSize: 24,
    fill: '#ebc636'
})
const WinStyle = new PIXI.TextStyle({
    fontFamily: 'Roboto',    
    fontSize: 24,
    fill: '#ebc636',
    align: 'center'
})

const TitleGame = new PIXI.Text('Dice game', style)
const PlayerText = new PIXI.Text("Player's number: 0", infoStyle)
const BotText = new PIXI.Text("Bot's number: 0", infoStyle)
const WinText = new PIXI.Text('', WinStyle)
const helpText = new PIXI.Text('Click on the cube ^', infoStyle)

// let cubeContainer = new PIXI.Container()
// let cube = new PIXI.Graphics();
// cube.beginFill(0xffffff);
// cube.drawRect(0, 0, 100, 100);
let cube = PIXI.Sprite.from('./images/dice.png')



PlayerText.y = 36
BotText.y = 60
WinText.x = 300
WinText.y = 50
cube.x = 300
cube.y = 125
helpText.x = 240
helpText.y = 250

cube.interactive = true
cube.buttonMode = true

// texts
app.stage.addChild(TitleGame)
app.stage.addChild(PlayerText)
app.stage.addChild(BotText)
app.stage.addChild(WinText)
app.stage.addChild(helpText)
// cube
app.stage.addChild(cube);

cube.on('pointerdown', onClick);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
let PlayerScore = 0
let BotScore = 0

function onClick() {
    PlayerScore = getRandomInt(1, 6)
    BotScore = getRandomInt(1, 6)

    PlayerText.text = "Player's number: " + PlayerScore
    BotText.text = "Bot's number: " + BotScore

    if(Number(PlayerScore) > Number(BotScore)) {
        // WinText.x = 300
        // WinText.y = 150
        WinText.text = "Player won"
    }
    else if(Number(PlayerScore) < Number(BotScore)) {
        // WinText.x = 300
        // WinText.y = 150
        WinText.text = "Bot won"
    }
    else if(Number(PlayerScore) == Number(BotScore)) {
        // WinText.x = 300
        // WinText.y = 150
        WinText.text = "Tie"
    }
}


