function checkCredentials() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        window.location.replace("home.html");
        return false; // Prevent form submission
    } else {
        document.getElementById("errorMessage").style.display = "block";
        return false;
    }
}
