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

//   var currentIndex = 0;
//   var projects = document.getElementById('projects');
//   var projectItems = document.getElementsByClassName('project');
//   var totalItems = projectItems.length;
//   var projectWidth = projectItems[0].offsetWidth; // Assuming all project items have the same width

//   document.getElementById('arrow-right').addEventListener('click', function () {
//     currentIndex = (currentIndex - 1) % totalItems;
//     updateSlider();
//   });

//   document.getElementById('arrow-left').addEventListener('click', function () {
//     currentIndex = (currentIndex + 1) % totalItems;
//     updateSlider();
//   });

//   function updateSlider() {
//     projects.style.transform = 'translateX(' + (-projectWidth * currentIndex) + 'px)';
//   }
// });