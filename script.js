const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textarea.value;

    if(!synth.spealing && text){

    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
    }
    if(text.length>50){
        if(synth.speaking && isSpeaking){
            button.innerText = "Pause";
            synth.resume();
            isSpeaking = false; 
        }
        else{
            button.innerText="Resume";
            synth.pause();
            isSpeaking = true;

        }
    }
    else{
        isSpeaking = false
    button.innerText = "Spaeking";
    }
  setInterval(() => {
    if(!synth.speaking && isSpeaking){
        button.innerText = "Convert to Speech"
    }
  })
};

button.addEventListener("click", textToSpeech);