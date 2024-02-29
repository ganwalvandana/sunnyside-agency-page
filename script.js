const hamburger = document.getElementById("hamburgerIcon");
const headerLinks = document.getElementById("headerLinks");

hamburger.addEventListener("click", () => {
  headerLinks.style.display =
    headerLinks.style.display == "none" ? "block" : "none";
  //   hamburger.style.position = "fixed";
});
