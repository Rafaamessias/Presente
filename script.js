const clique = document.getElementById("botao");

clique.addEventListener("click", function() {
    window.location.href = "pagina2.html";
});

function createHeart() {
    const heart = document.createElement("span");
    heart.textContent = "❤️";
    heart.classList.add("heart");


    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;

    document.body.appendChild(heart);


    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
