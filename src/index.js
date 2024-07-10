const init = () => {
//call the form
const inputForm = document.querySelector("form");
//event listener to 
inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    console.log(input.value);
//fetch data from local host
    fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            title.textContent = `Title: ${data.title}`;
            summary.textContent = `Summary: ${data.summary}`;
    });
}); 
}
document.addEventListener('DOMContentLoaded', init);

