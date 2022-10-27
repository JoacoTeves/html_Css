const reactBtn = document.querySelector(".reaction");
let liked = false;
reactBtn.addEventListener("click", () => {
    if(!liked) {
        reactBtn.innerHTML = '<span class="like">♥</span>';
        liked = true;
    } else {
        reactBtn.innerHTML = '<span class="unlike">♥</span>';
        liked = false;
    }
});