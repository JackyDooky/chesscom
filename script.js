function togglePassword() {
    var x = document.getElementById("password-input");
    var y = document.getElementById("secret");
    if (x.type === "password") {
        x.type = "text";
        y.style.display = "block";
    } else {
        x.type = "password"
        y.style.display = "none";
    }
}