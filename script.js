const message = `i love you today, tomorrow and forever. terima kasih telah hadir di hidupku, bertemu dengan mu adalah hal yg tak pernah ku bayangkan sebelumnya. begitu beruntungnya aku. bahagia ku saat bersamamu tidak bisa aku deskripsikan karena kamu adalah salah satu bentuk bahagia yg aku imipikan. jika bukan kamu orang nya aku ga akan pernah tau bahwa aku layak di cintai sebaik ini, cintaku begitu besar untukmu. ku harap kamu pun begitu mencintaiku dan terus menjaga cinta ini seberat apapun rintangan di depan sana semoga tuhan permudahkan jalan kita ily most<3.`;

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
