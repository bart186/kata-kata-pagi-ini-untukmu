const message = `pagi pagi gini emang paling sempurna kalau ada kamu disampingku hhh aku cuma mau kamu tau kalau aku selalu sayang kamu, tiap hari, tiap jam bahkan tiap detik. rasa sayangku ke kamu gaakan pernah berubah percaya dehh, kamu adalah alasan aku bisa senyum di setiap harinya dan selalu ngebuat hari ku yang awalnya suram jadi cerah bangetbangetbanget. as long as i'm with you i've gotta smile on my face. you make me feel like no one ever has before, i'm the luckiest to able call you mineee hihi, thank uuu for loving me bub! aku mau kita selamanya bakal bareng gini terus, i swear, i want us to last forever as long as forever is a thing, i don't want to be with anyone else, ever. i just want to be with you, hari hariku bakal aku abisin buat bikin kamu bahagiaa sama hal nya kaya apa yang kamu lakuin ke aku, i just wanted to leave you something cute, and remind you that no matter what happens, i will always love you. sekali lagii, selamat pagi cantikku and have a pleasant day ya, kalau ada yang jahat ke kamu
function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

