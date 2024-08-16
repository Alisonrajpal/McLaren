function toggleMenu() {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");
  menu.classList.toggle("active");
  nav.classList.toggle("active");
}

//Change the background video when click on the gallery image
function chnageVideo(name) {
  const byVideoList = document.querySelectorAll(".bg-video");
  const trailers = document.querySelectorAll(".trailer");
  const models = document.querySelectorAll(".model");

  //js higher order array function forEach
  //this is easier to do data mapping

  byVideoList.forEach((video) => {
    video.classList.remove("active");
    if (video.classList.contains(name)) {
      video.classList.add("active");
    }
  });
}
