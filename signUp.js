const btn = document.querySelector(".btnnn");

// function confirmPassword() {
//   if (password === password2) {
//     alert(`welcome! Hope you have a good time shopping`);
//   } else {
//     alert(`sorry password and confirm password dont match`);
//   }
// }
// btn.addEventListener("click", confirmPassword);

btn.addEventListener("click", function () {
  if (password === password2) {
    alert(`welcome! Hope you have a good time shopping`);
  } else {
    alert(`sorry password and confirm password dont match`);
  }
});
