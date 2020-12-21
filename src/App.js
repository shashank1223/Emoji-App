import React, {useState} from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑":"annoyance"
     /** add some more to show how the app now expands when there's new data */
};

var emojis=console.log(Object.keys(emojiDictionary))


export default function App() {
  const [meaning,setmeaning] = useState(" ");
  
  function emojiInputHandler(event){
   var userInput=event.target.value;
   var meaning = emojiDictionary[userInput];
   console.log(meaning);
   if(meaning === undefined){
     meaning="we don't have in our database";

   }
   
   
   

   setmeaning(meaning);
    }

  return (
    <div className="App">
      <h2>inside outt!</h2>
     <input onChange={emojiInputHandler}></input>
     <h2><span style={{color:"purple"}}>meaning</span> {meaning}</h2>
  
      <h3> emoji we know</h3>
      
      

      
    
    </div>
  );
}
