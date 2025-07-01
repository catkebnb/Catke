// document.getElementById("copy-button").addEventListener("click", function () {
//   // Create a temporary textarea element
//   var tempTextarea = document.createElement("textarea");
//   // Set its value to the text you want to copy
//   tempTextarea.value = "0xecca809227d43b895754382f1fd871628d7e51fb";
//   // Append it to the body
//   document.body.appendChild(tempTextarea);
//   // Select the text
//   tempTextarea.select();
//   // Copy the text
//   document.execCommand("copy");
//   // Remove the temporary textarea
//   document.body.removeChild(tempTextarea);
// });
// Select the specific section you want to observe
const section = document.querySelector(".timeline-container");
const currentPage = window.location.pathname;

const options = {
  root: null,
  threshold: 0.085, // Triggers when 50% of the section is visible
};

// Create an observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const timelineContainer = document.querySelector(".timeline-container");
      const scrollingImage = document.getElementById("scrolling-image");
      var maxTop = 0;
      // Calculate the new top value
      if (window.innerWidth <= 700) {
        maxTop = 1500;
      } else {
        if (currentPage == "/Hok.html") {
          maxTop = 1200; // Adjust 200px as needed
        } else {
          maxTop = 1000; // Adjust 200px as needed
        }
      }

      // The maximum top value

      if (timelineContainer && scrollingImage) {
        window.addEventListener("scroll", () => {
          const sectionRect = timelineContainer.getBoundingClientRect();

          // Calculate the scroll percentage only when the section is in view
          if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
            // Calculate the scroll percentage within the section
            const scrollTop = window.scrollY;
            const sectionTop = sectionRect.top + scrollTop;
            const sectionHeight = sectionRect.height;
            const scrollPercentage =
              (scrollTop - sectionTop + window.innerHeight) / sectionHeight;

            let newTop = 0;

            // Calculate the new top value
            if (window.innerWidth <= 700) {
              newTop = scrollPercentage * 1200;
            } else {
              if (currentPage == "/Hok.html") {
                newTop = scrollPercentage * 800; // Adjust 200px as needed
              } else {
                newTop = scrollPercentage * 600; // Adjust 200px as needed
              }
            }

            // Ensure the top value doesn't exceed the maxTop
            if (newTop > maxTop) {
              newTop = maxTop;
            }

            // Set the new top position
            scrollingImage.style.top = `${newTop}px`;
          }
        });
      }
      // You can also unobserve the section if you only want to alert once
      observer.unobserve(entry.target);
    }
  });
}, options);

// Observe the specific section
observer.observe(section);

document.addEventListener("DOMContentLoaded", () => {});
