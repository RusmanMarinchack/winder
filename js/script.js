"use strict"

new WOW().init();

const swiperWindowsDoors = new Swiper('.windows-doors__swiper', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.windows-doors__swiper-button-next',
        prevEl: '.windows-doors__swiper-button-prev',
      },
});

const swiperBrends = new Swiper('.brends__swiper', {
    spaceBetween: 20,
    slidesPerView: 4.4,

    breakpoints: {

        0: {
            slidesPerView: 2.5,
        },

        640: {
            slidesPerView: 4.5,
        },

        1023: {
            spaceBetween: 0,
        }
    }
});

const swiperOurWorks = new Swiper('.our-works__swiper', {
    spaceBetween: 120,
    slidesPerView: 1.2,
    navigation: {
        nextEl: '.our-works__swiper-button-next',
        prevEl: '.our-works__swiper-button-prev',
      },

    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        1023: {
            spaceBetween: 80,
            slidesPerView: 1.2,
        },

        1279: {
            spaceBetween: 120,
        }
    }
});

// Пишемо функцію яка буде при адаптиві робити з блоку слайдер.
function mobSlideActive(cls) {
    let slideItem = document.querySelectorAll(`.${cls}`)

    if(slideItem.length > 0) {
        slideItem.forEach(slide => {
            if(window.matchMedia("(max-width: 1023.98px)").matches) {
                slide.classList.add('swiper-slide')
            } else {
                slide.classList.remove('swiper-slide')
            }
        })
    }
}
mobSlideActive("brends__swiper-slide")
window.addEventListener('resize', mobSlideActive("brends__swiper-slide"))

// Робимо бургер меню.
function burger() {
    let header = document.querySelector('.header')
    let burger = header.querySelector('.header__burger')

    if(burger) {
        let headerInner = header.querySelector('.header__inner') 

        burger.addEventListener('click', function() {
            this.classList.toggle('active')
            headerInner.classList.toggle('active')
            header.classList.toggle('burger-active')
        })
    }
}
burger()

// Робимо акардеони по сайту.
function accardeonsSite() {
    let accardeons = document.querySelectorAll('.accardeons')

    if(accardeons.length > 0) {
        accardeons.forEach(accardeon => {
            let accardeonHeader = accardeon.querySelectorAll('.accardeons__header')
            
            if(accardeonHeader.length > 0) {
                accardeonHeader.forEach(header => {
                    header.addEventListener('click', function() {
                        let body = this.nextElementSibling
                        let bodyHeight = body.scrollHeight
                        let wrapper = this.parentNode

                        if(this.classList.contains('active')) {
                            removeClassActive()
                            this.classList.remove('active')
                            body.classList.remove('active')
                            wrapper.classList.remove('active')
                            body.style.height = `0px`
                        } else {


                            removeClassActive()
                            this.classList.add('active')
                            body.classList.add('active')
                            wrapper.classList.add('active')
                            body.style.height = `${bodyHeight}px`
                        }
                    })
                })

                // Видаляємо клас active в accardeonHeader.
                function removeClassActive() {
                    accardeonHeader.forEach(header => {
                        if (header.classList.contains('active')) {
                            header.parentNode.classList.remove("active")
                            header.classList.remove("active")

                            let body = header.nextElementSibling
                            console.log(body.classList.contains('active'))
                            if (body) {
                                body.classList.remove('active')
                                body.style.height = `0px`
                            }
                        }
                    });
                }
            }
        })
    }
}
accardeonsSite()

