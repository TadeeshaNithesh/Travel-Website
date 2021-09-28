const mobileNav = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("nav");
const image = document.querySelectorAll(".image img");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");
const content = document.querySelector(".content");
const call = document.querySelector(".call");
const discord = document.querySelector(".discord");

call.addEventListener("click", () => {
  alert("My phone number is +94772833044");
});

discord.addEventListener("click", () => {
  alert("My Discord Handle is Tadeesha#3302");
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loaderr");
  loader.style.transform = "translateY(-100%)";
});

hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});

window.onscroll = function () {
  if (scrollY > 50) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

image.forEach((item) => {
  item.addEventListener("click", function () {
    modal.style.display = "flex";
    content.style.display = "flex";

    let image = this.getAttribute("src");
    renderImage(image);
  });
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
  content.style.display = "none";
  content.innerHTML = "";
});

modal.addEventListener("click", function () {
  modal.style.display = "none";
  content.style.display = "none";
  content.innerHTML = "";
});

const renderImage = (image) => {
  let postImage = document.createElement("img");
  postImage.setAttribute("src", image);
  postImage.setAttribute("class", "img-responsive");
  content.appendChild(postImage);
};
