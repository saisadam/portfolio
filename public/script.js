const form = document.querySelector("#contact form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("/contact", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    if (result.success) {

        form.reset();

        successMessage.style.display = "block";

    } else {

        alert("Something went wrong. Please try again.");

    }

});