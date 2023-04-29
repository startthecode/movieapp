import { AllRouters } from './routes/AllRouters';
import { Cards,Footer,Header } from './components';
import './App.css';
import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';

function App() {
  // let [theme, changeTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'dark');

let [theme,updatedTheme]  = useState(JSON.parse(localStorage.getItem("theme")) || false )

useEffect(()=>{
  JSON.stringify(localStorage.setItem("theme", theme))
},[theme])

  return (
   <div className={`app ${theme ? 'dark' : ''} `}> 
    <div className='dark:bg-slate-800'>
   <Header theme={theme} updatedTheme={updatedTheme}/>
 
  <AllRouters />
 
   <Footer />
   </div>
   </div>
  );
}

export default App;
