import React, { useState} from "react";
import "./App.css";

function App() {
   const [myname, setMyname] = useState('');
   const [mynumber, setMynumber] = useState('');
   const [item, setItem ] = useState([]);

  //  const stateArr = useState("");
  //  const state = stateArr[0];
  //  const setState = stateArr[1];
   

  return (
    <div>
      <h1>MY CONTACT LIST</h1>
      <input type="search" placeholder="name" onChange={event => setMyname(event.target.value)}/>
      <input type="search" placeholder="phone number" onChange={event => setMynumber(event.target.value)}/>
      <button onClick={() => {
        const store = [...item]
       // store.push(myname);
        store.push({myname: myname, mynumber: mynumber})
        setItem(store)
        console.log(item)

        
        
        // const Num = [ ...mynumber ] 
        // Num.push(mynumber);
        // setMynumber(Num)
      
        //console.log(mynumber)
      }}> SAVE</button>
      <div>
        {item.map((quan) => {
          return <div><h1>{quan.myname}</h1><h2>{quan.mynumber}</h2></div>
        })}
    
      </div>
    </div>
  );
}

export default App;
