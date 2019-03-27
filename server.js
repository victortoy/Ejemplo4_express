const express = require('express')
const app = express()
var five = require('johnny-five')
var board = new five.Board()
var led

board.on("ready", function(){
	led = new five.Led(8)	
})

app.get('/control', function(req, res){	
	led.stop()
	switch(req.query.accion){
		case 'apagar':
			led.off()
			break
		case 'prender':
			led.on()
			break
		default:
			led.blink(500)
	}	
	res.send("hola soy user")
})

app.use(express.static('public'))

app.listen(8900, function(){
	console.log('Escuchando en el puerto 8900')
})