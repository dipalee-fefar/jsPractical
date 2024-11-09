var EventEmitter = require('events');
class MyEmitter extends EventEmitter{
    startsTicks(){
        setInterval(()=>{
            this.emit("tick")
        },1000);
    }
}
var ticker = new MyEmitter();
ticker.on ("tick",function(){
    console.log("tick event firred");
});
ticker.startsTicks();