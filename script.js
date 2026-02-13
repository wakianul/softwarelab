function responsivePoster() {
  const text1 = document.querySelector("#mainText1");
  const text2 = document.querySelector("#mainText2");

  // 防止找不到元素报错
  if (!text1 || !text2) return;

  if (window.matchMedia("(max-width: 700px)").matches) {
    text1.textContent = "Event";
    text2.textContent = "4:30 PM";
  } 
  else if (window.matchMedia("(max-height: 700px)").matches) {
    text1.textContent = "Tiri Kananuruk is a Thai performance artist and educator based in New York. Her work focuses on the relationships between sound, text, and time, investigating how technologies shift meaning and transform the ways we perceive and communicate. Mistakes are a key concept in her practice, both human and machine, as a space for making choices, improvisation, rupture, and creating unexpected moments that hold an audience.";
    text2.textContent = "Friday";
  } 
  else {
    text1.textContent = "Tiri Kananuruk Design Talk";
    text2.textContent = "Feb 27";
  }
}

// 等 DOM 加载完
document.addEventListener("DOMContentLoaded", function () {
  responsivePoster();
  window.addEventListener("resize", responsivePoster);
});
