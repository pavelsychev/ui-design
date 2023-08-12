import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


  gsap.registerPlugin(ScrollTrigger);

  let mediaAnimation = gsap.matchMedia();
  
   mediaAnimation.add("(min-width: 1360px)", () => { 
  //type-face section start
  const tlPromo = gsap.timeline({})
  tlPromo.to('.type-face__letter-container', {
      duration: 1.9,
      x: 0,
      ease: "back.out(1.1)"
  })
  tlPromo.to('.type-face__font', {
      duration: 1.9,
      x: 0,
      ease: "back.out(1.1)"
  }, '<')
//type-face section end

//colors section start
  gsap.from('.colors__palette', {
      stagger: 0.1,
      opacity: 0,
      yPercent: 20,
      scrollTrigger: {
          trigger: '.colors',
          start: 'top 25%',
          toggleActions: 'play none none reverse',
      }
  })
       
    gsap.from('.icons__kit-content', {
        stagger: 0.2,
        opacity: 0,
        yPercent: 50,
        scrollTrigger: {
            trigger: '.icons',
            start: 'top 30%',
            toggleActions: 'play none none reverse',
        }
    })
//colors section end

//form section start

//validation start
    const tlFormValidation = gsap.timeline({
        scrollTrigger: {
            trigger: '.form',
            start: 'top 25%',
            toggleActions: 'play none none reverse',
        }
    })
    tlFormValidation.from('.form__validation-one', {
        duration: 0.5,
        opacity: 0,
        xPercent: -50,
    },'<')
    tlFormValidation.from('.form__validation-three', {
        duration: 0.5,
        opacity: 0,
        xPercent: -50,
    },'<')
    tlFormValidation.from('.form__validation-two', {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
    },'<')
    tlFormValidation.from('.form__validation-four', {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
    },'<')
//validation end

//search start
    const tlFormSearch = gsap.timeline({
        scrollTrigger: {
            trigger: '.form__validation',
            start: 'top 25%',
            toggleActions: 'play none none reverse',
        }
    })
    tlFormSearch.from('.form__search', {
        duration: 1,
        opacity: 0,
        xPercent: 50,
    })
//search end

//select start
    const tlFormSelect = gsap.timeline({
        scrollTrigger: {
            trigger: '.form__validation',
            start: 'top 25%',
            toggleActions: 'play none none reverse',
        }
    })
    tlFormSelect.from('.form__select', {
        duration: 1,
        opacity: 0,
        xPercent: -50,
    })

    const tlFormText = gsap.timeline({
        scrollTrigger: {
            trigger: '.form__select',
            start: 'top 20%',
            toggleActions: 'play none none reverse',
        }
    })
//select end

//text-area start
    tlFormText.from('.form-text-area-one', {
        duration: 0.5,
        opacity: 0,
        xPercent: -50,
    },'<')
    tlFormText.from('.form-text-area-three', {
        duration: 0.5,
        opacity: 0,
        xPercent: -50,
    },'<')
    tlFormText.from('.form-text-area-two', {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
    },'<')
    tlFormText.from('.form-text-area-four', {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
    },'<')
//text-area end

//counter start
    const tlFormCount = gsap.timeline({
        scrollTrigger: {
            trigger: '.form__text',
            start: 'top 20%',
            toggleActions: 'play none none reverse',
        }
    })
    tlFormCount.from('.form__counter-one', {
        duration: 0.5,
        opacity: 0,
        xPercent: -50,
    },'<')
    tlFormCount.from('.form__counter-two', {
        duration: 0.5,
        opacity: 0,
        xPercent: -50,
    },'<')
    tlFormCount.from('.form__counter-three', {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
    },'<')
    tlFormCount.from('.form__counter-four', {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
    },'<')
//counter end

//checkbox start
    const tlFormCheckbox = gsap.timeline({
        scrollTrigger: {
            trigger: '.form__counters',
            start: 'top 50%',
            toggleActions: 'play none none reverse',
        }
    })
    tlFormCount.from('.form__checkboxes-one', {
        duration: 1,
        opacity: 0,
        xPercent: -100,
    },'<')
    tlFormCount.from('.form__checkboxes-two', {
        duration: 1,
        opacity: 0,
        xPercent: 100,
    },'<')

    tlFormCheckbox.from('.form__checkboxes-radio-one', {
        duration: 1,
        opacity: 0,
        xPercent: -100,
    },'<')
    tlFormCheckbox.from('.form__checkboxes-radio-two', {
        duration: 1,
        opacity: 0,
        xPercent: 100,
    },'<')

    tlFormCheckbox.from('.form__checkboxes-toggle-one', {
        duration: 1,
        opacity: 0,
        xPercent: -100,
    },'<')
    tlFormCheckbox.from('.form__checkboxes-toggle-two', {
        duration: 1,
        opacity: 0,
        xPercent: 100,
    },'<')
    const tlRange = gsap.timeline({
        scrollTrigger: {
            trigger: '.form__checkboxes-toggle',
            start: 'top 50%',
            toggleActions: 'play none none reverse',
        }
    })
//checkbox end

//range start
    tlRange.from('.form__range-one', {
        duration: 0.8,
        opacity: 0,
        xPercent: -100,
    },'<')
    tlRange.from('.form__range-two', {
        duration: 0.8,
        opacity: 0,
        xPercent: 100,
    },'<')
//range end

//tag start
    gsap.from('.form__tag',{
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: 'sine.inOut(0.5)',
        stagger: {
            from: 'start',
            amount: 0.5,
            each: 0.5,
        },
        yPercent: 20,
        scrollTrigger: {
            trigger: '.form__range',
            start: 'top 50%',
            toggleActions: 'play none none reverse'
        }
})
//tag end

//button start
gsap.from('.form__small-button',{
    xPercent: 100,
    opacity: 0,
    scale: 0,
    duration: 0.5,
    ease: 'sine.inOut(0.5)',
    stagger: {
        from: 'start',
        amount: 0.8,
        each: 0.8,
    },
    scrollTrigger: {
        trigger: '.form__tag',
        start: 'top 30%',
        toggleActions: 'play none none reverse'
    }
})
gsap.from('.form__middle-button',{
    xPercent: -100,
    opacity: 0,
    scale: 0,
    duration: 0.5,
    ease: 'sine.inOut(0.5)',
    stagger: {
        from: 'end',
        amount: 0.8,
        each: 0.8,
    },
    scrollTrigger: {
        trigger: '.form__small-buttons',
        start: 'top 20%',
        toggleActions: 'play none none reverse'
    }
})

gsap.from('.form__big-button',{
    yPercent: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'back.inOut(0.8)',
    scrollTrigger: {
        trigger: '.form__middle-buttons',
        start: 'top 20%',
        toggleActions: 'play none none reverse'
    }
})
//button end

//alert start
const tlAlert = gsap.timeline({
    scrollTrigger: {
        trigger: '.form__big-buttons',
        start: 'top 10%',
        toggleActions: 'play none none reverse',
    }
})
tlAlert.from('.form__alert:nth-child(1)', {
    ease: 'expo.out(1)',
    duration: 0.8,
    opacity: 0,
    xPercent: -100,
},'<')
tlAlert.from('.form__alert:nth-child(2)', {
    ease: 'expo.out(1)',
    duration: 0.8,
    opacity: 0,
    xPercent: 100,
},'<')
tlAlert.from('.form__alert:nth-child(3)', {
    ease: 'expo.out(1)',
    duration: 0.8,
    opacity: 0,
    xPercent: -100,
},'<')
tlAlert.from('.form__alert:nth-child(4)', {
    ease: 'expo.out(1)',
    duration: 0.8,
    opacity: 0,
    xPercent: 100,
},'<')
tlAlert.from('.form__alert:nth-child(5)', {
    ease: 'expo.out(1)',
    duration: 0.8,
    opacity: 0,
    xPercent: -100,
},'<')
tlAlert.from('.form__alert:nth-child(6)', {
    ease: 'expo.out(1)',
    duration: 0.8,
    opacity: 0,
    xPercent: 100,
},'<')
//alert end

//progress bar start
const tlBar = gsap.timeline({
    scrollTrigger: {
        trigger: '.form__alerts',
        start: 'top top',
        toggleActions: 'play none none reverse',
    }
})
tlBar.from('.form__progress-bar-index', {
    width: '0',
    opacity: 0,
    duration: 2,
    ease: 'back.inOut(2)',
})
//progress bar end

//loader start
gsap.from('.form__loader', {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.form__progress-bars',
        start: 'top 10%',
        toggleActions: 'play none none reverse',
    }
})
//loader end

//form section end

//logo section start
gsap.from('.logos__inner', {
    yPercent: 100,
    scrub: true,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1)',
    scrollTrigger: {
        trigger: '.logos',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
//logo section end

//avatar section start
gsap.from('.avatars__circle', {
    duration: 1,
    scale: 0,
    stagger: {
        from: 'start',
        amount: 0.5,
        each: 0.5,
    },
    scrollTrigger: {
        trigger: '.logos',
        start: 'top 10%',
        toggleActions: 'play none none reverse',
    }
})
gsap.from('.avatars__square', {
    scale: 0,
    duration: 1,
    stagger: {
        from: 'end',
        amount: 0.5,
        each: 0.5,
    },
    scrollTrigger: {
        trigger: '.logos',
        start: 'top 10%',
        toggleActions: 'play none none reverse',
    }
})
//avatar section end

//list-rating section start
gsap.from('.list-rating__item', {
    scale: 0,
    duration: 1,
    opacity: 0,
    yPercent: 100,
    stagger: {
        from: 'random',
        amount: 1,
        each: 1,
    },
    scrollTrigger: {
        trigger: '.avatars',
        start: 'top 10%',
        toggleActions: 'play none none reverse',
    }
})
//list-rating section end

//popover section start
gsap.from('.popover__item', {
    scale: 0,
    duration: 1,
    opacity: 0,
    yPercent: -100,
    ease: 'back.out(2)',
    stagger: {
        from: 'random',
        amount: 1,
        each: 1,
    },
    scrollTrigger: {
        trigger: '.popover',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
//popover section end

//tooltip section start
gsap.from('.tooltip__item', {
    duration: 1,
    opacity: 0,
    xPercent: 100,
    ease: 'sine.out(1)',
    stagger: {
        from: 'random',
        amount: 1.2,
        each: 1.2,
    },
    scrollTrigger: {
        trigger: '.tooltip',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
//tooltip section end

// misc section start
gsap.from('.misc__inner', {
    duration: 1,
    opacity: 0.5,
    rotation: 20,
    repeat: 2,
    ease: 'back.inOut(2)',
    yoyo: true,
    ease: 'sine.inOut(0.5)',
    scrollTrigger: {
        trigger: '.misc',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
// misc section end

// type-scale section start
const tlTitleOne = gsap.timeline({
    scrollTrigger: {
        trigger: '.type-scale',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
tlTitleOne.from('.type-scale__one', {
    ease: 'back.inOut(1)',
    duration: 0.8,
    opacity: 0,
    stagger: 0.3,
    yPercent: -50,
},'<')
tlTitleOne.from('.type-scale__two', {
    ease: 'back.inOut(1)',
    duration: 0.8,
    opacity: 0,
    yPercent: 50,
},'<')
tlTitleOne.from('.type-scale__three', {
    ease: 'back.inOut(1)',
    duration: 0.8,
    opacity: 0,
    yPercent: -50,
},'<')
const tlTitleTwo = gsap.timeline({
    scrollTrigger: {
        trigger: '.type-scale',
        start: '=+20%',
        toggleActions: 'play none none reverse',
    }
})
tlTitleTwo.from('.type-scale__four', {
    ease: 'back.inOut(1)',
    duration: 0.8,
    opacity: 0,
    yPercent: 50,
},'<')
tlTitleTwo.from('.type-scale__five', {
    ease: 'back.inOut(1)',
    duration: 0.8,
    opacity: 0,
    yPercent: -50,
},'<')
tlTitleTwo.from('.type-scale__six', {
    ease: 'back.inOut(1)',
    duration: 0.8,
    opacity: 0,
    yPercent: 50,
},'<')
const tlTitleThree = gsap.timeline({
    scrollTrigger: {
        trigger: '.type-scale',
        start: '=+50%',
        toggleActions: 'play none none reverse',
    }
})
tlTitleThree.from('.type-scale__seven', {
    duration: 0.5,
    opacity: 0,
    xPercent: 300
})
// type-scale section end

// headers section start
gsap.from('.headers__inner-container', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.headers',
        start: 'top 40%',
        end: 'bottom 15%',
        scrub: 1,
    }
})
//headers section end

// flaps section start
const tlFlapOne = gsap.timeline({
    scrollTrigger: {
        trigger: '.flaps',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
tlFlapOne.from('.flaps__desc-one', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    yPercent: 50,
},'<')
tlFlapOne.from('.flaps__pic-one', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    xPercent: 50,
},'<')

const tlFlapTwo = gsap.timeline({
    scrollTrigger: {
        trigger: '.flaps',
        start: '=+10%',
        toggleActions: 'play none none reverse',
    }
})
tlFlapTwo.from('.flaps__desc-two', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    xPercent: 50,
    yPercent: -50,
},'<')
tlFlapTwo.from('.flaps__pic-two', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    yPercent: 50,
    xPercent: -50,
},'<')
const tlFlapThree = gsap.timeline({
    scrollTrigger: {
        trigger: '.flaps',
        start: '=+30%',
        toggleActions: 'play none none reverse',
    }
})
tlFlapThree.from('.flaps__desc-three', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    xPercent: 50,
    yPercent: -50,
},'<')
tlFlapThree.from('.flaps__pic-three', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    yPercent: 50,
    xPercent: -50,
},'<')

gsap.from('.flaps__four-bullet-pic', {
    duration: 1,
    ease: 'power1.in(2)',
    scale: 0,
    rotation: 1060,
    scrollTrigger: {
        trigger: '.flaps',
        start: '=+50%',
        toggleActions: 'play none none reverse'
    } 
    })
//flaps section end

// modals section start
gsap.from('.modals__inner', {
    yPercent: -20,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(3)',
    scrollTrigger: {
        trigger: '.modals',
        start: 'top 20%',
        toggleActions: 'play none none reverse'
    } 
    })
//modals section end

// callout section start
gsap.from('.callout__one', {
    yPercent: -50,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(3)',
    scrollTrigger: {
        trigger: '.callout',
        start: 'top 20%',
        toggleActions: 'play none none reverse'
    } 
    })
    gsap.from('.callout__two', {
        yPercent: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'back.out(3)',
        scrollTrigger: {
            trigger: '.callout',
            start: '=+10%',
            toggleActions: 'play none none reverse'
        } 
        })
        gsap.from('.callout__three', {
            yPercent: -50,
            opacity: 0,
            duration: 1.5,
            ease: 'back.out(3)',
            scrollTrigger: {
                trigger: '.callout',
                start: '=+30%',
                toggleActions: 'play none none reverse'
            } 
            })
            gsap.from('.callout__four', {
                yPercent: 50,
                opacity: 0,
                duration: 1.5,
                ease: 'back.out(3)',
                scrollTrigger: {
                    trigger: '.callout',
                    start: '+=50%',
                    toggleActions: 'play none none reverse'
                } 
                })
//callout section end

// charts section start
gsap.from('.charts__bar-chart', {
    yPercent: 100,
    xPercent: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'power3(1.5)',
    scrollTrigger: {
        trigger: '.charts',
        start: 'top 20%',
        toggleActions: 'play none none reverse'
    } 
    })
    gsap.from('.charts__line-chart', {
        yPercent: 100,
        xPercent: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3(1.5)',
        scrollTrigger: {
            trigger: '.charts',
            start: 'top 20%',
            toggleActions: 'play none none reverse'
        } 
        })
        gsap.from('.charts__donut-chart', {
            scale: 0,
            rotation: 600,
            opacity: 0,
            height: 0,
            duration: 2,
            ease: 'power3(2)',
            scrollTrigger: {
                trigger: '.charts',
                start: '=+10%',
                toggleActions: 'play none none reverse'
            } 
            })
// charts section end

//cards section start
const tlCardOne = gsap.timeline({
    scrollTrigger: {
        trigger: '.cards',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
tlCardOne.from('.cards__card-one-pic', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    xPercent: 50,
    yPercent: -50,
},'<')
tlCardOne.from('.cards__card-one-content', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    yPercent: 50,
    xPercent: -50,
},'<')
gsap.set('.cards__card-two', {
    backgroundPosition: '0 -500px'
}, '<')
tlCardOne.to('.cards__card-two', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    backgroundPosition: '0 0',
},'<')

tlCardOne.from('.cards__card-two-content', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    yPercent: 50,
},'<')
tlCardOne.from('.cards__card-three-content', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    yPercent: -50,
    xPercent: 50,
},'<')

const tlCardTwo = gsap.timeline({
    scrollTrigger: {
        trigger: '.cards',
        start: '=+10%',
        toggleActions: 'play none none reverse',
    }
})
tlCardTwo.from('.cards__card-color', {
    ease: 'back.inOut(3)',
    duration: 1,
    opacity: 0,
    xPercent: -100,
    stagger: 0.2,
    rotation: 20
},'<')
//cards section end

//forms section start
const tlFormsOne = gsap.timeline({
    scrollTrigger: {
        trigger: '.forms',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
tlFormsOne.from('.forms__contact-us-title', {
    ease: 'power2(0.5)',
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
    scale: 6,
    xPercent: 100,
}, '>')
tlFormsOne.from('.forms__contact-us-text', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 6,
    xPercent: 100,
}, '>')
tlFormsOne.from('.forms__contact-us-form', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 6,
    xPercent: 100,
}, '>')

const tlFormsTwo = gsap.timeline({
    scrollTrigger: {
        trigger: '.forms',
        start: '=+15%',
        toggleActions: 'play none none reverse',
    }
})
tlFormsTwo.from('.forms__sign-in-title', {
    ease: 'power2(0.5)',
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
    scale: 5,
    xPercent: -100,
}, '>')
tlFormsTwo.from('.forms__sign-in-text', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 5,
    xPercent: -100,
}, '>')

tlFormsTwo.from('.forms__sign-in-form', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 5,
    xPercent: -100,
}, '>')

const tlFormsThree = gsap.timeline({
    scrollTrigger: {
        trigger: '.forms',
        start: '=+15%',
        toggleActions: 'play none none reverse',
    }
})
tlFormsThree.from('.forms__account-title', {
    ease: 'power2(0.5)',
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
    scale: 5,
    xPercent: 400,
}, '>')
tlFormsThree.from('.forms__account-text', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 5,
    xPercent: 400,
}, '>')
tlFormsThree.from('.forms__account-form', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 5,
    xPercent: 500,
}, '>')

const tlFormsFour = gsap.timeline({
    scrollTrigger: {
        trigger: '.forms',
        start: '=+50%',
        toggleActions: 'play none none reverse',
    }
})
tlFormsFour.from('.forms__reset-title', {
    ease: 'power2(0.5)',
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
    scale: 3,
    xPercent: 100,
}, '>')
tlFormsFour.from('.forms__reset-text', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 3,
    xPercent: 100,
}, '>')
tlFormsFour.from('.forms__reset-forgot', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 3,
    xPercent: 100,
}, '>')

tlFormsFour.from('.forms__reset-form', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 3,
    xPercent: 100,
}, '>')
//forms section end
});
mediaAnimation.add("(max-width: 1359px)", () => {
    //type-face section start
  const tlPromo = gsap.timeline({})
  
  tlPromo.to('.type-face__letter-container', {
      duration: 1.9,
      x: 0,
      ease: "back.out(1.1)"
  })
  tlPromo.to('.type-face__font', {
      duration: 1.9,
      x: 0,
      ease: "back.out(1.1)"
  }, '<')
//type-face section end

//colors section start
gsap.from('.colors__palette', {
    stagger: 0.1,
    opacity: 0,
    yPercent: 20,
    scrollTrigger: {
        trigger: '.colors',
        start: 'top 25%',
        toggleActions: 'play none none reverse',
    }
})
// colors section end

//icons section start
const iconsT = document.querySelectorAll('.icons__kit-content');
iconsT.forEach(icon => {
    gsap.from(icon, {
        duration: 0.8,
        opacity: 0,
        yPercent: 50,
        ease: "back.out(1)",
        scrollTrigger: {
            trigger: icon,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
        }
    })
})
//icons section end

//form section start

//validation start
    const tlFormValidation = gsap.timeline({
        scrollTrigger: {
            trigger: '.form',
            start: 'top 25%',
            toggleActions: 'play none none reverse',
        }
    })
    tlFormValidation.from('.form__validation-one', {
        duration: 0.5,
        opacity: 0,
        xPercent: -50,
    },'<')
    tlFormValidation.from('.form__validation-three', {
        duration: 0.5,
        opacity: 0,
        xPercent: -50,
    },'<')
    tlFormValidation.from('.form__validation-two', {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
    },'<')
    tlFormValidation.from('.form__validation-four', {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
    },'<')
//validation end

//search start
    const tlFormSearch = gsap.timeline({
        scrollTrigger: {
            trigger: '.form__validation',
            start: 'top 25%',
            toggleActions: 'play none none reverse',
        }
    })
    tlFormSearch.from('.form__search', {
        duration: 1,
        opacity: 0,
        xPercent: 50,
    })
//search end

//select start
    const tlFormSelect = gsap.timeline({
        scrollTrigger: {
            trigger: '.form__validation',
            start: 'top 25%',
            toggleActions: 'play none none reverse',
        }
    })
    tlFormSelect.from('.form__select', {
        duration: 1,
        opacity: 0,
        xPercent: -50,
    })

    const tlFormText = gsap.timeline({
        scrollTrigger: {
            trigger: '.form__select',
            start: 'top 20%',
            toggleActions: 'play none none reverse',
        }
    })
//select end

//text-area start
    tlFormText.from('.form-text-area-one', {
        duration: 0.5,
        opacity: 0,
        xPercent: -50,
    },'<')
    tlFormText.from('.form-text-area-three', {
        duration: 0.5,
        opacity: 0,
        xPercent: -50,
    },'<')
    tlFormText.from('.form-text-area-two', {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
    },'<')
    tlFormText.from('.form-text-area-four', {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
    },'<')
//text-area end

//counter start
    const tlFormCount = gsap.timeline({
        scrollTrigger: {
            trigger: '.form__text',
            start: 'top 20%',
            toggleActions: 'play none none reverse',
        }
    })
    tlFormCount.from('.form__counter-one', {
        duration: 0.5,
        opacity: 0,
        xPercent: -50,
    },'<')
    tlFormCount.from('.form__counter-two', {
        duration: 0.5,
        opacity: 0,
        xPercent: -50,
    },'<')
    tlFormCount.from('.form__counter-three', {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
    },'<')
    tlFormCount.from('.form__counter-four', {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
    },'<')
//counter end

//checkbox start
    const tlFormCheckbox = gsap.timeline({
        scrollTrigger: {
            trigger: '.form__counters',
            start: 'top 50%',
            toggleActions: 'play none none reverse',
        }
    })
    tlFormCount.from('.form__checkboxes-one', {
        duration: 1,
        opacity: 0,
        xPercent: -100,
    },'<')
    tlFormCount.from('.form__checkboxes-two', {
        duration: 1,
        opacity: 0,
        xPercent: 100,
    },'<')

    tlFormCheckbox.from('.form__checkboxes-radio-one', {
        duration: 1,
        opacity: 0,
        xPercent: -100,
    },'<')
    tlFormCheckbox.from('.form__checkboxes-radio-two', {
        duration: 1,
        opacity: 0,
        xPercent: 100,
    },'<')

    tlFormCheckbox.from('.form__checkboxes-toggle-one', {
        duration: 1,
        opacity: 0,
        xPercent: -100,
    },'<')
    tlFormCheckbox.from('.form__checkboxes-toggle-two', {
        duration: 1,
        opacity: 0,
        xPercent: 100,
    },'<')
    const tlRange = gsap.timeline({
        scrollTrigger: {
            trigger: '.form__checkboxes-toggle',
            start: 'top 50%',
            toggleActions: 'play none none reverse',
        }
    })
//checkbox end

//range start
    tlRange.from('.form__range-one', {
        duration: 0.8,
        opacity: 0,
        xPercent: -100,
    },'<')
    tlRange.from('.form__range-two', {
        duration: 0.8,
        opacity: 0,
        xPercent: 100,
    },'<')
//range end

//tag start
    gsap.from('.form__tag',{
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: 'sine.inOut(0.5)',
        stagger: {
            from: 'start',
            amount: 0.5,
            each: 0.5,
        },
        yPercent: 20,
        scrollTrigger: {
            trigger: '.form__range',
            start: 'top 50%',
            toggleActions: 'play none none reverse'
        }
})
//tag end

//button start
gsap.from('.form__small-button',{
    xPercent: 100,
    opacity: 0,
    scale: 0,
    duration: 0.5,
    ease: 'sine.inOut(0.5)',
    stagger: {
        from: 'start',
        amount: 0.8,
        each: 0.8,
    },
    scrollTrigger: {
        trigger: '.form__tag',
        start: 'top 30%',
        toggleActions: 'play none none reverse'
    }
})
gsap.from('.form__middle-button',{
    xPercent: -100,
    opacity: 0,
    scale: 0,
    duration: 0.5,
    ease: 'sine.inOut(0.5)',
    stagger: {
        from: 'end',
        amount: 0.8,
        each: 0.8,
    },
    scrollTrigger: {
        trigger: '.form__small-buttons',
        start: 'top 20%',
        toggleActions: 'play none none reverse'
    }
})

gsap.from('.form__big-button',{
    yPercent: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'back.inOut(0.8)',
    scrollTrigger: {
        trigger: '.form__middle-buttons',
        start: 'top 20%',
        toggleActions: 'play none none reverse'
    }
})
//button end

//alert start
const tlAlert = gsap.timeline({
    scrollTrigger: {
        trigger: '.form__big-buttons',
        start: 'top 10%',
        toggleActions: 'play none none reverse',
    }
})
tlAlert.from('.form__alert:nth-child(1)', {
    ease: 'expo.out(1)',
    duration: 0.8,
    opacity: 0,
    xPercent: -100,
},'<')
tlAlert.from('.form__alert:nth-child(2)', {
    ease: 'expo.out(1)',
    duration: 0.8,
    opacity: 0,
    xPercent: 100,
},'<')
tlAlert.from('.form__alert:nth-child(3)', {
    ease: 'expo.out(1)',
    duration: 0.8,
    opacity: 0,
    xPercent: -100,
},'<')
tlAlert.from('.form__alert:nth-child(4)', {
    ease: 'expo.out(1)',
    duration: 0.8,
    opacity: 0,
    xPercent: 100,
},'<')
tlAlert.from('.form__alert:nth-child(5)', {
    ease: 'expo.out(1)',
    duration: 0.8,
    opacity: 0,
    xPercent: -100,
},'<')
tlAlert.from('.form__alert:nth-child(6)', {
    ease: 'expo.out(1)',
    duration: 0.8,
    opacity: 0,
    xPercent: 100,
},'<')
//alert end

//progress bar start
const tlBar = gsap.timeline({
    scrollTrigger: {
        trigger: '.form__alerts',
        start: 'top top',
        toggleActions: 'play none none reverse',
    }
})
tlBar.from('.form__progress-bar-index', {
    width: '0',
    opacity: 0,
    duration: 2,
    ease: 'back.inOut(2)',
})
//progress bar end

//loader start
gsap.from('.form__loader', {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.form__progress-bars',
        start: 'top 10%',
        toggleActions: 'play none none reverse',
    }
})
//loader end

//form section end

//logo section start
gsap.from('.logos__inner', {
    yPercent: 100,
    scrub: true,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1)',
    scrollTrigger: {
        trigger: '.logos',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
//logo section end

//avatar section start
gsap.from('.avatars__circle', {
    duration: 1,
    scale: 0,
    stagger: {
        from: 'start',
        amount: 0.5,
        each: 0.5,
    },
    scrollTrigger: {
        trigger: '.logos',
        start: 'top 10%',
        toggleActions: 'play none none reverse',
    }
})
gsap.from('.avatars__square', {
    scale: 0,
    duration: 1,
    stagger: {
        from: 'end',
        amount: 0.5,
        each: 0.5,
    },
    scrollTrigger: {
        trigger: '.logos',
        start: 'top 10%',
        toggleActions: 'play none none reverse',
    }
})
//avatar section end

//list-rating section start
gsap.from('.list-rating__item', {
    scale: 0,
    duration: 1,
    opacity: 0,
    yPercent: 100,
    stagger: {
        from: 'random',
        amount: 1,
        each: 1,
    },
    scrollTrigger: {
        trigger: '.avatars',
        start: 'top 10%',
        toggleActions: 'play none none reverse',
    }
})
//list-rating section end

//popover section start
gsap.from('.popover__item', {
    scale: 0,
    duration: 1,
    opacity: 0,
    yPercent: -100,
    ease: 'back.out(2)',
    stagger: {
        from: 'random',
        amount: 1,
        each: 1,
    },
    scrollTrigger: {
        trigger: '.popover',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
//popover section end

//tooltip section start
gsap.from('.tooltip__item', {
    duration: 1,
    opacity: 0,
    xPercent: 100,
    ease: 'sine.out(1)',
    stagger: {
        from: 'random',
        amount: 1.2,
        each: 1.2,
    },
    scrollTrigger: {
        trigger: '.tooltip',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
//tooltip section end

// misc section start
gsap.from('.misc__inner', {
    duration: 1,
    opacity: 0.5,
    rotation: 20,
    repeat: 2,
    ease: 'back.inOut(2)',
    yoyo: true,
    ease: 'sine.inOut(0.5)',
    scrollTrigger: {
        trigger: '.misc',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
// misc section end

// type-scale section start
const tlTitleOne = gsap.timeline({
    scrollTrigger: {
        trigger: '.type-scale',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
tlTitleOne.from('.type-scale__one', {
    ease: 'back.inOut(1)',
    duration: 0.8,
    opacity: 0,
    stagger: 0.3,
    yPercent: -50,
},'<')
tlTitleOne.from('.type-scale__two', {
    ease: 'back.inOut(1)',
    duration: 0.8,
    opacity: 0,
    yPercent: 50,
},'<')
tlTitleOne.from('.type-scale__three', {
    ease: 'back.inOut(1)',
    duration: 0.8,
    opacity: 0,
    yPercent: -50,
},'<')
const tlTitleTwo = gsap.timeline({
    scrollTrigger: {
        trigger: '.type-scale',
        start: '=+20%',
        toggleActions: 'play none none reverse',
    }
})
tlTitleTwo.from('.type-scale__four', {
    ease: 'back.inOut(1)',
    duration: 0.8,
    opacity: 0,
    yPercent: 50,
},'<')
tlTitleTwo.from('.type-scale__five', {
    ease: 'back.inOut(1)',
    duration: 0.8,
    opacity: 0,
    yPercent: -50,
},'<')
tlTitleTwo.from('.type-scale__six', {
    ease: 'back.inOut(1)',
    duration: 0.8,
    opacity: 0,
    yPercent: 50,
},'<')
const tlTitleThree = gsap.timeline({
    scrollTrigger: {
        trigger: '.type-scale',
        start: '=+50%',
        toggleActions: 'play none none reverse',
    }
})
tlTitleThree.from('.type-scale__seven', {
    duration: 0.5,
    opacity: 0,
    xPercent: 300
})
// type-scale section end

// headers section start
gsap.from('.headers__inner-container', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.headers',
        start: 'top 40%',
        end: 'bottom 15%',
        scrub: 1,
    }
})
//headers section end

// flaps section start
const tlFlapOne = gsap.timeline({
    scrollTrigger: {
        trigger: '.flaps',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
tlFlapOne.from('.flaps__desc-one', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    yPercent: 50,
},'<')
tlFlapOne.from('.flaps__pic-one', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    xPercent: 50,
},'<')

const tlFlapTwo = gsap.timeline({
    scrollTrigger: {
        trigger: '.flaps',
        start: '=+10%',
        toggleActions: 'play none none reverse',
    }
})
tlFlapTwo.from('.flaps__desc-two', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    xPercent: 50,
    yPercent: -50,
},'<')
tlFlapTwo.from('.flaps__pic-two', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    yPercent: 50,
    xPercent: -50,
},'<')
const tlFlapThree = gsap.timeline({
    scrollTrigger: {
        trigger: '.flaps',
        start: '=+30%',
        toggleActions: 'play none none reverse',
    }
})
tlFlapThree.from('.flaps__desc-three', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    xPercent: 50,
    yPercent: -50,
},'<')
tlFlapThree.from('.flaps__pic-three', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    yPercent: 50,
    xPercent: -50,
},'<')

gsap.from('.flaps__four-bullet-pic', {
    duration: 1,
    ease: 'power1.in(2)',
    scale: 0,
    rotation: 1060,
    scrollTrigger: {
        trigger: '.flaps',
        start: '=+50%',
        toggleActions: 'play none none reverse'
    } 
    })
//flaps section end

// modals section start
gsap.from('.modals__inner', {
    yPercent: -20,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(3)',
    scrollTrigger: {
        trigger: '.modals',
        start: 'top 20%',
        toggleActions: 'play none none reverse'
    } 
    })
//modals section end

// callout section start
gsap.from('.callout__one', {
    yPercent: -50,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(3)',
    scrollTrigger: {
        trigger: '.callout',
        start: 'top 20%',
        toggleActions: 'play none none reverse'
    } 
    })
    gsap.from('.callout__two', {
        yPercent: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'back.out(3)',
        scrollTrigger: {
            trigger: '.callout',
            start: '=+10%',
            toggleActions: 'play none none reverse'
        } 
        })
        gsap.from('.callout__three', {
            yPercent: -50,
            opacity: 0,
            duration: 1.5,
            ease: 'back.out(3)',
            scrollTrigger: {
                trigger: '.callout',
                start: '=+30%',
                toggleActions: 'play none none reverse'
            } 
            })
            gsap.from('.callout__four', {
                yPercent: 50,
                opacity: 0,
                duration: 1.5,
                ease: 'back.out(3)',
                scrollTrigger: {
                    trigger: '.callout',
                    start: '+=50%',
                    toggleActions: 'play none none reverse'
                } 
                })
//callout section end

// charts section start
gsap.from('.charts__bar-chart', {
    yPercent: 100,
    xPercent: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'power3(1.5)',
    scrollTrigger: {
        trigger: '.charts',
        start: 'top 20%',
        toggleActions: 'play none none reverse'
    } 
    })
    gsap.from('.charts__line-chart', {
        yPercent: 100,
        xPercent: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3(1.5)',
        scrollTrigger: {
            trigger: '.charts',
            start: 'top 20%',
            toggleActions: 'play none none reverse'
        } 
        })
        gsap.from('.charts__donut-chart', {
            scale: 0,
            rotation: 600,
            opacity: 0,
            height: 0,
            duration: 2,
            ease: 'power3(2)',
            scrollTrigger: {
                trigger: '.charts',
                start: '=+10%',
                toggleActions: 'play none none reverse'
            } 
            })
// charts section end

//cards section start
const tlCardOne = gsap.timeline({
    scrollTrigger: {
        trigger: '.cards',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
tlCardOne.from('.cards__card-one-pic', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    xPercent: 50,
    yPercent: -50,
},'<')
tlCardOne.from('.cards__card-one-content', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    yPercent: 50,
    xPercent: -50,
},'<')
gsap.set('.cards__card-two', {
    backgroundPosition: '0 -500px'
}, '<')
tlCardOne.to('.cards__card-two', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    backgroundPosition: '0 0',
},'<')

tlCardOne.from('.cards__card-two-content', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    yPercent: 50,
},'<')
tlCardOne.from('.cards__card-three-content', {
    ease: 'back.inOut(2)',
    duration: 1.5,
    opacity: 0,
    yPercent: -50,
    xPercent: 50,
},'<')

const tlCardTwo = gsap.timeline({
    scrollTrigger: {
        trigger: '.cards',
        start: '=+10%',
        toggleActions: 'play none none reverse',
    }
})
tlCardTwo.from('.cards__card-color', {
    ease: 'back.inOut(3)',
    duration: 1,
    opacity: 0,
    xPercent: -100,
    stagger: 0.2,
    rotation: 20
},'<')
//cards section end

//forms section start
const tlFormsOne = gsap.timeline({
    scrollTrigger: {
        trigger: '.forms',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
    }
})
tlFormsOne.from('.forms__contact-us-title', {
    ease: 'power2(0.5)',
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
    scale: 6,
    xPercent: 100,
}, '>')
tlFormsOne.from('.forms__contact-us-text', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 6,
    xPercent: 100,
}, '>')
tlFormsOne.from('.forms__contact-us-form', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 6,
    xPercent: 100,
}, '>')

const tlFormsTwo = gsap.timeline({
    scrollTrigger: {
        trigger: '.forms',
        start: '=+15%',
        toggleActions: 'play none none reverse',
    }
})
tlFormsTwo.from('.forms__sign-in-title', {
    ease: 'power2(0.5)',
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
    scale: 5,
    xPercent: -100,
}, '>')
tlFormsTwo.from('.forms__sign-in-text', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 5,
    xPercent: -100,
}, '>')

tlFormsTwo.from('.forms__sign-in-form', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 5,
    xPercent: -100,
}, '>')

const tlFormsThree = gsap.timeline({
    scrollTrigger: {
        trigger: '.forms',
        start: '=+15%',
        toggleActions: 'play none none reverse',
    }
})
tlFormsThree.from('.forms__account-title', {
    ease: 'power2(0.5)',
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
    scale: 5,
    xPercent: 400,
}, '>')
tlFormsThree.from('.forms__account-text', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 5,
    xPercent: 400,
}, '>')
tlFormsThree.from('.forms__account-form', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 5,
    xPercent: 500,
}, '>')

const tlFormsFour = gsap.timeline({
    scrollTrigger: {
        trigger: '.forms',
        start: '=+50%',
        toggleActions: 'play none none reverse',
    }
})
tlFormsFour.from('.forms__reset-title', {
    ease: 'power2(0.5)',
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
    scale: 3,
    xPercent: 100,
}, '>')
tlFormsFour.from('.forms__reset-text', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 3,
    xPercent: 100,
}, '>')
tlFormsFour.from('.forms__reset-forgot', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 3,
    xPercent: 100,
}, '>')

tlFormsFour.from('.forms__reset-form', {
    ease: 'power2(0.5)',
    duration: 0.5,
    opacity: 0,
    scale: 3,
    xPercent: 100,
}, '>')
//forms section end
  });
