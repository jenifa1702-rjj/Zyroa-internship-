let darkBtn = document.getElementById("darkBtn");
let form = document.getElementById("contactForm");
let message = document.getElementById("message");

darkBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        message.innerText = "Please fill all fields";
    } 
    else if (!email.includes("@")) {
        message.innerText = "Enter a valid email";
    } 
    else {
        message.innerText = "Form submitted successfully!";
    }
});
