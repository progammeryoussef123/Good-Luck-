let paragraph = document.getElementById("paragraph");
let btn  = document.getElementById("btn");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke = ()=>{
    paragraph.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        paragraph.textContent = `${item.joke}`;
        paragraph.classList.add("fade");
    })
}
btn.addEventListener("click",getjoke);
getjoke();