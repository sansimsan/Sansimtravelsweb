const slides = document.querySelectorAll(".slide");
var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index*100}%`;
    }
)

const nextDestinationBtn = document.querySelector(".nextDestination");
const prevDestinationBtn = document.querySelector(".prevDestination");

nextDestinationBtn.addEventListener("click",()=>{
    if (counter>=14){
        counter=0;
    } else {
    counter++;
    }
    slideImage()
})

prevDestinationBtn.addEventListener("click",()=>{
    if (counter==0){
        counter = 14;
    } else {
    counter--;
    }
    slideImage()
})

let startSlider = () => {
    refreshSlider = setInterval(()=>{nextDestinationBtn.click()},3000)
}

let stopSlider = () => {
    clearInterval(refreshSlider);
}

let refreshSlider;
startSlider();

document.querySelector(".DestinationsCarousel").addEventListener("mouseover",stopSlider);
document.querySelector(".DestinationsCarousel").addEventListener("mouseout",startSlider);


const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}


const attractionsCard = document.querySelectorAll(".attractionsCard");
var attractionCount=0;
attractionsCard.forEach(
    (card,index)=>{
        card.style.left = `${index*400+50}px`;
    }
)

const nextAttractionBtn = document.querySelector(".nextAttraction");
const prevAttractionBtn = document.querySelector(".prevAttraction");

nextAttractionBtn.addEventListener("click",()=>{
    if (attractionCount>=12){
        attractionCount=0;
    } else {
        attractionCount++;
    }
    slideCard()
})

prevAttractionBtn.addEventListener("click",()=>{
    if (attractionCount==0){
        attractionCount = 14;
    } else {
        attractionCount--;
    }
    slideCard()
})

let startCard = () => {
    refreshCard = setInterval(()=>{nextAttractionBtn.click()},3000)
}

let stopCard = () => {
    clearInterval(refreshCard);
}

let refreshCard;
startCard();


const slideCard=()=>{
    attractionsCard.forEach(
        (card)=>{
            card.style.transform = `translateX(-${attractionCount*400}px)`
        }
    )
}


const experiencesCard = document.querySelectorAll(".experiencesCard");
var experiencesCount=0;
experiencesCard.forEach(
    (card,index)=>{
        card.style.left = `${index*500+50}px`;
    }
)

const nextExperiencesBtn = document.querySelector(".nextExperience");
const prevExperiencesBtn = document.querySelector(".prevExperience");

nextExperiencesBtn.addEventListener("click",()=>{
    if (experiencesCount>=14){
        experiencesCount=0;
    } else {
        experiencesCount++;
    }
    slideExpCard()
})

prevAttractionBtn.addEventListener("click",()=>{
    if (experiencesCount==0){
        experiencesCount = 14;
    } else {
        experiencesCount--;
    }
    slideExpCard()
})

let startExpCard = () => {
    refreshExpCard = setInterval(()=>{nextExperiencesBtn.click()},3000)
}

let stopExpCard = () => {
    clearInterval(refreshExpCard);
}

let refreshExpCard;
startExpCard();

document.querySelector(".experiencesCarousel").addEventListener("mouseover",stopExpCard);
document.querySelector(".experiencesCarousel").addEventListener("mouseout",startExpCard);

const slideExpCard=()=>{
    experiencesCard.forEach(
        (card)=>{
            card.style.transform = `translateX(-${experiencesCount*500}px)`
        }
    )
}





