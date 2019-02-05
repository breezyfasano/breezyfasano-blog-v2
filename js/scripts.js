"use strict"

const nav = document.querySelector("nav");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");


const openNav = () => {
  nav.style.width = "55vw";
};

const closeNav = () => {
  nav.style.width = 0;
}

openIcon.addEventListener('click',
  function () {
    openNav();
  }
);

closeIcon.addEventListener('click',
  function () {
    closeNav();
  }
);



const isElementInViewport = (el) => { // checks if element passed as parameter is in viewport
  const getBoundValues = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  return (
    getBoundValues.bottom > 0 &&
    getBoundValues.right > 0 &&
    getBoundValues.left <
    (windowWidth || document.documentElement.clientWidth) &&
    getBoundValues.top < (windowHeight || document.documentElement.clientHeight)
  );
}

const skills = document.getElementsByClassName("skill-container");
const posts = document.getElementsByClassName("post");
const cta = document.querySelector(".cta");

window.addEventListener("scroll", () => {
  for (var item of skills) { // for each skill-container
    if (isElementInViewport(item) == true) { // check if item is in viewport
      item.classList.replace("hidden", "skills-scale-in-center"); // if it is, remove the class that hides it and add in the css animation
    }
  }

  for (var item of posts) { // for each post 
    if (isElementInViewport(item) == true) { // check if item is in viewport
      item.classList.replace("hidden", "scale-in-center"); // if it is, remove the class that hides it and add in the css animation
    }
  }

  if (isElementInViewport(cta) == true) { // check if item is in viewport
    cta.classList.replace("hidden", "scale-in-center"); // if it is, remove the class that hides it and add in the css animation
  }
});

function postPreview() {
  const posts = document.getElementsByClassName("post-preview");
  for (let i = 0; i < posts.length; i++) { // for every post entry on the homepage
    let postContent = posts[i].textContent;
    let preview = postContent.slice(0, 110) + " ..."; // limit the number of characters in the post content preview to 110
    posts[i].textContent = preview;
  }
} postPreview();