const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

function speak() {
  let synth = window.speechSynthesis;
  let textPara = document.getElementById('textbtn');
  let text = textPara.innerText;
  let utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}
