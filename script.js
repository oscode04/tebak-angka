// ambil element button jawab dan reset
const buttonCheck = document.getElementById("button");
const buttonReset = document.getElementById("reset");

// ambil title/judul
const title = document.querySelector("h1");

// ambil input user
const getInput = document.getElementById("input");

// function untuk jalankan game
buttonCheck.addEventListener("click", () => {
  // ambil value yg di input user
  const inputUser = +getInput.value;
  //   cek apakah input user sudah benar atau belum
  if (inputUser === numberRandom) {
    title.innerText = "Selamat Jawaban Anda Benar";
    title.style.color = "white";
  } else if (inputUser > numberRandom) {
    title.innerText = "Jawaban Terlalu Besar";
    title.style.color = "red";
  } else {
    title.innerText = "Jawaban Terlalu Kecil";
    title.style.color = "yellow";
  }
});

// function untuk membangkitkan angka random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// variabel sementar untuk menampung angka random
let numberRandom = 0;

// function untuk menghasilkan angka random dari function getRandomNumber()
function generateRandomNumber() {
  numberRandom = getRandomNumber(1, 3); // di isi angka min dan max untuk batas tebakan angka
}

// function untuk tombol reset
buttonReset.addEventListener("click", () => {
  generateRandomNumber();
  title.innerText = "Tebak Angka";
  title.style.color = "white";
  getInput.value = "";
  console.log(numberRandom);
});

// jalankan function generateRandomNumber() agar angka random yg dihasilkan dapat dipakai
generateRandomNumber();

// nyalakan console ini untuk melihat angka random yg muncul (ini ceat nya wkwkw)
// console.log(numberRandom);
