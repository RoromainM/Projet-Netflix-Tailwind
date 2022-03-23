function goRight (container) {
    document.getElementById(container).scrollLeft += 304;
};
function goLeft (container) {
    document.getElementById(container).scrollLeft -= 304;
};


function mouseEnter(leftBtn, RightBtn){
    document.getElementById(leftBtn).style.display = "block";
    document.getElementById(RightBtn).style.display = "block";
}

function mouseLeave(leftBtn, RightBtn){
    document.getElementById(leftBtn).style.display = "none";
    document.getElementById(RightBtn).style.display = "none";
}


// ------------Video---------------- 

const video = document.getElementById('myVideo');
const bg = document.getElementById('bg-img');

function playBd(){
    video.style.display = "block"
    bg.style.display = "none"
    video.play()
}

function pauseBd(){
    video.style.display = "none"
    bg.style.display = "block"
    video.pause()
}

// ---------changement de background header--------------------

window.addEventListener("scroll", function(){
    let scrollPos = window.scrollY > 30;
    let scrollPosF = window.scrollY < 30;
    let largeur = document.body.clientWidth
    if(largeur < 1024){
        let navbar = document.querySelector("#navbar-change");
        navbar.classList.toggle('scrollActive', scrollPos);
        navbar.classList.toggle('scrollDesactive', scrollPosF)
    }else{
        let navbar = document.querySelector("#navbar-change");
        navbar.classList.toggle('scrollActive', scrollPos);
        navbar.classList.toggle('scrollDesactive', scrollPosF)
    }
})




// --------Random----------

const myListImgArray = [
    "./Assets/Images/myList/the-witcher.jpg",
    "./Assets/Images/myList/pokemon.jpg",
    "./Assets/Images/myList/eden-zero.jpg",
    "./Assets/Images/myList/fate-zero.jpg",
    "./Assets/Images/myList/stranger-things.jpg",
    "./Assets/Images/myList/violet-evergarden.jpg",
    "./Assets/Images/myList/aggretsuko.jpg",
    "./Assets/Images/myList/fairy-tail.jpg",
    "./Assets/Images/myList/scissor-seven.jpg",
    "./Assets/Images/myList/adam-by-eve.jpg",
    "./Assets/Images/myList/beastar.jpg",
    "./Assets/Images/myList/devilman.jpg"
];

const japaneseAnimeImgArray = [
    "./Assets/Images/japaneseAnime/hxh.jpg",
    "./Assets/Images/japaneseAnime/demon-slayer.jpg",
    "./Assets/Images/japaneseAnime/mha.jpg",
    "./Assets/Images/japaneseAnime/sao.jpg",
    "./Assets/Images/japaneseAnime/sirius-the-jaeger.jpg",
    "./Assets/Images/japaneseAnime/tokyo-ghoul.jpg",
    "./Assets/Images/japaneseAnime/jojo.jpg",
    "./Assets/Images/japaneseAnime/gambling-school.jpg",
    "./Assets/Images/japaneseAnime/violet-evergarden.jpg",
    "./Assets/Images/japaneseAnime/scissor-seven.jpg"
]

const onlyOnNetflixImgArray = [
    "./Assets/Images/onlyOnNetflix/vikings-valhalla.jpg",
    "./Assets/Images/onlyOnNetflix/all-of-us-dead.jpg",
    "./Assets/Images/onlyOnNetflix/great-pretender.jpg",
    "./Assets/Images/onlyOnNetflix/dota.jpg",
    "./Assets/Images/onlyOnNetflix/peaky-blinders.jpg",
    "./Assets/Images/onlyOnNetflix/arcane.jpg",
    "./Assets/Images/onlyOnNetflix/baki.jpg",
    "./Assets/Images/onlyOnNetflix/valkyrie-apocalypse.jpg",
    "./Assets/Images/onlyOnNetflix/ragnarok.jpg",
    "./Assets/Images/onlyOnNetflix/stranger-things.jpg"
]

const usSeriesImgArray = [
    "./Assets/Images/usSeries/breaking-bad.jpg",
    "./Assets/Images/usSeries/walking-dead.jpg",
    "./Assets/Images/usSeries/teen-wolf.jpg",
    "./Assets/Images/usSeries/suits.jpg",
    "./Assets/Images/usSeries/good-doctor.jpg",
    "./Assets/Images/usSeries/outlander.jpg",
    "./Assets/Images/usSeries/shadow-hunter.jpg",
    "./Assets/Images/usSeries/qui_ment.jpg"
]



window.onload = randomImage();



function randomImage() {
    // alert(myListImgArray.length)

    // mise en place d'un tableau éphémère
    let myListImg = myListImgArray.slice();
    let japaneseAnimeImg = japaneseAnimeImgArray.slice();
    let onlyOnNetflixImg = onlyOnNetflixImgArray.slice();
    let usSeriesImg = usSeriesImgArray.slice();
    
    // random myList
    for(let i = 0; i < 11; i++){
        let randomNum = Math.floor(Math.random() * (myListImg.length));
        document.getElementById(`img-slide-my-list${i}`).src = myListImg[randomNum];
        myListImg.splice(randomNum, 1);
    }

//     // random japaneseAnime
//     for(let i = 0; i < 10; i++){
//         let randomNum = Math.floor(Math.random() * (japaneseAnimeImg.length));
//         document.getElementById(`img-slide-japaneseAnime${i}`).src = japaneseAnimeImg[randomNum];
//         japaneseAnimeImg.splice(randomNum, 1);
//     }
    
//     // random onlyOnNetflix
//     for(let i = 0; i < 10; i++){
//         let randomNum = Math.floor(Math.random() * (onlyOnNetflixImg.length));
//         document.getElementById(`img-slide-onlyOnNetflix${i}`).src = onlyOnNetflixImg[randomNum];
//         onlyOnNetflixImg.splice(randomNum, 1);
//     }

//     // random usSeries
//     for(let i = 0; i < 8; i++){
//         let randomNum = Math.floor(Math.random() * (usSeriesImg.length));
//         document.getElementById(`img-slide-usSeries${i}`).src = usSeriesImg[randomNum];
//         usSeriesImg.splice(randomNum, 1);
//     }
}

