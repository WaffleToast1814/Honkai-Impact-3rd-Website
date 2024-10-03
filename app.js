let toggleBtn = document.getElementById('bar')

function toggle(){
    let links = document.querySelector('.nav-links')

if(links.style.display === "block"){
    links.style.display = "none"
} else{
    links.style.display = "block";
}

}

toggleBtn.addEventListener('click', toggle)