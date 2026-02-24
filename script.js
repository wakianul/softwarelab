function responsivePoster() {
  const text1 = document.querySelector("#mainText1");
  const text2 = document.querySelector("#mainText2");
  const text3 = document.querySelector("#mainText3");

  // 防止找不到元素报错
  if (!text1 || !text2) return;

  
  if (window.matchMedia("(max-width: 800px)").matches) {
    text1.textContent = "This Friday at";
    text2.textContent = "4:30 PM";
  }

  else if (window.matchMedia("(max-height: 700px)").matches) {
    text1.textContent = "Tiri Kananuruk is a Thai performance artist and educator based in New York. Her work focuses on the relationships between sound, text, and time, investigating how technologies shift meaning and transform the ways we perceive and communicate. Mistakes are a key concept in her practice, both human and machine, as a space for making choices, improvisation, rupture, and creating unexpected moments that hold an audience.";
    text2.textContent = "Intro";
    text3.textContent = "https://morakana.com";
  } 

  else {
    text1.textContent = "Tiri Kananuruk";
    text2.textContent = "Feb 27";
    text3.textContent = "Design Talk"
  }
}

// 等 DOM 加载完
document.addEventListener("DOMContentLoaded", function () {
  responsivePoster();
  window.addEventListener("resize", responsivePoster);
});
