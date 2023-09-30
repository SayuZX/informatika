const areaProject = document.querySelector(".areaProject");

// Fetch data dari file JSON
fetch("./src/database/Project.json")
  .then((response) => response.json())
  .then((data) => {
    // Kosongkan kontainer sebelum menambahkan elemen baru
    areaProject.innerHTML = "";

    // Membuat elemen HTML dari data JSON
    data.forEach((item) => {
      // Membuat elemen kotakItem
      const kotakItem = document.createElement("div");
      kotakItem.classList.add("kotakItem");

      // Membuat elemen img
      const img = document.createElement("div");
      img.classList.add("img");

      // Membuat elemen <a> untuk gambar
      const imgLink = document.createElement("a");
      imgLink.href = `./ProjectPage.html?judul=${encodeURIComponent(
        item.judul
      )}`;
      img.appendChild(imgLink);

      // Membuat elemen <img>
      let imgElement = document.createElement("img");

      function updateImage() {
        if (localStorage.getItem("mode") === document.body.classList.value) {
          imgElement.src = `./src/img/Project/${item.urlGambar}_light.png`;
        } else {
          imgElement.src = `./src/img/Project/${item.urlGambar}_dark.png`;
        }

        requestAnimationFrame(updateImage);
      }

      updateImage();

      imgLink.appendChild(imgElement);

      // Membuat elemen namaProject
      const namaProject = document.createElement("div");
      namaProject.classList.add("namaProject");

      // Membuat elemen <a> untuk judul
      const judulLink = document.createElement("a");
      judulLink.href = `./ProjectPage.html?judul=${encodeURIComponent(
        item.judul
      )}`;
      namaProject.appendChild(judulLink);

      // Membuat elemen <p> untuk judul
      const judulElement = document.createElement("p");
      judulElement.innerText = item.judul;
      judulLink.appendChild(judulElement);

      // Membuat elemen deskripsi
      const deskripsi = document.createElement("p");
      deskripsi.classList.add("deskripsi");

      const temporaryElement = document.createElement("div");
      temporaryElement.innerHTML = item.deskripsi;

      // Mengambil teks konten dari elemen sementara
      const trimmedText = temporaryElement.textContent.trim();

      // Memotong teks konten menjadi maksimal 20 karakter
      const limitedText = trimmedText.substring(0, 100);

      // Menambahkan tanda "..." jika teks terpotong
      const displayText =
        trimmedText.length > 100 ? limitedText + "..." : limitedText;

      deskripsi.textContent = displayText;

      // Menambahkan semua elemen ke dalam kotakItem
      kotakItem.appendChild(img);
      kotakItem.appendChild(namaProject);
      kotakItem.appendChild(deskripsi);

      // Menambahkan kotakItem ke dalam kontainer
      areaProject.appendChild(kotakItem);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
