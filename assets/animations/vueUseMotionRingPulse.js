export const ringPulseScren = {
    initial:{
        scale:1.5,
        opacity:0,
        y:-900,
        x:3000,
        rotate:15
    },
    enter:{
        scale:1.4,
        opacity:1,
        x:-3000,
        y:900,
        rotate:90,
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            delay: 700,
            duration:15000
        }
    },
    leave:{
        x:0
    }
}