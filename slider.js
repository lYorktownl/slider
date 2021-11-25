let city = document.querySelector('.content-text-info-pre__item_town')
let area = document.querySelector('.content-text-info-pre__item_square')
let time = document.querySelector('.content-text-info-pre__item_time')
let coast = document.querySelector('.content-text-info-pre__item_cost')
let img = document.querySelector('.slider-content__img')

let firstLink = document.querySelector('.link__item-first')
let secondLink = document.querySelector('.link__item-second')
let thirdLink = document.querySelector('.link__item-third')

let prevArrow = document.querySelector('.left-arrow')
let nextArrow = document.querySelector('.right-arrow')
let fistDot = document.querySelector('.dot__item-first')
let secondDot = document.querySelector('.dot__item-second')
let thirdDot = document.querySelector('.dot__item-third')

let sliderItem = [{
    url:'img/img1.jpg',
    city:'Rostov-on-Don LCD admiral',
    apartmentArea:'81 m2',
    repairTime:'3.5 months',
    repairCost:'Upon request',
    activeDot() {
        fistDot.style.background= `url("img/icons/dot.svg")no-repeat`;
        secondDot.style.background= `url("img/icons/dot-no-active.svg")no-repeat`;
        thirdDot.style.background= `url("img/icons/dot-no-active.svg")no-repeat`;
    },
    activeLink(){
        firstLink.style.textDecoration = 'underline';
        firstLink.style.color = '#E3B873';
        secondLink.style.textDecoration = 'none';
        secondLink.style.color = `rgba(255, 255, 255, 0.3)`;
        thirdLink.style.textDecoration = 'none';
        thirdLink.style.color = `rgba(255, 255, 255, 0.3)`;
    }
},
    {
    url:'img/img2.jpg',
    city:'Sochi Thieves',
    apartmentArea:'105 m2',
    repairTime:'4 months',
    repairCost:'Upon request',
    activeDot() {
        fistDot.style.background= `url("img/icons/dot-no-active.svg")no-repeat`;
        secondDot.style.background= `url("img/icons/dot.svg")no-repeat`;
        thirdDot.style.background= `url("img/icons/dot-no-active.svg")no-repeat`;
    },
    activeLink(){
        firstLink.style.textDecoration = 'none';
        firstLink.style.color = `rgba(255, 255, 255, 0.3)`;
        secondLink.style.textDecoration = 'underline';
        secondLink.style.color = `#E3B873`;
        thirdLink.style.textDecoration = 'none';
        thirdLink.style.color = `rgba(255, 255, 255, 0.3)`;
    }
},
    {
    url:'img/img3.jpg',
    city:'Rostov-on-Don Patriotic',
    apartmentArea:'93 m2',
    repairTime:'3 months',
    repairCost:'Upon request',
    activeDot() {
        fistDot.style.background= `url("img/icons/dot-no-active.svg")no-repeat`;
        secondDot.style.background= `url("img/icons/dot-no-active.svg")no-repeat`;
        thirdDot.style.background= `url("img/icons/dot.svg")no-repeat`;
    },
    activeLink(){
        firstLink.style.textDecoration = 'none';
        firstLink.style.color = `rgba(255, 255, 255, 0.3)`;
        secondLink.style.textDecoration = 'none';
        secondLink.style.color = `rgba(255, 255, 255, 0.3)`;
        thirdLink.style.textDecoration = 'underline';
        thirdLink.style.color = `#E3B873`;
    }
}]

function firstSlide(data) {
    img.style.backgroundImage = `url(${data[0].url})`
    city.innerText = data[0].city;
    area.innerText = data[0].apartmentArea;
    time.innerText = data[0].repairTime;
    coast.innerText = data[0].repairCost;
    data[0].activeDot()
    data[0].activeLink()
}
function secondSlide(data) {
    img.style.backgroundImage = `url(${data[1].url})`
    city.innerText = data[1].city;
    area.innerText = data[1].apartmentArea;
    time.innerText = data[1].repairTime;
    coast.innerText = data[1].repairCost;
    data[1].activeDot()
    data[1].activeLink()
}
function thirdSlide(data) {
    img.style.backgroundImage = `url(${data[2].url})`
    city.innerText = data[2].city;
    area.innerText = data[2].apartmentArea;
    time.innerText = data[2].repairTime;
    coast.innerText = data[2].repairCost;
    data[2].activeDot()
    data[2].activeLink()
}

function initialState() {
    firstSlide(sliderItem)
}

initialState()

let currentIndex = 0

nextArrow.addEventListener('click', () => {
    if(currentIndex === 0) {
        currentIndex += 1;
        secondSlide(sliderItem)
    } else if (currentIndex === 1) {
        currentIndex += 1
        thirdSlide(sliderItem)
    } else {
        currentIndex = 0
        firstSlide(sliderItem)
    }
})
prevArrow.addEventListener('click', () => {
    if(currentIndex === 0) {
        currentIndex = 2;
        thirdSlide(sliderItem)
    } else if (currentIndex === 2) {
        currentIndex -= 1
        secondSlide(sliderItem)
    } else {
        currentIndex = 0
        firstSlide(sliderItem)
    }
})

fistDot.addEventListener('click', () => {
   currentIndex = 0
    firstSlide(sliderItem)
})
secondDot.addEventListener('click', () => {
    currentIndex = 1
    secondSlide(sliderItem)
})
thirdDot.addEventListener('click', () => {
    currentIndex = 2
    thirdSlide(sliderItem)
})

firstLink.addEventListener('click', () => {
    currentIndex = 0
    firstSlide(sliderItem)
})
secondLink.addEventListener('click', () => {
    currentIndex = 1
    secondSlide(sliderItem)
})
thirdLink.addEventListener('click', () => {
    currentIndex = 2
    thirdSlide(sliderItem)
})