// Робимо таби по сайту.
function heandlerTabs() {
    let tabs = document.querySelectorAll(".tabs")
    let tabsProduct = document.querySelector(".tabs-product") 

    if(tabs.length > 0) {
        tabs.forEach(tab => {
            let tabBtns = tab.querySelectorAll('.tabs__item')

            if(tabBtns.length > 0) {
                tabBtns.forEach(btn => {
                    btn.addEventListener('click', function() {
                        removeActive()
                        this.classList.add('active')

                        let index = this.dataset.tabIndex
                        let body = tabsProduct.querySelector(`.tabs__body-${index}`)

                        if(body) {
                            body.classList.add('active')
                        }
                    })
                })
            }

            function removeActive() {
                let tabHeader = tabsProduct.querySelectorAll('.tabs__item')
                let tabBody = tabsProduct.querySelectorAll('.tabs__body')

                tabHeader.forEach(item => {
                    item.classList.remove('active')
                })

                tabBody.forEach(item => {
                    item.classList.remove('active')
                })
            }
        })
    }
}
heandlerTabs()


// Робимо таби для мобілки window-doors.
function tabsWindowDoors() {
    let tabMob = document.querySelector('.tabs-product')

    if(tabMob) {
        let tabMobItem = tabMob.querySelectorAll('.tabs-product-header__item')

        if(tabMobItem.length > 0) {
            tabMobItem.forEach(btn => {
                btn.addEventListener('click', function() {
                    let name = this.dataset.tabName
                    let list = document.querySelector(`.tabs-product__body-${name}`)

                    removeActive()
                    this.classList.add('active')
                    list.classList.add('active')
                })
            })
        }

        function removeActive() {
            let tabHeader = tabMob.querySelectorAll('.tabs-product-header__item')
            let tabBody = tabMob.querySelectorAll('.tabs-product__body')

            tabHeader.forEach(item => {
                item.classList.remove('active')
            })

            tabBody.forEach(item => {
                item.classList.remove('active')
            })
        }
    }
}
tabsWindowDoors()

// Робимо перенос елемента в інший блок при адаптиві.
function moveContent() {
    const headerInner = document.querySelector('.header__inner');
    
  
    if (headerInner) {
        const headerEmail = document.querySelector('.header__email');
        const headerPhone = document.querySelector('.header__phone');
        const nav = document.querySelector('.nav');
        const headerActions = document.querySelector('.header__actions');


      if (window.innerWidth < 1279.98) {
        console.log(window.innerWidth < 1279.98)
        headerActions.insertBefore(headerEmail, headerPhone);
      } else {
        console.log(window.innerWidth < 1279.98)
        console.log(window.innerWidth < 1279.98)
        headerInner.insertBefore(headerEmail, nav);

      }
    }
  }

  window.addEventListener('load', moveContent);
  window.addEventListener('resize', moveContent);


// При скролі додаємо класс для header щоб зафіксувати.
function fixedHeader() {
    let header = document.querySelector('.header')
    let headerHeight = header.clientHeight

    if(header) {
        let nextElement = header.nextElementSibling

        if(window.matchMedia("(min-width: 1023.98px)").matches) {
            document.addEventListener('scroll', function() {
                if(window.scrollY > headerHeight) {
                    header.classList.add('fixed')
                    nextElement.style.marginTop = `${headerHeight}px`
                } else {
                    header.classList.remove('fixed')
                    nextElement.style.marginTop = `0px`
                }
            })
        }
    }
}
document.addEventListener('resize', fixedHeader())


// Робимо плавну прокрутку до якорів.
function goAnchor() {
    let btnAnchors = document.querySelectorAll('.btn-anchor')
    let burger = document.querySelector('.header__burger')
    let innerHeader = document.querySelector('.header__inner')

    if(btnAnchors.length > 0) {
        btnAnchors.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault()

                let header = document.querySelector('.header')

                header.classList.remove("burger-active")
                burger.classList.remove("active")
                innerHeader.classList.remove("active")
    
                let id = btn.dataset.id
                let section = document.querySelector(`#${id}`)
                
                if(section) {
                    window.scrollBy({
                        top: (section.getBoundingClientRect().top - header.clientHeight),
                        behavior: 'smooth'
                    })
                }
            })
        })
    }
}
goAnchor()
