document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".main-header");

  const checkSizeWindow = () => {
    if (window.innerWidth < 1024) {
      header.classList.add("menu-mobile");
    } else if(window.innerWidth > 1024){
      header.classList.remove("menu-mobile");
    }
  };

  checkSizeWindow();
  window.addEventListener("resize", checkSizeWindow);

    const checkScrollY = () => {
    console.log("em");

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

checkScrollY();

window.addEventListener("scroll", checkScrollY);

const btnInteractMenu = document.querySelector('.btn-interact-menu');

btnInteractMenu.addEventListener('click',()=>{
    header.classList.toggle('menu-mobile-open');
})

});
