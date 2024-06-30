function homepageanimation(){
    gsap.set(".slidesm",{scale:5})

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub:3,
    },
})


tl.to(".vdodiv",{
    
    '--clip': "0%",
    ease: Power2,
    
},'a')

tl.to(".slidesm",{
    
    scale:0.8,
    ease: Power2,
   
},'a')
tl.to(".slidesm",{
    
    scale:0.8,
    ease: Power2,
   
},'a')

tl.to(".lft",{
    xPercent:-10,
    stagger:.03,
    ease: Power4,
   
},'b')
tl.to(".rgt",{
    xPercent:10,
    stagger:.03,
    ease: Power4,
   
},'b')
};

function slideanimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub:2,
        },
        xPercent:-200,
        ease:Power4,
    });
};


function mousefollowanimation(){
    document.querySelectorAll(".listelem").forEach(function(el){
        el.addEventListener("mousemove",function(dets){
            gsap.to(this.querySelector(".picture"),{
                x:gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),
                opacity:1,
                ease:Power4,
                duration:.5,
            })
        })
        el.addEventListener("mouseleave",function(dets){
            gsap.to(this.querySelector(".picture"),{
                opacity:0,
                
            })
        })
    })
};

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}


function capsuleanimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1
        },
        y:0,
        ease:Power4
    })
}

function colorsection(){
    document.querySelectorAll(".section").forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start:"top 50%",
            end:"bottom 50%",
            onEnter:function(){
            document.body.setAttribute("theme",e.dataset.color);
            },
            onEnterBack:function(){
                document.body.setAttribute("theme",e.dataset.color);
            }
        })
    })
    
}

colorsection();
loco();
homepageanimation();
slideanimation();
mousefollowanimation();
capsuleanimation();
