export const motionFadeUpDelay ={
    initial:{
        scale:1.1,
        opacity:0,
        y:200,
        x:0,
    },
    visible:{
        scale:1,
        opacity:1,
        x:0,
        y:0,
        transition:{
            type: 'spring',
            stiffness: '100',
            delay: 500,
        }
    }
}

export const motionFadeUpDelay1000 ={
    initial:{
        scale:1.1,
        opacity:0,
        y:200,
        x:0,
    },
    visible:{
        scale:1,
        opacity:1,
        x:0,
        y:0,
        transition:{
            duration:1000,
            type: 'damping',
            stiffness: '10',
            delay: 500,
        }
    }
}


export const motionEnterFadeRigth_500 ={
    initial:{
        scale:1,
        opacity:0,
        y:0,
        x:500,
    },
    enter:{
        scale:1,
        opacity:1,
        x:0,
        y:0,
        transition:{
            type: 'spring',
            stiffness: '100',
            damping: 25,
            mass: 0.5,
            delay: 500,
        }
    }
}

export const motionEnterFadeBottom_500 ={
    initial:{
        scale:1,
        opacity:0,
        y:500,
        x:0,
    },
    enter:{
        scale:1,
        opacity:1,
        x:0,
        y:0,
        transition:{
            type: 'spring',
            stiffness: '100',
            damping: 25,
            mass: 0.5,
            delay: 500,
        }
    }
}

export const motionFadeUpDelayOld ={
    initial:{
        scale:2,
        opacity:0,
        y:100,

        
    },
    enter:{
        scale:1,
        opacity:1,
        y:0,
        transition:{
            duration:500,
        }
    }
}

export const motionRotateSlow = {
    // Rotación infinita
    initial:{
        scale:1,
        rotate:35
    },
    enter:{
        scale:1,
        rotate:15,
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:6000,
        },
    }
}

export const motionRotateFash = {
    // Rotación infinita
    initial:{
        scale:1,
        rotate:15
    },
    enter:{
        scale:1,
        rotate:90,
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:6000,
        },
    }
}