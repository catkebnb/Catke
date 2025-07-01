document.addEventListener("DOMContentLoaded", function () {
  const backgrounds = document.querySelectorAll(".laboratory-background");
  // const skins = document.querySelectorAll(".laboratory-skin");

  const glasses = document.querySelectorAll(
    ".laboratory-glasse .laboratory-image"
  );
  const eyes = document.querySelectorAll(".laboratory-eye .laboratory-image");
  const heads = document.querySelectorAll(".laboratory-head .laboratory-image");
  const clothes = document.querySelectorAll(
    ".laboratory-clothe .laboratory-image"
  );

  //ChangeBackground();
  ChangeItem(backgrounds, "pfp-background");
  // ChangeItem(skins, "pfp-skin");

  ChangeItem(eyes, "pfp-eye");
  ChangeItem(heads, "pfp-head");
  ChangeItem(glasses, "pfp-glasses");
  ChangeItem(clothes, "pfp-clothes");

  scroll(".laboratory-backgrounds-wraper", ".scroll-backgrounds");
  // scroll(".laboratory-skins-wraper", ".scroll-skins");
  scroll(".laboratory-eyes-wraper", ".scroll-eyes");
  scroll(".laboratory-heads-wraper", ".scroll-heads");
  scroll(".laboratory-glasses-wraper", ".scroll-glasses");
  scroll(".laboratory-clothes-wraper", ".scroll-clothes");

  document.querySelector(".random-button").addEventListener("click", () => {
    document.getElementById(
      "pfp-background"
    ).style.backgroundImage = `url(${backgrounds[
      getRandomInt(0, backgrounds.length)
    ].style.backgroundImage
      .slice(4, -1)
      .replace(/"/g, "")})`;

    // document.getElementById("pfp-skin").style.backgroundImage = `url(${skins[
    //   getRandomInt(0, skins.length)
    // ].style.backgroundImage
    //   .slice(4, -1)
    //   .replace(/"/g, "")})`;

   
    document.getElementById("pfp-eye").style.backgroundImage = `url(${eyes[
      getRandomInt(0, eyes.length)
    ].style.backgroundImage
      .slice(4, -1)
      .replace(/"/g, "")})`;

    document.getElementById("pfp-head").style.backgroundImage = `url(${heads[
      getRandomInt(0, heads.length)
    ].style.backgroundImage
      .slice(4, -1)
      .replace(/"/g, "")})`;
    document.getElementById(
      "pfp-glasses"
    ).style.backgroundImage = `url(${glasses[
      getRandomInt(0, glasses.length)
    ].style.backgroundImage
      .slice(4, -1)
      .replace(/"/g, "")})`;
    document.getElementById(
      "pfp-clothes"
    ).style.backgroundImage = `url(${clothes[
      getRandomInt(0, clothes.length)
    ].style.backgroundImage
      .slice(4, -1)
      .replace(/"/g, "")})`;
  });

  document.querySelector(".download-button").addEventListener("click", () => {
    const w = document.querySelector(".pfp").style.width;
    document.querySelector(".pfp").style.height = "1024px";
    document.querySelector(".pfp").style.width = "1024px";
    document.querySelectorAll(".pfp-elements").forEach((e) => {
      e.style.width = "1024px";
      e.style.height = "1024px";
    });
    document.querySelector(".pfp").style.border = "none";
    html2canvas(document.querySelector(".pfp")).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "pfp.png";
      link.click();
      document.querySelector(".pfp").style.height = w;
      document.querySelector(".pfp").style.width = w;
      document.querySelectorAll(".pfp-elements").forEach((e) => {
        e.style.width = w;
        e.style.height = w;
      });
      document.querySelector(".pfp").style.border = "5px solid white";
    });
  });
});

function ChangeItem(skins, item) {
  const mainSkin = document.getElementById(item);
  skins.forEach((skin) => {
    skin.addEventListener("click", () => {
      const newSrc = skin.style.backgroundImage.slice(4, -1).replace(/"/g, "");
      mainSkin.style.backgroundImage = `url(${newSrc})`;
    });
  });
}

function scroll(wraper, scrolltype) {
  const scrollRight = document.querySelector(".scroll-right" + scrolltype);
  const scrollLeft = document.querySelector(".scroll-left" + scrolltype);
  const scrollWrapper = document.querySelector(wraper);

  function updateButtonVisibility() {
    if (
      scrollWrapper.scrollLeft + scrollWrapper.clientWidth >=
      scrollWrapper.scrollWidth
    ) {
      scrollRight.classList.add("hidden-lab");
    } else {
      scrollRight.classList.remove("hidden-lab");
    }
  }

  function updateLeftButtonVisibility() {
    if (scrollWrapper.scrollLeft > 0) {
      scrollLeft.classList.remove("hidden-lab");
    } else {
      scrollLeft.classList.add("hidden-lab");
    }
  }

  scrollRight.onclick = function () {
    document.querySelector(wraper).scrollBy({
      left: 80,
      behavior: "smooth",
    });
  };

  scrollLeft.onclick = function () {
    document.querySelector(wraper).scrollBy({
      left: -80,
      behavior: "smooth",
    });
  };

  // Update button visibility on scroll
  scrollWrapper.addEventListener("scroll", updateButtonVisibility);
  scrollWrapper.addEventListener("scroll", updateLeftButtonVisibility);

  // Initial check
  updateButtonVisibility();
  updateLeftButtonVisibility();
}

function getRandomInt(min, max) {
  min = Math.ceil(min); // Round up from min
  max = Math.floor(max); // Round down from max
  return Math.floor(Math.random() * (max - min)) + min;
}
