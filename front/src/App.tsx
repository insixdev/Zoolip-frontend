//import { useState } from 'react'
import { JSX, useEffect, useState } from 'react'
import './App.css'
import { Root } from './pages/root';
import { Navbar } from './components/layout';

function App(): JSX.Element {
  const [see, setSee] = useState("notbhignk");
  useEffect(() =>{
       const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/", {
          credentials: "include"
        });
        const data = await res.json();
        setSee(data.message);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
    fetchData();
  },[]);
 
 // const [count, setCount] = useState(0)
  return (
    <>
      <Root/>
      <p>{see}</p>
    </>
  );
}
export default App
