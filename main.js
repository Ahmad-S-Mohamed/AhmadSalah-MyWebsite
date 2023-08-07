
// ! my name
const demoText = document.getElementById("demo");

let myCard = [
  "Ahmad Salah Mohamed ♥",
  "I'm 28 Years...",
  "I'm FrontEnd Develober..",
];
let wordindex = 0;
let index = 0;
let demoDelete = false;

const targetName = () => {
  let currentWord = myCard[wordindex];
  let typeText = currentWord.substring(0, index);
  demoText.textContent = typeText;
  if (!demoDelete && index < currentWord.length) {
    index++;
    setTimeout(targetName, 200);
  } else if (demoDelete && index > 0) {
    index--;
    setTimeout(targetName, 100);
  } else {
    demoDelete = !demoDelete;
    wordindex = !demoDelete ? (wordindex + 1) % myCard.length : wordindex;
    setTimeout(targetName, 1200);
  }
};
  targetName();

// !mega bar
let myElementBar = document.getElementById("mega-bar");
let myList = document.querySelector(".secound-bar");
let myPage = document.querySelector(".landing");
let homeLink = document.querySelector("#home-link");

myElementBar.addEventListener("click", () => {
  let textIneer = myList.style.display;
  switch (textIneer) {
    case "none":
      myList.style.cssText = "display:grid;";
      myPage.style.cssText = "    filter: blur(1px);";
      homeLink.classList.remove("active");
      myElementBar.classList.add("active");
      break;
    default:
      myList.style.display = "none";
      myPage.style.cssText = "filter: blur(0px);"
      homeLink.classList.add("active");
      myElementBar.classList.remove("active");
      break;
  }
});

homeLink.addEventListener("click",()=>{
  myList.style.display = "none";
  homeLink.classList.add("active");
  myElementBar.classList.remove("active");
  myPage.style.cssText = "filter: blur(0);";

})
//! scroll
let btnScroll = document.querySelector(".buttom-scrol");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
};
btnScroll.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
// ! landing max screen
let aboutMe = document.querySelector(".about-m");
let infoCard = document.querySelector(".about-me");
let infoimg = document.querySelector(".my-info");
let myPicture = document.getElementById("my-pic");

aboutMe.addEventListener("click", () => {
  let windowMinScreen = window.matchMedia("(min-width: 770px)").matches;
  if (windowMinScreen) {
    let infoText = infoCard.style.left;
    switch (infoText) {
      case (infoText = "-200%"):
        infoCard.style.cssText = "left : 30%; transition: all 0.8s ease;";
        infoimg.style.cssText = "left: 78%;  transition: all 0.8s ease";
        myPicture.style.cssText =
          " visibility: visibl; transition: all 0.2s  ease";
        break;
      default:
        infoimg.style.cssText = "left : 50%; transition: all 0.8s ease";
        infoCard.style.cssText = "left : -200%; transition: all 0.6s ease;";
        myPicture.style.cssText =
          " visibility: visibl; transition: all 0.2s  ease";
        break;
    }
  } 
});
// ! landing min screen
aboutMe.addEventListener("click", () => {
  let windowMaxScreen = window.matchMedia("(max-width: 770px)").matches;
  if (windowMaxScreen) {
      let infoText = infoCard.style.left;
      switch (infoText) {
        case (infoText = "-200%"):
          myPicture.style.cssText =
          " visibility: hidden; transition: all 0.2s  ease";
          infoimg.style.cssText =
          "right:0%;  left: initial; transform: translatey(-50%);flex-direction: row;transition: all 0.8s ease";
          infoCard.style.cssText = "left:43%; transition: all 0.6s ease;";
          break;
        default:
          infoCard.style.cssText = "left :-200%; transition: all 0.2s ease;";
          infoimg.style.cssText =
            "left : 50%; flex-direction: row-revers;transition: all 0.8s ease";
          myPicture.style.cssText =
            " visibility: visibl; transition: all 0.2s  ease";
          break;
      }
  }
});

// ! #########.............END.................#####################

