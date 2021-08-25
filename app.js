const eye = document.querySelector("#eye");
const svgAll = document.querySelector("#svgAll")

// ANIMATION CODE //
const myAnim = anime({
    targets: eye,
    keyframes: [
        { translateY: 40 },
        { translateX: 950 },
        { translateY: 190 },
        { translateX: 0 },
        { translateY: 0 },
        { translateX: 100, translateY: 100 },
        { scaleY: 3, scaleX: 3, opacity: 0.5, duration: 4000 },
        { scaleY: 3, scaleX: 3, opacity: 1, delay: 1000 },
        { scaleY: 3, scaleX: 3 },

    ],
    duration: 3000,
    easing: 'linear',

});
 myAnim.finished.then(animFinished);

// // SAVE FRAMES (png) CODE //
 let playing = true;

  function animFinished(){
    playing = false;
  }

let num = 0;

// //select svg to save
const shootMe = svgAll;


// //run grab with intervals --- uncomment to use
 //window.setInterval(grab, 33);

// //function to save png at intervals
function grab() {
  if(playing){
    num = num + 1;
    fName = "eye-" + num;
    saveSvgAsPng(shootMe,fName,);
  }else{
//stop intervals when playing is false
    window.clearInterval();
  }
}