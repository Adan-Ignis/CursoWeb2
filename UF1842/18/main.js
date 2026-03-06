let headers = document.querySelectorAll(".acordeon-header");
let contenidos = document.querySelectorAll(".acordeon-content");

for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", function() {
        let targetId = this.getAttribute("data-target");
        let targetContent = document.getElementById(targetId);

        let isOpen = targetContent.classList.contains("active");

        for (let j = 0; j < contenidos.length; j++) {
            contenidos[j].classList.remove("active");
        }

        if (!isOpen) {
            targetContent.classList.add("active");
        }
    })
}