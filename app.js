// Поліровані
var photoBlock = document.getElementById("polished");
var imageBlock = document.querySelector(".color-about-center img");

photoBlock.onclick = function() {
  imageBlock.style.opacity = 0; // сначала делаем картинку прозрачной
  imageBlock.src = "https://mario-radiators.com/wp-content/uploads/2023/03/bez-imeni-2.png";
  setTimeout(function() {
    imageBlock.style.opacity = 1; // плавно делаем картинку непрозрачной
  }, 50);
};


// Сатин
var photoBlock = document.getElementById("brushed");
var imageBlock = document.querySelector(".color-about-center img");

photoBlock.onclick = function() {
  imageBlock.style.opacity = 0; // сначала делаем картинку прозрачной
  imageBlock.src = "https://mario-radiators.com/wp-content/uploads/2023/03/modena-800x600-brushed.png";
  setTimeout(function() {
    imageBlock.style.opacity = 1; // плавно делаем картинку непрозрачной
  }, 50);
};

// білий глянець
var photoBlock = document.getElementById("white-gloss");
var imageBlock = document.querySelector(".color-about-center img");

photoBlock.onclick = function() {
	imageBlock.style.opacity = 0; // сначала делаем картинку прозрачной
  imageBlock.src = "https://mario-radiators.com/wp-content/uploads/2023/03/modena-800x600-white.png";
  setTimeout(function() {
    imageBlock.style.opacity = 1; // плавно делаем картинку непрозрачной
  }, 50);
};

// чорний мат
var photoBlock = document.getElementById("black-mat");
var imageBlock = document.querySelector(".color-about-center img");

photoBlock.onclick = function() {
	imageBlock.style.opacity = 0; // сначала делаем картинку прозрачной
  imageBlock.src = "https://mario-radiators.com/wp-content/uploads/2023/03/modena-800x600-black-mat.png";
  setTimeout(function() {
    imageBlock.style.opacity = 1; // плавно делаем картинку непрозрачной
  }, 50);
};

// Бронозовий
var photoBlock = document.getElementById("bronze");
var imageBlock = document.querySelector(".color-about-center img");

photoBlock.onclick = function() {
	imageBlock.style.opacity = 0; // сначала делаем картинку прозрачной
  imageBlock.src = "https://mario-radiators.com/wp-content/uploads/2023/03/modena-800x600-bronze.png";
  setTimeout(function() {
    imageBlock.style.opacity = 1; // плавно делаем картинку непрозрачной
  }, 50);
};

// Золото
var photoBlock = document.getElementById("gold");
var imageBlock = document.querySelector(".color-about-center img");

photoBlock.onclick = function() {
	imageBlock.style.opacity = 0; // сначала делаем картинку прозрачной
  imageBlock.src = "https://mario-radiators.com/wp-content/uploads/2023/03/modena-800x600-gold.png";
  setTimeout(function() {
    imageBlock.style.opacity = 1; // плавно делаем картинку непрозрачной
  }, 50);
};
