//hd video 1920 X 1080

//the whole svg 
const svgAll = document.querySelector("#svgAll");

// KEYFRAME ANIMATIONS // 

// move all legs up and down
const legMove = anime({
  targets: '#l1, #l2, #l3, #l4',
  keyframes: [
    {translateY: -25},
    {translateY: 0}
  ],
  autoplay: true,
  duration: 100,
  loop:15,
  easing: 'linear',
  delay: anime.stagger(50),
});


// ANIMATION Time line CODE //
const myAnim = anime.timeline({
  easing: 'linear',
});

myAnim
//move targets to start position
.add({
  targets: '#dear',
  translateX: [0,1500],
  duration: 0,
})
//carrot 1 falls down
.add({
  targets: '#c1',
  translateY: ['-110%',0],
  duration: 300,
})
//carrot 2 falls down
.add({
  targets: '#c2',
  translateY: ['-110%',0],
  duration: 300,
},'-=100')
// bucket wobble
.add({
  targets: '#c1, #c2, #carrot-box',
 translateX: [0,8,0], rotate: [0,0,0],
 duration: 200,
})
// deer walks in
.add({
  targets: '#dear',
  translateX: [1500,0],
  duration: 3000,
  easing: 'easeInOutSine',
});

// { scaleY: 3, scaleX: 3, opacity: 0.5, duration: 4000 },
        // { scaleY: 3, scaleX: 3, opacity: 1, delay: 1000 },
  
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

// //function to save png at intervals - scaled to double size and image quality set to best
function grab() {
  if(playing){
    num = num + 1;
    fName = "deer-" + num;
    saveSvgAsPng(shootMe,fName,{scale: 2, encoderOptions:1,});
  }else{
//stop intervals when playing is false
    window.clearInterval();
  }
}

//