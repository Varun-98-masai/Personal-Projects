
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        // var audio = new Audio('./Sounds/audio1.wav');
        // audio.play();
        let type = this.innerHTML
        BtnAnimation(type);
        switch(type){
            case "w" :
                var audio = new Audio('./Sounds/Floor-Tom-Drum.mp3');
                audio.play();
            break;
            
            case "a":
                var audio = new Audio('./Sounds/Ride-Cymbal-Metal.mp3');
                audio.play();
            break;

            case "s":
                var audio = new Audio('./Sounds/Bass-Drum.mp3');
                audio.play();    
            break;

            case "d":
                var audio = new Audio('./Sounds/Snare-Drum.mp3');
                audio.play();
            break;

            case "j":
                var audio = new Audio('./Sounds/Hi-Hat.mp3');
                audio.play();   
            break;

            case "k":
                var audio = new Audio('./Sounds/Small-Tom.mp3');
                audio.play(); 
            break;

            case "l":  
                var audio = new Audio('./Sounds/Medium-Tom.mp3');
                audio.play();      
            break;

            default: alert("Invalid Button");
        }

    });  
}

document.addEventListener("keypress", function(e){
   let key = e.key;
   BtnAnimation(key);
   switch(key){
    case "w" :
        var audio = new Audio('./Sounds/Floor-Tom-Drum.mp3');
        audio.play();
    break;
    
    case "a":
        var audio = new Audio('./Sounds/Ride-Cymbal-Metal.mp3');
        audio.play();
    break;

    case "s":
        var audio = new Audio('./Sounds/Bass-Drum.mp3');
        audio.play();    
    break;

    case "d":
        var audio = new Audio('./Sounds/Snare-Drum.mp3');
        audio.play();
    break;

    case "j":
        var audio = new Audio('./Sounds/Hi-Hat.mp3');
        audio.play();   
    break;

    case "k":
        var audio = new Audio('./Sounds/Small-Tom.mp3');
        audio.play(); 
    break;

    case "l":  
        var audio = new Audio('./Sounds/Medium-Tom.mp3');
        audio.play();      
    break;

    default: alert("Invalid Button");
   }

  
})

function BtnAnimation(currentKey) {
   const activeBtn = document.querySelector("."+currentKey);
   activeBtn.classList.add("pressed")
   console.log(activeBtn);
   setTimeout(() => activeBtn.classList.remove("pressed"),100)
}