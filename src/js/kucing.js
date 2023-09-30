const human = document.querySelector(".human");
let offsetX, offsetY;

const move = (e) => {
  human.style.left = `${e.clientX - offsetX}px`;
  human.style.top = `${e.clientY - offsetY}px`;
};

human.addEventListener("dblclick", () => {
  human.style.position = "absolute";
  human.style.cursor = "move";
});

const urls = window.location.href;
const urlObj = new URL(urls);
const hostname = urlObj.hostname;

let asd = "";
const hx = "hamzahxou.github.io";


human.addEventListener("mousedown", (b) => {
  offsetX = b.clientX - human.offsetLeft;
  offsetY = b.clientY - human.offsetTop;
  document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", move);
});

human.addEventListener("touchstart", (event) => {
  const touch = event.touches[0];
  offsetX = touch.clientX - human.offsetLeft;
  offsetY = touch.clientY - human.offsetTop;
});

human.addEventListener("touchmove", (event) => {
  event.preventDefault(); // Mencegah scroll halaman saat menggeser objek
  const touch = event.touches[0];
  human.style.left = touch.clientX - offsetX + "px";
  human.style.top = touch.clientY - offsetY + "px";
});

human.addEventListener("touchend", () => {
  // Tindakan setelah sentuhan selesai
});

const imgElement = document.querySelector("img.human");

imgElement.addEventListener("click", (event) => {
  event.preventDefault();
});

function getRandomPosition() {
  const minX = 20; // Minimum x position (left)
  const maxX = window.innerWidth - 70; // Maximum x position (right)
  const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  return randomX;


function createKucing() {
  const minSize = 20;
  const maxSize = 50;
  // Menghasilkan ukuran acak antara minSize dan maxSize
  let randomSize = Math.floor(
    Math.random() * (maxSize - minSize + 1) + minSize
  );
  const kucing = document.createElement("img");
  kucing.setAttribute("src", "src/img/Kucing.gif");
  kucing.setAttribute("alt", "kucing");
  kucing.classList.add("kucing");
  kucing.classList.add("trans");
  const randomX = getRandomPosition();
  kucing.style.left = randomX + "px";
  kucing.style.width = `${randomSize}px`;
  let offsetX, offsetY;
  const move = (e) => {
    kucing.style.left = `${e.clientX}px`;
    kucing.style.top = `${e.clientY}px`;
  };

  if (window.innerWidth >= 576) {
    kucing.addEventListener("mousedown", () => {
      kucing.classList.remove("trans");
      document.addEventListener("mousemove", move);
    });

    document.addEventListener("mouseup", () => {
      kucing.style.bottom = "100%";
      document.removeEventListener("mousemove", move);
    });
  }
  if (window.innerWidth <= 576) {
    let initialTouchY = 0;

    kucing.addEventListener("touchstart", (event) => {
      event.preventDefault(); // Mencegah scroll halaman saat menyentuh objek
      kucing.classList.remove("bott");
      const touch = event.touches[0];
      initialTouchY = touch.clientY;
    });

    kucing.addEventListener("touchmove", (event) => {
      event.preventDefault(); // Mencegah scroll halaman saat menggeser objek
      const touch = event.touches[0];
      const deltaY = touch.clientY - initialTouchY;
      kucing.style.bottom = `calc(100% - ${deltaY}px)`;
    });

    kucing.addEventListener("touchend", () => {
      // Tindakan setelah sentuhan selesai
    });
  }

  document.body.appendChild(kucing);

  setTimeout(() => {
    kucing.classList.add("bott");
    setTimeout(() => {
      kucing.style.opacity = ".1";
      setTimeout(() => {
        kucing.parentNode.removeChild(kucing);
      }, 3000);
    }, 7000);
  }, 1000);
}

function getRandomWaktu(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000; // Mengonversi ke milidetik
}

const minWaktu = 20; // Waktu minimum dalam detik
const maxWaktu = 60; // Waktu maksimum dalam detik
setInterval(createKucing, getRandomWaktu(minWaktu, maxWaktu));

const bcs = "hamzahxou [><]";

const vgf = "hamzahxou";
}