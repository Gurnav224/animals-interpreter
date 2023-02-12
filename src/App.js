import React, { useState } from 'react'
import './App.css'

var headingText = "inside Outt"
var animalsDictionary = {
  "🐒":"monkey",
  "🐕 ":"dog",
  "🦁" : "lion",
  "🐅":"tiger",
  "🦓":"zebra"
}

var animalWeknow = Object.keys(animalsDictionary);



function App() {
 const [meaning,setMeaning]  = useState("")
  function inputChangeHandler(event){
    var userInput = event.target.value;
    var  meaning = animalsDictionary[userInput]

    if(meaning === undefined){
      meaning = "we don't have the meaning in Database"
    }
      
    setMeaning(meaning)
    }

    function animalClickHandler(animal){
      var meaning = animalsDictionary[animal]
      setMeaning(meaning)
    }

  return (
    <div className="App">
       <h1>{headingText}</h1>
       <input onChange={inputChangeHandler} />
       <h2>{meaning}</h2>
       <h3>Animal Emoji we know</h3>
       <div>
        {
          animalWeknow.map(animal => {
            return <span onClick={()=>animalClickHandler(animal)}
             style={{fontSize:"2.2rem",padding:"0.5rem",cursor:"pointer"}}>
              {animal}
            </span>
          })
        }
       </div>
    </div>
  );
}

export default App;
