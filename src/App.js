import logo from './logo.svg';
import './App.css';
import AjaxTest from './AjaxTest';
import AjaxTest2 from './AjaxTest2';
import React, { useState } from 'react';
import AjaxTest3 from './AjaxTest3';

function App() {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
    console.log(id);
  }

  return (  
    //<AjaxTest />
    // <div>
    //   <from>
    //     <input
    //       name="id" 
    //       onChange = { handleChange }
    //     />
    //   </from>
    //   <AjaxTest2 id = { id } />
    // </div>
    <AjaxTest3 />
  );
}

export default App;
