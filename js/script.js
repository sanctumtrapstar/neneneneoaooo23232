let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".header-nav");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
  hamburger.classList.toggle("menu--active");
});

// анимации

const animItems = document.querySelectorAll(".anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        window.pageYOffset > animItemOffset - animItemPoint &&
        window.pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("active");
      } else {
        animItem.classList.remove("active");
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}



// swiper

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});



// search

document.getElementById("elastic").oninput = function () {
    let val = this.value.trim().toLowerCase();
    let elasticItems = document.querySelectorAll(".catalog-table-names");
  
    elasticItems.forEach(function (elem) {
      if (!elem.originalTextContent) {
        elem.originalTextContent = elem.textContent;
      }
  
      let textContent = elem.originalTextContent.toLowerCase();
      let pos = textContent.indexOf(val);
  
      if (pos !== -1) {
        elem.innerHTML = insertMask(elem.originalTextContent, pos, val.length);
      } else {
        elem.textContent = elem.originalTextContent;
      }
    });
  };
  
  function insertMask(string, pos, len) {
    return (
      string.slice(0, pos) +
      "<mark>" +
      string.slice(pos, pos + len) +
      "</mark>" +
      string.slice(pos + len)
    );
  };
  
  document.getElementById("scrollToButton").onclick = function () {
    let highlightedElement = document.querySelector(".catalog-table-names mark");
    if (highlightedElement) {
      highlightedElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  
  
