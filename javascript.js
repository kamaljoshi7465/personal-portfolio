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

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
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

// BackToTop
var mybutton = document.getElementById("backToTopBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.visibility = "hidden";
  }
}

mybutton.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
