console.log("Jai Sai Master Jai Bapuji Maharaj");

let textElement = document.getElementById("text");

let voiceEle = document.getElementById("voiceList");

let speakButton = document.getElementById("speak");

let speechsynth = speechSynthesis; // speechSyntesis is an api that provieds objects and methods so by acessig the objects and methods we can convert the text to speech
// Setting Api in a variable
// console.log(speechsynth.getVoices());
console.log(speechSynthesis);

speechsynth.addEventListener("voiceschanged", Loadvoices); // adding voiceschanged event  trigggering the loadvoices function that sets the  different languages dynamically

function Loadvoices() {
  let voices = speechsynth.getVoices(); // invoking getVoices method for different language voices
  //   console.log(voices);
  for (voice of voices) {
    let option = document.createElement("option"); // created option to set different language voices dynamically
    option.value = voice.name; // Setting   value of option through  getVoices
    option.innerText = `${voice.name} ${voice.lang} `; //  given innerText  for option tag
    // console.log(option);
    voiceEle.appendChild(option); // appending all options in select tag
  }
}

function textToSpeech(text) {
  let utterance = new SpeechSynthesisUtterance(text); //  it is an constructor function that creats  speechSynthesis objects which converts the text passes through speechSynthesis into audio form
  for (let voice of speechsynth.getVoices()) {
    //
    if (voice.name === voiceEle.value) {
      utterance.voice = voice;
    }
  }
  speechsynth.speak(utterance); // Converting the user given  text into audio form by speak method
}

//   adding  click event to Button
speakButton.addEventListener("click", function () {
  // condition that text  should not be empty
  if (textElement.value !== "") {
    //  condition that previous speech to exist
    if (!speechsynth.speaking) {
      textToSpeech(textElement.value);
    }
  } else {
    alert("Enter Some text"); // if with empty text button clcked  then alert will gives msg to user to  to enter someting
  }
});