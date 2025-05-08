let toggleBtn = document.getElementById('bar')
let slides = document.getElementsByClassName("MySlides")
let slideIndex = 0
let PlayableCharacterButton = document.querySelector('.Playable-Character-Button')
let UnplayableCharacterButton = document.querySelector('.Unplayable-Character-Button')

function toggle(){
    let links = document.querySelector('.mobile-menu')

if(links.style.display === "block"){
    links.style.display = "none"
} else{
    links.style.display = "block";
    links.classList.add("mobile-menu-active")
}

}

function showSlides(){
    let i;
    for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000);
}


showSlides()

function CharacterSwitch(){
    let buttonContainer = document.querySelector('.buttonContainer')
    let PlayableCharacterImage = document.querySelector('.Character-List-Image')
    if (PlayableCharacterImage.style.display === "none") {
        PlayableCharacterImage.style.display === "block";
      } else {
        PlayableCharacterImage.style.display === "none";
      }

    let UnPlayableCharacterImagev = document.querySelector('.Unplayable-Character-List-Image')
}



toggleBtn.addEventListener('click', toggle)
PlayableCharacterButton.addEventListener('click' , CharacterSwitch)
UnplayableCharacterButton.addEventListener('click' , CharacterSwitch)