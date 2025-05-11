let joke = document.querySelector("#joke");
const btn = document.querySelector("#btn");
btn.addEventListener("click", getJoke);

function getJoke() {
    fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: 'application/json',

            }

        })
        .then(a => a.json())
        .then(data => joke.textContent = data.joke)
        .catch(err => console.log(err));
}