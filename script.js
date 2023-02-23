window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    var hole = document.getElementById("hole");
    var block = document.getElementById("block");
    var bird = document.getElementById("bird");
    var counter =0;
    var flying =0;
    
    hole.addEventListener("animationiteration", () => {
        var random = - ((Math.random() * 450) + 225);
		hole.style.top = random + "px";
        counter++;
				
    })

    setInterval(function () {
      
var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        
if (flying === 0) {
    bird.style.top = (birdTop + 5) + "px";
}
var blockSide = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
var holeTop =parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
var cTop = -(750 - birdTop);
if ((birdTop > 590) || ((blockSide < 30) && (blockSide > -30) && ((cTop < holeTop) ||( cTop > holeTop + 200))))  {
    alert("GAME OVER. SCORE: " + (counter - 1));
    bird.style.top = 100 + "px";
    counter = 0;
}

}, 30);

function fly() {
    flying = 1;
    let flyCount = 0;
            
            
    var flyInterval = setInterval(() => {
        var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if ((birdTop > 10) && (flyCount < 20)) {
            bird.style.top = (birdTop - 6) + "px"
        }
        if (flyCount > 17) {
            clearInterval(flyInterval);
            flying = 0;
            flyCount = 0;
        }
        flyCount++
    }, 30);
}
    
   
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        fly()
    }
})
});