const divs = document.querySelectorAll(".gallery div");

divs.forEach((item) => {
  item.addEventListener("mouseover", () => {
    divs.forEach((el) => el.classList.remove("active"));

    item.classList.add("active");
  });
});