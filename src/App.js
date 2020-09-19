import React from 'react';
import './App.css';

function App() {
  const handleClick = (e) => {
    console.log(e.target.id)
  }
  return (
    <div>
     <p>Testing React components</p>
     <div >
       {/* event delegation */}
       <ul onClick={handleClick}>
         <li id="food">food</li>
         <li id="dress">dress</li>
         <li id="shoes">shoes</li>
       </ul>
     </div>
    </div>
  );
}

export default App;
