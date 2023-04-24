const btn = document.querySelector(".btnnn");

// function confirm() {
//   const pw = document.querySelector("#pswd").value;

//   if (pw === "") {
//     alert(`passwords needed`);
//   }
// }
// btn.addEventListener("click", confirm);

function verifyPassword() {
  const pw = document.querySelector("#pswd").value;
  const pw2 = document.querySelector("#pswd2").value;

  if (pw === "") {
    document.querySelector("#message").textContent = "Password required";
  } else if (pw === pw2) {
    alert(`welcome! hope you have a nice time shopping with us`);
  } else if (pw !== pw2) {
    alert(`Sorry password and confirm password don't match`);
  }
}
btn.addEventListener("click", verifyPassword);
