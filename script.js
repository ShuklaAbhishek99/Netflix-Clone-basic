console.log("welcome to Netflix");

const headings = document.querySelectorAll(".faq-heading");

headings.forEach((heading) => {
    heading.addEventListener("click", (e) => {
        const dropDown = heading.nextElementSibling;
        const display = dropDown.style.display;

        if (display === "none") {
            dropDown.style.display = "block";
        } else {
            dropDown.style.display = "none";
        }
    });
});
