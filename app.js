anime({
    targets: '.moveMe',
    keyframes: [
        { translateY: 40 },
        { translateX: 250 },
        { translateY: 80 },
        { translateX: 0 },
        { translateY: 0 },
        { translateX: 100, translateY: 100 },
        { scaleY: 3, scaleX: 3, opacity: 0.5, duration: 4000 },
        { scaleY: 3, scaleX: 3, opacity: 1, delay: 1000 },
        { scaleY: 3, scaleX: 3 },

    ],
    duration: 2000,
    easing: 'linear',
    loop: true,

});