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


function searchAndScroll() {
  const searchQuery = document.getElementById('searchInput').value.toLowerCase();
  const section = document.getElementById(searchQuery);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    alert('Section not found');
  }
}

const sections = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About Me' },
  { id: 'projects', name: 'Projects' },
  { id: 'gallery', name: 'My Images' },
  { id: 'skills', name: 'Skills' },
  { id: 'contact-us', name: 'Contact me' },
  // Add more sections as needed
];

function showSuggestions(input) {
  const suggestionsContainer = document.getElementById('suggestionsContainer');
  suggestionsContainer.innerHTML = '';
  if (input.length > 0) {
    const filteredSections = sections.filter(section => section.name.toLowerCase().includes(input.toLowerCase()));
    filteredSections.forEach(section => {
      const div = document.createElement('div');
      div.innerText = section.name;
      div.onclick = function () {
        document.getElementById('searchInput').value = section.name;
        suggestionsContainer.innerHTML = '';
        document.getElementById(section.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      suggestionsContainer.appendChild(div);
    });
  }
}
