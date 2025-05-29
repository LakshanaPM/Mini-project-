const swiper =new Swiper('.swiper',{
    slidePerView:3,
    effect:"creative",
    creativeEffect:{
        prev:{
            translate:[0,0,-400],
        },
        next:{
            translate:["100%",0,0],
        
        },
    },
    Loop: true,
    direction:"horizontal",
    autoplay:{
        delay:5000,
    },
    speed: 400,
    spaceBetween:100,
});
const swiper2=new Swiper(".swiper2",{
    slidePerView:3,
    spaceBetween:35,
    slidePerGroup:1,
    Loop:true,
    fade:true,
    centerSlide:true,
    grabCursor:true,
    LoopfillGroupwithBlank:true,
    
    autoplay:{
        delay:5000,
    },
    speed:400,
    breakpoints:{
        320:{
            slidesPerGroup:1,
            
        },
        768:{
            slidesPerView:2,
         
        },
        968:{
            slidesPerView:3,
           
        }
    }
});
const swiper3=new Swiper(".swiper3",{
    slidesPerView:2,
    spaceBetween:35,
    slidesPerGroup:1,
    Loop:true,
    fade:true,
    centerSlide:true,
    grabCursor:true,
    LoopfillGroupwithBlank:true,
    
    autoplay:{
        delay:5000,
    },
    speed:400,
    breakpoints:{
        320:{
            slidesPerGroup:1,
            
        },
        768:{
            slidesPerView:2,
         
        },
        968:{
            slidesPerView:2,
           
        }
    }
});