function init(){
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    var background = new createjs.Shape();
    let count = 0;
    var text = new createjs.Text("Count:"+count, "20px Arial", "#ff7700");
    var publishvk =  new createjs.Text("Publish to VK", "20px Arial", "blue");
    circle.graphics.beginFill("#FB273A").drawCircle(0, 0, 100);
    background.graphics.beginFill("lightgreen").drawRect(0, 0, 640,500);
    
    circle.x = 250;
    circle.y = 220;
    publishvk.y = 25;
    
    
    circle.on("click", function(evt) {       
        
        
        count++;
        
    });
    publishvk.on('click', function(evt){
        VK.init(function() {
            // API initialization succeeded
            VK.api("wall.post", {"message": "Hello!", "v":"5.73"}, function (data) {
                
                });
         }, function() {
            // API initialization failed
            // Can reload page here
       }, '5.130');
    });
    
    stage.addChild(background);
    stage.addChild(circle);
    stage.addChild(publishvk)
    stage.addChild(text);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
}