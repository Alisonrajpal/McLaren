function toggleMenu() {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");
  menu.classList.toggle("active");
  nav.classList.toggle("active");
}

//Change the background video when click on the gallery image
function changeVideo(name) {
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

  //mapping model name change
  models.forEach((model) => {
    model.classList.remove("active");
    if (model.classList.contains(name)) {
      model.classList.add("active");
    }
  });

  //mapping trailers
  trailers.forEach((video) => {
    video.classList.remove("active");
    if (video.classList.contains(name)) {
      video.classList.add("active");
    }
  });
}

//change the play and pause button on click event
function toggleplay() {
  const play = document.querySelector(".play");
  const pause = document.querySelector(".pause");
  play.classist.toggle("active");
  pause.classList.toggle("active");
}

////Video Play and Pause
function pauseVideo() {
  const byVideoList = document.querySelectorAll(".bg-video");
  bgVideoList.forEach((video) => {
    video.pause();
  });

  toggleplay();
}

function playVideo() {
  const byVideoList = document.querySelectorAll(".bg-video");
  bgVideoList.forEach((video) => {
    video.play();
  });
  toggleplay();
}
