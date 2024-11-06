
import React, { useEffect, useState} from 'react';


let recognition = null

if (window.webkitSpeechRecognition) { 
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'es-ES';
}

const useSpeechRecognition = () => {
    const [text, setText] = useState('');
    const [isListening, setListening] = useState(false);

    useEffect(() => {
        if(!recognition) return;
        recognition.onresult = (event) => {
            console.log("onresult event: ", event);
            setText(event.results[0][0].transcript);
            recognition.stop();
            setListening(false);
        }
    },[])
    const startListening = () => {
        setText('');
        setListening(true);
        recognition.start();
    }
    const stopListening = () => {
        setListening(false);
        recognition.stop();
        
    }
    return { text, setText, isListening, startListening, stopListening };   
}
export default useSpeechRecognition;