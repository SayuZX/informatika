// DarkMode
const sections = document.querySelectorAll("section");
const lightbtn = document.getElementById("lightMode");
const body = document.body;
lightbtn.addEventListener("click", () => {
  if (body.classList == "light") {
    localStorage.removeItem("mode");
    // beri class active
    lightbtn.classList.toggle("active");
    // beri class light di body
    body.classList.toggle("light");
    //  beri class light di semua section
    sections.forEach((secti) => {
      secti.classList.toggle("light");
    });
  } else {
    // beri class active
    lightbtn.classList.toggle("active");
    // beri class light di body
    body.classList.toggle("light");
    //  beri class light di semua section
    sections.forEach((secti) => {
      secti.classList.toggle("light");
    });
    localStorage.setItem("mode", "light");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const status = localStorage.getItem("mode");
  if (status === "light") {
    document.body.classList.add("light");
    sections.forEach((secti) => {
      secti.classList.add("light");
    });
  }
});
