// tolakf();
const menu = document.querySelectorAll("ul li a");
const sections = document.querySelectorAll("section");

// Fungsi untuk mengatur menu dan section aktif
function setActiveMenuAndSection(index) {
  sections.forEach((section, i) => {
    // Menghilangkan class "default" pada semua section kecuali yang memiliki index yang sama dengan menu yang aktif
    section.classList.toggle("default", i !== index);
  });

  menu.forEach((menuItem, i) => {
    // Menambahkan class "active" pada menu yang memiliki index yang sama dengan menu yang aktif, dan menghapus class "active" pada menu yang lain
    menuItem.parentNode.classList.toggle("active", i === index);
  });

  // Menyimpan index menu aktif ke localStorage
  localStorage.setItem("activeMenuIndex", index);
}

menu.forEach((menuPisah, index) => {
  menuPisah.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah tindakan default dari tautan

    // Mengatur menu dan section aktif sesuai dengan index menu yang diklik
    setActiveMenuAndSection(index);
  });
});

// Memeriksa apakah ada index menu yang tersimpan di localStorage
const activeMenuIndex = localStorage.getItem("activeMenuIndex");

if (activeMenuIndex !== null) {
  // Mengatur menu dan section aktif sesuai dengan index yang tersimpan di localStorage
  setActiveMenuAndSection(parseInt(activeMenuIndex));
}

// DarkMode
const lightbtn = document.getElementById("lightMode");
const body = document.body;
lightbtn.addEventListener("click", () => {
  if (body.classList == "light") {
    // beri class active
    lightbtn.classList.toggle("active");
    // beri class light di body
    body.classList.toggle("light");
    //  beri class light di semua section
    sections.forEach((secti) => {
      secti.classList.toggle("light");
    });
    localStorage.removeItem("mode");
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

//animasi scroll darkmode
const lightArea = document.querySelector(".lightArea");
let tampil = null;
if (window.innerWidth <= 576) {
  lightArea.style.position = "fixed";
  window.addEventListener("scroll", () => {
    hidden();

    if (tampil !== null) {
      clearTimeout(tampil);
    }
    tampil = setTimeout(show, 100);
  });
}

